import React from 'react';
import './PlantCareAdvice.css';

function PlantCareAdvice() {
  return (
    <div className="plant-care-advice-container">
      <section className="plant-care-advice-header">
        <h1 className="header-title">Plant Care Advice</h1>
        <p className="header-description">
          Learn expert tips to help your plants thrive. From watering to pest control, we have advice for every aspect of plant care.
        </p>
      </section>

      {/* Watering Tips */}
      <section className="plant-care-tips-section">
        <h2 className="section-title">Watering Your Plants</h2>
        <div className="care-tips-cards">
          <div className="care-tip-card">
            <h3>Watering Frequency</h3>
            <p>Most houseplants prefer to dry out slightly between waterings. Always check the soil moisture before watering to avoid overwatering.</p>
          </div>
          <div className="care-tip-card">
            <h3>Watering Technique</h3>
            <p>Water the base of the plant directly, not the leaves. Water until it runs out of the drainage holes to ensure even moisture distribution.</p>
          </div>
          <div className="care-tip-card">
            <h3>Time of Day</h3>
            <p>Watering in the morning is ideal, as it allows the plant to absorb water before the heat of the day, reducing the risk of root rot.</p>
          </div>
        </div>
      </section>

      {/* Lighting Tips */}
      <section className="plant-care-tips-section">
        <h2 className="section-title">Lighting Your Plants</h2>
        <div className="care-tips-cards">
          <div className="care-tip-card">
            <h3>Understanding Light Needs</h3>
            <p>Different plants need different amounts of light. Know your plant's light preference, whether it's full sun, partial sun, or low light.</p>
          </div>
          <div className="care-tip-card">
            <h3>Natural vs Artificial Light</h3>
            <p>If your plants aren’t getting enough natural light, consider supplementing with grow lights to ensure they thrive indoors.</p>
          </div>
          <div className="care-tip-card">
            <h3>Signs of Too Much or Too Little Light</h3>
            <p>Yellowing leaves may indicate too much direct sunlight, while stretched or leggy growth can mean your plant is not getting enough light.</p>
          </div>
        </div>
      </section>

      {/* Soil Tips */}
      <section className="plant-care-tips-section">
        <h2 className="section-title">Choosing and Maintaining Soil</h2>
        <div className="care-tips-cards">
          <div className="care-tip-card">
            <h3>Choosing the Right Soil</h3>
            <p>Different plants require different types of soil. For example, succulents prefer sandy, well-draining soil, while ferns need a more moisture-retentive mix.</p>
          </div>
          <div className="care-tip-card">
            <h3>Soil Drainage</h3>
            <p>Good drainage is essential. Make sure your pots have drainage holes to prevent water from sitting at the bottom, which can lead to root rot.</p>
          </div>
          <div className="care-tip-card">
            <h3>Repotting and Soil Refreshing</h3>
            <p>Repot your plants every 1-2 years to refresh the soil and give the roots more space to grow. Use fresh, nutrient-rich soil to boost your plant's health.</p>
          </div>
        </div>
      </section>

      {/* Fertilizing Tips */}
      <section className="plant-care-tips-section">
        <h2 className="section-title">Fertilizing Your Plants</h2>
        <div className="care-tips-cards">
          <div className="care-tip-card">
            <h3>When to Fertilize</h3>
            <p>Most plants need fertilizing during their growing season (spring and summer). Avoid fertilizing during dormancy (fall and winter).</p>
          </div>
          <div className="care-tip-card">
            <h3>Type of Fertilizer</h3>
            <p>Choose a balanced, water-soluble fertilizer for most plants. You can also use organic fertilizers such as compost or worm castings for natural growth.</p>
          </div>
          <div className="care-tip-card">
            <h3>Overfertilizing</h3>
            <p>Too much fertilizer can burn your plants. Follow the recommended dosage, and don’t fertilize every time you water.</p>
          </div>
        </div>
      </section>

      {/* Pests & Diseases Tips */}
      <section className="plant-care-tips-section">
        <h2 className="section-title">Pests and Diseases</h2>
        <div className="care-tips-cards">
          <div className="care-tip-card">
            <h3>Common Pests</h3>
            <p>Spider mites, aphids, and mealybugs are common plant pests. Use insecticidal soap or neem oil to treat infestations.</p>
          </div>
          <div className="care-tip-card">
            <h3>Signs of Pest Infestation</h3>
            <p>Look out for yellowing leaves, sticky residue, or webbing. Early intervention is key to preventing pest damage.</p>
          </div>
          <div className="care-tip-card">
            <h3>Dealing with Fungal Diseases</h3>
            <p>Fungal infections like powdery mildew can spread quickly. Remove infected leaves, ensure good airflow, and treat with fungicides if necessary.</p>
          </div>
        </div>
      </section>

      {/* Repotting Tips */}
      <section className="plant-care-tips-section">
        <h2 className="section-title">Repotting Your Plants</h2>
        <div className="care-tips-cards">
          <div className="care-tip-card">
            <h3>When to Repot</h3>
            <p>If your plant has outgrown its pot, is root-bound, or if the soil is no longer draining well, it's time to repot your plant into a larger container.</p>
          </div>
          <div className="care-tip-card">
            <h3>Repotting Process</h3>
            <p>When repotting, choose a pot that's 1-2 inches larger than the current one. Gently remove the plant from the old pot, loosen the roots, and place it in fresh soil.</p>
          </div>
          <div className="care-tip-card">
            <h3>Post-Repotting Care</h3>
            <p>Water your plant thoroughly after repotting and place it in a shaded area for a few days to reduce transplant shock.</p>
          </div>
        </div>
      </section>

      {/* General Maintenance Tips */}
      <section className="plant-care-tips-section">
        <h2 className="section-title">General Plant Care</h2>
        <div className="care-tips-cards">
          <div className="care-tip-card">
            <h3>Pruning Your Plants</h3>
            <p>Pruning helps keep your plants healthy and promotes new growth. Trim away dead or yellowing leaves to encourage vigor.</p>
          </div>
          <div className="care-tip-card">
            <h3>Cleaning Your Plants</h3>
            <p>Dust can block sunlight and reduce photosynthesis. Gently wipe leaves with a damp cloth or rinse off dust with water.</p>
          </div>
          <div className="care-tip-card">
            <h3>Monitoring Temperature</h3>
            <p>Keep plants in a stable environment. Avoid placing them near heat sources or drafts, as sudden temperature changes can stress them out.</p>
          </div>
        </div>
      </section>

      <section className="plant-care-cta-section">
        <h2 className="cta-title">Need More Help?</h2>
        <p className="cta-description">Our plant care experts are available for personalized advice. Contact us for one-on-one consultations.</p>
        <a href="/contact" className="cta-button">Contact an Expert</a>
      </section>
    </div>
  );
}

export default PlantCareAdvice;
