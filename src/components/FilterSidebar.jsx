// // // import { useState, useMemo, useEffect } from 'react';
// // // import { useLocation } from 'react-router-dom';
// // // import DataTable from './DataTable';
// // // import Taxonomy from '../pages/Taxonomy';
// // // import Methodology from '../pages/Methodology';
// // // import Cite from '../pages/Cite';
// // // import DownloadModal from './DownloadModal';
// // // import { parseCSVData } from '../utils/csvParser';

// // // const categoryDefinitions = {
// // //   "Back End Administration": "Supports internal operations (ex: data management, documentation).",
// // //   "Detection": "Identifies objects or events (ex: gunshot detection, license plate recognition).",
// // //   "Forensic Analysis": "Analyzes evidence (ex: images, biometrics).",
// // //   "Front End Support": "Directly interacts with the public (ex: chatbots, online portals).",
// // //   "Prediction": "Forecasts risk, hotspots, recidivism, or resource demands.",
// // //   "Surveillance": "Real-time monitoring, video analysis, or sensor-based tracking.",
// // //   "N/A": "At the time of search, research assistants found no AI powered tools.",
// // // };

// // // // FilterSidebar Component (integrated)
// // // function FilterSidebar({ filters, onFilterChange, availableStates = [] }) {
// // //   const [expanded, setExpanded] = useState({
// // //     categories: true,
// // //     domain: false,
// // //     state: false
// // //   });

// // //   const toggleSection = (section) => {
// // //     setExpanded(prev => ({
// // //       ...prev,
// // //       [section]: !prev[section]
// // //     }));
// // //   };

// // //   const handleCheckboxChange = (filterType, value) => {
// // //     onFilterChange(filterType, value);
// // //   };

// // //   const categories = [
// // //     'Back End Administration',
// // //     'Detection',
// // //     'Forensic Analysis',
// // //     'Front End Support',
// // //     'Prediction',
// // //     'Surveillance'
// // //   ];

// // //   const domains = [
// // //     'Corrections',
// // //     'Courts',
// // //     'Law Enforcement'
// // //   ];

// // //   return (
// // //     <aside className="w-full lg:w-[280px] pt-6 lg:pt-8 px-6 lg:px-8 bg-[#f5f5f0] font-['Source_Sans_3'] max-h-[70vh] overflow-y-auto">
// // //       <h3 className="text-xl font-semibold mb-6 text-[#333]">Filter by</h3>
      
