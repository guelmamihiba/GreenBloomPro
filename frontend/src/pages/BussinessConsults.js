import React from 'react';
import './BusinessConsults.css';
import ImgSwiper from './ImgSwiper'; // Optional - If you want a gallery/slider

function BusinessConsults() {
  return (
    <div className="business-consults-container">
      <section className="business-consults-header">
        <h1 className="header-title">Business Consults</h1>
        <p className="header-description">
          Professional plant care consultations designed to enhance your workspace and foster a thriving environment for your employees.
        </p>
      </section>

      <section className="business-expertise-section">
        <h2 className="section-title">Why Choose Our Business Consults?</h2>
        <div className="expertise-cards">
          <div className="expertise-card">
            <h3>Office Plant Care Solutions</h3>
            <p>We offer tailored plant care services to ensure your office plants thrive, improving air quality and overall ambiance.</p>
          </div>
          <div className="expertise-card">
            <h3>Custom Plant Strategies</h3>
            <p>Our experts will create a plant care strategy specific to your office’s needs, based on light, space, and environment.</p>
          </div>
          <div className="expertise-card">
            <h3>Employee Well-being</h3>
            <p>By introducing plants into your workplace, we can help increase productivity, creativity, and employee satisfaction.</p>
          </div>
        </div>
      </section>

      {/* <section className="business-gallery-section">
        <h2 className="section-title">Gallery of Our Business Consults</h2>
        <ImgSwiper />
      </section> */}

      <section className="business-cta-section">
        <h2 className="cta-title">Ready to Transform Your Workspace?</h2>
        <p className="cta-description">Let our plant care experts help your business grow in a green environment.</p>
        <a href="/book-consult" className="cta-button">Book a Business Consultation</a>
      </section>
    </div>
  );
}

export default BusinessConsults;
