import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Specials from './Components/Specials';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;