// // //       {/* Categories Section */}
// // //       <div className="mb-6 border-b border-[#ddd] pb-4">
// // //         <button 
// // //           className="w-full flex justify-between items-center bg-none border-none py-3 px-0 font-['Source_Sans_3'] text-lg font-medium text-[#333] cursor-pointer text-left transition-colors hover:text-[#2d5016]"
// // //           onClick={() => toggleSection('categories')}
// // //         >
// // //           <span>Categories</span>
// // //           <span className="text-2xl font-light text-[#666]">{expanded.categories ? '−' : '+'}</span>
// // //         </button>
// // //         {expanded.categories && (
// // //           <div className="mt-3 flex flex-col gap-2">
// // //             {categories.map(category => (
// // //               <label key={category} className="flex items-center gap-3 cursor-pointer py-1 text-[0.95rem] text-[#555] hover:text-[#2d5016]">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={filters.categories.includes(category)}
// // //                   onChange={() => handleCheckboxChange('categories', category)}
// // //                   className="appearance-none w-[18px] h-[18px] min-w-[18px] min-h-[18px] cursor-pointer flex-shrink-0 border-2 border-[#999] rounded bg-white relative transition-all duration-200 hover:border-[#2d5016] checked:bg-[#2d5016] checked:border-[#2d5016] focus:outline-2 focus:outline-[#2d5016] focus:outline-offset-2 after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
// // //                 />
// // //                 <span>{category}</span>
// // //               </label>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Domain Section */}
// // //       <div className="mb-6 border-b border-[#ddd] pb-4">
// // //         <button 
// // //           className="w-full flex justify-between items-center bg-none border-none py-3 px-0 font-['Source_Sans_3'] text-lg font-medium text-[#333] cursor-pointer text-left transition-colors hover:text-[#2d5016]"
// // //           onClick={() => toggleSection('domain')}
// // //         >
// // //           <span>Domain</span>
// // //           <span className="text-2xl font-light text-[#666]">{expanded.domain ? '−' : '+'}</span>
// // //         </button>
// // //         {expanded.domain && (
// // //           <div className="mt-3 flex flex-col gap-2">
// // //             {domains.map(domain => (
// // //               <label key={domain} className="flex items-center gap-3 cursor-pointer py-1 text-[0.95rem] text-[#555] hover:text-[#2d5016]">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={filters.domain.includes(domain)}
// // //                   onChange={() => handleCheckboxChange('domain', domain)}
// // //                   className="appearance-none w-[18px] h-[18px] min-w-[18px] min-h-[18px] cursor-pointer flex-shrink-0 border-2 border-[#999] rounded bg-white relative transition-all duration-200 hover:border-[#2d5016] checked:bg-[#2d5016] checked:border-[#2d5016] focus:outline-2 focus:outline-[#2d5016] focus:outline-offset-2 after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
// // //                 />
// // //                 <span>{domain}</span>
// // //               </label>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* State Section */}
// // //       <div className="mb-0 border-b-0 pb-0">
// // //         <button 
// // //           className="w-full flex justify-between items-center bg-none border-none py-3 px-0 font-['Source_Sans_3'] text-lg font-medium text-[#333] cursor-pointer text-left transition-colors hover:text-[#2d5016]"
// // //           onClick={() => toggleSection('state')}
// // //         >
// // //           <span>State</span>
// // //           <span className="text-2xl font-light text-[#666]">{expanded.state ? '−' : '+'}</span>
// // //         </button>
// // //         {expanded.state && (
// // //           <div className="mt-3 flex flex-col gap-2">
// // //             {availableStates.length > 0 ? (
// // //               availableStates.map(state => (
// // //                 <label key={state} className="flex items-center gap-3 cursor-pointer py-1 text-[0.95rem] text-[#555] hover:text-[#2d5016]">
// // //                   <input
// // //                     type="checkbox"
// // //                     checked={filters.state.includes(state)}
// // //                     onChange={() => handleCheckboxChange('state', state)}
// // //                     className="appearance-none w-[18px] h-[18px] min-w-[18px] min-h-[18px] cursor-pointer flex-shrink-0 border-2 border-[#999] rounded bg-white relative transition-all duration-200 hover:border-[#2d5016] checked:bg-[#2d5016] checked:border-[#2d5016] focus:outline-2 focus:outline-[#2d5016] focus:outline-offset-2 after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
// // //                   />
// // //                   <span>{state}</span>
// // //                 </label>
// // //               ))
// // //             ) : (
// // //               <p className="text-[#999]">No states available</p>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </aside>
// // //   );
// // // }

// // // export default FilterSidebar;
// // import { useState } from 'react';

// // const categoryDefinitions = {
// //   "Back End Administration": "Supports internal operations (ex: data management, documentation).",
// //   "Detection": "Identifies objects or events (ex: gunshot detection, license plate recognition).",
// //   "Forensic Analysis": "Analyzes evidence (ex: images, biometrics).",
// //   "Front End Support": "Directly interacts with the public (ex: chatbots, online portals).",
// //   "Prediction": "Forecasts risk, hotspots, recidivism, or resource demands.",
// //   "Surveillance": "Real-time monitoring, video analysis, or sensor-based tracking.",
// //   "N/A": "At the time of search, research assistants found no AI powered tools.",
// // };

// // function FilterSidebar({ filters, onFilterChange, availableStates = [] }) {
// //   const [expanded, setExpanded] = useState({
// //     categories: true,
// //     domain: false,
// //     state: false
// //   });

// //   const toggleSection = (section) => {
// //     setExpanded(prev => ({
// //       ...prev,
// //       [section]: !prev[section]
// //     }));
// //   };

// //   const handleCheckboxChange = (filterType, value) => {
// //     onFilterChange(filterType, value);
// //   };

// //   const categories = [
// //     'Back End Administration',
// //     'Detection',
// //     'Forensic Analysis',
// //     'Front End Support',
// //     'Prediction',
// //     'Surveillance'
// //   ];

