import React, { useState } from 'react';
import { Leaf, Users, Award, Sprout, ChevronRight, Hourglass, Lightbulb } from 'lucide-react';
import './AboutUs.css';
import emailjs from 'emailjs-com';

(function () {
  emailjs.init("8Q5paEs6wJr2mJ-wQ");
})();

function AboutUs() {
  const [email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }; 

  const sendSubscription = (event) => {
    event.preventDefault();
  
    const templateParams = {
      email: email, 
      name: FullName, 
    };
  
    emailjs
      .send("service_p9w20ns", "template_t4n2a77", templateParams)
      .then(
        (response) => {
          console.log("Success:", response);
          alert("Your subscription was sent successfully!");
        },
        (error) => {
          console.log("Error:", error);
          alert("There was an error sending your subscription. Please try again.");
        }
      );
  };

  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About GreenBloom</h1>
        <p>Nurturing Nature, Growing Together</p>
      </header>

      <section className="mission-section">
        <div className="content-wrapper">
          <h2 className='Our-Mission'>Our Mission</h2>
          <p>At GreenBloom, we're passionate about bringing the beauty and benefits of nature into your everyday life. Our mission is to empower plant enthusiasts of all levels with the knowledge, tools, and support they need to create thriving green spaces.</p>
          <a href="/home-consults" className="learn-more">Business Consults <ChevronRight size={20} /></a>
        </div>
        <div className="image-wrapper">
          {/* <img src="/placeholder.svg?height=400&width=600" alt="Team working in a lush garden" className="mission-image" /> */}
        </div>
      </section>

      <section className="values-section">
        <h2 className='Our-Core-Values'>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <Leaf size={48} />
            <h3>Sustainability</h3>
            <p>We're committed to eco-friendly practices and promoting sustainable plant care.</p>
          </div>
          <div className="value-card">
            <Users size={48} />
            <h3>Community</h3>
            <p>We foster a supportive community of plant lovers, sharing knowledge and experiences.</p>
          </div>
          <div className="value-card">
            <Award size={48} />
            <h3>Excellence</h3>
            <p>We strive for excellence in our products, services, and customer support as plant caring.</p>
          </div>
          <div className="value-card">
            <Sprout size={48} />
            <h3>Growth</h3>
            <p>We believe in continuous learning and personal growth through plant care journey.</p>
          </div>
          <div className="value-card">
            <Hourglass size={48} />
            <h3>Patience and Dedication</h3>
            <p>Growing and nurturing plants requires patience and commitment. We, as plant enthusiasts.</p>
          </div>
          <div className="value-card">
            <Lightbulb size={48} />
            <h3>Knowledge and Learning</h3>
            <p>Our passion for plants often involves a thirst for knowledge, cultivation techniques.</p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="content-wrapper">
          <h2 className='Our-Story'>Our Story</h2>
          <p>Founded in 2020 by a group of passionate botanists and plant enthusiasts, GreenBloom started as a small community project. Today, we've blossomed into a leading resource for plant care, with a wide range of services and products designed to help you create your own personal oasis.</p>
          <p>Our journey has been one of growth, learning, and constant innovation. We've faced challenges, celebrated victories, and through it all, our love for plants has only grown stronger.</p>
          <a href="/home-consults" className="timeline-btn">Get Started with Home Consults</a>
        </div>
      </section>

      <section className="impact-section">
        <h2 className='Our-Impact'>Our Impact</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>1M+</h3>
            <p>Plants Sold</p>
          </div>
          <div className="impact-card">
            <h3>500K+</h3>
            <p>Trees Planted</p>
          </div>
          <div className="impact-card">
            <h3>100K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="impact-card">
            <h3>50+</h3>
            <p>Community Gardens Supported</p>
          </div>
        </div>
        <p className="impact-description">At GreenBloom, we're not just selling plants; we're nurturing a greener future. Our efforts have led to significant positive impacts on the environment and communities worldwide.</p>
        <a href="/plant-care-advice" className="impact-btn">Read Our Sustainability Report</a>
      </section>

      <section className="cta-section">
        <h2 className='Revolution'>Join Our Green Revolution</h2>
        <p>Ready to start your plant journey with us? Sign up for our newsletter and get expert tips, exclusive offers, and more!</p>
        <form className="newsletter-form" onSubmit={sendSubscription}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            aria-label="Email for newsletter"
            required
          />
          <input
            type="text"
            value={FullName}
            onChange={handleFullNameChange}
            placeholder="Enter your full name Please"
            aria-label="Full Name for newsletter"
            required
          />
          <button type="submit" className="submit-btn">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default AboutUs;
