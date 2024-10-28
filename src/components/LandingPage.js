// src/components/LandingPage.js
import React, { useState } from "react";
// import ImageCarousel from "./ImageCarousel"; // Import your new carousel component
import "./LandingPage.css";

const products = [
  {
    name: "Dress 1",
    price: 2000,
    image:
      "https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640_640.jpg",
  },
  {
    name: "Dress 2",
    price: 2500,
    image:
      "https://cdn.pixabay.com/photo/2021/09/15/11/34/woman-6626615_640.jpg",
  },
  {
    name: "Dress 3",
    price: 1500,
    image:
      "https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_640.jpg",
  },
  {
    name: "Dress 4",
    price: 1750,
    image:
      "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_640.jpg",
  },
  {
    name: "Dress 5",
    price: 1800,
    image:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Dress 6",
    price: 3000,
    image:
      "https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function LandingPage({ addToCart }) {
  const [message, setMessage] = useState(""); // State for the success message

  // Function to handle adding an item to the cart
  const handleAddToCart = (product) => {
    addToCart(product); // Call the passed addToCart function
    setMessage(`${product.name} added to your cart!`); // Set the success message

    // Clear the message after 2 seconds
    setTimeout(() => {
      setMessage(""); // Clear the message after 2 seconds
    }, 2000);
  };

  return (
    <div>
      <h1>Clothes</h1>
      {message && <div className="notification">{message}</div>}{" "}
      {/* Display success message */}
      {/* Render the ImageCarousel component */}
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
