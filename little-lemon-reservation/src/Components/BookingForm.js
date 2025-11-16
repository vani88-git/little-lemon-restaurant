import React, { useState } from 'react';

// Step 1: Accept props from BookingPage
function BookingForm({ availableTimes, dispatch }) {
  // State for form fields (except times) remains here
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Step 1: Remove the old availableTimes state
  // const [availableTimes, setAvailableTimes] = useState([...]); // <-- This is GONE

  // Step 2: Create a change handler for the date
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);    // Update the local date state
    dispatch(selectedDate); // Dispatch the selected date (the 'action')
  };

  return (
    <form className="booking-form">
      
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        // Step 2: Use the new handler
        onChange={handleDateChange} 
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="" disabled>Select a Time</option>
        
        {/* Step 1: Use availableTimes from props */}
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;