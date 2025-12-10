import './Methodology.css';

function Methodology() {
  return (
    <div className="methodology-container">
      <div className="methodology-header">
        <h1 className="methodology-title">Methodology</h1>
        <p className="methodology-subtitle">xxx</p>
      </div>

      <div className="methodology-sections">
        <div className="methodology-section">
          <h2 className="section-title">Data Collection Process</h2>
          <div className="section-divider"></div>
          <div className="section-content">
            <p>Our data collection approach: The Justice and Artificial Intelligence Project/Tracker is a collection of information cited from various news articles, reports, and studies. Research was conducted by identifying key search terms that were determined to likely generate the most sources about artificial intelligence tools within the criminal justice system. Once these key terms were inputted into a search engine, data was collected by identifying sources that confirmed the past, present, or future use of AI-driven tools.  Research assistants specifically looked for links that mentioned the use of artificial intelligence tools within a designated location. </p>
          </div>
        </div>

        <div className="methodology-section">
          <h2 className="section-title">Search Tips</h2>
          <div className="section-divider"></div>
          <div className="section-content">
            <p>On the JAI-T page, users can filter through different fields to see what types of artificial intelligence is being deployed across the country. First, filter by domain. Domains include Law Enforcement, Courts, Corrections, and Other. 

Within each domain fall various categories of the kinds of artificial intelligence technologies that exist. Each categorization can be defined as follows: 

PER CATEGORY:
For example:
“Facial Recognition Technology is [defined as…]” 
[follow for all categories]

Under each category, a list of all corresponding technologies across cities in the U.S. will appear. Thereafter, users can sift through each technology by state and/or by vendor to better identify the variations in deployed technologies. 
</p>
          </div>
        </div>

        <div className="methodology-section">
          <h2 className="section-title">Disclaimers</h2>
          <div className="section-divider"></div>
          <div className="section-content">
            <p>Note: Sources that discuss legislation or policies that concern artificial intelligence were not included. This research focuses on the specific adoption and/or deployment of artificial intelligence tools within justice systems.  

Note: “Future Use” of AI-driven tools are otherwise known as pilot programs. In this project/research, a pilot program differs from the potential use of a tool in that a pilot program is the confirmed implementation or confirmed plan to implement an AI tool into the law enforcement agency. 

Established some parameters around our manual search. Which means that it is not illustrative and not exhaustive m
Only highlighting publicly announced tools not all tools 
Point-in-time view not guarantee that the tools are still in use 
“Publicly available material (e.g. news articles, etc)
</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;

