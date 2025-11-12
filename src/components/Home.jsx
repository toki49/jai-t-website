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
              The JAI-T helps stakeholders understand state and local systems, see where they are doing well, and spot areas that may need attention.
            </p>
            <p>
              Helping the justice sector understand how AI applications are being delivered (DPGs) can help them deliver public services and engage people.
            </p>
            <p>
              Choose your city and navigate through our data visualizations, tailoring content as you go.
            </p>
          </div>
        </div>
        
        <div className="home-visualization">
          <iframe
            src="https://datawrapper.dwcdn.net/1p5Fr/17/"
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

