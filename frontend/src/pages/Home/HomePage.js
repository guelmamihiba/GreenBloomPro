import React, { useState, useEffect } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './HomePage.css';
import { Share2, Leaf, Home, Briefcase, Flower, Sun, Wind, Droplets, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Github, Printer } from 'lucide-react';

function HomePage() {
  const [featuredPlants, setFeaturedPlants] = useState([]);

  const testimonials = [
    {
      text: "I've never seen my plants thrive like this! The tips from GreenBloom were invaluable.",
      author: "Alice Green"
    },
    {
      text: "The variety of plants available is fantastic, and I appreciate the detailed care guides.",
      author: "John Doe"
    },
    {
      text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      author: "Dr. Seuss"
    },
  ];

  useEffect(() => {
    const getFeaturedPlants = async () => {
      try {
        const response = await fetch('http://localhost:3000/featured-plants');
        const data = await response.json();
        setFeaturedPlants(data);
      } catch (error) {
        console.error('Error fetching featured plants:', error);
      }
    };

    getFeaturedPlants();
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'GreenBloom',
      text: 'Check out GreenBloom - Your ultimate destination for all things green!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('Shared successfully');
      } else {
        console.log('Web Share API not supported');
        // Fallback for browsers that don't support Web Share API
        alert('Share this page: ' + window.location.href);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to GreenBloom!</h1>
        <p>Welcome to your ultimate destination for all things green! Whether you're looking for expert plant care advice, premium products to nurture your plants, or a source of inspiration to create your own indoor oasis, we've got you covered.</p>
        <a href="/about" className="cta-button">Get to Know Us</a>
      </div>

      <section className="services-section">
        <div className="services-grid">
          {[
            { title: 'Home Consults', icon: Home, description: 'Transform your living space with our expert home plant consultations.' },
            { title: 'Business Consults', icon: Briefcase, description: 'Elevate your work environment with tailored plant solutions for businesses.' },
            { title: 'Plant Care Advice', icon: Flower, description: 'Get professional tips and tricks to keep your plants thriving.' },
            { title: 'Plant Repotting', icon: Leaf, description: 'Give your plants a new home with our repotting services.' },
          ].map((service, index) => (
            <div key={index} className="service-card">
              <service.icon className="service-icon" size={48} />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-plants-section">
        <h2>Featured Plants</h2>
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            pagination: false,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            breakpoints: {
              768: {
                perPage: 2,
              },
              576: {
                perPage: 1,
              },
            },
          }}
        >
          {featuredPlants.map((plant) => (
            <SplideSlide key={plant.id}>
              <div className="featured-plant">
                <img src={plant.imageUrl || "/placeholder.svg"} alt={plant.title} />
                <h3>{plant.title}</h3>
                <p>{plant.description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>

      <section className="plant-care-tips">
        <h2>Essential Plant Care Tips</h2>
        <div className="tips-container">
          <div className="tip">
            <Sun size={48} />
            <h3>Proper Lighting</h3>
            <p>Ensure your plants receive the right amount of light for optimal growth.</p>
          </div>
          <div className="tip">
            <Droplets size={48} />
            <h3>Watering Schedule</h3>
            <p>Learn the perfect watering routine for each of your plant varieties.</p>
          </div>
          <div className="tip">
            <Leaf size={48} />
            <h3>Nutrient Management</h3>
            <p>Discover the best fertilizers and feeding schedules for lush, healthy plants.</p>
          </div>
          <div className="tip">
            <Wind size={48} />
            <h3>Air Circulation</h3>
            <p>Improve plant health with proper ventilation and air movement.</p>
          </div>
        </div>
      </section>
      
      <section className="categories-section">
        <h2>Explore by Category</h2>
        <div className="category-links">
          <a href="/home-consults" className="category-button">Home Consults</a>
          <a href="/bussiness-consults" className="category-button">Bussiness Consults</a>
          <a href="/plant-care-advice" className="category-button">Plant Care Advice</a>
          <a href="plant-repotting" className="category-button">Plant Repotting</a>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.text}"</p>
              <p className="author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-sectionn">
        <h2 className='growin-statement'>Ready to Get Growing?</h2>
        <p className='join-statement'>Join our community for expert advice and exclusive offers!</p>
        <a href="/signup" className="Growin-button">Sign Up Now</a>
      </section>

      <footer className="footer">
        <div className="footer-social-banner">
          <span className="footer-social-text">Get connected with us on social networks:</span>
          <div className="footer-social-icons">
            <span aria-label="Facebook"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a></span>
            <span aria-label="Twitter"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a></span>
            <span aria-label="Instagram"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a></span>
            <span aria-label="LinkedIn"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a></span>
            <span aria-label="Github"><a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={20} /></a></span>
            <button onClick={handleShare} aria-label="Share" className="share-button">
              <Share2 size={24} />
            </button>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>GREENBLOOM</h3>
            <p>
              Here you can use rows and columns to organize your footer content. 
              Transform your space with our expert plant solutions and bring nature's 
              beauty into your life.
            </p>
          </div>

          <div className="footer-section">
            <h3>PRODUCTS</h3>
            <ul>
              <li><a href="/essentional-oils">Essential Oils</a></li>
              <li><a href="/botanical-art">Indoor Plants</a></li>
              <li><a href="/tools">Gardening Tools</a></li>
              <li><a href="/terrariums">Plant Pots</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><a href="/Profile">Your Account</a></li>
              <li><a href="/affiliate">Become an Affiliate</a></li>
              <li><a href="/shipping">Shipping Rates</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>CONTACT</h3>
            <div className="contact-info">
              <Home size={18} />
              <span>New York, NY 10012, US</span>
            </div>
            <div className="contact-info">
              <Mail size={18} />
              <span>info@greenbloom.com</span>
            </div>
            <div className="contact-info">
              <Phone size={18} />
              <span>+ 01 234 567 88</span>
            </div>
            <div className="contact-info">
              <Printer size={18} />
              <span>+ 01 234 567 89</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Copyright: GreenBloom.com</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

