import React, { useState } from 'react';
import { useCart } from './CartContext';
import './CartPgae.css'; 
import emailjs from 'emailjs-com';

const CartList = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { cart, removeFromCart, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedCartItems = cart
      .map((item, index) => `${index + 1}. ${item.name} - $${item.price} x ${item.quantity || 1}`)
      .join('\n');

    const totalPrice = cart.reduce((total, item) => {
      const price = Number(item.price) * (item.quantity || 1);
      return total + (isNaN(price) ? 0 : price);
    }, 0);

    const templateParams = {
      to_email: email, 
      from_name: name,
      address: address,
      description: description,
      cart_items: formattedCartItems, 
      total_price: `$${totalPrice.toFixed(2)}`, 
      subject: 'Order Confirmation from GreenBloom',
    };

    emailjs.send('service_t1extnz', 'template_qyiaayl', templateParams, '8Q5paEs6wJr2mJ-wQ')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSuccessMessage('Order submitted successfully! Check your email for confirmation.');
        clearCart();
        setName('');
        setAddress('');
        setEmail('');
        setDescription('');
      }, (error) => {
        console.error('Error sending email:', error);
        setSuccessMessage('Error submitting order. Please try again.');
      });
  };

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
    setSuccessMessage('Item removed from cart!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="cart__container">
      <h1 className="cart__header">Your Cart</h1>
      <div className="cart__content">
        <h2>Your Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart__item">
                <div>
                  <img src={item.imageUrl} alt={item.name} className="cart__image" />
                  <strong>{item.name}</strong>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  className="cart__button-remove"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="cart__total">
          <strong>Total: ${cart.reduce((total, item) => total + Number(item.price), 0).toFixed(2)}</strong>
        </div>
      </div>

      <form className="cart__form" onSubmit={handleSubmit}>
        <label className="cart__label">
          Name:
          <input
            className="cart__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Please enter your full name"
            required
          />
        </label>

        <label className="cart__label">
          Address:
          <input
            className="cart__input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Please enter your Address"
            required
          />
        </label>

        <label className="cart__label">
          Email:
          <input
            className="cart__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter your email"
            required
          />
        </label>

        <label className="cart__label">
          Description:
          <textarea
            className="cart__textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}

          />
        </label>

        <button className="cart__button" type="submit" disabled={cart.length === 0}>
          Submit Order
        </button>
      </form>

      {successMessage && <p className="cart__success-message">{successMessage}</p>}
    </div>
  );
};

export default CartList;
