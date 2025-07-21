import React from 'react';
import './Header.css';
import wood from '../../assets/wood.jpg';
import ginko from '../../assets/ginko.png';

const Header = () => {
  return (
    <header className="flex-container">

      {/* Bal oldal: Üdvözlő szöveg és cselekvésre ösztönző gomb */}
      <div className="section">
        <div className="hero-text">
          <h1>Üdvözlünk a Coaching Világában!</h1>
          <p>
            Személyre szabott támogatás az egészséges életmód, a lelki egyensúly és a céljaid eléréséhez.
            Fedezd fel, hogyan segíthetünk neked a fejlődésben!
          </p>
          <button 
            className="cta-button"
            onClick={() => alert('Köszönjük az érdeklődést! Hamarosan felvesszük veled a kapcsolatot.')}
          >
            Tudj meg többet
          </button>
        </div>
      </div>

      {/* Ginko levél – a két rész között */}
      <div className="ginko-wrapper" aria-hidden="true">
        <img className="ginko" src={ginko} alt="Ginko levél" />
      </div>

      {/* Jobb oldal: Fa textúra háttér */}
      <div className="section2" style={{ backgroundImage: `url(${wood})` }} aria-label="Természetes fa textúra háttér"></div>

    </header>
  );
};

export default Header;
