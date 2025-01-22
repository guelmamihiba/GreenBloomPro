import React, { useState } from "react"
import { Sun, Droplets, Thermometer, Wind, Scissors, Bug, Leaf, Sprout } from "lucide-react"
import "./PlantCareAdvice.css"

const careCategories = [
  { icon: <Sun />, title: "Light", description: "Proper lighting is crucial for plant growth" },
  { icon: <Droplets />, title: "Watering", description: "Learn the right watering techniques" },
  { icon: <Thermometer />, title: "Temperature", description: "Maintain optimal temperature for your plants" },
  { icon: <Wind />, title: "Humidity", description: "Create the perfect humid environment" },
  { icon: <Scissors />, title: "Pruning", description: "Trim your plants for healthy growth" },
  { icon: <Bug />, title: "Pest Control", description: "Protect your plants from common pests" },
  { icon: <Leaf />, title: "Fertilizing", description: "Nourish your plants with proper nutrients" },
  { icon: <Sprout />, title: "Propagation", description: "Multiply your plant collection" },
]

const plantCareAdvice = {
  Light: [
    "Understand your plant's light requirements: low, medium, or high light.",
    "Rotate plants regularly to ensure even growth.",
    "Use sheer curtains to filter harsh direct sunlight.",
    "Consider artificial grow lights for low-light areas.",
  ],
  Watering: [
    "Water deeply but less frequently to encourage strong root growth.",
    "Check soil moisture before watering; most plants prefer slightly dry top soil.",
    "Use room temperature water to avoid shocking the plant's roots.",
    "Adjust watering frequency based on seasons and growth periods.",
  ],
  Temperature: [
    "Most houseplants thrive in temperatures between 60-75°F (15-24°C).",
    "Avoid placing plants near drafty windows or heating/cooling vents.",
    "Some plants may require cooler nights to encourage blooming.",
    "Maintain consistent temperatures; sudden changes can stress plants.",
  ],
  Humidity: [
    "Group plants together to create a microclimate with higher humidity.",
    "Use a pebble tray filled with water to increase humidity around the plant.",
    "Mist plants regularly, especially those that prefer high humidity.",
    "Consider using a humidifier in dry environments.",
  ],
  Pruning: [
    "Remove dead, damaged, or diseased leaves and stems promptly.",
    "Pinch back growing tips to encourage bushier growth.",
    "Use clean, sharp tools to make clean cuts and prevent disease spread.",
    "Prune during the plant's active growing season for best results.",
  ],
  "Pest Control": [
    "Regularly inspect plants for signs of pests or diseases.",
    "Isolate new plants for a few weeks before introducing them to others.",
    "Use neem oil or insecticidal soap for natural pest control.",
    "Maintain good air circulation to prevent fungal issues.",
  ],
  Fertilizing: [
    "Use a balanced, water-soluble fertilizer during the growing season.",
    "Reduce or stop fertilizing during winter months when growth slows.",
    "Don't over-fertilize; follow package instructions and err on the side of less.",
    "Flush the soil occasionally to prevent salt buildup from fertilizers.",
  ],
  Propagation: [
    "Choose healthy parent plants for successful propagation.",
    "Use clean, sharp tools to take cuttings or divide plants.",
    "Provide extra humidity for cuttings by covering them with clear plastic.",
    "Be patient; some plants take longer to root or establish than others.",
  ],
}

function PlantCareAdvice() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showTip, setShowTip] = useState(false)
  const [currentTip, setCurrentTip] = useState("")

  const selectCategory = (index) => {
    setSelectedCategory(index)
    setShowTip(false)
  }

  const getRandomTip = () => {
    if (selectedCategory !== null) {
      const tips = plantCareAdvice[careCategories[selectedCategory].title]
      const randomTip = tips[Math.floor(Math.random() * tips.length)]
      setCurrentTip(randomTip)
      setShowTip(true)
    }
  }

  return (
    <div className="plant-care-advice-container">
      <header className="plant-care-header">
        <h1>Plant Care Advice</h1>
        <p>Expert tips to help your plants thrive</p>
      </header>

      <section className="care-categories">
        {careCategories.map((category, index) => (
          <div
            key={index}
            className={`care-category ${selectedCategory === index ? "active" : ""}`}
            onClick={() => selectCategory(index)}
          >
            {category.icon}
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </section>

      {selectedCategory !== null && (
        <section className="care-details">
          <h2>{careCategories[selectedCategory].title} Care Tips</h2>
          <ul>
            {plantCareAdvice[careCategories[selectedCategory].title].map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="quick-tip-section">
        <h2>Need a Quick Tip?</h2>
        <p>Get a random care tip for your selected category!</p>
        <button className="quick-tip-btn" onClick={getRandomTip} disabled={selectedCategory === null}>
          Get Quick Tip
        </button>
        {showTip && (
          <div className="quick-tip">
            <p>{currentTip}</p>
          </div>
        )}
      </section>

      <section className="care-resources">
        <h2>Additional Plant Care Resources</h2>
        <ul>
          <li>
            <a href="/plant-encyclopedia">Plant Encyclopedia</a>
            <p>Detailed information on hundreds of plant species</p>
          </li>
          <li>
            <a href="/seasonal-care-guide">Seasonal Care Guide</a>
            <p>Adjust your plant care routine with the changing seasons</p>
          </li>
          <li>
            <a href="/troubleshooting">Plant Troubleshooting</a>
            <p>Identify and solve common plant problems</p>
          </li>
          <li>
            <a href="/video-tutorials">Video Tutorials</a>
            <p>Step-by-step visual guides for various plant care techniques</p>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default PlantCareAdvice

