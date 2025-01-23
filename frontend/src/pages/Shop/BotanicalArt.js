import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BotanicalArt.css";
import { useCart } from "./CartContext";
import { Search, ShoppingCart, X } from "lucide-react";

function BotanicalArt() {
  const { addToCart } = useCart();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "" });
  const [selectedArt, setSelectedArt] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/botanical_art") // Update the endpoint to the correct one
      .then((res) => {
        console.log("API Response:", res.data);
        // Exclude items with undefined or empty 'name', 'imageUrl', or 'price'
        const filteredData = res.data.filter(
          (art) => art.name && art.imageUrl && art.price
        );
        setData(filteredData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleAddToCart = (art) => {
    addToCart(art);
    setAlert({ show: true, message: `${art.name} added to cart successfully!` });
    setTimeout(() => setAlert({ show: false, message: "" }), 3000);
  };

  const openModal = (art) => {
    setSelectedArt(art);
  };

  const closeModal = () => {
    setSelectedArt(null);
  };

  // Filter data based on search term
  const filteredData = data.filter((art) =>
    (art.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="botanical-art">
      <header className="botanical-art-header">
        <h1>Botanical Art Collection</h1>
        <p>Discover the beauty of nature with our premium botanical art collection</p>
      </header>

      <section className="botanical-art-info">
        <h2>Why Choose Our Botanical Art?</h2>
        <ul>
          <li>Unique and exquisite designs</li>
          <li>Ethically sourced materials</li>
          <li>High-quality craftsmanship</li>
          <li>Perfect for home or office decor</li>
        </ul>
      </section>

      <div className="botanical-art-container">
        <div className="botanical-art-search-container">
          <input
            className="botanical-art-search-input"
            type="text"
            placeholder="Search by botanical art name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="botanical-art-search-icon" />
        </div>

        {alert.show && <div className="botanical-art-alert">{alert.message}</div>}

        <div className="botanical-art-grid">
          {filteredData.length === 0 ? (
            <p className="botanical-art-no-results">No results found.</p>
          ) : (
            filteredData.map((art) => (
              <div key={art.id} className="botanical-art-card">
                <div className="botanical-art-item">
                  <img
                    src={art.imageUrl}
                    className="botanical-art-image"
                    alt={art.name}
                  />
                  <div className="botanical-art-details">
                    <h3 className="botanical-art-title">{art.name}</h3>
                    {art.description && (
                      <p className="botanical-art-description">
                        {art.description}
                      </p>
                    )}
                    <div className="botanical-art-footer">
                      <span className="botanical-art-price">
                        Price: ${Number.parseFloat(art.price).toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(art)}
                        className="botanical-art-add-to-cart"
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                    </div>
                    <button
                      onClick={() => openModal(art)}
                      className="botanical-art-read-more"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedArt && (
        <div className="botanical-art-modal-overlay" onClick={closeModal}>
          <div
            className="botanical-art-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="botanical-art-close-modal" onClick={closeModal}>
              <X size={24} />
            </button>
            <h2>{selectedArt.name}</h2>
            <img
              src={selectedArt.imageUrl}
              alt={selectedArt.name}
              className="botanical-art-modal-img"
            />
            <p className="botanical-art-modal-description">
              {selectedArt.description || "No description available."}
            </p>
            <p className="botanical-art-modal-price">
              Price: ${Number.parseFloat(selectedArt.price).toFixed(2)}
            </p>
            <button
              onClick={() => handleAddToCart(selectedArt)}
              className="botanical-art-add-to-cart botanical-art-modal-add-to-cart"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BotanicalArt;