// //   const domains = [
// //     'Corrections',
// //     'Courts',
// //     'Law Enforcement'
// //   ];

// //   return (
// //     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-6">
// //       {/* Categories Section */}
// //       <div className="mb-6">
// //         <button
// //           onClick={() => toggleSection('categories')}
// //           className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
// //         >
// //           Categories
// //           <span className="text-xl">{expanded.categories ? '−' : '+'}</span>
// //         </button>
// //         {expanded.categories && (
// //           <div className="mt-3 space-y-2">
// //             {categories.map(cat => (
// //               <label key={cat} className="flex items-start gap-2 cursor-pointer group">
// //                 <input
// //                   type="checkbox"
// //                   checked={filters.categories.includes(cat)}
// //                   onChange={() => handleCheckboxChange('categories', cat)}
// //                   className="mt-1 w-4 h-4 accent-[#0097b2]"
// //                 />
// //                 <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
// //                   {cat}
// //                 </span>
// //               </label>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Domain Section */}
// //       <div className="mb-6">
// //         <button
// //           onClick={() => toggleSection('domain')}
// //           className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
// //         >
// //           Domain
// //           <span className="text-xl">{expanded.domain ? '−' : '+'}</span>
// //         </button>
// //         {expanded.domain && (
// //           <div className="mt-3 space-y-2">
// //             {domains.map(domain => (
// //               <label key={domain} className="flex items-start gap-2 cursor-pointer group">
// //                 <input
// //                   type="checkbox"
// //                   checked={filters.domain.includes(domain)}
// //                   onChange={() => handleCheckboxChange('domain', domain)}
// //                   className="mt-1 w-4 h-4 accent-[#0097b2]"
// //                 />
// //                 <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
// //                   {domain}
// //                 </span>
// //               </label>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* State Section */}
// //       <div>
// //         <button
// //           onClick={() => toggleSection('state')}
// //           className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
// //         >
// //           State
// //           <span className="text-xl">{expanded.state ? '−' : '+'}</span>
// //         </button>
// //         {expanded.state && (
// //           <div className="mt-3 space-y-2 max-h-[300px] overflow-y-auto">
// //             {availableStates.map(state => (
// //               <label key={state} className="flex items-start gap-2 cursor-pointer group">
// //                 <input
// //                   type="checkbox"
// //                   checked={filters.state.includes(state)}
// //                   onChange={() => handleCheckboxChange('state', state)}
// //                   className="mt-1 w-4 h-4 accent-[#0097b2]"
// //                 />
// //                 <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
// //                   {state}
// //                 </span>
// //               </label>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default FilterSidebar;

// import { useState } from 'react';

// const categoryDefinitions = {
//   "Back End Administration": "Supports internal operations (ex: data management, documentation).",
//   "Detection": "Identifies objects or events (ex: gunshot detection, license plate recognition).",
//   "Forensic Analysis": "Analyzes evidence (ex: images, biometrics).",
//   "Front End Support": "Directly interacts with the public (ex: chatbots, online portals).",
//   "Prediction": "Forecasts risk, hotspots, recidivism, or resource demands.",
//   "Surveillance": "Real-time monitoring, video analysis, or sensor-based tracking.",
//   "N/A": "At the time of search, research assistants found no AI powered tools.",
// };

// function FilterSidebar({ filters, onFilterChange, availableStates = [], availableCities = [] }) {
//   const [expanded, setExpanded] = useState({
//     categories: true,
//     domain: false,
//     state: true,
//     city: false
//   });

//   const toggleSection = (section) => {
//     setExpanded(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const handleCheckboxChange = (filterType, value) => {
//     onFilterChange(filterType, value);
//   };

//   const categories = [
//     'Back End Administration',
//     'Detection',
//     'Forensic Analysis',
//     'Front End Support',
//     'Prediction',
//     'Surveillance'
//   ];

