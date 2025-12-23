import './Insights.css';

function Insights() {
  const insightsData = [
    {
      image: 'https://media.istockphoto.com/id/2173998291/photo/new-york-city-skyline-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=qmuoeOK8p9zoL9VsutewopcGBHiGEsBaVQd7uRgHvkw=',
      title: 'Tale of 100 Cities',
      author: 'Evidence for Justice Lab Team',
      date: 'Coming soon...',
      link: '#'
    },
    {
      image: 'https://a.storyblok.com/f/198504/1754x1398/8df7ede424/screenshot-2024-06-06-at-9-23-35-am.png',
      title: 'Defining AI in the Criminal Justice System',
      author: 'Evidence for Justice Lab Team',
      date: 'Coming soon...',
      link: '#'
    },

  ];

  return (
    <div className="insights-container">
      <div className="insights-content">
        <h1 className="insights-title">Insights</h1>
        <p className="insights-description">
          Check back for more insights, and if you want to stay updated, sign up for our newsletter. 
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
                <p className="insight-author">{item.author}</p>
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