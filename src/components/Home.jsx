import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">The Justice and Artificial Intelligence Tracker (JAI-T)</h1>
          <h2 className="home-subtitle">Classifying real-world deployments of AI in the criminal justice system.</h2>
        
        </div>
        
        <div className="home-value-boxes">
          <div className="home-value-box">
            <div className="home-value-title">City Count</div>
            <div className="home-value-subtitle">Total number of cities tracked in the JAI-T database</div>
            <div className="home-value-number">100</div>
          </div>
          <div className="home-value-box">
            <div className="home-value-title">Application Count</div>
            <div className="home-value-subtitle">Total number of AI recognized tools used in the Justice system</div>
            <div className="home-value-number">250</div>
          </div>
        </div>

        <div className="home-visualization">
          <iframe
            src="https://datawrapper.dwcdn.net/YbVsD/9/"
            title="JAI-T Data Visualization"
            className="datawrapper-iframe"
            frameBorder="2"
            scrolling="no"
            allowFullScreen
          />
        </div>

        <div className="home-description">
          <p>
            The <strong>Justice and Artificial Intelligence Tracker (JAI-T)</strong> is a centralized resource that documents use cases of AI-driven technologies within the criminal justice system. Developed by the <a href="https://mccourt.georgetown.edu/evidence-for-justice-lab/" target="_blank" rel="noopener noreferrer">Evidence for Justice Lab at Georgetown University</a>, JAI-T tracks how law enforcement agencies, court systems, and correctional institutions are exploring and applying AI tools - from facial recognition and algorithmic case triage to public facing chatbots. 
          </p>
          <p>
            JAI-T is designed to promote transparency, enhance public understanding, and spotlight use-cases across the dynamic intersection of justice and technology.
          </p>
        </div>
      
      </div>
    </div>
  );
}

export default Home;
