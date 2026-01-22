import React from 'react';

function Disclaimers() {
  return (
    <div className="bg-[#DCF2F2] border-2 border-gray-800 rounded-lg p-6 w-full flex gap-6 items-start shadow-md">
      <div className="flex-1 text-left">
        <h3 className="text-center w-full font-sans text-xl font-semibold text-gray-800 mb-3">DISCLAIMERS</h3>
        <div className="m-0 p-0">
          <div className="mb-4">
            <div className="font-sans text-base font-normal mb-2"><strong>Geographic Scope</strong></div>
            <div className="m-0 mb-4 font-sans text-base text-gray-800 leading-relaxed font-normal">
              JAI-T focuses on the <a href="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population" target="_blank" rel="noopener noreferrer" className="text-black underline font-bold">top 100 Largest U.S. cities</a>. Statewide or county-level initiatives are only included when there is clear evidence of use at the city level. For metropolitan areas with overlapping names, classifications apply strictly to the city jurisdiction, not the broader region.
            </div>
          </div>
          <div className="mb-4">
            <div className="font-sans text-base font-normal mb-2"><strong>Organizational vs. Individual Use</strong></div>
            <div className="m-0 mb-4 font-sans text-base text-gray-800 leading-relaxed font-normal">
              The database tracks AI use within the criminal justice system regardless of whether the tool is operated by an agency as a whole or by individuals within that agency.
            </div>
          </div>
          <div className="mb-4">
            <div className="font-sans text-base font-normal mb-2"><strong>Scope of Criminal Justice Use</strong></div>
            <div className="m-0 mb-4 font-sans text-base text-gray-800 leading-relaxed font-normal">
              Tools deployed primarily for <strong>non-criminal justice purposes</strong> (e.g., housing, transportation, or general traffic management) are excluded unless there is clear evidence they are used for crime, law enforcement, public safety, or legal enforcement purposes. In some cases, tools deployed by non-justice agencies are included when they replace or directly support traditional criminal justice functions.
            </div>
          </div>
          <div className="mb-4">
            <div className="font-sans text-base font-normal mb-2"><strong>Status of Use</strong></div>
            <div className="m-0 mb-4 font-sans text-base text-gray-800 leading-relaxed font-normal">
              Entries may reflect <strong>proposed, piloted, or deployed tools.</strong> Inclusion does not guarantee current or ongoing use. JAI-T represents a documented footprint of AI adoption, not an exhaustive or real-time inventory.
            </div>
          </div>
          <div className="mb-4">
            <div className="font-sans text-base font-normal mb-2"><strong>Defining Artificial Intelligence</strong></div>
            <div className="m-0 mb-4 font-sans text-base text-gray-800 leading-relaxed font-normal">
              Most tools are included when sources explicitly reference “artificial intelligence,” or when inclusion is based on an informed assessment of the technology’s function and common usage. However, some widely discussed technologies are included, even when AI use within those technologies may vary depending on the city, such as:<br />
              <ul className="mt-2 mb-2">
                <li>Facial recognition</li>
                <li>Gunshot detection systems</li>
                <li>Automated license plate readers (ALPRs)</li>
                <li>Body-worn camera footage review</li>
                <li>Predictive policing tools</li>
                <li>Real-time crime or intelligence centers</li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-sans text-base font-normal mb-2"><strong>Sources and Citations</strong></div>
            <div className="m-0 mb-4 font-sans text-base text-gray-800 leading-relaxed font-normal">
              If a source link is no longer active, users should contact the publisher or access archived versions through the <a href="https://web.archive.org" className="text-black underline font-bold" target="_blank" rel="noopener noreferrer">Wayback Machine</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclaimers;