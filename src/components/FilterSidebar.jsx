import { useState } from 'react';

function FilterSidebar({ filters, onFilterChange, availableStates = [], availableCities = [] }) {
  const [expanded, setExpanded] = useState({
    categories: false,
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
    'Corrections',
    'Courts',
    'Law Enforcement'
  ];

  return (
    <div className="w-full lg:w-[280px]">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-6">
        
        {/* Categories Section */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('categories')}
            className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
          >
            Categories
            <span className="text-xl">{expanded.categories ? '−' : '+'}</span>
          </button>
          {expanded.categories && (
            <div className="mt-3 space-y-2">
              {categories.map(cat => (
                <label key={cat} className="flex items-start gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(cat)}
                    onChange={() => handleCheckboxChange('categories', cat)}
                    className="mt-1 w-4 h-4 accent-[#0097b2]"
                  />
                  <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Domain Section */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('domain')}
            className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
          >
            Domain
            <span className="text-xl">{expanded.domain ? '−' : '+'}</span>
          </button>
          {expanded.domain && (
            <div className="mt-3 space-y-2">
              {domains.map(domain => (
                <label key={domain} className="flex items-start gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.domain.includes(domain)}
                    onChange={() => handleCheckboxChange('domain', domain)}
                    className="mt-1 w-4 h-4 accent-[#0097b2]"
                  />
                  <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
                    {domain}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* State Section */}
        <div>
          <button
            onClick={() => toggleSection('state')}
            className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
          >
            State
            <span className="text-xl">{expanded.state ? '−' : '+'}</span>
          </button>
          {expanded.state && (
            <div className="mt-3 space-y-2 max-h-[300px] overflow-y-auto">
              {availableStates.length > 0 ? (
                availableStates.map(state => (
                  <label key={state} className="flex items-start gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.state.includes(state)}
                      onChange={() => handleCheckboxChange('state', state)}
                      className="mt-1 w-4 h-4 accent-[#0097b2]"
                    />
                    <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
                      {state}
                    </span>
                  </label>
                ))
              ) : (
                <p className="text-gray-500 text-sm">Loading states...</p>
              )}
            </div>
          )}
        </div>

        {/* Hidden City Checkboxes (for URL params, not visible) */}
        <div className="hidden">
          {availableCities.map(city => (
            <input
              key={city}
              type="checkbox"
              checked={filters.city.includes(city)}
              onChange={() => handleCheckboxChange('city', city)}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;