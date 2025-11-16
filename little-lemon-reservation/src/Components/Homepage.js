import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

function Homepage() {
  return (
    // Use a "Fragment" <>...</> to group the sections
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;