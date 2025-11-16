import React from 'react';
import BookingForm from './BookingForm'; 

function BookingPage() {
  return (
    //  <-- Check this line -->
    <div className="booking-page">
      <h2>Book a Table</h2>
      <BookingForm />
    </div>
  );
}

export default BookingPage;