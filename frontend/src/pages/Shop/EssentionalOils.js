import React, { useState, useEffect } from "react"
import axios from "axios"
import "./essentional-oils.css"
import { useCart } from "./CartContext"
import { Search, ShoppingCart, X } from "lucide-react"

function EssentialOils() {
  const { addToCart } = useCart()
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [alert, setAlert] = useState({ show: false, message: "" })
  const [selectedOil, setSelectedOil] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:3000/essentional-oils")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleAddToCart = (oil) => {
    addToCart(oil)
    setAlert({ show: true, message: `${oil.name} added to cart successfully!` })
    setTimeout(() => setAlert({ show: false, message: "" }), 3000)
  }

  const openModal = (oil) => {
    setSelectedOil(oil)
  }

  const closeModal = () => {
    setSelectedOil(null)
  }

  const filteredData = data.filter((oil) => oil.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="essential-oils">
      <header className="essential-oils-header">
        <h1>Essential Oils Collection</h1>
        <p>Discover the power of nature with our premium essential oils</p>
      </header>

      <section className="essential-oils-info">
        <h2>Why Choose Our Essential Oils?</h2>
        <ul>
          <li>100% pure and natural</li>
          <li>Ethically sourced from around the world</li>
          <li>Rigorously tested for quality and purity</li>
          <li>Suitable for aromatherapy, skincare, and home use</li>
        </ul>
      </section>

      <div className="container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search by essential oil name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="search-icon" />
        </div>

        {alert.show && <div className="alert">{alert.message}</div>}

        <div className="products-grid">
          {filteredData.length === 0 ? (
            <p className="no-results">No results found.</p>
          ) : (
            filteredData.map((oil) => (
              <div key={oil.id} className="product-card">
                <div className="card">
                  <img src={oil.imageUrl || "/placeholder.svg"} className="card-img" alt={oil.name} />
                  <div className="card-body">
                    <h3 className="card-title">{oil.name}</h3>
                    <p className="card-description">{oil.description || "No description available."}</p>
                    <div className="card-footer">
                      <span className="price-tag">${oil.price ? Number.parseFloat(oil.price).toFixed(2) : "N/A"}</span>
                      <button onClick={() => handleAddToCart(oil)} className="add-to-cart-btn">
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                    </div>
                    <button onClick={() => openModal(oil)} className="read-more-btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedOil && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-contentt" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>
            <h2>{selectedOil.name}</h2>
            <img src={selectedOil.imageUrl || "/placeholder.svg"} alt={selectedOil.name} className="modal-img" />
            <p className="modal-description">{selectedOil.description || "No description available."}</p>
            <p className="modal-price">
              Price: ${selectedOil.price ? Number.parseFloat(selectedOil.price).toFixed(2) : "N/A"}
            </p>
            {/* <p className="modal-origin">Origin: {selectedOil.origin || "Unknown"}</p> */}
            <p className="modal-uses">Uses: {selectedOil.uses || "Various aromatherapy and wellness applications"}</p>
            <button onClick={() => handleAddToCart(selectedOil)} className="add-to-cart-btn modal-add-to-cart">
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EssentialOils

