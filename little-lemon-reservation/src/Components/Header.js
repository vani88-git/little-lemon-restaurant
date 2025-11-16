import React from 'react';
import '../layout.css';


import logoImage from '../assets/Logo.svg'; 

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-title">

          <img src={logoImage} alt="Little Lemon logo" className="logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Menu">Menu</a></li>
            <li><a href="Reservations">Reservations</a></li>
            <li><a href="Order Online">Order Online</a></li>
            <li><a href="Login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;