import './Insights.css';

function Insights() {
  const insightsData = [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      title: 'Tale of 100 cities',
      date: '01.15.2026',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      title: 'Preliminary findings and patterns',
      date: '02.20.2026',
      link: '#'
    },

  ];

  return (
    <div className="insights-container">
      <div className="insights-content">
        <h1 className="insights-title">Insights</h1>
        <p className="insights-description">
          Explore key findings and analysis from the Justice and Artificial Intelligence Tracker.
        </p>
        
        <div className="insights-grid">
          {insightsData.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="insight-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="insight-image-wrapper">
                <img src={item.image} alt={item.title} className="insight-image" />
              </div>
              <div className="insight-content">
                <h3 className="insight-title">{item.title}</h3>
                <p className="insight-date">{item.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Insights;