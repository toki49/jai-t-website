import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Evidence for Justice Lab: JAI-T</h1>
          <h2 className="home-subtitle">Dynamic Limited Data Set Tracker JAI-T</h2>
          
          <div className="home-paragraphs">
            <p>
              As artificial intelligence becomes increasingly integrated into the criminal justice system, the tools and technologies used to support decision-making are being adopted in varied and evolving ways. From predictive analytics to risk assessment algorithms, the application of AI differs across jurisdictions, often with limited centralized visibility.
            </p>
            <p>
                The Justice and Artificial Intelligence Tracker (JAI-T) is a centralized resource that documents the use of AI-driven technologies across the justice system. Developed by the Evidence for Justice Lab at Georgetown University, JAI-T tracks how law enforcement agencies, court systems, and correctional institutions are exploring and applying AI tools - from facial recognition and algorithmic case triage to data-informed parole processes.
                Dive into interactive visualizations that showcase data organized by the Justice AI Taxonomy and domain of use. JAI-T is designed to promote transparency, enhance public understanding, and spotlight innovation across the dynamic intersection of justice and technology.
                The interactive geomap below illustrates the integration of AI-driven tools into justice-based systems within the top 50 most populated cities in the United States. Use this tool to locate and identify how your city has used or is using AI. 
            </p>
            <p>
              Choose your city and navigate through our data visualizations, tailoring content as you go.
            </p>
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
      </div>
    </div>
  );
}

export default Home;

