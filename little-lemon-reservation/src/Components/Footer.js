import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      {/* <-- Wrapper added to center content --> */}
      <div className="footer-content">
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul>
            {/* <-- Changed these to <a> links --> */}
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
      </div> {/* <-- Wrapper closed --> */}
    </footer>
  );
}

export default Footer;