import React from 'react';
import greekSalad from '../assets/greek-salad.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import bruschetta from '../assets/bruschetta.svg';

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="specials-grid">
        {/* Card 1 */}
        <article className="special-card">
          <img src={greekSalad} alt="Greek Salad" />
          <div className="special-card-content">
            {/* <-- Wrapper added for title/price --> */}
            <div className="special-card-header">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div> {/* <-- Wrapper closed --> */}
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <span className="delivery">Order a delivery 🚴</span>
          </div>
        </article>

        {/* Card 2 */}
        <article className="special-card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="special-card-content">
            {/* <-- Wrapper added for title/price --> */}
            <div className="special-card-header">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div> {/* <-- Wrapper closed --> */}
            <p>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
            </p>
            <span className="delivery">Order a delivery 🚴</span>
          </div>
        </article>

        {/* Card 3 */}
        <article className="special-card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="special-card-content">
            {/* <-- Wrapper added for title/price --> */}
            <div className="special-card-header">
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
            </div> {/* <-- Wrapper closed --> */}
            <p>
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <span className="delivery">Order a delivery 🚴</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;