//   const domains = [
//     'Corrections',
//     'Courts',
//     'Law Enforcement'
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-6">
//       {/* Categories Section */}
//       <div className="mb-6">
//         <button
//           onClick={() => toggleSection('categories')}
//           className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
//         >
//           Categories
//           <span className="text-xl">{expanded.categories ? '−' : '+'}</span>
//         </button>
//         {expanded.categories && (
//           <div className="mt-3 space-y-2">
//             {categories.map(cat => (
//               <label key={cat} className="flex items-start gap-2 cursor-pointer group">
//                 <input
//                   type="checkbox"
//                   checked={filters.categories.includes(cat)}
//                   onChange={() => handleCheckboxChange('categories', cat)}
//                   className="mt-1 w-4 h-4 accent-[#0097b2]"
//                 />
//                 <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
//                   {cat}
//                 </span>
//               </label>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Domain Section */}
//       <div className="mb-6">
//         <button
//           onClick={() => toggleSection('domain')}
//           className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
//         >
//           Domain
//           <span className="text-xl">{expanded.domain ? '−' : '+'}</span>
//         </button>
//         {expanded.domain && (
//           <div className="mt-3 space-y-2">
//             {domains.map(domain => (
//               <label key={domain} className="flex items-start gap-2 cursor-pointer group">
//                 <input
//                   type="checkbox"
//                   checked={filters.domain.includes(domain)}
//                   onChange={() => handleCheckboxChange('domain', domain)}
//                   className="mt-1 w-4 h-4 accent-[#0097b2]"
//                 />
//                 <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
//                   {domain}
//                 </span>
//               </label>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* State Section */}
//       <div className="mb-6">
//         <button
//           onClick={() => toggleSection('state')}
//           className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
//         >
//           State
//           <span className="text-xl">{expanded.state ? '−' : '+'}</span>
//         </button>
//         {expanded.state && (
//           <div className="mt-3 space-y-2 max-h-[300px] overflow-y-auto">
//             {availableStates.length > 0 ? (
//               availableStates.map(state => (
//                 <label key={state} className="flex items-start gap-2 cursor-pointer group">
//                   <input
//                     type="checkbox"
//                     checked={filters.state.includes(state)}
//                     onChange={() => handleCheckboxChange('state', state)}
//                     className="mt-1 w-4 h-4 accent-[#0097b2]"
//                   />
//                   <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
//                     {state}
//                   </span>
//                 </label>
//               ))
//             ) : (
//               <p className="text-gray-500 text-sm">Loading states...</p>
//             )}
//           </div>
//         )}
//       </div>

//       {/* City Section */}
//       <div>
//         <button
//           onClick={() => toggleSection('city')}
//           className="w-full flex items-center justify-between text-lg font-bold text-[#011e41] hover:text-[#0097b2] transition-colors"
//         >
//           City
//           <span className="text-xl">{expanded.city ? '−' : '+'}</span>
//         </button>
//         {expanded.city && (
//           <div className="mt-3 space-y-2 max-h-[300px] overflow-y-auto">
//             {availableCities.length > 0 ? (
//               availableCities.map(city => (
//                 <label key={city} className="flex items-start gap-2 cursor-pointer group">
//                   <input
//                     type="checkbox"
//                     checked={filters.city.includes(city)}
//                     onChange={() => handleCheckboxChange('city', city)}
//                     className="mt-1 w-4 h-4 accent-[#0097b2]"
//                   />
//                   <span className="text-sm text-[#011e41] group-hover:text-[#0097b2] transition-colors">
//                     {city}
//                   </span>
//                 </label>
//               ))
//             ) : (
//               <p className="text-gray-500 text-sm">No cities available</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FilterSidebar;
import { useState } from 'react';

const categoryDefinitions = {
  "Back End Administration": "Supports internal operations (ex: data management, documentation).",
  "Detection": "Identifies objects or events (ex: gunshot detection, license plate recognition).",
  "Forensic Analysis": "Analyzes evidence (ex: images, biometrics).",
  "Front End Support": "Directly interacts with the public (ex: chatbots, online portals).",
  "Prediction": "Forecasts risk, hotspots, recidivism, or resource demands.",
  "Surveillance": "Real-time monitoring, video analysis, or sensor-based tracking.",
  "N/A": "At the time of search, research assistants found no AI powered tools.",
};

