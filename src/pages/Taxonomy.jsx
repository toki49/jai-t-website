      {/* Six taxonomy boxes below the SVG, each with unique content */}
      <div className="taxonomy-steps">
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">1</div>
            <div className="taxonomy-step-title">Detection</div>
          </div>
          <div className="taxonomy-step-body">
            Devices and methods identifying specific objects, materials, substances or physical items within an environment, often in real-time, with the use of artificial intelligence.
            <div className="taxonomy-step-examples"> Examples: identifying weaponry, drugs, explosives, cars, etc. </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">2</div>
            <div className="taxonomy-step-title">Surveillance</div>
          </div>
          <div className="taxonomy-step-body">
            Collecting data and conducting ongoing, systematic observation and monitoring of people, actions and/or activities with the use of artificial intelligence. Surveillance tools gather intelligence on personal characteristics and behavior, such as speech, movement, features, engagement, biometrics, and physical interactions amongst groups and/or individuals. Note, surveillance tools are distinguished by their ongoing monitoring of individuals over time, rather than one-time detection tied to a specific incident or object.
            <div className="taxonomy-step-examples">Examples: facial recognition, social media tracking, or phone call monitoring </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">3</div>
            <div className="taxonomy-step-title">Prediction</div>
          </div>
          <div className="taxonomy-step-body">
            Forecasting the likelihood that a person will commit a criminal offense or the location of criminal activity using artificial intelligence. This often entails analyzing past and present data to predict future behaviors or events.
            <div className="taxonomy-step-examples"> Examples: identifying crime hot spots or predicting an officer’s behavior in the field </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">4</div>
            <div className="taxonomy-step-title">Forensic Analysis</div>
          </div>
          <div className="taxonomy-step-body">
            Analyzing both digital and physical evidence as it relates to investigating a specific criminal incident with artificial intelligence.
            <div className="taxonomy-step-examples"> Examples: AI used in DNA analysis </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">5</div>
            <div className="taxonomy-step-title">Back-End Administration</div>
          </div>
          <div className="taxonomy-step-body">
            Conducting administrative responsibilities and tasks with artificial intelligence that may aid in enhancing internal functions or management operations in streamlining processes, reducing time or labor, and gaining efficiencies.
            <div className="taxonomy-step-examples"> Examples: AI tools for drafting crime reports, organizing documentation, or virtual reality training </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">6</div>
            <div className="taxonomy-step-title">Front-End Support</div>
          </div>
          <div className="taxonomy-step-body">
            Interfacing with the public to assist them with their individual matters related to navigating the criminal justice system, often using artificial intelligence to act as a personal aid to the user.
            <div className="taxonomy-step-examples"> Examples: jury chatbots, language translation or notifying clients </div>
          </div>
        </div>
      </div>
import './Taxonomy.css';

function Taxonomy() {
  return (
    <div className="taxonomy-container">
      <div className="taxonomy-header">
        <h1 className="taxonomy-title">Taxonomy</h1>
        <p className="taxonomy-subtitle">
          The JAI-T Taxonomy organizes AI tools by their primary function within the criminal justice system, focusing on what each tool does for the specific use in each jurisdiction according to publicly available information.
        </p>
        <p className="taxonomy-header-note">
          Most tools are placed in a single category; however, tools that clearly perform multiple distinct functions, as indicated by the article, may appear in more than one category. Classification reflects how the tool is described as being used by that jurisdiction, recognizing that similar tools may be used differently across multiple jurisdictions elsewhere.
        </p>

      </div>

      {/* Hero SVG sits below the title and intro */}
      <div className="taxonomy-hero">
        <img
          src={`${import.meta.env.BASE_URL}JAI-T Taxonomy.svg`}
          alt="Visualization of taxonomy"
          className="taxonomy-hero-image"
        />
      </div>

 {/* Six taxonomy boxes below the SVG, each with unique content */}
      <div className="taxonomy-steps">
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">1</div>
            <div className="taxonomy-step-title">Detection</div>
          </div>
          <div className="taxonomy-step-body">
            Devices and methods identifying specific objects, materials, substances or physical items within an environment, often in real-time, with the use of artificial intelligence.
            <div className="taxonomy-step-examples"> Examples: identifying weaponry, drugs, explosives, cars, etc. </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">2</div>
            <div className="taxonomy-step-title">Surveillance</div>
          </div>
          <div className="taxonomy-step-body">
            Collecting data and conducting ongoing, systematic observation and monitoring of people, actions and/or activities with the use of artificial intelligence. Surveillance tools gather intelligence on personal characteristics and behavior, such as speech, movement, features, engagement, biometrics, and physical interactions amongst groups and/or individuals. Note, surveillance tools are distinguished by their ongoing monitoring of individuals over time, rather than one-time detection tied to a specific incident or object.
            <div className="taxonomy-step-examples"> Examples: facial recognition, social media tracking, or phone call monitoring </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">3</div>
            <div className="taxonomy-step-title">Prediction</div>
          </div>
          <div className="taxonomy-step-body">
            Forecasting the likelihood that a person will commit a criminal offense or the location of criminal activity using artificial intelligence. This often entails analyzing past and present data to predict future behaviors or events.
            <div className="taxonomy-step-examples"> Examples: identifying crime hot spots or predicting an officer’s behavior in the field </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">4</div>
            <div className="taxonomy-step-title">Forensic Analysis</div>
          </div>
          <div className="taxonomy-step-body">
            Analyzing both digital and physical evidence as it relates to investigating a specific criminal incident with artificial intelligence.
            <div className="taxonomy-step-examples"> Examples: AI used in DNA analysis </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">5</div>
            <div className="taxonomy-step-title">Back-End Administration</div>
          </div>
          <div className="taxonomy-step-body">
            Conducting administrative responsibilities and tasks with artificial intelligence that may aid in enhancing internal functions or management operations in streamlining processes, reducing time or labor, and gaining efficiencies.
            <div className="taxonomy-step-examples"> Examples: AI tools for drafting crime reports, organizing documentation, or virtual reality training </div>
          </div>
        </div>
        <div className="taxonomy-step">
          <div className="taxonomy-step-header">
            <div className="taxonomy-step-number">6</div>
            <div className="taxonomy-step-title">Front-End Support</div>
          </div>
          <div className="taxonomy-step-body">
            Interfacing with the public to assist them with their individual matters related to navigating the criminal justice system, often using artificial intelligence to act as a personal aid to the user.
            <div className="taxonomy-step-examples"> Examples: jury chatbots, language translation or notifying clients </div>
          </div>
        </div>
      </div>




      <div className="taxonomy-content">
        <div className="taxonomy-section">
        </div>
      </div>
    </div>
  );
}

export default Taxonomy;

