import React, { useState } from 'react';
import data from '../../data/prices.json';
import './Price.css';

const PriceSection = ({ title, table }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="price-section">
      <button className="toggle-button" onClick={() => setOpen(!open)}>
        {open ? '−' : '+'} {title}
      </button>
      {open && (
        <div className="price-cards">
          {table.map((row, idx) => (
            <div className="price-card" key={idx}>
              <h3>{row.name}</h3>
              {row.duration && <p><strong>Időtartam:</strong> {row.duration}</p>}
              {row.price && <p><strong>Ár:</strong> {row.price}</p>}
              {row.description && <p><strong>Leírás:</strong> {row.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Price = () => {
  return (
    <>
      <div className="price-header">
        <div className="header-content">
          <h1>ÁRAINK</h1>
          <h2><em>Személyre szabott coaching és tanácsadás</em></h2>
        </div>
        <button className="cta-button">Bejelentkezés</button>
      </div>

      <div className="price-wrapper">
        {Object.entries(data).map(([sectionTitle, rows]) => (
          <PriceSection key={sectionTitle} title={sectionTitle} table={rows} />
        ))}
      </div>
    </>
  );
};

export default Price;
