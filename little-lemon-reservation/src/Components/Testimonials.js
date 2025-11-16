import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {/* Card 1 */}
        <div className="testimonial-card">
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Jane Doe</h4>
          <p>“Amazing food and service!”</p>
        </div>

        {/* Card 2 (Added) */}
        <div className="testimonial-card">
          <p>⭐⭐⭐⭐</p>
          <h4>John Smith</h4>
          <p>“The Greek salad is a must-try.”</p>
        </div>

        {/* Card 3 (Added) */}
        <div className="testimonial-card">
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Alice Johnson</h4>
          <p>“Cozy atmosphere and great staff.”</p>
        </div>

        {/* Card 4 (Added) */}
        <div className="testimonial-card">
          <p>⭐⭐⭐⭐</p>
          <h4>Mike Brown</h4>
          <p>“Best bruschetta in Chicago!”</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;