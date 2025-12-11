import "./Chronicles.css";
import { useEffect } from "react";

// Used images
import Zeus from "../assets/gods/Zeus.png";
import Hera from "../assets/gods/Hera.png";
import Demeter from "../assets/gods/Demeter.png";
import Athena from "../assets/gods/Athena.png";
import Apollo from "../assets/gods/Apollo.png";
import Artemis from "../assets/gods/Artemis.png";
import Ares from "../assets/gods/Ares.png";
import Aphrodite from "../assets/gods/Aphrodite.png";
import Hermes from "../assets/gods/Hermes.png";
import Hades from "../assets/gods/Hades.png";
import Persephone from "../assets/gods/Persephone.png";
import Hecate from "../assets/gods/Hecate.png";
import TheFates from "../assets/gods/TheFates.png";

// REMOVE THESE (unused)
// import Hephaestus from "../assets/gods/Hephaestus.png";
// import Perseus from "../assets/gods/Perseus.png";
// import Odysseus from "../assets/gods/Odysseus.png";
// import Atalanta from "../assets/gods/Atalanta.png";
// import Orpheus from "../assets/gods/Orpheus.png";
// import Psyche from "../assets/gods/Psyche.png";


function Chronicles() {
  useEffect(() => {
    const btn = document.getElementById("backToTop");
    if (btn)
      btn.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
    return () => {
      if (btn) btn.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="chronicles">
      <header>
        <div className="header-inner">
          <h1>⚡ The Chronicles of Olympus</h1>
          <p className="subtitle">
            Stories of Gods, Heroes, and Immortals — A MythForge Anthology
          </p>
        </div>
      </header>

      <main>

      {/* === ZEUS === */}
      <div className="deity-section">
        <img src={Zeus} alt="Zeus" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>ZEUS</h2>
          <p>Born in secrecy beneath the shadowed peaks...</p>
          <p>Yet Zeus was not mere power incarnate...</p>
        </div>
      </div>

      {/* === HERA === */}
      <div className="deity-section">
        <img src={Hera} alt="Hera" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>HERA</h2>
          <p>Hera, the majestic queen of Olympus...</p>
          <p>Still, Hera was more than vengeance incarnate...</p>
        </div>
      </div>

      {/* === DEMETER === */}
      <div className="deity-section">
        <img src={Demeter} alt="Demeter" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>DEMETER</h2>
          <p>Demeter, goddess of grain and fertility...</p>
          <p>Moved by the suffering of humankind...</p>
        </div>
      </div>

      {/* === ATHENA === */}
      <div className="deity-section">
        <img src={Athena} alt="Athena" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>ATHENA</h2>
          <p>From the thunderous brow of Zeus...</p>
          <p>Her presence in Athens represented balance...</p>
        </div>
      </div>

      {/* === APOLLO === */}
      <div className="deity-section">
        <img src={Apollo} alt="Apollo" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>APOLLO</h2>
          <p>Born beneath the radiant eye of the sun...</p>
          <p>Apollo’s loves often ended in tragedy...</p>
        </div>
      </div>

      {/* === ARTEMIS === */}
      <div className="deity-section">
        <img src={Artemis} alt="Artemis" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>ARTEMIS</h2>
          <p>Artemis, born beneath the silver calm...</p>
          <p>To mortals, she brought the cool light...</p>
        </div>
      </div>

      {/* === ARES === */}
      <div className="deity-section">
        <img src={Ares} alt="Ares" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>ARES</h2>
          <p>Ares, son of Zeus and Hera...</p>
          <p>Despised by gods yet revered by soldiers...</p>
        </div>
      </div>

      {/* === APHRODITE === */}
      <div className="deity-section">
        <img src={Aphrodite} alt="Aphrodite" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>APHRODITE</h2>
          <p>From the sea’s foam she rose...</p>
          <p>Her loves were many...</p>
        </div>
      </div>

      {/* === HERMES === */}
      <div className="deity-section">
        <img src={Hermes} alt="Hermes" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>HERMES</h2>
          <p>Born at dawn and cunning by noon...</p>
          <p>He alone could walk freely through heaven...</p>
        </div>
      </div>

      {/* === HADES === */}
      <div className="deity-section">
        <img src={Hades} alt="Hades" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>HADES</h2>
          <p>Hades, brother of Zeus and Poseidon...</p>
          <p>When he took Persephone as his queen...</p>
        </div>
      </div>

      {/* === PERSEPHONE === */}
      <div className="deity-section">
        <img src={Persephone} alt="Persephone" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>PERSEPHONE</h2>
          <p>Persephone’s laughter once filled the meadows...</p>
          <p>Through Persephone, the ancients saw...</p>
        </div>
      </div>

      {/* === HECATE === */}
      <div className="deity-section">
        <img src={Hecate} alt="Hecate" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>HECATE</h2>
          <p>Hecate, the luminous shadow...</p>
          <p>To mortals, she was both fear and comfort...</p>
        </div>
      </div>

      {/* === THE FATES === */}
      <div className="deity-section">
        <img src={TheFates} alt="The Fates" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>THE FATES</h2>
          <p>Before the first god drew breath...</p>
          <p>The Fates remind gods and mortals...</p>
        </div>
      </div>

      <button id="backToTop">↑ Back to Top</button>
      </main>
    </div>
  );
}

export default Chronicles;
