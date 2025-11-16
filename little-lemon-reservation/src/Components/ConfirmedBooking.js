import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function ConfirmedBooking() {
  return (
    <section className="confirmation-page">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your reservation. We look forward to seeing you!</p>
      
      {/* Add a link to navigate back to the homepage */}
      <Link to="/" className="hero-button">
        Back to Home
      </Link>
    </section>
  );
}

export default ConfirmedBooking;