import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../Cards/Cards.css';

import lifeImg from '../../assets/ginko.png';
import businessImg from '../../assets/ginko2.png';







const services = [
  {
    title: 'Kovács Tünde',
    text:'Life coach, Táplálkozási tanácsadó',
    img: lifeImg,
    backText: 'Life coach, Táplálkozási tanácsadó',

  },
  {
    title: 'Tóth Attila',
    text:'Buisness coach',
    img: businessImg,
    backText: 'Buisness coach'
  },
  
];



const About = () => {
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
          <h1>Rólunk</h1>
        
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

export default About;
