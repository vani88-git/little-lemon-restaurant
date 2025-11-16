import React from 'react';

// When you have real images, you will import them here
// import image1 from '../assets/about-image-1.jpg';
// import image2 from '../assets/about-image-2.jpg';

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
        {/* Placeholder divs to match the wireframe. */}
        <div className="about-image-placeholder about-image-1"></div>
        <div className="about-image-placeholder about-image-2"></div>

        {/* Once you have real images, replace the divs above with this:
          <img src={image1} alt="Restaurant interior" className="about-image-1" />
          <img src={image2} alt="Restaurant food" className="about-image-2" />
        */}
      </div>
    </section>
  );
}

export default About;