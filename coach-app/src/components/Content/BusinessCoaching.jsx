import React, { useState } from 'react';
import './LifeCoaching.css';
import ginko from '../../assets/ginko.png';

const BusinessCoaching = () => {
const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="title-bar">
        <div className="title-text">
          <h1>Buisness Coaching </h1>
          <h2><em>Személyre szabott támogatás vállalkozóknak és vezetőknek</em></h2>
        </div>
        <button className="cta-button">Bejelentkezés</button>
      </div>

      <div className="container">
        <div className="content-columns">
          <div className="column">
            <p>
              A business coaching célja, hogy vállalkozók és vezetők számára személyre szabott támogatást nyújtson üzleti céljaik elérésében és a kihívások leküzdésében. Akár egyéni vállalkozóként, akár egy nagyobb cég vezetőjeként dolgozol, a coaching segít tisztábban látni a lehetőségeidet, megerősíteni vezetői készségeidet és hatékonyabb döntéseket hozni.

            </p>
            <p>
             A folyamat során közösen azonosítjuk a vállalkozása erősségeit és fejlesztési területeit, valamint támogatom a stratégiai döntéshozatalban. 

            </p>
          
          </div>

          <div className="column">
              <p>
             Az általam alkalmazott módszerek között szerepelnek személyiség-elemzések, például a DISC személyiség-tipológia, valamint a célorientált tervezés és a megoldásközpontú megközelítés.


            </p>
            <p>
            A coaching eredményeként nemcsak jobban megérti saját motivációit, hanem növelei önbizalmát és hatékonyabban kezeli üzleti élete különböző területeit.


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
                <h3>Munka és magánélet egyensúly</h3>
                <p>
                  Ebben a coachingban a tudatos időgazdálkodás, a határok kijelölése és a személyes célok harmonizálása kerül középpontba. Megtanuljuk, hogyan lehet megőrizni a mentális egészséget a munkaterhek mellett, és hogyan teremtsünk időt a feltöltődésre. A coaching folyamat segít abban, hogy valódi egyensúlyt alakítson ki a mindennapokban.
                </p>

                <h3>Hatékonyság növelés</h3>
                <p>
                  A hatékonyság növelése ma már nemcsak a feladatok gyorsabb elvégzéséről szól, hanem a munkafolyamatok tudatos optimalizálásáról és a stressz minimalizálásáról is. Ebben a coachingban olyan módszereket tanulhat, amelyek segítenek fókuszáltan dolgozni, átlátni a prioritásokat, és elkerülni a kiégést. A folyamat során személyre szabott stratégiákat alakítunk ki, figyelembe véve az egyéni munkastílust és célokat. Ezzel nemcsak a teljesítménye javul, de a mindennapokban is több energiája marad
                </p>
              </div>

              <div className="column">
                <h2 className="section-title">ÁLTALÁNOS SZOLGÁLTATÁSAINK</h2>
                <h3>Életközi válság</h3>
                <p>
                  Az életközépi krízis vagy válság számos formában jelentkezhet, a karrierváltás igényétől kezdve a személyes identitáskeresésig. Ebben a coachingban segítünk megérteni az átmeneti időszakok természetét, valamint olyan megoldásokat dolgozunk ki, amelyek új perspektívát és megnyugtató jövőképet kínálnak. A legújabb módszerek és tapasztalatok alapján vezetem végig ezen az útkeresésen, hogy a kihívásból valódi fejlődés és önmegvalósítás születhessen.
                </p>

                <h3>Egyéb életterületek</h3>
                <p>
                 A business coaching számos további területet ölelhet fel, legyen szó speciális iparági kérdésekről, kommunikációfejlesztésről vagy éppen kreatív problémamegoldásról. A coaching folyamata mindig az egyéni igényekhez és célokhoz igazodik, így rugalmasan alakítható. A legkeresettebb szolgáltatások között ma már ott szerepel a personal branding, a csapatépítés vagy akár a krízismenedzsment is. A közös munka célja, hogy a legkülönfélébb kihívásokra is hatékony, hosszú távon fenntartható megoldásokat találjunk.
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
          Ha szeretné fejleszteni vállalkozását vagy vezetői képességeit, lépjen velem kapcsolatba, és nézzük meg együtt, hogyan tudom támogatni a céljai elérésében!
        </p>
        <button className="cta-secondary">
          Tudomány a gyakorlatban – Buisness coaching
        </button>
      </div>
    </>
  );
};

export default BusinessCoaching;
