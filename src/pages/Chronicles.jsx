import "./Chronicles.css";
import { useEffect } from "react";

// --- Import all 20 deity images ---
import Zeus from "../assets/gods/Zeus.png";
import Hera from "../assets/gods/Hera.png";
import Demeter from "../assets/gods/Demeter.png";
import Athena from "../assets/gods/Athena.png";
import Apollo from "../assets/gods/Apollo.png";
import Artemis from "../assets/gods/Artemis.png";
import Ares from "../assets/gods/Ares.png";
import Aphrodite from "../assets/gods/Aphrodite.png";
import Hephaestus from "../assets/gods/Hephaestus.png";
import Hermes from "../assets/gods/Hermes.png";
import Hades from "../assets/gods/Hades.png";
import Persephone from "../assets/gods/Persephone.png";
import Hercules from "../assets/gods/Hercules.png";
import Perseus from "../assets/gods/Perseus.png";
import Odysseus from "../assets/gods/Odysseus.png";
import Atalanta from "../assets/gods/Atalanta.png";
import Orpheus from "../assets/gods/Orpheus.png";
import Psyche from "../assets/gods/Psyche.png";
import Hecate from "../assets/gods/Hecate.png";
import TheFates from "../assets/gods/TheFates.png";

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
          <p>Born in secrecy beneath the shadowed peaks of Mount Ida, Zeus escaped the hunger of his father, Cronus, who devoured each child for fear of losing his throne. Hidden in a cave and nourished by sacred bees and a goat named Amalthea, he grew strong. When manhood came, he freed his siblings from their father’s stomach and led them into the Titanomachy — a cosmic war that split heaven from earth. When thunder roared and the mountain shook, it was Zeus’s hand that cast the lightning, crowning him as ruler of all gods. His reign forged order from chaos, his will shaping justice itself.</p>
          <p>Yet Zeus was not mere power incarnate; he was a mirror of mortal ambition — noble and flawed, commanding yet capricious. His voice became the storm, his temper the earthquake, his mercy the rain that renewed the earth. He fathered heroes and kings, not only through might but through destiny. Each thunderbolt he wielded symbolized divine authority tempered by wisdom’s restraint. In his rule, mortals saw both tyranny and protection, learning that true power lies not only in command, but in the burden of balance.</p>
        </div>
      </div>


      {/* === HERA  === */}
      <div className="deity-section">
       <img src={Hera} alt="Hera" width="200" className="deity-img" />
        <div className="deity-text">
         <h2>HERA</h2>
           <p>Hera, the majestic queen of Olympus, was sister and wife to Zeus, sharing his throne but never his wanderlust. Her realm was the sanctity of marriage — a sacred covenant she guarded even as her husband’s faithless heart stirred her wrath. Her beauty was regal, her pride unyielding, and her jealousy legendary. Yet beneath her fury burned an unwavering devotion to order and loyalty. She cursed her rivals, turned nymphs to stars, and raised tempests against those who mocked fidelity. Every punishment was both vengeance and proclamation: that betrayal, divine or mortal, demanded consequence.</p>
            <p>Still, Hera was more than vengeance incarnate. To women, she was guardian and guide, presiding over birth and sacred union. Her presence adorned every wedding hearth, her unseen hands blessing every vow. She taught mortals that loyalty, though painful, is strength — that pride, though perilous, preserves dignity in a world of chaos. Hera’s gaze was fierce, yet her love enduring; she remained steadfast where others faltered. Even amid divine betrayal, she personified sovereignty — a queen unbowed, the eternal defender of devotion.</p>
        </div>
      </div>

       <div className="deity-section">
       <img src={Demeter} alt="Demeter" width="200" className="deity-img" />
        <div className="deity-text">
         <h2>DEMETER</h2>
           <p>Demeter, goddess of grain and fertility, ruled not through might but through nurture. Her touch awakened fields, her breath ripened fruit, and her smile brought golden abundance to mortals who depended on her grace. Yet even divine love can know sorrow. When her beloved daughter Persephone was seized by Hades and taken to the Underworld, Demeter’s grief darkened the world. Crops withered, rivers dried, and hunger spread across the earth as the goddess wandered, torch in hand, searching for her lost child. Her mourning silenced the song of creation itself.</p>
            <p>Moved by the suffering of humankind, Zeus intervened, and a pact was struck: Persephone would spend part of each year with her mother, bringing spring and summer, and part beneath the earth, marking autumn and winter. Thus the seasons were born — a reflection of a mother’s undying love and her acceptance of inevitable loss. Demeter’s tale became a reminder that life and death dance in unbroken rhythm, and that love, though wounded, still renews the world.</p>
        </div>
      </div>


      {/* === ATHENA  === */}
      <div className="deity-section">
       <img src={Athena} alt="Athena" width="200" className="deity-img" />
        <div className="deity-text">
         <h2>ATHENA</h2>
              <p>From the thunderous brow of Zeus, Athena was born in full armor, her cry echoing across Olympus like the sound of a new dawn. She embodied the intellect of her father and the calm reason of divine strategy. Where Ares reveled in blood, Athena sought precision — the art of victory without destruction. She taught mortals weaving, philosophy, and the mastery of logic, binding wisdom to craft. Her gaze was clear as polished bronze, her voice measured and serene. To her, thought was weapon, and justice its guiding blade. She chose the owl as her companion, the silent observer of truth in darkness.
              </p>
              <p>Her presence in Athens — the city that bore her name — represented balance: intellect wedded to courage, peace guarded by vigilance. When Poseidon offered the horse, she bestowed the olive tree — a symbol of enduring prosperity over fleeting conquest. In her light, civilizations flourished, and reason triumphed over instinct. Athena’s wisdom was not cold but compassionate; she understood that clarity often demands sacrifice. Through her, the mind became sacred ground, and every act of justice a quiet hymn to her eternal counsel.</p>
        </div>
      </div>



      {/* === APOLLO  === */}
      <div className="deity-section">
       <img src={Apollo} alt="Apollo" width="200" className="deity-img" />
        <div className="deity-text">
         <h2>APOLLO</h2>
              <p>
                Born beneath the radiant eye of the sun to Zeus and Leto, Apollo’s first breath filled the air with music. His twin, Artemis, ruled the night, but he claimed the brilliance of day — light, art, prophecy, and harmony. With his golden lyre, he calmed storms; with his silver bow, he struck down plague and pride alike. His shrine at Delphi became the axis of divine truth, where mortals sought the riddles of their fate. Yet perfection weighed upon him — every note he played shimmered with both beauty and melancholy, every prophecy both gift and curse.
              </p>
              <p>Apollo’s loves often ended in tragedy — Daphne turned to laurel, Hyacinthus to bloom — yet from grief he wrought art eternal. He embodied the duality of creation: the fire that warms and burns, the melody that heals and haunts. His light illuminated not just the world but the soul, revealing both virtue and vanity. To follow Apollo was to pursue excellence with devotion, knowing the divine spark may also scorch. Through his radiance, humankind glimpsed the cost of beauty — that truth, once seen, cannot be forgotten.</p>
        </div>
      </div>


       {/* === ARTEMIS  === */}
      <div className="deity-section">
       <img src={Artemis} alt="Artemis" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>ARTEMIS</h2>
              <p>
                Artemis, born beneath the silver calm of Delos, was moon to her brother’s sun, a huntress cloaked in serenity and strength. She vowed eternal freedom, untouched by mortal desire, and roamed the forests with her nymphs, guardian of the wild and the innocent. Her arrows were swift, her judgment absolute — both healer and punisher. When Actaeon beheld her bathing, she transformed him into a stag, torn apart by his own hounds. Yet her cruelty was not malice but the law of sanctity: that which is pure must remain inviolate.
              </p>
              <p>To mortals, she brought the cool light of courage and solitude. She guided mothers in childbirth and shepherded spirits of maidens to peace. Her moonlight bathed the earth in calm, reminding all who wandered alone that solitude need not be sorrow. Artemis’s strength was quiet, her divinity unbound by possession. She embodied freedom without defiance, purity without fragility. In her realm, the wilderness became holy ground, and every heartbeat beneath the stars was an echo of her eternal independence.</p>

        </div>
      </div>


      {/* === ARES  === */}
      <div className="deity-section">
       <img src={Ares} alt="Ares" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>ARES</h2>
              <p>
                Ares, son of Zeus and Hera, was the embodiment of unbridled force — the raw surge of battle where reason fades and instinct reigns. He was the clash of metal, the roar of warriors, the pulse of survival in the chaos of war. While Athena guided strategy, Ares thrived in fury. His presence on the battlefield was both terror and inspiration, his laughter echoing through the din of conflict. Yet beneath the blood and fire, he symbolized the primal strength that drives mortals to defend what they love. Ares was the red dawn before the first cry of battle — glorious, reckless, and vital.
              </p>
              <p>Despised by gods yet revered by soldiers, he stood as a paradox — destroyer and protector, chaos and courage intertwined. His affairs were as tempestuous as his wars, especially his forbidden love with Aphrodite, passion entwined with peril. Though often scorned for his violence, Ares represented endurance — the capacity to rise after defeat, to face pain without retreat. In every human heart that refuses surrender, his fire endures. He is the spirit of survival itself, reminding the world that from struggle, strength is born, and through blood, life persists</p>


        </div>
      </div>

      {/* === APHRODITE  === */}
      <div className="deity-section">
       <img src={Aphrodite} alt="Aphrodite" width="200" className="deity-img" />
        <div className="deity-text">
          <h2>APHRODITE</h2>
              <p>
                From the sea’s foam she rose, luminous and eternal, born of heaven’s fall and the ocean’s sigh. Aphrodite’s beauty was not mere appearance but divine energy — the power to awaken longing, compassion, and vulnerability. She walked the shores of Cyprus, and flowers bloomed at her feet. Her gaze could disarm kings, her touch dissolve bitterness into desire. Yet love, her domain, was never gentle; it was the flame that created and consumed. She united the divine and mortal in the ecstatic truth that to love is to surrender, and through surrender, to discover divinity itself.
              </p>
              <p>  </p>
              <p>Her loves were many — Hephaestus the craftsman, Ares the warrior, Anchises the mortal — each reflecting a facet of affection: creation, passion, tenderness. But it was her empathy that transcended them all, for she saw the longing in every being. To worship Aphrodite was to embrace imperfection, to understand that beauty lies not in flawlessness but in the courage to feel. In every heartbreak and reconciliation, in every glance that lingers too long, her spirit endures. Love, she taught, is not weakness but revelation — the soul’s mirror and its fire.</p>
        </div>
      </div>

      {/* === HERMES  === */}
      <div className="deity-section">
       <img src={Hermes} alt="Hermes" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>HERMES</h2>
              <p>
                Born at dawn and cunning by noon, Hermes was the god who could move between worlds unseen. On his first day of life, he stole Apollo’s cattle, then soothed his anger with music from a lyre of his own making. His mischief was matched only by his brilliance — patron of travelers, traders, poets, and thieves alike. Winged sandals carried him across sky and shadow, his caduceus a symbol of balance between chaos and order. Hermes was the breath between words, the spark between thought and action — messenger of gods and guide of souls.
              </p>
              <p>He alone could walk freely through heaven, earth, and the underworld, bridging life’s contradictions with grace. In his laughter lay the wisdom of adaptability — the understanding that to change form is to endure. Mortals prayed to him before journeys, trusting his wit to turn peril into opportunity. Though a trickster, he never deceived without purpose; his games revealed truth in disguise. In every innovation, in every moment of transformation, Hermes lives — teaching that life’s passage is not a path to fear but a dance between beginnings and endings.</p>
        </div>
      </div>


   {/* === DEMETER  === */}
      <div className="deity-section">
       <img src={Demeter} alt="Demeter" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>DEMETER</h2>
              <p>
                Demeter, the earth’s gentle mother, held dominion over grain, growth, and the pulse of life itself. She moved through fields with the grace of ripening wheat, her touch bringing fertility to barren lands. Her daughter Persephone was her joy, the light in her endless cycle of nurture. But when Hades stole Persephone to the underworld, Demeter’s sorrow withered the earth. Crops failed, rivers dried, and mortals despaired beneath her grief. Her lament became winter — the season of stillness and mourning. Only when her daughter returned did the world breathe again, and spring was born.
              </p>
              <p>Thus the rhythm of nature became the rhythm of a mother’s heart — the eternal return of love after absence, of hope after despair. Demeter’s pain was sacred, her forgiveness divine. She taught humanity that life is woven with loss, yet no loss is final. Her spirit endures in every seed that splits the soil, in every harvest gathered after drought. Through her, mortals learned gratitude and patience — that to nurture is to accept the seasons of sorrow as much as joy. Demeter is the compassion of the earth itself, forever giving, forever renewed.</p>
        </div>
      </div>


      {/* === HEPHAESTUS  === */}
      <div className="deity-section">
       <img src={Hephaestus} alt="Hephaestus" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>HEPHAESTUS</h2>
              <p>
                Cast from Olympus for his imperfection, Hephaestus fell through the clouds into the sea, his body broken but his spirit unshaken. From his forge in volcanic depths, he shaped wonders the gods themselves could not match. His hammer struck rhythm into flame; his anvil sang with divine purpose. He forged Zeus’s thunderbolts, Achilles’ armor, and Aphrodite’s girdle — each creation born from the fire of endurance. Crippled yet indomitable, Hephaestus turned pain into art, transforming rejection into mastery. His forge became both sanctuary and soul, each spark a testament to resilience.
              </p>
              <p>Though mocked by gods, he found companionship in his craft, and in it, redemption. His love for Aphrodite was unreciprocated, yet even heartbreak became fuel for beauty. Hephaestus taught mortals that perfection is not the absence of flaw but the triumph over it — that creation is an act of defiance against despair. The fire that scarred him also illuminated his genius. In every artist’s struggle, every builder’s perseverance, his flame still burns. Through the sound of hammer upon steel, Hephaestus whispers: from brokenness comes brilliance, and from struggle, form eternal.</p>

       </div>
      </div>

      {/* === HERCULES  === */}
      <div className="deity-section">
       <img src={Hercules} alt="Hercules" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>HERCULES</h2>
              <p>
                Born of Zeus and the mortal Alcmene, Hercules carried both divine might and mortal sorrow. From birth, he was marked by Hera’s wrath, who sent serpents to kill him in his cradle. He crushed them with his infant hands, foreshadowing a life of endless struggle. Hera’s vengeance would later drive him to madness, causing him to slay his wife and children. In penance, he sought purification through twelve labors so immense they echoed through eternity. He battled the Nemean Lion, captured the golden Hind, cleansed the Augean Stables, and descended to Hades itself. Each task was more than conquest; it was transformation, forcing the brute within him to yield to endurance and wisdom.
              </p>
              <p>When his labors ended, Hercules found no peace in power but in redemption. His strength was divine, yet his suffering profoundly human — every scar an inscription of forgiveness earned, not given. Upon his death, Zeus carried him to Olympus, granting immortality. Yet even in glory, he remained the hero of mortals, symbol of triumph over pain. “Herculean” became the word for impossible effort — for in him, humanity saw that the true measure of strength is not domination but the courage to rebuild oneself after ruin.</p>
       </div>
      </div>


     {/* === PERSEUS  === */}
      <div className="deity-section">
       <img src={Perseus} alt="Perseus" width="200" className="deity-img" />
        <div className="deity-text">
              <h2>PERSEUS</h2>
              <p>
                Perseus’s destiny began before his birth, when a prophecy warned that he would slay his grandfather. Locked away with his mother, Danaë, by the fearful king Acrisius, he was visited by Zeus as golden light, and from that union Perseus was born. Cast adrift in a chest upon the sea, he grew to manhood guided by the gods. When commanded to bring the head of Medusa, whose gaze turned men to stone, Perseus accepted — not from arrogance but courage born of necessity. With Athena’s mirrored shield and Hermes’s winged sandals, he struck with precision, seeing not the monster but his own reflection in her terror.
              </p>
              <p> Emerging victorious, he carried Medusa’s head as both weapon and warning, turning enemies to stone yet sparing the innocent. Along his journey he rescued Andromeda, chained to a rock as sacrifice, and through her found love’s gentler triumph. In Perseus lives the essence of human bravery — fear faced, not denied. He taught mortals that courage is not absence of dread, but mastery of it. The stars still bear his name, reminding the heavens that light, once born from peril, can never be extinguished.</p>

        </div>
      </div>

       <div className="deity-section">
       <img src={Odysseus} alt="Odysseus" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>ODYSSEUS</h2>
               <p>
                Odysseus, king of Ithaca, was both warrior and thinker, as skilled with words as with the sword. At Troy, his mind shaped the wooden horse that ended a decade-long war. Yet his true legend began afterward — in the long voyage home that tested body, heart, and soul. For ten years he wandered the wrathful seas, defying gods and monsters alike. He blinded the Cyclops, resisted the enchantments of Circe, and bound himself to hear the Sirens’ song — curiosity overcoming fear. Through each peril, his cunning saved him where strength could not, for Odysseus was the mortal face of intellect against chaos.
              </p>
              <p>But even he could not outwit time. When he returned to Ithaca disguised as a beggar, he found his halls overrun by suitors and his wife, Penelope, steadfast yet weary. His final victory was not of conquest but of recognition — the quiet joy of reunion earned through patience. His story became the word “odyssey,” meaning not merely journey, but transformation through trial. Odysseus endures as every soul lost and found again — a symbol of persistence, adaptability, and the long return home to oneself.</p>
       </div>
      </div>

       <div className="deity-section">
       <img src={Atalanta} alt="Atalanta" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>ATALANTA</h2>
             <p>
                Atalanta, daughter of a king who had wished for a son, was abandoned upon a mountain and raised by a she-bear. The wild became her kingdom, freedom her creed. Swift of foot and keen of mind, she swore never to wed, vowing to marry only one who could outrun her. Suitors came and perished, undone by her speed — until Hippomenes, aided by Aphrodite, dropped golden apples in her path. Each glittering distraction slowed her stride just enough for him to win, and love ensnared the hunter. Yet passion, when untamed, draws divine ire — their union, consummated in sacred ground, angered the gods. They were transformed into lions, yoked together for eternity.
              </p>
              <p>Atalanta’s tale is not tragedy but testament. She defied expectation, proving a woman could equal any man in strength, courage, and spirit. Her story runs like wind across the ages — a hymn to independence and self-worth. Yet her fate reminds us that even the swift cannot outrun destiny. To be free is to choose one’s race; to love is to surrender part of that freedom. In every soul that runs toward purpose, unbound by fear, Atalanta’s spirit endures — wild, radiant, and unbroken.</p>
        </div>
      </div>

       <div className="deity-section">
       <img src={Orpheus} alt="Orpuheus" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>ORPHEUS</h2>
               <p>
                Orpheus, born of the muse Calliope and blessed by Apollo, could charm nature itself. His lyre wove melodies that stilled rivers and tamed beasts. When his beloved Eurydice died from a serpent’s bite, he defied the laws of life, descending into the underworld to reclaim her. Before Hades and Persephone, he played such sorrowful harmony that even the shades wept. Granted her return, he was warned not to look back until they reached the light. But love, ever impatient, triumphed over reason — and in one backward glance, she was lost forever.
              </p>
              <p>Broken but not silenced, Orpheus wandered the earth, his music turned elegy. His songs mourned the divide between love and mortality, shaping the first hymns of humanity. Torn apart by Maenads, his spirit ascended with his art — his lyre immortalized among the stars. Orpheus’s legend became the voice of every artist who turns pain into beauty, every lover who seeks what cannot be regained. He taught that art is remembrance made eternal — the bridge between what is lost and what endures.</p>
        </div>
      </div>

       <div className="deity-section">
       <img src={Psyche} alt="Psyche" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>PSYCHE</h2>
              <p>
                Psyche was a mortal whose beauty rivaled Aphrodite’s own, drawing admiration that turned swiftly to divine envy. Men worshipped her as they once did the goddess, and so Aphrodite, offended by mortal praise, sent her son Eros to make Psyche fall in love with something vile. But love disobeyed command — for Eros himself was struck by his own arrow. Hidden from her sight, he visited her nightly in shadow, his tenderness bound by secrecy. Psyche, curious and yearning, broke that sacred trust, lighting a lamp to see his face. A drop of oil fell upon his skin, waking him, and love fled with the dawn. Cast adrift, she wandered the earth, bearing trials set by Aphrodite — sorting seeds by moonlight, fetching water from deadly rivers, and descending to Hades to claim forbidden beauty.
              </p>
              <p>Through each ordeal, Psyche’s mortal frailty became divine resilience. Her heart, tempered by faith, surpassed even the gods’ designs. When she emerged from the underworld, her courage radiant and unbroken, Eros returned to her, and Zeus himself granted her immortality. Psyche ascended not as goddess of beauty, but of the soul’s awakening — the light that endures after darkness. Her story became the journey of every heart tested by longing and redeemed by love. To speak of “psyche” is to speak of the spirit within us all, wounded yet wiser for the trials that prove our worth.</p>
       </div>
      </div>

       <div className="deity-section">
       <img src={Hades} alt="Hades" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>HADES</h2>
              <p>
                Hades, brother of Zeus and Poseidon, ruled a kingdom beneath the earth — not of fire and torment, but of silence and structure. When the world was divided, he chose the unseen realm, where roots take nourishment and souls find order beyond life. His power was not loud but inexorable, the inevitability that balanced the universe. To mortals, he was feared, yet he was no tyrant — for in death, he offered fairness. The just and unjust alike entered his domain, their lives measured without bias. He reigned with composure, crowned not with wrath but restraint, the guardian of what all must face.
              </p>
              <p>When he took Persephone as his queen, the earth mourned — but even in that abduction lay a truth of duality: that death and life are intertwined, and loss is the seed of renewal. In the underworld, Persephone’s presence softened his shadow, bringing balance to his dominion. Hades’s name became synonymous with finality, yet his essence was acceptance. He reminds the living that control lies not in conquest, but in calm mastery of the inevitable. He is the silence beneath ambition, the stillness after storm — the depth that waits patiently for all things to return.</p>
            </div>
      </div>

       <div className="deity-section">
       <img src={Persephone} alt="Persephone" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>PERSEPHONE</h2>
              <p>
                Persephone’s laughter once filled the meadows of the world, her innocence the joy of her mother, Demeter. But when Hades rose from his chariot of shadows to claim her, the world froze in grief. Bound by the pomegranate’s seeds she ate in the underworld, she became forever divided — half of each year with her mother in sunlight, half with her husband in shadow. Thus were the seasons born: spring and summer in her ascent, autumn and winter in her descent. Her story was not one of captivity, but transformation — the girl who became queen of two worlds, bridging the cycle of life and death.
              </p>
              <p>Through Persephone, the ancients saw that darkness is not the end but a passage. She reigns not as victim, but as ruler of renewal, her presence teaching mortals the sacred rhythm of loss and return. In her duality lies harmony — that to know joy, one must have faced despair, and to live fully, one must have walked with shadow. Persephone’s pomegranate remains her eternal symbol: a taste of mortality that birthed immortality’s truth — that every ending carries the promise of awakening.</p>
            </div>
      </div>

       <div className="deity-section">
       <img src={Hecate} alt="Hecate" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>HECATE</h2>
             <p>
                Hecate, the luminous shadow, walked where others dared not — at the borders of light and night, where choices converge and destinies diverge. Daughter of the Titans, she was neither bound to Olympus nor chained to the underworld, but moved freely through all realms, torch in hand. She guided Persephone through her descent and return, standing as guardian of thresholds and souls lost in transition. Her power was not command but illumination — the wisdom of seeing both paths and knowing none are free of consequence. Around her, mist coiled like thought made visible, the realm of intuition and unseen truth.
              </p>
              <p>To mortals, she was both fear and comfort: the whisper before decision, the lantern before dawn. Sorcerers called her in moonlight, and travelers invoked her at crossroads, seeking insight rather than favor. Hecate’s magic was reflection — the mirror of the self, the clarity that precedes transformation. She taught that the greatest spell is choice itself, and that to walk between worlds is to understand them all. In her flame lives discernment; in her shadow, wisdom. She is the unseen companion of those who wander not lost, but seeking.</p>
            </div>
      </div>

       <div className="deity-section">
       <img src={TheFates} alt="TheFates" width="200" className="deity-img" />
        <div className="deity-text">
           <h2>THE FATES</h2>
              <p>
                Before the first god drew breath, the Fates spun the rhythm of existence. Clotho wove the thread of birth, Lachesis measured its length, and Atropos cut it with her shears, ending each story in divine symmetry. Even Zeus, king of Olympus, bowed to their impartial hands. They did not rule through emotion or judgment but through necessity — the quiet order beneath chaos. Each life’s thread shimmered for a time, its pattern crossing others, forming the great tapestry of being. Mortals feared them, yet they were not cruel; their gift was the inevitability that gives meaning to choice, the limit that makes life precious.
              </p>
              <p>To gaze upon them was to see the eternity behind every heartbeat — the calm beyond striving. In your triumphs and defeats alike, their loom hums softly, weaving you into the fabric of all that was and will be. The Fates remind gods and mortals that no power defies time, yet all find purpose within it. They are destiny’s architects, unfeeling yet merciful in their constancy. The globe of fate they hold glows not with prophecy, but with balance — the eternal truth that existence is not controlled, only continued, one thread at a time.</p>
            </div>
      </div>

   

 
        <button id="backToTop">↑ Back to Top</button>
      </main>
    </div>
  );
}

export default Chronicles;
