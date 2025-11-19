import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { programs } from '../data/index'
import './ProgramList.css'

function ProgramList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState(new Set())

  // Get all unique tags from all programs
  const allTags = useMemo(() => {
    const tags = new Set()
    programs.forEach(program => {
      if (program.tags && Array.isArray(program.tags)) {
        program.tags.forEach(tag => tags.add(tag))
      }
    })
    return Array.from(tags).sort()
  }, [])

  // Filter programs based on search and tags
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      // Search filter
      const matchesSearch = !searchTerm ||
        (program.displayName || program.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (program.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (program.id || '').toLowerCase().includes(searchTerm.toLowerCase())

      // Tag filter
      const matchesTags = selectedTags.size === 0 ||
        (program.tags && program.tags.some(tag => selectedTags.has(tag)))

      return matchesSearch && matchesTags
    })
  }, [searchTerm, selectedTags])

  // Group filtered programs by category
  const categories = useMemo(() => {
    const cats = {}
    filteredPrograms.forEach(program => {
      const category = program.category || 'Other'
      if (!cats[category]) {
        cats[category] = []
      }
      cats[category].push(program)
    })
    return cats
  }, [filteredPrograms])

  // Toggle tag selection
  const toggleTag = (tag) => {
    const newSelected = new Set(selectedTags)
    if (newSelected.has(tag)) {
      newSelected.delete(tag)
    } else {
      newSelected.add(tag)
    }
    setSelectedTags(newSelected)
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('')
    setSelectedTags(new Set())
  }

  return (
    <div className="program-list">
      <div className="header">
        <h1>Moller Optics programs</h1>
        <p className="subtitle">
          {filteredPrograms.length} of {programs.length} programs
        </p>
        <div className="reference-link">
          <a
            href="https://link.springer.com/book/10.1007/978-0-387-69492-4"
            target="_blank"
            rel="noopener noreferrer"
            className="book-link"
          >
            📚 Reference: Field Guide to Geometrical Optics (Springer)
          </a>
          <a
            href="https://github.com/OutisNemosseus/Optics"
            target="_blank"
            rel="noopener noreferrer"
            className="book-link"
          >
            ⭐ GitHub Repository
          </a>
          <a
            href="https://github.com/OutisNemosseus"
            target="_blank"
            rel="noopener noreferrer"
            className="book-link"
          >
            👤 Creator GitHub Profile
          </a>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="filter-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search programs by name, description, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {(searchTerm || selectedTags.size > 0) && (
            <button onClick={clearFilters} className="clear-button">
              ✕ Clear Filters
            </button>
          )}
        </div>

        <div className="tag-filter">
          <div className="tag-filter-header">Filter by tags:</div>
          <div className="tag-cloud">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`tag-button ${selectedTags.has(tag) ? 'active' : ''}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Display */}
      <div className="categories">
        {Object.keys(categories).length === 0 ? (
          <div className="no-results">
            <p>No programs found matching your criteria.</p>
            <button onClick={clearFilters} className="clear-button-large">Clear Filters</button>
          </div>
        ) : (
          Object.keys(categories).sort().map(category => (
            <div key={category} className="category-section">
              <h2>{category} ({categories[category].length})</h2>
              <div className="program-grid">
                {categories[category].map(program => (
                  <Link
                    key={program.id}
                    to={`/program/${program.id}`}
                    className="program-card"
                  >
                    <div className="program-title">
                      {program.displayName || program.title}
                    </div>
                    <div className="program-description">{program.description}</div>

                    {/* Tags */}
                    {program.tags && program.tags.length > 0 && (
                      <div className="program-tags">
                        {program.tags.slice(0, 5).map(tag => (
                          <span key={tag} className="tag-chip">
                            #{tag}
                          </span>
                        ))}
                        {program.tags.length > 5 && (
                          <span className="tag-more">+{program.tags.length - 5}</span>
                        )}
                      </div>
                    )}

                    <div className="program-meta">
                      <span className="program-source">{program.source.toUpperCase()}</span>
                      {program.chapter && (
                        <span className="program-chapter">Chapter {program.chapter}</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProgramList

