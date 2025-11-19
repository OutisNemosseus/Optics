import { useState, useEffect } from 'react'
import PlotOutput from './PlotOutput'
import TextOutput from './TextOutput'
import './IDELayout.css'

function IDELayout({ pyodide, program }) {
  const [activeTab, setActiveTab] = useState('python')
  const [pythonCode, setPythonCode] = useState(program.pythonCode || '')
  const [compilerCode, setCompilerCode] = useState(program.pythonCode || '')
  const [running, setRunning] = useState(false)
  const [plotData, setPlotData] = useState(null)
  const [textData, setTextData] = useState('')
  const [params, setParams] = useState(program.defaultParams || {})
  const [copySuccess, setCopySuccess] = useState('')

  useEffect(() => {
    setPythonCode(program.pythonCode || '')
    setCompilerCode(program.pythonCode || '')
    setParams(program.defaultParams || {})
    setPlotData(null)
    setTextData('')
  }, [program])

  const copyToClipboard = (code, tabName) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(tabName)
      setTimeout(() => setCopySuccess(''), 2000)
    }).catch(err => {
      console.error('Failed to copy: ', err)
    })
  }

  async function runCode() {
    if (!pyodide || running) return

    setRunning(true)
    setPlotData(null)
    setTextData('⏳ Running...')

    try {
      // Build Python code with parameters - use active tab code
      let codeToRun = activeTab === 'compiler' ? compilerCode : pythonCode

      // Replace parameter placeholders
      Object.keys(params).forEach(key => {
        const value = params[key]
        // Check if it's a string (for name parameter)
        if (typeof value === 'string') {
          codeToRun = codeToRun.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), `"${value}"`)
        } else {
          codeToRun = codeToRun.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value)
        }
      })

      const wrapped = `
import sys, io, traceback
_stdout = io.StringIO()
_stderr = io.StringIO()
sys_stdout_bak, sys_stderr_bak = sys.stdout, sys.stderr
sys.stdout, sys.stderr = _stdout, _stderr
try:
    exec(compile(
        ${JSON.stringify(codeToRun)},
        '<program>', 'exec'
    ), globals(), globals())
except Exception:
    traceback.print_exc()
finally:
    sys.stdout, sys.stderr = sys_stdout_bak, sys_stderr_bak
out = _stdout.getvalue()
err = _stderr.getvalue()
`

      await pyodide.runPythonAsync(wrapped)
      const outText = pyodide.globals.get('out')
      const errText = pyodide.globals.get('err')

      let plotDataResult = null
      let textOutput = outText || ''

      // Check if output contains plot data
      if (textOutput && textOutput.includes('data:image/png;base64,')) {
        const match = textOutput.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/)
        if (match) {
          plotDataResult = match[1]
          textOutput = textOutput.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/, '').trim()
        }
      }

      if (plotDataResult) {
        setPlotData(plotDataResult)
      }

      if (errText) {
        setTextData('❌ Error:\n' + errText + (textOutput ? '\n\nOutput:\n' + textOutput : ''))
      } else if (textOutput) {
        setTextData(textOutput)
      } else if (!plotDataResult) {
        setTextData('✅ Program executed successfully')
      } else {
        setTextData('')
      }

    } catch (error) {
      setTextData('❌ Error:\n' + (error && error.message ? error.message : String(error)))
      console.error('Error:', error)
    } finally {
      setRunning(false)
    }
  }

  if (!pyodide) {
    return (
      <div className="ide-layout">
        <div className="loading-container">
          <div className="loading">⏳ Loading Python environment...</div>
        </div>
      </div>
    )
  }

  // Build tabs
  const tabs = []
  if (program.matlabCode) tabs.push({ id: 'matlab', label: 'MATLAB', code: program.matlabCode })
  tabs.push({ id: 'python', label: 'Python', code: pythonCode })
  tabs.push({ id: 'compiler', label: 'Compiler Editor', code: compilerCode })

  return (
    <div className="ide-layout">
      {/* Left Panel - Scripts & Inputs */}
      <div className="ide-left-panel">
        {/* Tab Bar */}
        <div className="ide-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`ide-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Editor Area */}
        <div className="ide-editor-container">
          {/* Copy Button */}
          <button
            className="ide-copy-button"
            onClick={() => {
              const currentTab = tabs.find(t => t.id === activeTab)
              if (currentTab) {
                copyToClipboard(currentTab.code, activeTab)
              }
            }}
            title="Copy code to clipboard"
          >
            {copySuccess === activeTab ? '✓ Copied!' : '📋 Copy'}
          </button>

          {activeTab === 'matlab' && program.matlabCode && (
            <pre className="ide-code-display">
              <code>{program.matlabCode}</code>
            </pre>
          )}
          {activeTab === 'python' && (
            <textarea
              className="ide-code-editor"
              value={pythonCode}
              onChange={(e) => setPythonCode(e.target.value)}
              spellCheck={false}
              placeholder="Write your Python code here..."
            />
          )}
          {activeTab === 'compiler' && (
            <textarea
              className="ide-code-editor"
              value={compilerCode}
              onChange={(e) => setCompilerCode(e.target.value)}
              spellCheck={false}
              placeholder="Write your compiler code here..."
            />
          )}
        </div>

        {/* Parameters Section */}
        {program.params && program.params.length > 0 && (
          <div className="ide-params-section">
            <div className="ide-params-header">Parameters</div>
            <div className="ide-params-list">
              {program.params.map(param => (
                <div key={param.name} className="ide-param-input">
                  <label htmlFor={param.name}>
                    {param.label} {param.unit && `(${param.unit})`}
                  </label>
                  <input
                    id={param.name}
                    type={param.step === null ? "text" : "number"}
                    step={param.step || 0.01}
                    value={params[param.name] !== undefined ? params[param.name] : param.default}
                    onChange={(e) => setParams({
                      ...params,
                      [param.name]: param.step === null ? e.target.value : (parseFloat(e.target.value) || param.default)
                    })}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wikipedia Links Section */}
        {program.wikipediaLinks && program.wikipediaLinks.length > 0 && (
          <div className="ide-wiki-section">
            <div className="ide-wiki-header">📖 Related Wikipedia Articles</div>
            <div className="ide-wiki-links">
              {program.wikipediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ide-wiki-link"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Run Button */}
        <div className="ide-actions">
          <button
            onClick={runCode}
            disabled={running}
            className="ide-run-button"
          >
            {running ? '⏳ Running...' : '▶ Run Program'}
          </button>
        </div>
      </div>

      {/* Right Panel - Results */}
      <div className="ide-right-panel">
        <div className="ide-results-header">
          <span>📊 Output</span>
        </div>
        <div className="ide-results-content">
          {plotData && <PlotOutput imageData={plotData} />}
          {textData ? (
            <TextOutput text={textData} />
          ) : (
            !plotData && <div className="ide-no-output">Click "Run Program" to see results here</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default IDELayout
