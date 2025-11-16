import React from 'react';
import heroImage from '../assets/appetizers.jpg';
import { Link } from 'react-router-dom'; // <-- Import Link

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/reservations" className="hero-button" aria-label="On Click: Reserve a Table">
          Reserve a Table
        </Link>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Appetizers" />
      </div>
    </section>
  );
}

export default Hero;