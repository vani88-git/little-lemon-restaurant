import React from 'react';
import restaurantImage from '../assets/restaurant.jpg'; // Adjust path if needed
import chefsImage from '../assets/chefs.jpg';           // Adjust path if needed

function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <div className="about-right">
        {/* Use <img> tags with your imported images */}
        <img 
          src={restaurantImage} 
          alt="Little Lemon restaurant interior" 
          className="about-image about-image-2" 
        />
        <img 
          src={chefsImage} 
          alt="Two Little Lemon chefs cooking" 
          className="about-image about-image-1" 
        />
      </div>
    </section>
  );
}

export default About;