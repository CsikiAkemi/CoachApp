import React, { useState } from 'react';
import './LifeCoaching.css';
import ginko from '../../assets/ginko.png';

const LifeCoaching = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="title-bar">
        <div className="title-text">
          <h1>LIFE COACHING</h1>
          <h2><em>SZEMÉLYRE SZABOTT TÁMOGATÁS AZ ÖNFEJLESZTÉSHEZ ÉS A CÉLOK ELÉRÉSÉHEZ</em></h2>
        </div>
        <button className="cta-button">Bejelentkezés</button>
      </div>

      <div className="container">
        <div className="content-columns">
          <div className="column">
            <p>
              A life coaching egy strukturált és célorientált folyamat, amely támogatást nyújt azok számára, akik szeretnének tudatosabb döntéseket hozni, hatékonyabban kezelni a kihívásokat és irányítani az életüket, fejleszteni önismeretüket.

            </p>
            <p>
              A folyamat során különböző eszközöket alkalmazok Önismereti és személyiségfejlesztési eszközöket, Stratégiai, célkitűzési technikákat, Döntéshozatali és stresszkezelési módszereket, amelyek elősegítik a kiegyensúlyozott és magabiztos      életvezetést.

            </p>
          
          </div>

          <div className="column">
              <p>
              A coaching eredményeként ügyfeleim képesek lesznek Magabiztosabbá válni döntéseikben és önérvényesítésükben, Hatékonyabban kezelni a változásokat és kihívásokat, Jobban összehangolni személyes és szakmai céljaikat, Tudatosabb, kiegyensúlyozottabb életet kialakítani.

            </p>
            <p>
             A life coaching nem tanácsadás vagy terápia, hanem egy interaktív és célirányos támogatási folyamat, amelynek középpontjában az Ön fejlődése és eredményei állnak.

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
                <h2 className="section-title">SPECIÁLIS SZOLGÁLTATÁSAINK</h2>
                <h3>Egészség és táplálkozás</h3>
                <p>
                  Integrált tanácsadás: A coaching, táplálkozási tanácsadás és mentális egészség támogatása együttesen hatékonyabb lehet, mint külön-külön.
                  Az integrált megközelítés segít átfogó támogatást nyújtani életmódja javításában, ami elősegíti a hosszú távú eredményeket.
                </p>

                <h3>Alkotóművészek speciális coachingja</h3>
                <p>
                  Az alkotói blokk, az inspirációhiány és a bizonytalan megélhetés sok művészt érint.
                  A coaching folyamatban fókuszba kerül a belső motiváció, a kreatív folyamat fenntartása, valamint az önbizalom építése.
                  Személyre szabott eszközökkel segítünk megtalálni a saját hangját, miközben kezeljük a stresszt és a bizonytalanságot.
                  Így az alkotás valódi örömforrássá és sikeres karrieralappá válhat.
                </p>
              </div>

              <div className="column">
                <h2 className="section-title">ÁLTALÁNOS SZOLGÁLTATÁSAINK</h2>
                <h3>Párkapcsolat, család</h3>
                <p>
                  A kommunikációs nehézségek, a konfliktuskezelés és az érzelmi összhang megtartása a leggyakoribb kihívások között szerepelnek
                  a családi és párkapcsolati coachingban. Ebben a folyamatban a gyakorlati, hétköznapokban is könnyen alkalmazható módszerekkel dolgozunk,
                  melyeket az utóbbi hónapok legnépszerűbb pár- és családterapeutái is sikerrel alkalmaznak.
                  Az eredmény: harmonikusabb kapcsolatok, őszinte beszélgetések és hosszú távú együttműködés a család minden tagja között.
                </p>

                <h3>Egyéb életterületek</h3>
                <p>
                  Az élet számos olyan területet tartogat, ahol a coaching hatékony megoldást kínálhat: legyen szó önismeretről, célkitűzésről,
                  stresszkezelésről vagy épp személyes határok felállításáról.
                  A legújabb módszerek és nemzetközi tapasztalatok integrálásával személyre szabottan dolgozunk a fejlődésén, a konkrét kihívásokra fókuszálva.
                  Ezzel átfogó, gyakorlati útmutatót kap a tudatos és kiegyensúlyozott mindennapokhoz.
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
          Ha készen áll arra, hogy tudatosabban alakítsa életét és maximalizálja a lehetőségeit, várom a jelentkezését egy konzultációra.
        </p>
        <button className="cta-secondary">
          Tudomány a gyakorlatban – Life Coaching
        </button>
      </div>
    </>
  );
};

export default LifeCoaching;
