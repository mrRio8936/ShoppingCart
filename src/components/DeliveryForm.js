import React, { useState } from "react";
import "./DeliveryForm.css";

function DeliveryForm({ cartItems }) {
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false); // State to track if the order is placed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement (you can add API call here if needed)
    setOrderPlaced(true);
    localStorage.setItem("deliveryForm", JSON.stringify(formData)); // Save form data if needed
  };

  return (
    <div className="delivery-form">
      <h1>Delivery Details</h1>
      {orderPlaced ? ( // Conditional rendering of success message
        <div className="success-message">
          <h2>Order placed successfully!</h2>
          <p>Your order has been received and will be processed shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-3d">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Place Order</button>
          </div>
        </form>
      )}
      <h2>Your Cart Items</h2>
      {cartItems.length > 0 ? (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default DeliveryForm;
