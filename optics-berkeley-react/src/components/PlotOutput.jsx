import './PlotOutput.css'

function PlotOutput({ imageData }) {
  const downloadPlot = () => {
    const link = document.createElement('a')
    link.href = `data:image/png;base64,${imageData}`
    link.download = `plot_${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="plot-container">
      <div className="plot-header">
        <h3>Plot Output</h3>
        <button className="download-plot-button" onClick={downloadPlot} title="Download plot as PNG">
          ⬇ Download Plot
        </button>
      </div>
      <img src={`data:image/png;base64,${imageData}`} alt="Plot" />
    </div>
  )
}

export default PlotOutput

