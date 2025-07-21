import './Contact.css';
import React from 'react';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Küldés folyamatban...");
    const formData = new FormData(event.target);
    formData.append("access_key", "be34feeb-e0e1-4584-aa7d-2e2301117d26");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sikeres elküldés!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Hiba történt, próbáld újra.");
    }
  };

  return (
  <>
    <div className="title-bar">
        <div className="title-text">
          <h1>BEJELENTKEZÉS</h1>
          
        </div>
        <button className="cta-button">Bejelentkezés</button>
      </div>
    <div className="form-section">
      

      <form onSubmit={onSubmit} className="form-wrapper">
        <div className="form-grid">
          <label>Név*</label>
          <input type="text" name="name" required />

          <label>E-mail cím*</label>
          <input type="email" name="email" required />

          <label>Telefonszám (opcionális)</label>
          <input type="tel" name="phone" />

          <label>Válasszon a legördülő menüből*</label>
          <select name="service" required>
            <option value="">Válasszon!</option>
            <option value="life">Life coaching</option>
            <option value="business">Business coaching</option>
            <option value="group">Csoportos coaching</option>
            <option value="nutrition">Táplálkozási tanácsadás</option>
          </select>

          <label>Megjegyzés</label>
          <textarea name="message" rows="4" />

          <label>Kérjük, fogadja el az adatvédelmi</label>
          <div className="checkboxes">
            <label>
              <input type="checkbox" name="aszf" required /> Általános szerződési feltételek*
            </label>
            <label>
              <input type="checkbox" name="adatkezeles" required /> Adatkezelés*
            </label>
            <label>
              <input type="checkbox" name="hirlevel" /> Hírlevél feliratkozás
            </label>
          </div>
        </div>

        <div className="form-submit">
          <button type="submit" className="submit-btn">Elküld</button>
          <span className="form-result">{result}</span>
        </div>
      </form>
    </div>

    </>
  );
}

export default Contact;
