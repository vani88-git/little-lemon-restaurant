import React from 'react';
import BookingForm from './BookingForm'; 

// Step 3: Accept submitForm as a prop
function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <h2>Book a Table</h2>
      
      {/* Step 3: Pass the prop down */}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;