import React from 'react';
import heroImage from '../assets/appetizers.jpg'; // Confirm this path

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="hero-button">Reserve a Table</button>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Appetizers" />
      </div>
    </section>
  );
}

export default Hero;