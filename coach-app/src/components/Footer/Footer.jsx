import React from 'react';
import './Footer.css';

import lifeImg from '../../assets/ginko.png';
import businessImg from '../../assets/ginko2.png';
import tapImg from '../../assets/tapGinko.png';
import groupImg from '../../assets/csopGinko.png';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

        <div className="footer-column">
          <img src={lifeImg} alt="Life Coaching" className="footer-leaf" />
          <h3>Life Coaching</h3>
          <p>Tel: +36 70 444 5577</p>
          <p>Email: info@coaching.hu</p>
        </div>

        <div className="footer-column">
          <img src={businessImg} alt="Business Coaching" className="footer-leaf" />
          <h3>Business Coaching</h3>
          <p>Tel: +36 70 444 5588</p>
          <p>Email: business@coaching.hu</p>
        </div>

        <div className="footer-column">
          <img src={tapImg} alt="Táplálkozás" className="footer-leaf" />
          <h3>Táplálkozási tanácsadás</h3>
          <p>Tel: +36 70 444 5599</p>
          <p>Email: taplalkozas@coaching.hu</p>
        </div>

        <div className="footer-column">
          <img src={groupImg} alt="Social" className="footer-leaf" />
          <h3>Kövess minket</h3>
          <p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">Instagram</a></p>
          <p><a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">Facebook</a></p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Coaching.hu – Minden jog fenntartva.</p>
      </div>
    </footer>
  );
};

export default Footer;
