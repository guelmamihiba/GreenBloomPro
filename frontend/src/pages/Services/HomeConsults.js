import React, { useState } from 'react';
import { Home, TreesIcon as Plant, Zap, Smile, ChevronRight, ArrowRight, Sun, Wind, Droplets } from 'lucide-react';
import './HomeConsults.css';

const consultFeatures = [
  { icon: <Plant />, title: "Plant Selection", description: "Expert advice on choosing the right plants for your space" },
  { icon: <Home />, title: "Space Optimization", description: "Maximize your home's potential with strategic plant placement" },
  { icon: <Zap />, title: "Care Routines", description: "Customized care plans for your indoor garden" },
  { icon: <Smile />, title: "Wellness Boost", description: "Enhance your living environment and well-being" },
];

function HomeConsults() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="hc-container">
      <header className="hc-header">
        <p className="hc-tagline">Home Plant Consultations</p>
        <p>Transform your living space into a thriving indoor oasis</p>
      </header>

      <section className="hc-intro">
        <div className="hc-intro-content">
          <h2>Why Choose Our Home Consults?</h2>
          <p>Our expert botanists bring years of experience right to your doorstep. We'll help you create a personalized plant paradise that fits your lifestyle and enhances your home's ambiance.</p>
          <ul className="hc-benefits">
            <li><ArrowRight /> Tailored plant recommendations</li>
            <li><ArrowRight /> Expert care advice</li>
            <li><ArrowRight /> Improved air quality</li>
            <li><ArrowRight /> Stress-reducing environments</li>
          </ul>
        </div>
      </section>

      <section className="hc-process">
        <h2>Our Consultation Process</h2>
        <div className="hc-timeline">
          <div className="hc-timeline-item">
            <div className="hc-timeline-content">
              <h3>Initial Assessment</h3>
              <p className='blacky'>We evaluate your space, lighting conditions, and personal preferences.</p>
            </div>
          </div>
          <div className="hc-timeline-item">
            <div className="hc-timeline-content">
              <h3>Custom Plan Creation</h3>
              <p className='blacky'>Our experts design a tailored plant plan for your home.</p>
            </div>
          </div>
          <div className="hc-timeline-item">
            <div className="hc-timeline-content">
              <h3>Implementation</h3>
              <p className='blacky'> We help you bring the plan to life, ensuring proper placement and setup.</p>
            </div>
          </div>
          <div className="hc-timeline-item">
            <div className="hc-timeline-content">
              <h3>Ongoing Support</h3>
              <p className='blacky'>Enjoy continued guidance and tips for maintaining your indoor garden.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hc-features">
        <h2>What We Offer</h2>
        <div className="hc-features-grid">
          {consultFeatures.map((feature, index) => (
            <div
              key={index}
              className={`hc-feature-card ${index === activeFeature ? 'active' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hc-showcase">
        <h2>See the Difference</h2>
        <div className="hc-showcase-content">
          <div className="hc-before-after">
            <div className="hc-before">
              <h3>Before</h3>
              <ul>
                <li><Sun /> Low light utilization</li>
                <li><Wind /> Poor air circulation</li>
                <li><Droplets /> Inconsistent watering</li>
              </ul>
            </div>
            <div className="hc-after">
              <h3>After</h3>
              <ul>
                <li><Sun /> Optimized light conditions</li>
                <li><Wind /> Improved air quality</li>
                <li><Droplets /> Proper watering schedule</li>
              </ul>
            </div>
          </div>
          <div className="hc-testimonial">
            <blockquote>
              "The home consult transformed our living room into a vibrant, calming space. We couldn't be happier with the results!"
            </blockquote>
            <p className="hc-client">- Sarah & Tom, Happy Clients</p>
          </div>
        </div>
      </section>

      <section className="hc-cta">
        <h2>Ready to Transform Your Space?</h2>
        <p>Book your home consultation today and take the first step towards your dream indoor garden.</p>
        <button className="hc-cta-button">Schedule Your Consult <ChevronRight /></button>
      </section>
    </div>
  );
}

export default HomeConsults;
