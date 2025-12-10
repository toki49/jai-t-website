import './Insights.css';

function Insights() {
  const insightsData = [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      title: '2022 is the deadliest year yet for U.S. mass shootings, new data shows',
      date: '12.02.2022',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      title: 'In wake of Colorado Springs Massacre, 2022 is deadliest year for mass killings, Northeastern expert says',
      date: '11.22.2022',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      title: "'Aggressive drills' in response to U.S. school shootings can harm students, Northeastern expert says",
      date: '11.10.2022',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
      title: "Professor James Alan Fox's Mass Killing database wins EPPY Award for excellence in digital journalism",
      date: '11.08.2022',
      link: '#'
    }
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
