import React from 'react';
import '../layout.css';
import logoImage from '../assets/Logo.svg';

// 1. Import the Link component
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-title">
          <Link to="/" aria-label="Navigate to Little Lemon homepage">
          <img src={logoImage} alt="Little Lemon logo" className="logo" />
          </Link>
          {/* <h1>Little Lemon</h1> */}
        </div>
        <nav className="nav">
          <ul>
            {/* 2. Change <a> tags to <Link> tags */}
            {/* "href" becomes "to" */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;