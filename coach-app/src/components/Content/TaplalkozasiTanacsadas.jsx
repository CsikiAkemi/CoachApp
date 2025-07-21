import React, { useState } from 'react';
import './LifeCoaching.css';
import ginko from '../../assets/ginko.png';

const TaplalkozasiTancsadas = () => {
const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="title-bar">
        <div className="title-text">
          <h1>Táplálkozási tanácsadás </h1>
          <h2><em>Egészségmegőrzés  egyéni igényekre szabva</em></h2>
        </div>
        <button className="cta-button">Bejelentkezés</button>
      </div>

      <div className="container">
        <div className="content-columns">
          <div className="column">
            <p>
              Táplálkozási tanácsadás a szolgáltatásunk az egészséges, tudatos étkezés és életmód eléréséhez átfogó, tudományos alapokon nyugvó, személyre szabott megoldásokat kínál, melyek segítenek javítani az ön vitalitását, energiaszintjét és általános jólétét.
              Külön figyelmet fordítunk arra, hogy szolgáltatásaink integrálják az életmód coaching és a táplálkozási tanácsadás elemeit. Így nem csupán az étkezési szokások módosítását célozzuk, hanem a teljes életmódváltást is támogatjuk, beleértve a stresszkezelést, a relaxációs technikákat és a személyes célok kitűzését. 
              


            </p>
            <p>
                Ezen felül opcionális extra szolgáltatásaink, például a 24 órán belüli személyre szabott étrend elkészítése, a holisztikus szemléletű szomatikus coaching, lehetővé teszik, hogy a szolgáltatásaink minden aspektusa az igazodjon az egyéni igényekhez.
              Összességében célunk, hogy olyan átfogó és professzionális rendszert hozzunk létre, amely a legfrissebb tudományos eredményeket, modern technológiákat és személyre szabott támogatást ötvözi.

            </p>
           
          
          </div>

          <div className="column">
             
            <p>
            A táplálkozási tanácsadás során alkalmazott módszerek:
            Táplálkozási anamnézis felvétele
            Tápláltsági állapot felmérése
            Egyéni étrendtervezés: 
            Az ön energiaszükségletének és tápanyagigényének megfelelő étrend kialakítása.
            Életmódbeli tanácsadás: 
            Az egészséges életmódra vonatkozó gyakorlati tanácsok, praktikák megosztása. 
            A táplálkozási tanácsadás eredményeként ön képes lesz:
            Tudatosabb és egészségesebb táplálkozási szokásokat kialakítani.
            Megelőzni a táplálkozással összefüggő betegségek kialakulását.
            Javítani általános egészségi állapotukat és életminőségüket.
            A táplálkozási tanácsadás nem csupán az étrend megváltoztatására fókuszál, hanem az egészséges életmód átfogó megközelítésére

          
            </p>

            {/* Tovább olvasok gomb előtt */}
            {!expanded && (
              <div className="button-wrapper">
                <button className="read-more-button" onClick={() => setExpanded(true)}>
                  Tovább olvasok
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Elválasztó vonal és ginko levelek */}
        {expanded && (
          <>
            <hr className="elvalaszto" />
            <div className="ginko-wrapper">
       
            </div>

            <div className="two-columns">
              <div className="column">
                <h2 className="section-title">Speciális szolgáltatásaink</h2>
                <h3>Vegán/Vegetáriánus Életmód Tanácsadás</h3>
                <p>
                 Ezt a programot azok számára terveztük, akik szeretnék elsajátítani a növényi alapú étrend alapjait, megérteni annak egészségügyi előnyeit és fenntarthatósági aspektusait. A tanácsadás során személyre szabott útmutatást nyújtunk a tápanyagok megfelelő pótlásához, az étrend összeállításához és a mindennapi életbe történő integrálásához. 
                </p>

                <h3>Speciális Étrend Tanácsadás (Allergia/Intolerancia)</h3>
                <p>
                 Ez a program azoknak szól, akik ételallergiával vagy -intoleranciával küzdenek, és szeretnék étrendjüket biztonságosan és változatosan kialakítani. Segítünk az allergének azonosításában, és a megfelelő tápanyagbevitel biztosításában.
                </p>

                <h3>Családi Táplálkozási Tanácsadás</h3>
                <p>
                  Ez a program a családoknak nyújt támogatást az egészséges étkezési szokások kialakításában. Segítünk egészséges és ízletes ételeket készíteni, valamint a helyes étkezési szokások kialakításában, hogy a család minden tagja kiegyensúlyozott étrendet követhessen.
                </p>

              
              </div>

              <div className="column">
                <h2 className="section-title"></h2>
                <h3>Sportos Életmód Tanácsadás</h3>
                <p>
                 Ezt a programot azok számára alakítottuk ki, akik aktív életmódot folytatnak, vagy szeretnék azt elkezdeni. A tanácsadás során személyre szabott étrendet készítünk, figyelembe véve az egyéni célokat, fizikai állapotot és életmódot, hogy elősegítsük a teljesítmény növelését és az optimális egészséget.
                </p>

                <h3>Integrált, Holisztikus Tanácsadás</h3>
                <p>
                 Ez a program azoknak szól, akik átfogóan szeretnék javítani életminőségüket. A holisztikus megközelítés keretében figyelembe vesszük a táplálkozást, a mentális egészséget, a fizikai aktivitást és a lelki jólétet is. Személyre szabott tervet dolgozunk ki, amely támogatja a testi és lelki egyensúly elérését és fenntartását. 
                </p>

                 
              </div>
            </div>

            <div className="button-wrapper">
              <button className="less-button" onClick={() => setExpanded(false)}>
                Kevesebb
              </button>
            </div>
          </>
        )}

        <p className="closing-text">
       Szolgáltatásainkat  egészséges embereknek terveztük, betegséggel élők speciális diétájához, kérjük, forduljon Orvoshoz.
        </p>
        <button className="cta-secondary">
          Tudomány a gyakorlatban – Táplálkozási tudomány
        </button>
      </div>
    </>
  );
};

export default TaplalkozasiTancsadas;
