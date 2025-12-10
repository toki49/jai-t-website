import { useState } from 'react';
import './About.css';

function About() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Why did you make this?",
      answer: "The Evidence for Justice Lab created this tracker to provide transparency and accountability regarding the use of AI technologies in justice systems across the United States."
    },
    {
      question: "Why do you think AI is risky?",
      answer: "AI systems in justice contexts can perpetuate biases, lack transparency, and make decisions that significantly impact people's lives without adequate oversight or accountability."
    },
    {
      question: "Why now?",
      answer: "AI adoption in justice systems is accelerating rapidly, making it critical to document and understand these implementations before they become widespread without proper scrutiny."
    },
    {
      question: "Can anyone just build a model like these?",
      answer: "While technical expertise is required, the real challenge lies in ensuring models are fair, transparent, and accountable—especially when used in justice contexts where stakes are high."
    },
    {
      question: "How do you decide which models make the list?",
      answer: "We include AI tools that are actively deployed, have been implemented in the past, or are part of confirmed pilot programs within specific city justice systems."
    },
    {
      question: "Why isn't my favorite model on the list?",
      answer: "Our tracker focuses specifically on AI tools used within city-level justice systems. Tools used at county, state, or federal levels, or those still in theoretical stages, are not included."
    },
    {
      question: "Why do you care about these trends?",
      answer: "Understanding AI adoption patterns in justice systems is crucial for ensuring these technologies serve justice and fairness rather than perpetuating existing inequalities."
    }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            The <a href="https://mccourt.georgetown.edu/evidence-for-justice-lab/" target="_blank" rel="noopener noreferrer">Evidence for Justice Lab</a> is a research and policy hub established within the McCourt School of Public Policy at Georgetown University. The Evidence for Justice Lab’s mission is to create a more effective and fair approach to safety and justice through evidence and research. We accomplish this by engaging communities, collaborating with government partners and conducting applied research to pave the way for a more just future.
We lead with curiosity and creativity. We approach our research through Evidence, Fairness, Voices, and Collaboration. By relying on our four pillars, we seek to redefine what constitutes evidence in the justice sector, incorporating both empirical data and lived experience.
To learn more about the E4J Lab, please visit our website: [insert link]
          </p>
        </div>

        <div className="about-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-icon">{openFAQ === index ? '▼' : '▶'}</span>
                  {faq.question}
                </button>
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <h2>Get Involved</h2>
          <p>
            If you are a research partner, government organization, or a student interested in getting involved with the Lab, we would love to hear from you!
          </p>
          <p>
            <strong>Email:</strong> EvidenceForJusticeLab@georgetown.edu
          </p>
          <p>
            <strong>Connect with us:</strong> <a href="https://www.linkedin.com/company/evidence-for-justice-lab/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

