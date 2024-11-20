import React from 'react';
import './HomeConsults.css';
import ImgSwiper from "./ImgSwiper.js";

function HomeConsults() {
  return (
    <div className="home-consults-container">
      <section className="home-consults-header">
        <h1 className="header-title">Home Consults</h1>
        <p className="header-description">
          Let our experts guide you with personalized plant care tips, directly in the comfort of your home.
        </p>
      </section>

      <section className="expertise-section">
        <h2 className="section-title">Why Choose Our Home Consults?</h2>
        <div className="expertise-cards">
          <div className="expertise-card">
            <h3>Personalized Advice</h3>
            <p>Receive tailored plant care tips that are specific to your environment and plants.</p>
          </div>
          <div className="expertise-card">
            <h3>Convenient & Easy</h3>
            <p>Book a consultation from the comfort of your home at a time that suits you.</p>
          </div>
          <div className="expertise-card">
            <h3>Expert Guidance</h3>
            <p>Our experienced plant specialists are here to help you grow and maintain your plants.</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">Gallery of Our Consults</h2>
        <ImgSwiper />
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Ready for a Consult?</h2>
        <p className="cta-description">Get in touch with one of our plant experts and get the advice you need!</p>
        <a href="/book-consult" className="cta-button">Book Your Consultation</a>
      </section>
    </div>
  );
}

export default HomeConsults;
