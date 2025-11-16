import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservations" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;