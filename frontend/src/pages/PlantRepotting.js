import React from 'react';
import './PlantRepotting.css';

function PlantRepotting() {
  return (
    <div className="plant-repotting-container">
      {/* Header Section */}
      <section className="repotting-header">
        <h1 className="header-title">Plant Repotting Guide</h1>
        <p className="header-description">
          Learn how to properly repot your plants to ensure healthy growth and a thriving garden. Follow these expert tips to make repotting easy and stress-free.
        </p>
      </section>

      {/* When to Repot */}
      <section className="repotting-tips-section">
        <h2 className="section-title">When Should You Repot?</h2>
        <div className="repotting-tips-cards">
          <div className="repotting-tip-card">
            <h3>Signs of Root-Bound Plants</h3>
            <p>If you notice roots growing through the drainage holes or circling around the edge of the pot, it’s time to repot your plant.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Soil Degradation</h3>
            <p>If the soil has broken down or is compacted, it can affect water drainage and nutrient absorption. Repotting helps refresh the soil mix.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Growth Stagnation</h3>
            <p>If your plant’s growth has slowed or it seems "stuck" in the same size pot, it may need more room to grow and expand its roots.</p>
          </div>
        </div>
      </section>

      {/* Choosing the Right Pot */}
      <section className="repotting-tips-section">
        <h2 className="section-title">Choosing the Right Pot</h2>
        <div className="repotting-tips-cards">
          <div className="repotting-tip-card">
            <h3>Pot Size Matters</h3>
            <p>Choose a pot that is 1-2 inches larger than your plant’s current container. Going too large may cause water retention issues.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Material Matters</h3>
            <p>Terracotta pots are great for plants that like to dry out between waterings, while plastic pots retain moisture longer for plants that need consistent hydration.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Drainage Holes</h3>
            <p>Make sure the new pot has drainage holes to prevent water from sitting at the bottom of the pot, which can cause root rot.</p>
          </div>
        </div>
      </section>

      {/* Repotting Process */}
      <section className="repotting-tips-section">
        <h2 className="section-title">How to Repot Your Plant</h2>
        <div className="repotting-tips-cards">
          <div className="repotting-tip-card">
            <h3>Prepare the New Pot</h3>
            <p>Place a layer of rocks or a coffee filter at the bottom of the new pot to help with drainage, ensuring water can flow freely.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Remove the Plant</h3>
            <p>Gently loosen the plant from its current pot by tapping the sides. If it’s stuck, use a butter knife to carefully loosen the edges.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Loosen the Roots</h3>
            <p>Once removed, gently separate the roots if they’re tangled or circling the root ball. Trim any dead or damaged roots to promote healthy growth.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Add Fresh Soil</h3>
            <p>Fill the new pot with fresh soil until it’s about 1/3 full. Place the plant in the pot, then fill in around the sides with more soil, gently pressing to remove air pockets.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Water the Plant</h3>
            <p>Water your newly potted plant thoroughly, ensuring the soil is evenly moist. This helps the plant settle into its new home.</p>
          </div>
        </div>
      </section>

      {/* Aftercare Tips */}
      <section className="repotting-tips-section">
        <h2 className="section-title">Aftercare After Repotting</h2>
        <div className="repotting-tips-cards">
          <div className="repotting-tip-card">
            <h3>Provide Shade</h3>
            <p>Keep your plant in a shaded area for the first few days after repotting. This helps reduce stress and gives the roots time to adjust.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Avoid Fertilizing Immediately</h3>
            <p>Don’t fertilize your plant right after repotting. Wait about a month before adding any fertilizer to avoid shocking the plant.</p>
          </div>
          <div className="repotting-tip-card">
            <h3>Monitor for Stress</h3>
            <p>Check your plant regularly for signs of stress, like wilting or yellowing leaves. Don’t panic; it’s normal for a plant to experience some shock after repotting.</p>
          </div>
        </div>
      </section>

      {/* Repotting Myths */}
      <section className="repotting-myths-section">
        <h2 className="section-title">Common Repotting Myths</h2>
        <div className="repotting-myths-cards">
          <div className="myth-card">
            <h3>Myth 1: You Should Repot Every Year</h3>
            <p>Repotting every year is unnecessary unless the plant is showing signs of being root-bound. Many plants thrive for several years in the same pot.</p>
          </div>
          <div className="myth-card">
            <h3>Myth 2: The Bigger the Pot, the Better</h3>
            <p>A pot that’s too large can cause problems with water retention and root rot. Stick to a pot just a few inches larger than the current one.</p>
          </div>
          <div className="myth-card">
            <h3>Myth 3: It’s Always Best to Use the Same Soil</h3>
            <p>Old soil can be compacted and depleted of nutrients. Always use fresh, well-draining soil when repotting your plant for the best results.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="repotting-cta-section">
        <h2 className="cta-title">Need Repotting Help?</h2>
        <p className="cta-description">Still unsure about how to repot your plant? Our experts are here to guide you through the process. Get in touch today!</p>
        <a href="/contact" className="cta-button">Contact Our Experts</a>
      </section>
    </div>
  );
}

export default PlantRepotting;
