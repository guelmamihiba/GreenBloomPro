import React from "react"
import {
  Leaf,
  Sprout,
  Droplets,
  // Sun,
  // Wind,
  ChevronRight,
  Shovel,
  Ruler,
  SproutIcon as Seedling,
  TreesIcon as Plant,
} from "lucide-react"
import "./PlantRepotting.css"

function PlantRepotting() {
  return (
    <div className="plant-repotting-container">
      <header className="plant-repotting-header">
        <div className="header-context">
          <h1>Plant Repotting Services</h1>
          <p>Give Your Plants a New Home with Our Expert Repotting Services</p>
          <a href="/signin" className="cta-button">
           Get in for the Schedule Repotting <ChevronRight size={20} />
          </a>
        </div>
        <div className="header-image">
          {/* <img src="/placeholder.svg?height=400&width=600" alt="Plant being repotted" /> */}
        </div>
      </header>

      <section className="intro-section">
        <div className="content-wrapper">
          <h2 className="plantRepotting">Why Repot Your Plants?</h2>
          <p>
            Repotting is essential for the health and growth of your plants. It provides fresh nutrients, more space for
            root growth, and can revitalize a struggling plant. Our expert repotting services ensure your plants thrive
            in their new homes.
          </p>
          <ul className="intro-features">
            <li>
              <Leaf size={20} /> Promotes healthy growth
            </li>
            <li>
              <Sprout size={20} /> Refreshes soil and nutrients
            </li>
            <li>
              <Droplets size={20} /> Improves water retention
            </li>
          </ul>
          <a href="/bussiness-consult" className="learn-more-btnn">Learn About Our Process <ChevronRight size={20} />
</a>

        </div>
        {/* <div className="image-wrapper">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Before and after repotting comparison"
            className="intro-image"
          />
        </div> */}
      </section>

      <section className="expertise-section">
        <h2 className="Repoting-Expertises">Our Repotting Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <Shovel size={48} />
            <h3>Proper Techniques</h3>
            <p>We use the right techniques to minimize stress on your plants during the repotting process.</p>
          </div>
          <div className="expertise-card">
            <Ruler size={48} />
            <h3>Right-Sized Pots</h3>
            <p>We select the perfect pot size to ensure optimal growth for your plants.</p>
          </div>
          <div className="expertise-card">
            <Seedling size={48} />
            <h3>Quality Soil Mix</h3>
            <p>Our premium soil mixes are tailored to each plant's specific needs.</p>
          </div>
          <div className="expertise-card">
            <Plant size={48} />
            <h3>Plant Health Check</h3>
            <p>We assess your plant's overall health and address any issues during repotting.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="Benefits-Repotting">Benefits of Professional Repotting</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>90%</h3>
            <p>Improved Plant Growth</p>
          </div>
          <div className="benefit-item">
            <h3>2x</h3>
            <p>Longer Plant Lifespan</p>
          </div>
          <div className="benefit-item">
            <h3>50%</h3>
            <p>Reduced Plant Stress</p>
          </div>
          <div className="benefit-item">
            <h3>100%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2 className="Repotting-process">Our Repotting Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-icon">
              <Ruler size={32} />
            </div>
            <h3>Assessment</h3>
            <p>We evaluate your plant's current condition and repotting needs.</p>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <Shovel size={32} />
            </div>
            <h3>Preparation</h3>
            <p>We prepare the new pot and custom soil mix for your plant.</p>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <Seedling size={32} />
            </div>
            <h3>Repotting</h3>
            <p>We carefully transfer your plant to its new home, ensuring minimal root disturbance.</p>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <Droplets size={32} />
            </div>
            <h3>Aftercare</h3>
            <p>We provide instructions for post-repotting care to ensure your plant thrives.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-sectionn">
        <div className="testimonial-content">
          <h2 className="Client-Content">What Our Clients Say</h2>
          <blockquote>
            "GreenBloom's repotting service breathed new life into my struggling monstera. Their expertise and care are
            unmatched!"
          </blockquote>
          <p className="testimonial-author">- Emily Chen, Plant Enthusiast</p>
        </div>
        <div className="testimonial-image">
          {/* <img src="/placeholder.svg?height=400&width=600" alt="Happy client with repotted plant" /> */}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <h2>Ready to Give Your Plants a New Home?</h2>
        <p>Schedule your professional repotting service today and watch your plants thrive!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Plant Type(s)" required />
          <textarea placeholder="Tell us about your plants and repotting needs" required></textarea>
          <button type="submit" className="submit-btn">
            Schedule Repotting <ChevronRight size={20} />
          </button>
        </form>
      </section>
    </div>
  )
}

export default PlantRepotting