function FilterSidebar({ filters, onFilterChange, availableStates = [], availableCities = [] }) {
  const [expanded, setExpanded] = useState({
    categories: true,
    domain: false,
    state: true
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
    <aside className="w-full lg:w-[280px] pt-6 lg:pt-8 px-6 lg:px-8 bg-[#f5f5f0] font-['Source_Sans_3'] max-h-[70vh] overflow-y-auto">
      <h3 className="text-xl font-semibold mb-6 text-[#333]">Filter by</h3>
      
      {/* Categories Section */}
      <div className="mb-6 border-b border-[#ddd] pb-4">
        <button 
          className="w-full flex justify-between items-center bg-none border-none py-3 px-0 font-['Source_Sans_3'] text-lg font-medium text-[#333] cursor-pointer text-left transition-colors hover:text-[#2d5016]"
          onClick={() => toggleSection('categories')}
        >
          <span>Categories</span>
          <span className="text-2xl font-light text-[#666]">{expanded.categories ? '−' : '+'}</span>
        </button>
        {expanded.categories && (
          <div className="mt-3 flex flex-col gap-2">
            {categories.map(category => (
              <label key={category} className="flex items-center gap-3 cursor-pointer py-1 text-[0.95rem] text-[#555] hover:text-[#2d5016]">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCheckboxChange('categories', category)}
                  className="appearance-none w-[18px] h-[18px] min-w-[18px] min-h-[18px] cursor-pointer flex-shrink-0 border-2 border-[#999] rounded bg-white relative transition-all duration-200 hover:border-[#2d5016] checked:bg-[#2d5016] checked:border-[#2d5016] focus:outline-2 focus:outline-[#2d5016] focus:outline-offset-2 after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Domain Section */}
      <div className="mb-6 border-b border-[#ddd] pb-4">
        <button 
          className="w-full flex justify-between items-center bg-none border-none py-3 px-0 font-['Source_Sans_3'] text-lg font-medium text-[#333] cursor-pointer text-left transition-colors hover:text-[#2d5016]"
          onClick={() => toggleSection('domain')}
        >
          <span>Domain</span>
          <span className="text-2xl font-light text-[#666]">{expanded.domain ? '−' : '+'}</span>
        </button>
        {expanded.domain && (
          <div className="mt-3 flex flex-col gap-2">
            {domains.map(domain => (
              <label key={domain} className="flex items-center gap-3 cursor-pointer py-1 text-[0.95rem] text-[#555] hover:text-[#2d5016]">
                <input
                  type="checkbox"
                  checked={filters.domain.includes(domain)}
                  onChange={() => handleCheckboxChange('domain', domain)}
                  className="appearance-none w-[18px] h-[18px] min-w-[18px] min-h-[18px] cursor-pointer flex-shrink-0 border-2 border-[#999] rounded bg-white relative transition-all duration-200 hover:border-[#2d5016] checked:bg-[#2d5016] checked:border-[#2d5016] focus:outline-2 focus:outline-[#2d5016] focus:outline-offset-2 after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
                />
                <span>{domain}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* State Section */}
      <div className="mb-0 border-b-0 pb-0">
        <button 
          className="w-full flex justify-between items-center bg-none border-none py-3 px-0 font-['Source_Sans_3'] text-lg font-medium text-[#333] cursor-pointer text-left transition-colors hover:text-[#2d5016]"
          onClick={() => toggleSection('state')}
        >
          <span>State</span>
          <span className="text-2xl font-light text-[#666]">{expanded.state ? '−' : '+'}</span>
        </button>
        {expanded.state && (
          <div className="mt-3 flex flex-col gap-2">
            {availableStates.length > 0 ? (
              availableStates.map(state => (
                <label key={state} className="flex items-center gap-3 cursor-pointer py-1 text-[0.95rem] text-[#555] hover:text-[#2d5016]">
                  <input
                    type="checkbox"
                    checked={filters.state.includes(state)}
                    onChange={() => handleCheckboxChange('state', state)}
                    className="appearance-none w-[18px] h-[18px] min-w-[18px] min-h-[18px] cursor-pointer flex-shrink-0 border-2 border-[#999] rounded bg-white relative transition-all duration-200 hover:border-[#2d5016] checked:bg-[#2d5016] checked:border-[#2d5016] focus:outline-2 focus:outline-[#2d5016] focus:outline-offset-2 after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
                  />
                  <span>{state}</span>
                </label>
              ))
            ) : (
              <p className="text-[#999]">No states available</p>
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
    </aside>
  );
}

export default FilterSidebar;