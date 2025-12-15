import { useState } from 'react';
import './FAQ.css';

function FAQ() {
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
      question: "How are you defining 'Artificial Intelligence'?",
      answer: "AI adoption in justice systems is accelerating rapidly, making it critical to document and understand these implementations before they become widespread without proper scrutiny."
    },
    {
      question: "How can you confirm the tool has been used?",
      answer: "AI adoption in justice systems is accelerating rapidly, making it critical to document and understand these implementations before they become widespread without proper scrutiny."
    },
    {
      question: "What do you mean by ‘future use’?",
      answer: "AI adoption in justice systems is accelerating rapidly, making it critical to document and understand these implementations before they become widespread without proper scrutiny."
    },
    {
      question: "How often is this database updated?",
      answer: "AI adoption in justice systems is accelerating rapidly, making it critical to document and understand these implementations before they become widespread without proper scrutiny."
    }
  ];

  return (
    <div className="faq-page-container">
      <div className="faq-page-content">
        <h1 className="faq-page-title">Frequently Asked Questions</h1>
        
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
    </div>
  );
}

export default FAQ;
