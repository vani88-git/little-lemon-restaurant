import React from 'react';
import BookingForm from './BookingForm'; 

// Step 1: Accept props from App.js
function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className="booking-page">
      <h2>Book a Table</h2>
      
      {/* Step 1: Pass the props down to BookingForm */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;