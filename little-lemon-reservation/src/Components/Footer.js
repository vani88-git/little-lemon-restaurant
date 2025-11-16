import React from 'react';
import logoImage from '../assets/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* The logo is now a direct child */}
        <img 
          src={logoImage} 
          alt="Little Lemon logo" 
          className="footer-logo"
        />

        {/* The 3 columns are also direct children */}
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
        <div className="footer-column">
          <h4>Social Media</h4>
          <p>Links here</p>
        </div>
        {/* We removed the .footer-links wrapper */}

      </div>
    </footer>
  );
}

export default Footer;