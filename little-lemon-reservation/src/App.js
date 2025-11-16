import React, { useReducer } from 'react';
// Step 2: Import useNavigate
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
// Step 1: Import the new component
import ConfirmedBooking from './Components/ConfirmedBooking';

import { initializeTimes, updateTimes } from './utils.js';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  
  // Step 2: Get the navigate function
  const navigate = useNavigate();

  // Step 2: Create the submitForm function
  const submitForm = (formData) => {
    // Call the submitAPI function from the window
    const success = window.submitAPI(formData);
    
    // Navigate to the confirmation page if the submission is successful
    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/reservations"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm} // <-- Pass the new function as a prop
              />
            }
          />
          {/* Step 1: Add the new route */}
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;