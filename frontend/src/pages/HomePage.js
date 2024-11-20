import React, { useState, useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './HomePage.css'; 
// import video from "../video/3934890-hd_1906_1080_30fps"
function HomePage() {
  const [testimonials] = useState([
    {
      text: "I've never seen my plants thrive like this! The tips from GreenBloom were invaluable.",
      author: "Alice Green"
    },
    {
      text: "السقي المناسب والتسميد جعل نباتاتي تنمو بشكل رائع! شكرًا على النصائح.",
      author: "علي الورد"
    },
    {
      text: "The variety of plants available is fantastic, and I appreciate the detailed care guides.",
      author: "John Doe"
    },
    {
      text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      author: "Dr. Suess"
    }
  ]);

  const featuredPlants = [
    {
      image: "https://example.com/path/to/plant1.jpg", // Replace with actual plant images
      title: "Fiddle Leaf Fig",
      description: "A beautiful indoor plant that can grow quite large with proper care.",
    },
    {
      image: "https://example.com/path/to/plant2.jpg",
      title: "Snake Plant",
      description: "An easy-to-care-for plant that thrives on neglect.",
    },
    {
      image: "https://example.com/path/to/plant3.jpg",
      title: "Pothos",
      description: "A versatile plant that can be placed in low light and is great for beginners.",
    },
    {
      image: "https://example.com/path/to/plant4.jpg",
      title: "Spider Plant",
      description: "Known for its air-purifying qualities and beautiful arching leaves.",
    },
    {
      image: "https://example.com/path/to/plant5.jpg",
      title: "Peace Lily",
      description: "A popular houseplant that flowers indoors and is easy to care for.",
    },
  ];

  useEffect(() => {
    new Splide('.splide', {
      type: 'slide',
      perPage: 3,
      pagination: false,
      autoplay: true,
      pauseOnHover: true,
    }).mount();
  }, []);

  return (
    <div className="background-container">
      {/* <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="main-page-container">
        <section className="welcome-section">
          <h1>Welcome to GreenBloom!</h1>
          <p>Your go-to place for plant care tips, products, and inspiration.</p>
        </section>

        <section className="featured-plants-section">
          <h2>Featured Plants</h2>
          <hr />
          <div className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                {featuredPlants.map((plant, index) => (
                  <li className="splide__slide" key={index}>
                    <div className="featured-plant">
                      <img src={plant.image} alt={plant.title} />
                      <h3>{plant.title}</h3>
                      <p>{plant.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <h2>Explore by Category</h2>
          <div className="category-links">
            <a href="/plant-care" className="button-55">Plant Care</a>
            <a href="/gardening" className="button-55">Gardening Tips</a>
            <a href="/shop" className="button-55">Shop Plants</a>
          </div>
        </section>

        <hr />
        <section className="map-section">
          <h2>Our Locations</h2>
          <div className="map-container">
            <iframe
              title="Map of GreenBloom Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102156.61610166756!2d8.498572811839378!3d36.17076587811491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f4c26324f72b0f%3A0xf2e67e2d2c4eeab7!2sEl%20Kef%20Governorate!5e0!3m2!1sen!2stn!4v1643560882387!5m2!1sen!2stn"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
        <hr />
        <section className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <hr />
          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <p>"{testimonial.text}"</p>
                <p>- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2 className='b'>Ready to Get Growing?</h2>
          <p>Join our community for expert advice and exclusive offers!</p>
          <a href="/signup" className="button-80">Sign Up Now</a>
        </section>

        <footer className="footer">
          <div className="footer-info">
            <h3>Contact Us</h3>
            <p><img className='tt' src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" alt="" />: info@greenbloom.com</p>
            <p><img className='tt' src="https://cdn-icons-png.flaticon.com/128/3059/3059561.png" alt="" />: +123 456 7890</p>
          </div>
          <div className="social-links">
            <h3>Connect With Us</h3>
            <a className='Mybutton' href="https://www.facebook.com/greenbloom" target="_blank" rel="noopener noreferrer"><img className='tt' src="https://cdn-icons-png.flaticon.com/128/20/20673.png" alt="" /></a>
            <a className='Mybutton' href="https://twitter.com/greenbloom" target="_blank" rel="noopener noreferrer"><img className='tt' src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="" /></a>
            <a className='Mybutton' href="https://www.instagram.com/greenbloom" target="_blank" rel="noopener noreferrer"><img className='tt' src="https://cdn-icons-png.flaticon.com/128/3670/3670274.png" alt="" /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
