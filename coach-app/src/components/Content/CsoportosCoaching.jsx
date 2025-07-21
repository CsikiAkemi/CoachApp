import React, { useState } from 'react';
import './LifeCoaching.css';
import ginko from '../../assets/ginko.png';

const CsoportosCoaching = () => {
const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="title-bar">
        <div className="title-text">
          <h1>Csoportos Coaching </h1>
          <h2><em>A közösség támogatása a személyes fejlődésben</em></h2>
        </div>
        <button className="cta-button">Bejelentkezés</button>
      </div>

      <div className="container">
        <div className="content-columns">
          <div className="column">
            <p>
              A csoportos coaching olyan fejlesztési folyamat, melyben hasonló célokkal rendelkező egyének közösen dolgoznak személyes és szakmai kihívásaik megoldásán. 


            </p>
            <p>
             A coach vezeti a csoportüléseket, elősegítve az aktív részvételt és a kölcsönös támogatást. 

            </p>
             <p>
            Ez a megközelítés különösen hasznos, amikor a résztvevők közös életterületen szeretnének fejlődni, miközben új perspektívákat és megoldásokat fedeznek fel egymás tapasztalatai alapján. 

            </p>
          
          </div>

          <div className="column">
              <p>
             A csoportos coaching előnyei:

            </p>
            <p>
            Különböző nézőpontok megismerése - A résztvevők megosztják tapasztalataikat és ötleteiket
            </p>
            <p>
            Kölcsönös támogatás - A csoport tagjai motiválják és segítik egymást céljaik elérésében, erősítve a közösségi érzést

            </p>
            <p>
            Személyes fejlődés - A csoportos interakciók során a résztvevők jobban megismerhetik saját erősségeiket és fejlesztendő területeiket
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
                <h2 className="section-title">Csoportos szolgáltatásaink</h2>
                <h3>Digitális Wellness és Technológiai Egyensúly</h3>
                <p>
                  Ebben a coaching programban a csoport tagjai megtanulják, hogyan teremtsenek egyensúlyt a digitális eszközök folyamatos használata és a személyes jólét között. Személyre szabott módszereink segítenek csökkenteni a technológiai stresszt, így elősegítve a kiegyensúlyozott és produktív életvitelt.
                </p>

                <h3>Remote Work és Virtuális Csapatok Támogatása</h3>
                <p>
                  A távmunka és a virtuális együttműködés korszakában ez a program a hatékony kommunikáció, a csapatkohézió és a munka-magánélet egyensúlyának kialakítására fókuszál. Az egyéni és csoportos tréningek során olyan technikákat sajátíthatnak el a résztvevők, amelyek elősegítik a virtuális környezetben való sikeres munkavégzést és a csapatdinamika erősítését.
                </p>

                <h3>Életközepi és Karrierváltási Kihívások</h3>
                <p>
                  Ezt a programot azok számára terveztük, akik életük mérföldkövein új irányokat keresnek. A coaching folyamat során a résztvevők személyre szabott támogatást kapnak a karrier újratervezéséhez, a szakmai célok frissítéséhez és az életközepi kihívások sikeres kezeléséhez, így biztosítva a zökkenőmentes átmenetet és a hosszú távú növekedést.
                </p>

              
              </div>

              <div className="column">
                <h2 className="section-title"></h2>
                <h3>Pszichológiai Rugalmasság és Reziliencia Fejlesztése</h3>
                <p>
                  A mentális ellenállóképesség kulcsfontosságú a mai kihívásokkal teli világban. Ebben a programban innovatív módszerekkel és személyre szabott stratégiákkal segítjük az ügyfeleket a stressz hatékony kezelésében, a krízishelyzetekből való gyors kilábalásban és a belső stabilitás kialakításában, hogy minden helyzetben megtalálják a megoldást.
                </p>

                <h3>Személyes Értékek és Célok Újraértékelése</h3>
                <p>
                 Ez a coaching irányzat segít az ügyfeleknek mély önreflexión keresztül újraértékelni életük alapvető értékeit és hosszútávú céljait. Személyre szabott eszközeinkkel támogatjuk a belső iránytű frissítését, amely hozzájárul a tudatos életvezetéshez és a fenntartható fejlődéshez a gyorsan változó környezetben.
                </p>

                 <h3>Vállalkozói Mentorprogramok és Innovációs Coaching</h3>
                <p>
                A vállalkozói körök dinamikus változásainak megfelelően ez a program a vezetői készségek, az innováció és az üzleti ötletek megvalósításának támogatására fókuszál. Személyre szabott mentorálással segítjük a vállalkozókat abban, hogy erősítsék üzleti stratégiáikat, és versenyelőnyt szerezzenek a piac változó kihívásai közepette.
                </p>

                <h3>Egészséges Életmód és Stresszmenedzsment</h3>
                <p>
                Az egészséges életmód és a hatékony stresszkezelés egyaránt hozzájárul a teljesítmény és a jólét növeléséhez. Coaching programunkban személyre szabott stratégiákat kínálunk, amelyek integrálják a tudatos táplálkozást, a rendszeres testmozgást és a relaxációs technikákat.
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
        Amennyiben szeretne egy támogató közösségben, egymás segítése mellett fejlődni és tudatosabbá válni, jelentkezzen csoportos coachingra!
        </p>
        <button className="cta-secondary">
          Tudomány a gyakorlatban – Csoportos coaching
        </button>
      </div>
    </>
  );
};

export default CsoportosCoaching;
