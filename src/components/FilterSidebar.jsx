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
    <div className="w-full lg:w-[280px] bg-[#f5f5f0]">
      <div className="p-6">
        <h3 className="text-base font-semibold text-[#333] mb-8">Filter by</h3>
        
        {/* Categories Section */}
        <div className="mb-6 border-b border-[#d4d4ce] pb-6">
          <button
            onClick={() => toggleSection('categories')}
            className="w-full flex items-center justify-between text-base font-semibold text-[#333] hover:text-[#2d5016] transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Categories
            <span className="text-2xl text-[#999] font-light">{expanded.categories ? '−' : '+'}</span>
          </button>
          {expanded.categories && (
            <div className="mt-4 space-y-3">
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm text-[#4a4a4a] font-normal">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(cat)}
                    onChange={() => handleCheckboxChange('categories', cat)}
                    className="w-4 h-4"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Domain Section */}
        <div className="mb-6 border-b border-[#d4d4ce] pb-6">
          <button
            onClick={() => toggleSection('domain')}
            className="w-full flex items-center justify-between text-base font-semibold text-[#333] hover:text-[#2d5016] transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Domain
            <span className="text-2xl text-[#999] font-light">{expanded.domain ? '−' : '+'}</span>
          </button>
          {expanded.domain && (
            <div className="mt-4 space-y-3">
              {domains.map(domain => (
                <label key={domain} className="flex items-center gap-2 cursor-pointer text-sm text-[#4a4a4a] font-normal">
                  <input
                    type="checkbox"
                    checked={filters.domain.includes(domain)}
                    onChange={() => handleCheckboxChange('domain', domain)}
                    className="w-4 h-4"
                  />
                  <span>{domain}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* State Section */}
        <div className="pb-6">
          <button
            onClick={() => toggleSection('state')}
            className="w-full flex items-center justify-between text-base font-semibold text-[#333] hover:text-[#2d5016] transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            State
            <span className="text-2xl text-[#999] font-light">{expanded.state ? '−' : '+'}</span>
          </button>
          {expanded.state && (
            <div className="mt-4 space-y-3 max-h-[300px] overflow-y-auto">
              {availableStates.length > 0 ? (
                availableStates.map(state => (
                  <label key={state} className="flex items-center gap-2 cursor-pointer text-sm text-[#4a4a4a] font-normal">
                    <input
                      type="checkbox"
                      checked={filters.state.includes(state)}
                      onChange={() => handleCheckboxChange('state', state)}
                      className="w-4 h-4"
                    />
                    <span>{state}</span>
                  </label>
                ))
              ) : (
                <p className="text-[#999] text-sm">Loading states...</p>
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