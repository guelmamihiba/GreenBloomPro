import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Faqs.css";
import { useAtom } from "jotai";
import { translationsAtom } from "../../atoms/translationAtom"; // Import atom

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  // const [] = useAtom(languageAtom); // Use the language atom
  const [translations] = useAtom(translationsAtom); // Get the translations from the atom
  const navigate = useNavigate();


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="faq-header-title">{translations.faq.title}</h1>
      </div>

      <div className="faq-items">
        {translations.faq.items.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      <button className="contact-us-button" onClick={handleContactUs}>
        {translations.faq.contactUs}
      </button>
    </div>
  );
};

export default FAQ;
