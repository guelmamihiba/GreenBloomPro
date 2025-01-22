import React from 'react';
import { Briefcase, Leaf, Users, TrendingUp, ChevronRight, CheckCircle, Coffee, Sun, Wind } from 'lucide-react';
import './BusinessConsults.css';

function BusinessConsults() {
  return (
    <div className="business-consults-container">
      <header className="business-consults-header">
        <div className="header-content">
          <h1>Business Consults</h1>
          <p>Elevate Your Workspace with Expert Plant Care Solutions</p>
          <a href="#contact" className="cta-button">Get Started <ChevronRight size={20} /></a>
        </div>
        {/* <div className="header-image"> */}
          {/* <img src="../../picts&vds/Monstera-Deliciosa.jpg" alt="Office with lush plants" /> */}
        {/* </div> */}
      </header>
      <section className="intro-section">
        <div className="content-wrapper">
          <h2 className='Business-Environment'>Transform Your Business Environment</h2>
          <p>At GreenBloom, we specialize in professional plant care consultations designed to enhance your workspace and foster a thriving environment for your employees. Our expert team brings nature indoors, creating a harmonious and productive atmosphere for your business.</p>
          <ul className="intro-features">
            <li><CheckCircle size={20} /> Tailored plant solutions</li>
            <li><CheckCircle size={20} /> Expert consultations</li>
            <li><CheckCircle size={20} /> Ongoing maintenance</li>
          </ul>
          <a href="/home-consults" className="learn-more-buttonn">Discover Our Approach <ChevronRight size={20} /></a>
          
        </div>
        {/* <div className="image-wrapper">
      <img src={plantImage} alt="Plant" />
    </div> */}
      </section>
      {/* <img src="../../picts&vds/natural-plant-assortment-monochromatic-background.jpg" alt="Lush office space with plants" className="intro-image" /> */}

      <section className="expertise-section">
        <h2 className='business-consulting'>Why Choose Our Business Consults?</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <Briefcase size={48} />
            <h3>Office Plant Care Solutions</h3>
            <p>We offer tailored plant care services to ensure your office plants thrive, improving air quality and overall ambiance.</p>
          </div>
          <div className="expertise-card">
            <Leaf size={48} />
            <h3>Custom Plant Strategies</h3>
            <p>Our experts will create a plant care strategy specific to your office's needs, based on light, space, and environment.</p>
          </div>
          <div className="expertise-card">
            <Users size={48} />
            <h3>Employee Well-being</h3>
            <p>By introducing plants into your workplace, we can help increase productivity, creativity, and employee satisfaction.</p>
          </div>
          <div className="expertise-card">
            <TrendingUp size={48} />
            <h3>Sustainable Growth</h3>
            <p>Our plant solutions contribute to your company's sustainability goals and improve your corporate image.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className='GreenBloom-Adv'>The GreenBloom Advantage</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>30%</h3>
            <p>Increase in Employee Productivity</p>
          </div>
          <div className="benefit-item">
            <h3>50%</h3>
            <p>Reduction in Sick Leave</p>
          </div>
          <div className="benefit-item">
            <h3>75%</h3>
            <p>Improvement in Air Quality</p>
          </div>
          <div className="benefit-item">
            <h3>100+</h3>
            <p>Satisfied Corporate Clients</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2 className='Consultation-process'>Our Consultation Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-icon"><Coffee size={32} /></div>
            <h3>Initial Meeting</h3>
            <p>We discuss your goals and assess your workspace needs.</p>
          </div>
          <div className="process-step">
            <div className="step-icon"><Sun size={32} /></div>
            <h3>Custom Strategy</h3>
            <p>Our experts develop a tailored plant care plan for your office.</p>
          </div>
          <div className="process-step">
            <div className="step-icon"><Leaf size={32} /></div>
            <h3>Implementation</h3>
            <p>We source and install the perfect plants for your space.</p>
          </div>
          <div className="process-step">
            <div className="step-icon"><Wind size={32} /></div>
            <h3>Ongoing Support</h3>
            <p>Regular maintenance and care to ensure your plants thrive.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-content">
          <h2 className='Clients-Saying'>What Our Clients Say</h2>
          <blockquote>
            "GreenBloom transformed our office into a vibrant, green space. Our employees love the new environment, and we've seen a notable increase in productivity and well-being."
          </blockquote>
          <p className="testimonial-author">- Sarah Johnson, CEO of TechInnovate</p>
        </div>
        {/* <div className="testimonial-image">
          <img src="/placeholder.svg?height=400&width=600" alt="Office with happy employees and plants" />
        </div> */}
      </section>

      <section className="cta-section" id="contact">
        <h2>Ready to Transform Your Workspace?</h2>
        <p>Let our plant care experts help your business grow in a green environment.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Company Name" required />
          <textarea placeholder="Tell us about your office space and needs" required></textarea>
          <button type="submit" className="submit-btn">Book a Consultation <ChevronRight size={20} /></button>
        </form>
      </section>
    </div>
  );
}

export default BusinessConsults;
