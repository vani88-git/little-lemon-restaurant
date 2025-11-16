import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // --- Step 1 (HTML5 Validation) ---
  // Get today's date in YYYY-MM-DD format for the 'min' attribute
  const today = new Date().toISOString().split('T')[0];

  // --- Step 2 (React Validation) ---
  // Create a function to check if the form is valid
  // It's valid if both 'date' and 'time' have been selected.
  const getIsFormValid = () => {
    return date && time; // Returns true if both have a value
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch(selectedDate); // Dispatch the date to update times
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required // --- Step 1 (HTML5 Validation) ---
        min={today}  // --- Step 1 (HTML5 Validation) ---
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required // --- Step 1 (HTML5 Validation) ---
      >
        <option value="" disabled>Select a Time</option>
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
        min="1"    // <-- This is also HTML5 validation!
        max="10"   // <-- This is also HTML5 validation!
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required // --- Step 1 (HTML5 Validation) ---
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required // --- Step 1 (HTML5 Validation) ---
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!getIsFormValid()}
        aria-label="On Click: Make Your reservation"
    />
    </form>
  );
}

export default BookingForm;