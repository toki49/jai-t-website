import { useState } from 'react';
import './FilterSidebar.css';

function FilterSidebar({ filters, onFilterChange, availableStates = [] }) {
  const [expanded, setExpanded] = useState({
    categories: true,
    domain: false,
    state: false
  });

  const toggleSection = (section) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCheckboxChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const categories = [
    'Back End Administration',
    'Detection',
    'Forensic Analysis',
    'Front End Support',
    'Prediction',
    'Surveillance'
  ];

  const domains = [
    'Courts',
    'Law Enforcement',
    'Corrections'
  ];

  // REMOVED the hardcoded states array - now using availableStates prop instead

  return (
    <aside className="filter-sidebar">
      <h3 className="filter-title">Filter by</h3>
      
      <div className="filter-section">
        <button 
          className="filter-section-header"
          onClick={() => toggleSection('categories')}
        >
          <span>Categories</span>
          <span className="expand-icon">{expanded.categories ? '−' : '+'}</span>
        </button>
        {expanded.categories && (
          <div className="filter-options">
            {categories.map(category => (
              <label key={category} className="filter-option">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCheckboxChange('categories', category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-section">
        <button 
          className="filter-section-header"
          onClick={() => toggleSection('domain')}
        >
          <span>Domain</span>
          <span className="expand-icon">{expanded.domain ? '−' : '+'}</span>
        </button>
        {expanded.domain && (
          <div className="filter-options">
            {domains.map(domain => (
              <label key={domain} className="filter-option">
                <input
                  type="checkbox"
                  checked={filters.domain.includes(domain)}
                  onChange={() => handleCheckboxChange('domain', domain)}
                />
                <span>{domain}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-section">
        <button 
          className="filter-section-header"
          onClick={() => toggleSection('state')}
        >
          <span>State</span>
          <span className="expand-icon">{expanded.state ? '−' : '+'}</span>
        </button>
        {expanded.state && (
          <div className="filter-options">
            {availableStates.length > 0 ? (
              availableStates.map(state => (
                <label key={state} className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.state.includes(state)}
                    onChange={() => handleCheckboxChange('state', state)}
                  />
                  <span>{state}</span>
                </label>
              ))
            ) : (
              <p className="no-data">No states available</p>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}

export default FilterSidebar;