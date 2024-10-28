import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import DeliveryForm from "./components/DeliveryForm";
import "./styles.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize state with local storage data if it exists
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.name === product.name
    );
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1; // Increase quantity
      setCartItems(updatedItems);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <div className="app-container">
        {" "}
        {/* Add a wrapper for flex layout */}
        <NavBar />
        <div className="main-content">
          {" "}
          {/* This will take the main content */}
          <Routes>
            <Route path="/" element={<LandingPage addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/delivery"
              element={<DeliveryForm cartItems={cartItems} />}
            />
          </Routes>
        </div>
        <Footer /> {/* Add footer here */}
      </div>
    </Router>
  );
}

export default App;
