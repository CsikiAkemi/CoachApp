import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Cards.css';

import lifeImg from '../../assets/ginko.png';
import businessImg from '../../assets/ginko2.png';
import groupImg from '../../assets/csopGinko.png';
import tapImg from '../../assets/tapGinko.png';






const services = [
  {
    title: 'LIFE COACHING',
    img: lifeImg,
    backText: 'A life coaching egy strukturált és célorientált folyamat, amely támogatást nyújt azok számára, akik szeretnének tudatosabb döntéseket hozni, hatékonyabban kezelni a kihívásokat és irányítani az életüket, fejleszteni önismeretüket.',

  },
  {
    title: 'BUSINESS COACHING',
    img: businessImg,
    backText: 'A business coaching célja, hogy vállalkozók és vezetők számára személyre szabott támogatást nyújtson üzleti céljaik elérésében és a kihívások leküzdésében. Akár egyéni vállalkozóként, akár egy nagyobb cég vezetőjeként dolgozol, a coaching segít tisztábban látni a lehetőségeidet, megerősíteni vezetői készségeidet és hatékonyabb döntéseket hozni.'
  },
  {
    title: 'CSOPORTOS COACHING',
    img: groupImg,
    backText: 'A csoportos coaching olyan fejlesztési folyamat, melyben hasonló célokkal rendelkező egyének közösen dolgoznak személyes és szakmai kihívásaik megoldásán. '
  },
  {
    title: 'TÁPLÁLKOZÁSI TANÁCSADÁS',
    img: tapImg,
    backText: 'Táplálkozási tanácsadás a szolgáltatásunk az egészséges, tudatos étkezés és életmód eléréséhez átfogó, tudományos alapokon nyugvó, személyre szabott megoldásokat kínál, melyek segítenek javítani az ön vitalitását, energiaszintjét és általános jólétét.'
  }
];



const Cards = () => {
  const [flips, setFlips] = useState(Array(services.length).fill(false));

  const handleFlip = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };

  return (
    <>
    <div className="title-bar">
        <div className="title-text">
          <h1>SZOLGÁLTATÁSOK</h1>
        
        </div>
      </div>
    
    <div className="cards-container">
    
      <div className="cards-grid">
        {services.map((service, index) => (
          <ReactCardFlip isFlipped={flips[index]} flipDirection="vertical" key={index}>
            <div className="card" onClick={() => handleFlip(index)}>
              <img src={service.img} alt={service.title} className="card-img" />
              <h2>{service.title}</h2>
            </div>

            <div className="card card-back" onClick={() => handleFlip(index)}>
              <p>{service.backText}</p>
              <button className="flip-btn">Tovább olvasok</button>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </div>
    </>
  );
};

export default Cards;
