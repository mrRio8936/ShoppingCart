import React, { useState } from "react";
import "./Cart.css"; // Make sure to import your CSS file

function Cart({ cartItems, setCartItems, removeFromCart, addToCart }) {
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleIncreaseQuantity = (item) => {
    // Increase quantity of the specific item
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    addToCart(updatedItem); // Call addToCart to update the quantity
  };

  const handleDecreaseQuantity = (index) => {
    if (cartItems[index].quantity > 1) {
      // Only decrease if quantity is greater than 1
      const updatedItems = [...cartItems];
      updatedItems[index].quantity -= 1; // Decrease the quantity
      setCartItems(updatedItems); // Update the cartItems state directly
    } else {
      // If quantity is 1, remove the item from the cart
      removeFromCart(index);
    }
  };

  const applyDiscount = () => {
    if (discountCode) {
      setDiscount(discountCode); // Set the corresponding discount
    } else {
      setDiscount(0); // No discount
    }
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total - (total * discount) / 100; // Apply discount to total
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span className="item-details">
                {item.name} - ₹{item.price} (Qty: {item.quantity})
              </span>
              <button
                className="increase-button"
                onClick={() => handleIncreaseQuantity(item)}
              >
                +
              </button>
              <button
                className="decrease-button"
                onClick={() => handleDecreaseQuantity(index)}
              >
                -
              </button>
              <button
                className="remove-button"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="discount-section">
        <label>
          Discount Code:
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            onBlur={applyDiscount}
          />
        </label>
        <p>Discount Applied: {discount}%</p>
        <h2>Total: ₹{calculateTotal().toFixed(2)}</h2>
      </div>
      <button
        className="proceed-button"
        onClick={() => (window.location.href = "/delivery")}
        disabled={cartItems.length === 0} // Disable if cart is empty
      >
        Proceed to Delivery
      </button>
    </div>
  );
}

export default Cart;
