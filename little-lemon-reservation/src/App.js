import React, { useReducer } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
import { Routes, Route } from 'react-router-dom';

// Import the functions from your new utils.js file
import { initializeTimes, updateTimes } from './utils.js';


function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/reservations"
            element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// We also moved the export statements for the functions
// export { initializeTimes, updateTimes }; // This is no longer needed here