/* ============================================================
   FunLearn – LKG Magic World  |  app.js  v3.0
   Validated, error-free, fully featured
   ============================================================ */

'use strict';

/* ============================================================
   1.  DATA
   ============================================================ */

const MASCOTS = [
  '🦄','🐶','🐱','🐸','🐯','🦁','🐼','🐨','🦊','🐻',
  '🐰','🐧','🦋','🐳','🦒','🐘','🦓','🦜','🐬','🐲',
  '🧸','🤖','👾','🌟','⚡','🍄','🌈','🚀','🎃','🦸'
];

const ALPHABET_DATA = [
  {l:'A',w:'Apple',    e:'🍎', hi:'सेब (Seb)',         kn:'ಸೇಬು (Sebu)'},
  {l:'B',w:'Ball',     e:'⚽', hi:'गेंद (Gend)',        kn:'ಚೆಂಡು (Chendu)'},
  {l:'C',w:'Cat',      e:'🐱', hi:'बिल्ली (Billi)',    kn:'ಬೆಕ್ಕು (Bekku)'},
  {l:'D',w:'Dog',      e:'🐶', hi:'कुत्ता (Kutta)',    kn:'ನಾಯಿ (Nayi)'},
  {l:'E',w:'Elephant', e:'🐘', hi:'हाथी (Haathi)',     kn:'ಆನೆ (Aane)'},
  {l:'F',w:'Fish',     e:'🐟', hi:'मछली (Machhli)',    kn:'ಮೀನು (Meenu)'},
  {l:'G',w:'Grapes',   e:'🍇', hi:'अंगूर (Angur)',     kn:'ದ್ರಾಕ್ಷಿ (Drakshi)'},
  {l:'H',w:'House',    e:'🏠', hi:'घर (Ghar)',          kn:'ಮನೆ (Mane)'},
  {l:'I',w:'Ice Cream',e:'🍦', hi:'आइसक्रीम',          kn:'ಐಸ್ ಕ್ರೀಮ್'},
  {l:'J',w:'Jacket',   e:'🧥', hi:'जैकेट',             kn:'ಜ್ಯಾಕೆಟ್'},
  {l:'K',w:'Kite',     e:'🪁', hi:'पतंग (Patang)',     kn:'ಗಾಳಿಪಟ (Gaalipaṭa)'},
  {l:'L',w:'Lion',     e:'🦁', hi:'शेर (Sher)',         kn:'ಸಿಂಹ (Simha)'},
  {l:'M',w:'Mango',    e:'🥭', hi:'आम (Aam)',           kn:'ಮಾವು (Maavu)'},
  {l:'N',w:'Nest',     e:'🪹', hi:'घोंसला (Ghosla)',   kn:'ಗೂಡು (Gudu)'},
  {l:'O',w:'Orange',   e:'🍊', hi:'संतरा (Santra)',    kn:'ಕಿತ್ತಲೆ (Kittale)'},
  {l:'P',w:'Parrot',   e:'🦜', hi:'तोता (Tota)',        kn:'ಗಿಣಿ (Gini)'},
  {l:'Q',w:'Queen',    e:'👸', hi:'रानी (Rani)',        kn:'ರಾಣಿ (Raani)'},
  {l:'R',w:'Rabbit',   e:'🐰', hi:'खरगोश (Khargosh)',  kn:'ಮೊಲ (Mola)'},
  {l:'S',w:'Sun',      e:'☀️', hi:'सूरज (Suraj)',      kn:'ಸೂರ್ಯ (Suurya)'},
  {l:'T',w:'Tiger',    e:'🐯', hi:'बाघ (Baagh)',        kn:'ಹುಲಿ (Huli)'},
  {l:'U',w:'Umbrella', e:'☂️', hi:'छाता (Chhaata)',    kn:'ಛತ್ರಿ (Chhathri)'},
  {l:'V',w:'Van',      e:'🚐', hi:'वैन (Van)',           kn:'ವ್ಯಾನ್'},
  {l:'W',w:'Water',    e:'💧', hi:'पानी (Paani)',       kn:'ನೀರು (Neeru)'},
  {l:'X',w:'Xylophone',e:'🎵', hi:'जाइलोफोन',          kn:'ಕ್ಸೈಲೋಫೋನ್'},
  {l:'Y',w:'Yak',      e:'🐮', hi:'याक (Yaak)',          kn:'ಯಾಕ್'},
  {l:'Z',w:'Zebra',    e:'🦓', hi:'ज़ेब्रा (Zebra)',    kn:'ಜೀಬ್ರಾ (Zeebra)'}
];

const NUMBER_DATA = [
  {n:1, w:'One',   d:'●',                          hi:'एक (Ek)',          kn:'ಒಂದು (Ondu)'},
  {n:2, w:'Two',   d:'● ●',                        hi:'दो (Do)',           kn:'ಎರಡು (Eradu)'},
  {n:3, w:'Three', d:'● ● ●',                      hi:'तीन (Teen)',        kn:'ಮೂರು (Muuru)'},
  {n:4, w:'Four',  d:'● ● ● ●',                    hi:'चार (Chaar)',       kn:'ನಾಲ್ಕು (Naalku)'},
  {n:5, w:'Five',  d:'● ● ● ● ●',                  hi:'पाँच (Paanch)',    kn:'ಐದು (Aidu)'},
  {n:6, w:'Six',   d:'● ● ● ● ● ●',                hi:'छह (Chhah)',        kn:'ಆರು (Aaru)'},
  {n:7, w:'Seven', d:'● ● ● ● ● ● ●',              hi:'सात (Saat)',        kn:'ಏಳು (Yelu)'},
  {n:8, w:'Eight', d:'● ● ● ● ● ● ● ●',            hi:'आठ (Aath)',         kn:'ಎಂಟು (Entu)'},
  {n:9, w:'Nine',  d:'● ● ● ● ● ● ● ● ●',          hi:'नौ (Nau)',          kn:'ಒಂಬತ್ತು (Ombattu)'},
  {n:10,w:'Ten',   d:'● ● ● ● ● ● ● ● ● ●',        hi:'दस (Das)',          kn:'ಹತ್ತು (Hattu)'}
];

const COLOR_DATA = [
  {name:'Red',    hi:'लाल (Laal)',     kn:'ಕೆಂಪು (Kempu)',  bg:'#FF4444', e:'🍎'},
  {name:'Blue',   hi:'नीला (Neela)',   kn:'ನೀಲಿ (Neeli)',   bg:'#4A90E2', e:'🫐'},
  {name:'Yellow', hi:'पीला (Peela)',   kn:'ಹಳದಿ (Haladi)',  bg:'#FFD700', e:'🌻'},
  {name:'Green',  hi:'हरा (Hara)',     kn:'ಹಸಿರು (Hasiru)', bg:'#7EC850', e:'🍃'},
  {name:'Orange', hi:'नारंगी (Narangi)',kn:'ಕಿತ್ತಲೆ (Kittale)',bg:'#FF8C00',e:'🍊'},
  {name:'Pink',   hi:'गुलाबी (Gulaabi)',kn:'ಗುಲಾಬಿ (Gulaabi)',bg:'#FF6BB5',e:'🌸'},
  {name:'Purple', hi:'बैंगनी (Baigani)',kn:'ಊದಾ (Uuda)',     bg:'#9B59B6', e:'🍇'},
  {name:'Brown',  hi:'भूरा (Bhoora)',  kn:'ಕಂದು (Kandu)',   bg:'#8B4513', e:'🤎'},
  {name:'White',  hi:'सफेद (Safed)',   kn:'ಬಿಳಿ (Bili)',    bg:'#BDC3C7', e:'⬜'},
  {name:'Black',  hi:'काला (Kaala)',   kn:'ಕಪ್ಪು (Kappu)',  bg:'#2C3E50', e:'🖤'}
];

const ANIMAL_DATA = [
  {e:'🐶',name:'Dog',      hi:'कुत्ता (Kutta)',     kn:'ನಾಯಿ (Nayi)',    sound:'Woof woof!'},
  {e:'🐱',name:'Cat',      hi:'बिल्ली (Billi)',    kn:'ಬೆಕ್ಕು (Bekku)', sound:'Meow!'},
  {e:'🐮',name:'Cow',      hi:'गाय (Gaay)',          kn:'ಹಸು (Hasu)',     sound:'Moo!'},
  {e:'🐘',name:'Elephant', hi:'हाथी (Haathi)',     kn:'ಆನೆ (Aane)',     sound:'Trumpet!'},
  {e:'🦁',name:'Lion',     hi:'शेर (Sher)',          kn:'ಸಿಂಹ (Simha)',  sound:'Roar!'},
  {e:'🐯',name:'Tiger',    hi:'बाघ (Baagh)',         kn:'ಹುಲಿ (Huli)',   sound:'Growl!'},
  {e:'🐸',name:'Frog',     hi:'मेंढक (Mendhak)',   kn:'ಕಪ್ಪೆ (Kappe)', sound:'Ribbit!'},
  {e:'🐰',name:'Rabbit',   hi:'खरगोश (Khargosh)', kn:'ಮೊಲ (Mola)',     sound:'Squeak!'},
  {e:'🦋',name:'Butterfly',hi:'तितली (Titli)',      kn:'ಚಿಟ್ಟೆ (Chitte)',sound:'Flutter!'},
  {e:'🐦',name:'Bird',     hi:'चिड़िया (Chidiya)',  kn:'ಹಕ್ಕಿ (Hakki)',  sound:'Tweet tweet!'},
  {e:'🦒',name:'Giraffe',  hi:'जिराफ़ (Jiraaf)',    kn:'ಜಿರಾಫೆ (Jiraafe)',sound:'Hum!'},
  {e:'🦜',name:'Parrot',   hi:'तोता (Tota)',         kn:'ಗಿಣಿ (Gini)',   sound:'Hello!'},
  {e:'🐧',name:'Penguin',  hi:'पेंगुइन',             kn:'ಪೆಂಗ್ವಿನ್',    sound:'Squawk!'},
  {e:'🐢',name:'Turtle',   hi:'कछुआ (Kachhua)',     kn:'ಆಮೆ (Aame)',     sound:'...'},
  {e:'🐟',name:'Fish',     hi:'मछली (Machhli)',     kn:'ಮೀನು (Meenu)',   sound:'...'},
  {e:'🦓',name:'Zebra',    hi:'ज़ेब्रा (Zebra)',    kn:'ಜೀಬ್ರಾ (Zeebra)',sound:'Bark!'}
];

const HINDI_VOWELS = [
  {ch:'अ',roman:'a',  w:'अनार'}, {ch:'आ',roman:'aa', w:'आम'},
  {ch:'इ',roman:'i',  w:'इमली'}, {ch:'ई',roman:'ee', w:'ईख'},
  {ch:'उ',roman:'u',  w:'उल्लू'},{ch:'ऊ',roman:'oo', w:'ऊन'},
  {ch:'ए',roman:'e',  w:'एड़ी'}, {ch:'ओ',roman:'o',  w:'ओखली'}
];
const HINDI_CONSONANTS = [
  {ch:'क',roman:'ka', w:'कमल'},  {ch:'ख',roman:'kha',w:'खरगोश'},
  {ch:'ग',roman:'ga', w:'गाय'},  {ch:'घ',roman:'gha',w:'घड़ी'},
  {ch:'च',roman:'cha',w:'चाँद'}, {ch:'छ',roman:'chha',w:'छाता'},
  {ch:'ज',roman:'ja', w:'जहाज'}, {ch:'ट',roman:'ta', w:'टमाटर'},
  {ch:'ड',roman:'da', w:'डमरू'}, {ch:'त',roman:'ta', w:'तोता'},
  {ch:'थ',roman:'tha',w:'थाली'}, {ch:'द',roman:'da', w:'दरवाज़ा'},
  {ch:'न',roman:'na', w:'नाव'},  {ch:'प',roman:'pa', w:'पतंग'},
  {ch:'फ',roman:'pha',w:'फल'},   {ch:'ब',roman:'ba', w:'बकरी'},
  {ch:'भ',roman:'bha',w:'भालू'}, {ch:'म',roman:'ma', w:'मछली'},
  {ch:'य',roman:'ya', w:'यात्रा'},{ch:'र',roman:'ra', w:'राजा'},
  {ch:'ल',roman:'la', w:'लड़की'},{ch:'व',roman:'va', w:'वर्षा'},
  {ch:'स',roman:'sa', w:'सेब'},  {ch:'ह',roman:'ha', w:'हाथी'}
];
const KANNADA_VOWELS = [
  {ch:'ಅ',roman:'a',  w:'ಅಮ್ಮ'}, {ch:'ಆ',roman:'aa', w:'ಆನೆ'},
  {ch:'ಇ',roman:'i',  w:'ಇರುವೆ'},{ch:'ಈ',roman:'ee', w:'ಈಚಲು'},
  {ch:'ಉ',roman:'u',  w:'ಉಪ್ಪು'},{ch:'ಊ',roman:'oo', w:'ಊರು'},
  {ch:'ಎ',roman:'e',  w:'ಎಲೆ'},  {ch:'ಓ',roman:'o',  w:'ಓಟ'}
];
const KANNADA_CONSONANTS = [
  {ch:'ಕ',roman:'ka', w:'ಕಮಲ'},  {ch:'ಖ',roman:'kha',w:'ಖಡ್ಗ'},
  {ch:'ಗ',roman:'ga', w:'ಗಾಳಿ'}, {ch:'ಘ',roman:'gha',w:'ಘಂಟೆ'},
  {ch:'ಚ',roman:'cha',w:'ಚಂದ್ರ'},{ch:'ಛ',roman:'chha',w:'ಛತ್ರಿ'},
  {ch:'ಜ',roman:'ja', w:'ಜಲ'},   {ch:'ಟ',roman:'ta', w:'ಟಮಾಟೊ'},
  {ch:'ಡ',roman:'da', w:'ಡಮರು'}, {ch:'ತ',roman:'ta', w:'ತೋಟ'},
  {ch:'ಥ',roman:'tha',w:'ಥಾಲಿ'}, {ch:'ದ',roman:'da', w:'ದೋಣಿ'},
  {ch:'ನ',roman:'na', w:'ನಾವು'}, {ch:'ಪ',roman:'pa', w:'ಪತಂಗ'},
  {ch:'ಫ',roman:'pha',w:'ಫಲ'},   {ch:'ಬ',roman:'ba', w:'ಬಾಳೆ'},
  {ch:'ಭ',roman:'bha',w:'ಭಾರತ'}, {ch:'ಮ',roman:'ma', w:'ಮೀನು'},
  {ch:'ಯ',roman:'ya', w:'ಯಾನ'},  {ch:'ರ',roman:'ra', w:'ರಾಜ'},
  {ch:'ಲ',roman:'la', w:'ಲಕ್ಷ್ಮಿ'},{ch:'ವ',roman:'va',w:'ವರ್ಷ'},
  {ch:'ಸ',roman:'sa', w:'ಸೇಬು'}, {ch:'ಹ',roman:'ha', w:'ಹಾವು'}
];

const BADGE_DEFS = [
  {id:'first',   icon:'🎯', name:'First Try!',     desc:'First correct answer',     goal:1,  field:'correctCount'},
  {id:'b5',      icon:'🔥', name:'Hot Streak!',    desc:'5 correct answers',        goal:5,  field:'correctCount'},
  {id:'b10',     icon:'🏆', name:'Champion!',      desc:'10 correct answers',       goal:10, field:'correctCount'},
  {id:'b25',     icon:'👑', name:'Legend!',        desc:'25 correct answers',       goal:25, field:'correctCount'},
  {id:'artist',  icon:'🎨', name:'Little Artist!', desc:'Saved a drawing',          goal:1,  field:'drawings'},
  {id:'explorer',icon:'🌍', name:'Explorer!',      desc:'Visited all 7 sections',   goal:7,  field:'sectionsVisited'}
];

const CARD_COLORS = [
  '#FF6BB5','#FF8C00','#FFD700','#7EC850',
  '#4A90E2','#9B59B6','#1ABC9C','#FF4444',
  '#E67E22','#16A085'
];

const EMOJI_PARTICLES = ['⭐','🌟','✨','🎉','🎊','💫','🔥','❤️','🌈','🏆','🎈','🦋'];

const CORRECT_MSGS = [
  'Brilliant! You are a superstar!',
  'Wow wow wow! Amazing! You are so clever!',
  'Yes! Fantastic! I am so proud of you!',
  'Excellent! Smartest student ever!',
  'Perfect! Outstanding! Keep it up!',
  'Hooray! You are incredible!',
  'Spectacular! Flying high today!'
];
const WRONG_MSGS = [
  'Oh! Not quite, but you tried so hard! Every mistake makes us smarter!',
  'Almost there! Look at the green answer. You will get the next one!',
  'Good try! See the correct answer in green. Keep going superstar!',
  'It is okay! Even the smartest people learn by trying! Next one!'
];

/* ============================================================
   2.  STATE
   ============================================================ */
const STATE = {
  user:              '',
  mascot:            '🦄',
  lang:              'en',
  isMuted:           false,
  selectedVoiceName: '',
  totalStars:        0,
  correctCount:      0,
  sectionsVisited:   0,
  drawings:          0,
  visitedSet:        new Set(),
  earnedBadges:      new Set(),
  quizType:          'alphabets',
  quizScore:         0,
  quizCount:         1,
  quizAnswered:      false,
  currentScript:     'hindi',
  drawTool:          'pen',
  drawColor:         '#FF6BB5',
  brushSize:         8,
  isDrawing:         false,
  startX:            0,
  startY:            0,
  shapeSnapshot:     null
};

/* ============================================================
   3.  VOICE ENGINE
   ============================================================ */
let selectedVoice  = null;
let speechQueue    = [];
let isSpeaking     = false;

const VOICE_PRIORITY = [
  v => v.name === 'Google UK English Female',
  v => /google/i.test(v.name) && /en.?IN/i.test(v.lang),
  v => /veena/i.test(v.name),
  v => /heera/i.test(v.name),
  v => /raveena|priya|neerja|aditi/i.test(v.name),
  v => /en.?IN/i.test(v.lang) && /female/i.test(v.name),
  v => /en.?IN/i.test(v.lang),
  v => /samantha|karen|moira|fiona/i.test(v.name),
  v => /female/i.test(v.name) && /en/i.test(v.lang),
  v => /en.?GB/i.test(v.lang),
  v => /en/i.test(v.lang)
];

function voiceScore(v) {
  for (let i = 0; i < VOICE_PRIORITY.length; i++) {
    try { if (VOICE_PRIORITY[i](v)) return i; } catch (e) { /* skip */ }
  }
  return 999;
}

function initVoice() {
  function loadVoices() {
    const all = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    if (!all.length) return;
    const sorted = [...all].sort((a, b) => voiceScore(a) - voiceScore(b));
    selectedVoice = sorted[0];
    buildVoicePicker(all, selectedVoice);
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
    setTimeout(loadVoices, 500);
    setTimeout(loadVoices, 1500);
  }
}

function buildVoicePicker(voices, autoSelected) {
  const sel = document.getElementById('voiceSelect');
  if (!sel) return;
  const relevant = voices.filter(v =>
    /en/i.test(v.lang) || /IN/i.test(v.lang) ||
    /female/i.test(v.name) ||
    /veena|heera|raveena|priya|aditi/i.test(v.name)
  );
  sel.innerHTML = '';
  // If we have a cached voice name, restore it
  if (STATE.selectedVoiceName) {
    const restored = voices.find(v => v.name === STATE.selectedVoiceName);
    if (restored) { selectedVoice = restored; }
  }
  const bestName = selectedVoice ? selectedVoice.name : (autoSelected ? autoSelected.name : '');
  relevant.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.name;
    opt.textContent = (v.name === bestName ? '✅ ' : '') + v.name + ' (' + v.lang + ')';
    if (v.name === bestName) opt.selected = true;
    sel.appendChild(opt);
  });
}

function onVoiceChange() {
  const sel = document.getElementById('voiceSelect');
  if (!sel || !window.speechSynthesis) return;
  const voices = window.speechSynthesis.getVoices();
  const found  = voices.find(v => v.name === sel.value);
  if (found) {
    selectedVoice = found;
    STATE.selectedVoiceName = found.name;
    saveState();                         // ← persist chosen voice
  }
  window.speechSynthesis.cancel();
  speechQueue = []; isSpeaking = false;
  speakText('Hello! This is my voice! Do you like it?', true);
}

function speakText(text, priority) {
  if (!window.speechSynthesis) return;
  if (STATE.isMuted) return;           // ← mute check
  if (priority) {
    window.speechSynthesis.cancel();
    speechQueue = []; isSpeaking = false;
  }
  speechQueue.push(String(text));
  if (!isSpeaking) processQueue();
}

function processQueue() {
  if (!speechQueue.length) { isSpeaking = false; return; }
  isSpeaking = true;
  const text = speechQueue.shift();
  const u = new SpeechSynthesisUtterance(text);
  if (selectedVoice) u.voice = selectedVoice;
  u.lang   = (selectedVoice && /IN/i.test(selectedVoice.lang)) ? 'en-IN' : (selectedVoice ? selectedVoice.lang : 'en-IN');
  u.rate   = 0.82;
  u.pitch  = 1.45;
  u.volume = 1;
  u.onend  = () => { isSpeaking = false; setTimeout(processQueue, 90); };
  u.onerror = () => { isSpeaking = false; setTimeout(processQueue, 90); };
  window.speechSynthesis.speak(u);
  // Chrome long-utterance resume fix
  if (text.length > 120) {
    const id = setInterval(() => {
      if (!isSpeaking) { clearInterval(id); return; }
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }, 10000);
  }
}

/* ============================================================
   4.  PERSISTENCE  – full localStorage cache
   ============================================================ */

const LS = {
  get: (k, fallback) => {
    try { const v = localStorage.getItem(k); return v !== null ? v : fallback; } catch(e) { return fallback; }
  },
  set: (k, v) => { try { localStorage.setItem(k, String(v)); } catch(e) { /* quota / private mode */ } },
  getJSON: (k, fallback) => {
    try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : fallback; } catch(e) { return fallback; }
  },
  setJSON: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) { /* ignore */ } }
};

function saveState() {
  LS.set('fl_user',    STATE.user);
  LS.set('fl_mascot',  STATE.mascot);
  LS.set('fl_lang',    STATE.lang);
  LS.set('fl_muted',   STATE.isMuted ? '1' : '0');
  LS.set('fl_voice',   STATE.selectedVoiceName);
  LS.set('fl_stars',   STATE.totalStars);
  LS.set('fl_correct', STATE.correctCount);
  LS.set('fl_visited', STATE.sectionsVisited);
  LS.set('fl_draw',    STATE.drawings);
  LS.setJSON('fl_vset',   [...STATE.visitedSet]);
  LS.setJSON('fl_badges', [...STATE.earnedBadges]);
}

function loadState() {
  STATE.user              = LS.get('fl_user',    '');
  STATE.mascot            = LS.get('fl_mascot',  '🦄');
  STATE.lang              = LS.get('fl_lang',    'en');
  STATE.isMuted           = LS.get('fl_muted',   '0') === '1';
  STATE.selectedVoiceName = LS.get('fl_voice',   '');
  STATE.totalStars        = parseInt(LS.get('fl_stars',   '0'), 10);
  STATE.correctCount      = parseInt(LS.get('fl_correct', '0'), 10);
  STATE.sectionsVisited   = parseInt(LS.get('fl_visited', '0'), 10);
  STATE.drawings          = parseInt(LS.get('fl_draw',    '0'), 10);
  const vs = LS.getJSON('fl_vset',   []);
  const bs = LS.getJSON('fl_badges', []);
  STATE.visitedSet   = new Set(vs);
  STATE.earnedBadges = new Set(bs);
}

/* ============================================================
   4b.  MUTE / UNMUTE
   ============================================================ */
function toggleMute() {
  STATE.isMuted = !STATE.isMuted;
  saveState();
  applyMuteUI();
  if (STATE.isMuted) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    speechQueue = []; isSpeaking = false;
  } else {
    // Unmute — give a small audio confirmation
    speakText('Sound is on! Hello ' + STATE.user + '!', true);
  }
}

function applyMuteUI() {
  const btn  = document.getElementById('muteBtn');
  const icon = document.getElementById('muteIcon');
  if (!btn || !icon) return;
  if (STATE.isMuted) {
    icon.textContent = '🔇';
    btn.setAttribute('title', 'Sound is OFF – tap to unmute');
    btn.classList.add('muted');
  } else {
    icon.textContent = '🔊';
    btn.setAttribute('title', 'Sound is ON – tap to mute');
    btn.classList.remove('muted');
  }
}
function buildMascotPicker(targetId, currentMascot, onPick) {
  const container = document.getElementById(targetId);
  if (!container) return;
  container.innerHTML = '';
  MASCOTS.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'mascot-opt' + (m === currentMascot ? ' selected' : '');
    btn.textContent = m;
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', 'Select mascot ' + m);
    btn.addEventListener('click', () => {
      container.querySelectorAll('.mascot-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      onPick(m);
    });
    container.appendChild(btn);
  });
}

function initLogin() {
  loadState();                                      // ← restore full cache

  const loginMascotEl = document.getElementById('loginMascot');
  const pickerEl      = document.getElementById('mascotPicker');
  const nameInput     = document.getElementById('nameInput');
  const loginBtn      = document.getElementById('loginBtn');

  // Pre-fill saved name & mascot on login screen
  if (nameInput && STATE.user) nameInput.value = STATE.user;
  if (loginMascotEl) loginMascotEl.textContent = STATE.mascot;

  buildMascotPicker('mascotPicker', STATE.mascot, (m) => {
    STATE.mascot = m;
    if (loginMascotEl) loginMascotEl.textContent = m;
  });

  // Toggle mascot picker panel
  if (loginMascotEl) {
    loginMascotEl.addEventListener('click', () => {
      if (pickerEl) pickerEl.classList.toggle('open');
    });
  }

  // Buttons
  if (loginBtn)  loginBtn.addEventListener('click', doLogin);
  if (nameInput) nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

  // ── AUTO-LOGIN: skip login page if user is already cached ──
  if (STATE.user) {
    // Delay slightly so voice engine initialises first
    setTimeout(() => enterApp(STATE.user, true), 450);
    return;
  }

  // First-time greeting
  setTimeout(() => speakText('Hello! Welcome to Fun Learn! Please type your name and tap Let us Go!', true), 900);
}

function doLogin() {
  const nameInput = document.getElementById('nameInput');
  if (!nameInput) return;
  let name = nameInput.value.trim();
  if (!name) {
    nameInput.style.borderColor = '#FF4444';
    nameInput.focus();
    return;
  }
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  STATE.user = name;
  saveState();
  enterApp(name, false);
}

function enterApp(name, returning) {
  const loginPage = document.getElementById('loginPage');
  const mainApp   = document.getElementById('mainApp');
  if (loginPage) loginPage.style.display = 'none';
  if (mainApp)   mainApp.style.display   = 'block';

  applyMascot();
  setGreeting(name);
  restoreLang();          // ← restore last-used language tab
  applyMuteUI();          // ← restore mute button icon/state
  renderAll();
  checkBadges(false);
  updateDashboard();
  updateStarBadge();

  const h   = new Date().getHours();
  const tod = h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
  const msg = returning
    ? 'Welcome back ' + name + '! Good ' + tod + '! Great to see you again! Ready to learn?'
    : 'Good ' + tod + ' ' + name + '! Welcome to Fun Learn! I am so excited to learn with you today!';
  if (!STATE.isMuted) setTimeout(() => speakText(msg, true), 600);
}

function applyMascot() {
  const hm = document.getElementById('headerMascot');
  if (hm) hm.textContent = STATE.mascot;
}

function setGreeting(name) {
  const h   = new Date().getHours();
  const tod = h < 12 ? '🌅 Good Morning' : h < 17 ? '☀️ Good Afternoon' : '🌙 Good Evening';
  const el  = document.getElementById('greetingBar');
  if (el) el.textContent = tod + ', ' + name + '! 🎉 Ready to learn?';
}

function restoreLang() {
  // Reapply the cached language selection to the language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = (btn.dataset.lang === STATE.lang);
    btn.classList.toggle('active', isActive);
  });
}

function doLogout() {
  // Clear only the user session; keep nothing so login appears fresh
  try { localStorage.clear(); } catch(e) { /* ignore */ }
  window.location.reload();
}

/* ============================================================
   6.  LANGUAGE
   ============================================================ */
function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.lang = btn.dataset.lang || 'en';
      saveState();                               // ← persist language choice
      renderAll();
      const msgs = {
        en: 'Great! Now learning in English!',
        hi: 'बहुत अच्छा! अब हिंदी में सीखते हैं!',
        kn: 'ತುಂಬಾ ಒಳ್ಳೆಯದು! Let us learn Kannada!'
      };
      speakText(msgs[STATE.lang] || msgs.en, true);
    });
  });
}

function getTranslation(item) {
  if (STATE.lang === 'hi') return item.hi || '';
  if (STATE.lang === 'kn') return item.kn || '';
  return '';
}

/* ============================================================
   7.  NAVIGATION
   ============================================================ */
function initNav() {
  // Tab buttons in nav
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchSection(btn.dataset.tab));
  });
  // Awards icon in control bar
  document.querySelectorAll('[data-tab="awards"]').forEach(btn => {
    btn.addEventListener('click', () => switchSection('awards'));
  });
  // Header mascot → picker modal (reuse login mascot change)
  const hm = document.getElementById('headerMascot');
  if (hm) {
    hm.addEventListener('click', () => {
      showMascotModal();
    });
  }
  // Scroll to top
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
}

function switchSection(id) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('sec-' + id);
  if (target) target.classList.add('active');

  // Update nav tab highlights (awards btn lives outside nav, so handle carefully)
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === id);
  });

  // Track visited
  if (!STATE.visitedSet.has(id)) {
    STATE.visitedSet.add(id);
    STATE.sectionsVisited = STATE.visitedSet.size;
    saveState();
    checkBadges(true);
  }

  // Section-specific actions
  if (id === 'quiz')    initQuizSection();
  if (id === 'scripts') renderScripts(STATE.currentScript);
  if (id === 'awards')  updateDashboard();
  if (id === 'drawing') setTimeout(() => resizeCanvas(), 80);

  const msgs = {
    alphabets: 'Let us learn the alphabet! Tap each letter to hear it!',
    numbers:   'Numbers are so fun! Tap each number to count along!',
    colors:    'Look at all these beautiful colors! Can you name them all?',
    animals:   'Animals are amazing! Tap on each one to hear its name!',
    quiz:      'Quiz time ' + STATE.user + '! I believe in you!',
    drawing:   'Drawing time! Pick a tool and create beautiful art!',
    scripts:   'Let us explore Hindi and Kannada letters!',
    awards:    'Here are all your amazing achievements ' + STATE.user + '!'
  };
  speakText(msgs[id] || 'Let us learn!', true);
}

/* ============================================================
   8.  MASCOT MODAL (in-app)
   ============================================================ */
function showMascotModal() {
  // Build a quick inline modal
  let overlay = document.getElementById('mascotModal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'mascotModal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:5000;display:flex;align-items:center;justify-content:center;';
    const box = document.createElement('div');
    box.style.cssText = 'background:white;border-radius:28px;padding:24px 20px;max-width:380px;width:90%;max-height:80vh;overflow-y:auto;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3);animation:popIn .3s cubic-bezier(.34,1.56,.64,1);';
    box.innerHTML = '<div style="font-family:\'Fredoka One\',cursive;font-size:1.4rem;margin-bottom:12px;color:#555;">Choose Your Mascot! 🎉</div><div id="inAppMascotPicker" style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;"></div><button id="mascotModalClose" style="margin-top:16px;background:linear-gradient(135deg,#FF6BB5,#9B59B6);color:white;border:none;border-radius:20px;padding:9px 26px;font-family:\'Fredoka One\',cursive;font-size:1rem;cursor:pointer;">Done ✓</button>';
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    document.getElementById('mascotModalClose').addEventListener('click', () => {
      overlay.remove();
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  }
  buildMascotPicker('inAppMascotPicker', STATE.mascot, (m) => {
    STATE.mascot = m;
    saveState();
    applyMascot();
    speakText('Oh! I love your new mascot!', true);
  });
}

/* ============================================================
   9.  RENDER SECTIONS
   ============================================================ */
function renderAll() {
  renderAlphabets();
  renderNumbers();
  renderColors();
  renderAnimals();
}

function renderAlphabets() {
  const grid = document.getElementById('alphaGrid');
  if (!grid) return;
  grid.innerHTML = '';
  ALPHABET_DATA.forEach((a, i) => {
    const col = CARD_COLORS[i % CARD_COLORS.length];
    const tr  = getTranslation(a);
    const card = document.createElement('div');
    card.className = 'alpha-card';
    card.style.borderColor = col;
    card.style.background  = 'linear-gradient(135deg,' + col + '18,white)';
    card.innerHTML =
      '<span class="letter" style="color:' + col + '">' + a.l + '</span>' +
      '<span class="emoji">' + a.e + '</span>' +
      '<span class="word">' + a.w + '</span>' +
      (tr ? '<span class="transl">' + tr + '</span>' : '');
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(a.l + '! ' + a.l + ' for ' + a.w + (tr ? '. In your language: ' + tr : '') + '. Great job!', true);
      showModal(a.e, a.l + ' for ' + a.w, tr || a.hi, '"' + a.l + '" is for ' + a.w + '!');
    });
    grid.appendChild(card);
  });
}

function renderNumbers() {
  const grid = document.getElementById('numGrid');
  if (!grid) return;
  grid.innerHTML = '';
  NUMBER_DATA.forEach((n, i) => {
    const col = CARD_COLORS[i % CARD_COLORS.length];
    const tr  = getTranslation(n);
    const card = document.createElement('div');
    card.className = 'number-card';
    card.style.background  = 'linear-gradient(135deg,' + col + '20,white)';
    card.style.borderTop   = '5px solid ' + col;
    card.innerHTML =
      '<span class="num" style="color:' + col + '">' + n.n + '</span>' +
      '<span class="num-word" style="color:' + col + '">' + n.w + '</span>' +
      '<div class="dots" style="color:' + col + '">' + n.d + '</div>' +
      (tr ? '<div class="num-tr">' + tr + '</div>' : '');
    // Single click → single speech (no duplication)
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(n.n + '! ' + n.w + (tr ? '. In your language: ' + tr : '') + '! Can you count to ' + n.n + '?', true);
    });
    grid.appendChild(card);
  });
}

function renderColors() {
  const grid = document.getElementById('colorGrid');
  if (!grid) return;
  grid.innerHTML = '';
  COLOR_DATA.forEach(cl => {
    const tr   = getTranslation(cl);
    const card = document.createElement('div');
    card.className = 'color-card';
    card.style.background = cl.bg;
    card.innerHTML =
      '<span class="color-emoji">' + cl.e + '</span>' +
      '<div class="color-name">' + cl.name + '</div>' +
      '<div class="color-tr">' + (tr || cl.hi) + '</div>';
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(cl.name + '! This beautiful color is ' + cl.name + (tr ? '. In your language: ' + tr : '') + '!', true);
    });
    grid.appendChild(card);
  });
}

function renderAnimals() {
  const grid = document.getElementById('animalGrid');
  if (!grid) return;
  grid.innerHTML = '';
  ANIMAL_DATA.forEach((a, i) => {
    const col = CARD_COLORS[i % CARD_COLORS.length];
    const tr  = getTranslation(a);
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.style.borderTop = '4px solid ' + col;
    card.innerHTML =
      '<span class="animal-emoji">' + a.e + '</span>' +
      '<div class="animal-name" style="color:' + col + '">' + a.name + '</div>' +
      '<div class="animal-tr">' + (tr || a.hi) + '</div>' +
      '<div class="animal-sound">' + a.sound + '</div>';
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(a.name + '! The ' + a.name + ' says ' + a.sound + (tr ? '. In your language: ' + tr : '') + ' Wonderful!', true);
    });
    grid.appendChild(card);
  });
}

/* ============================================================
   10.  SCRIPTS (Hindi / Kannada)
   ============================================================ */
function initScripts() {
  document.querySelectorAll('.script-sub-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.script-sub-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.currentScript = btn.dataset.script || 'hindi';
      renderScripts(STATE.currentScript);
      speakText(STATE.currentScript === 'hindi'
        ? 'Let us learn Hindi letters! Tap each one!'
        : 'Let us learn Kannada letters! Tap each one!', true);
    });
  });
}

function renderScripts(tab) {
  const grid = document.getElementById('scriptsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const vowels     = tab === 'hindi' ? HINDI_VOWELS     : KANNADA_VOWELS;
  const consonants = tab === 'hindi' ? HINDI_CONSONANTS : KANNADA_CONSONANTS;
  const all        = [...vowels, ...consonants];

  all.forEach((s, i) => {
    const col      = CARD_COLORS[i % CARD_COLORS.length];
    const isVowel  = i < vowels.length;
    const card     = document.createElement('div');
    card.className = 'script-card';
    card.style.borderColor = col;
    card.style.background  = 'linear-gradient(135deg,' + col + '15,white)';
    card.innerHTML =
      '<span class="script-char" style="color:' + col + '">' + s.ch + '</span>' +
      '<span class="script-roman">' + s.roman + '</span>' +
      '<span class="script-word">' + s.w + '</span>' +
      (isVowel ? '<span class="vowel-badge" style="background:' + col + '">vowel</span>' : '');
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(s.roman + '! As in ' + s.w + '! Excellent! You are so smart!', true);
      showModal(s.ch, s.roman.toUpperCase(), s.ch, '"' + s.ch + '" sounds like "' + s.roman + '" — as in ' + s.w + '!');
    });
    grid.appendChild(card);
  });
}

/* ============================================================
   11.  QUIZ
   ============================================================ */
function initQuizSection() {
  // Bind type selector
  document.querySelectorAll('.quiz-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.quizType  = btn.dataset.qtype || 'alphabets';
      STATE.quizScore = 0;
      STATE.quizCount = 1;
      document.getElementById('quizScore').textContent = '0';
      document.getElementById('quizNum').textContent   = '1';
      document.getElementById('scoreStars').textContent = '☆☆☆☆☆';
      loadQuestion();
      const msgs = {
        alphabets: 'Alphabet quiz! Look at the picture and find the right letter!',
        numbers:   'Number quiz! Tell me the right number word!',
        colors:    'Color quiz! Can you name all the colors?',
        animals:   'Animal quiz! Do you know these amazing animals?'
      };
      speakText((msgs[STATE.quizType] || 'Quiz time!') + ' ' + STATE.user + ', I believe in you!', true);
    });
  });

  // Next button
  const nb = document.getElementById('quizNextBtn');
  if (nb) nb.addEventListener('click', nextQuestion);

  loadQuestion();
}

function loadQuestion() {
  STATE.quizAnswered = false;
  const fb = document.getElementById('quizFeedback');
  const nb = document.getElementById('quizNextBtn');
  if (fb) fb.textContent = '';
  if (nb) nb.style.display = 'none';
  document.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('correct','wrong'));

  let pool, correct, opts, img, q, labels, correctLabel;

  if (STATE.quizType === 'alphabets') {
    pool = shuffle([...ALPHABET_DATA]);
    correct = pool[0]; opts = shuffle(pool.slice(0, 4));
    img = correct.e;
    q = 'What letter does "' + correct.w + '" start with?';
    labels = opts.map(o => o.l); correctLabel = correct.l;
  } else if (STATE.quizType === 'numbers') {
    pool = shuffle([...NUMBER_DATA]);
    correct = pool[0]; opts = shuffle(pool.slice(0, 4));
    img = String(correct.n);
    q = 'How do we say ' + correct.n + ' in words?';
    labels = opts.map(o => o.w); correctLabel = correct.w;
  } else if (STATE.quizType === 'colors') {
    pool = shuffle([...COLOR_DATA]);
    correct = pool[0]; opts = shuffle(pool.slice(0, 4));
    img = correct.e;
    q = 'What color is "' + correct.e + '"?';
    labels = opts.map(o => o.name); correctLabel = correct.name;
  } else {
    pool = shuffle([...ANIMAL_DATA]);
    correct = pool[0]; opts = shuffle(pool.slice(0, 4));
    img = correct.e;
    q = 'Which animal is this?';
    labels = opts.map(o => o.name); correctLabel = correct.name;
  }

  const qi = document.getElementById('quizImage');
  const qq = document.getElementById('quizQuestion');
  if (qi) qi.textContent = img;
  if (qq) qq.textContent = q;
  renderQuizOptions(labels, correctLabel);

  setTimeout(() => {
    if (!STATE.quizAnswered) speakText(q + ' Look carefully and choose! I believe in you!');
  }, 2200);
}

function renderQuizOptions(labels, correct) {
  const el = document.getElementById('quizOptions');
  if (!el) return;
  el.innerHTML = '';
  labels.forEach(label => {
    const btn = document.createElement('button');
    btn.className   = 'quiz-opt';
    btn.textContent = label;
    btn.addEventListener('click', () => checkAnswer(label, correct, btn));
    el.appendChild(btn);
  });
}

function checkAnswer(selected, correct, btn) {
  if (STATE.quizAnswered) return;
  STATE.quizAnswered = true;
  const fb = document.getElementById('quizFeedback');
  const nb = document.getElementById('quizNextBtn');

  if (selected === correct) {
    btn.classList.add('correct');
    if (fb) { fb.textContent = '🎉 Correct! Amazing!'; fb.style.color = '#2d7a2d'; }
    STATE.quizScore++;
    STATE.correctCount++;
    document.getElementById('quizScore').textContent = String(STATE.quizScore);
    updateQuizStars();
    addStar(2);
    triggerExplosion('big');
    speakText(CORRECT_MSGS[Math.floor(Math.random() * CORRECT_MSGS.length)], true);
    checkBadges(true);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-opt').forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
    if (fb) { fb.textContent = '😊 Keep trying! You are doing great!'; fb.style.color = '#aa1111'; }
    const msg = WRONG_MSGS[Math.floor(Math.random() * WRONG_MSGS.length)];
    speakText(msg + ' The correct answer is ' + correct + '.', true);
  }
  saveState();
  if (nb) nb.style.display = 'inline-block';
}

function updateQuizStars() {
  const s  = Math.min(5, Math.floor(STATE.quizScore / 2));
  const el = document.getElementById('scoreStars');
  if (el) el.textContent = '⭐'.repeat(s) + '☆'.repeat(5 - s);
}

function nextQuestion() {
  STATE.quizCount++;
  const qn = document.getElementById('quizNum');
  if (qn) qn.textContent = String(Math.min(STATE.quizCount, 10));

  if (STATE.quizCount > 10) {
    const qi = document.getElementById('quizImage');
    const qq = document.getElementById('quizQuestion');
    const qo = document.getElementById('quizOptions');
    const nb = document.getElementById('quizNextBtn');
    if (qi) qi.textContent = '🏆';
    if (qq) qq.textContent = 'You scored ' + STATE.quizScore + ' out of 10! 🎉';
    if (qo) qo.innerHTML   = '';
    if (nb) { nb.textContent = '🔄 Play Again!'; nb.style.display = 'inline-block'; }
    triggerExplosion('mega');
    const msg = STATE.quizScore >= 8
      ? 'Incredible ' + STATE.user + '! ' + STATE.quizScore + ' out of 10! You are a genius!'
      : STATE.quizScore >= 5
      ? 'Well done ' + STATE.user + '! ' + STATE.quizScore + ' out of 10! You are getting better!'
      : STATE.quizScore + ' out of 10 ' + STATE.user + '! Every try makes you smarter!';
    speakText(msg, true);

    // Rebind button for restart
    if (nb) {
      const newNb = nb.cloneNode(true);
      nb.parentNode.replaceChild(newNb, nb);
      newNb.addEventListener('click', () => {
        STATE.quizScore = 0; STATE.quizCount = 1;
        document.getElementById('quizScore').textContent = '0';
        document.getElementById('quizNum').textContent   = '1';
        document.getElementById('scoreStars').textContent = '☆☆☆☆☆';
        newNb.textContent = 'Next ➡️';
        const freshNb = newNb.cloneNode(true);
        newNb.parentNode.replaceChild(freshNb, newNb);
        freshNb.addEventListener('click', nextQuestion);
        freshNb.style.display = 'none';
        loadQuestion();
      });
    }
  } else {
    loadQuestion();
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* ============================================================
   12.  DRAWING CANVAS
   ============================================================ */
let drawCanvas, drawCtx;
const undoStack = [];

function initCanvas() {
  drawCanvas = document.getElementById('drawCanvas');
  if (!drawCanvas) return;
  drawCtx = drawCanvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', () => setTimeout(resizeCanvas, 150));

  // Tool buttons
  document.querySelectorAll('.draw-btn[data-tool]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.draw-btn[data-tool]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.drawTool = btn.dataset.tool || 'pen';
      drawCanvas.style.cursor = STATE.drawTool === 'eraser' ? 'cell' : 'crosshair';
    });
  });

  // Action buttons
  const clearBtn = document.getElementById('clearBtn');
  const undoBtn  = document.getElementById('undoBtn');
  const saveBtn  = document.getElementById('saveBtn');
  if (clearBtn) clearBtn.addEventListener('click', clearCanvas);
  if (undoBtn)  undoBtn.addEventListener('click',  undoDraw);
  if (saveBtn)  saveBtn.addEventListener('click',  downloadArt);

  // Brush size
  const bs = document.getElementById('brushSize');
  if (bs) bs.addEventListener('input', e => { STATE.brushSize = parseInt(e.target.value, 10); });

  // Color palette
  const PAL_COLORS = ['#FF4444','#FF6BB5','#FF8C00','#FFD700','#7EC850','#4A90E2','#9B59B6','#1ABC9C','#333333','#8B4513','#ffffff'];
  const pal = document.getElementById('colorPalette');
  if (pal) {
    PAL_COLORS.forEach((col, i) => {
      const dot = document.createElement('div');
      dot.className = 'palette-dot' + (i === 1 ? ' active' : '');
      dot.style.background = col;
      if (col === '#ffffff') dot.style.border = '2px solid #ccc';
      dot.addEventListener('click', () => {
        STATE.drawColor = col;
        if (STATE.drawTool === 'eraser') {
          STATE.drawTool = 'pen';
          document.querySelectorAll('.draw-btn[data-tool]').forEach(b => b.classList.remove('active'));
          const penBtn = document.querySelector('.draw-btn[data-tool="pen"]');
          if (penBtn) penBtn.classList.add('active');
        }
        document.querySelectorAll('.palette-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
      pal.appendChild(dot);
    });
  }

  // Events
  drawCanvas.addEventListener('mousedown',  onDrawStart);
  drawCanvas.addEventListener('mousemove',  onDrawMove);
  drawCanvas.addEventListener('mouseup',    onDrawEnd);
  drawCanvas.addEventListener('mouseleave', onDrawEnd);
  drawCanvas.addEventListener('touchstart', onDrawStart, {passive: false});
  drawCanvas.addEventListener('touchmove',  onDrawMove,  {passive: false});
  drawCanvas.addEventListener('touchend',   onDrawEnd);
}

function resizeCanvas() {
  if (!drawCanvas || !drawCtx) return;
  const saved = drawCtx.getImageData(0, 0, drawCanvas.width, drawCanvas.height);
  const parent = drawCanvas.parentElement || document.body;
  drawCanvas.width  = Math.min(720, parent.clientWidth - 28);
  drawCanvas.height = 370;
  try { drawCtx.putImageData(saved, 0, 0); } catch(e) { /* ignore if size changed */ }
}

function getCanvasPos(e) {
  const rect = drawCanvas.getBoundingClientRect();
  const sx   = drawCanvas.width  / rect.width;
  const sy   = drawCanvas.height / rect.height;
  if (e.touches && e.touches[0]) {
    return { x: (e.touches[0].clientX - rect.left) * sx, y: (e.touches[0].clientY - rect.top) * sy };
  }
  return { x: (e.clientX - rect.left) * sx, y: (e.clientY - rect.top) * sy };
}

function saveUndo() {
  undoStack.push(drawCtx.getImageData(0, 0, drawCanvas.width, drawCanvas.height));
  if (undoStack.length > 25) undoStack.shift();
}

function onDrawStart(e) {
  e.preventDefault();
  STATE.isDrawing = true;
  const p = getCanvasPos(e);
  STATE.startX = p.x; STATE.startY = p.y;
  saveUndo();
  STATE.shapeSnapshot = drawCtx.getImageData(0, 0, drawCanvas.width, drawCanvas.height);
  if (['pen','brush','spray','eraser'].includes(STATE.drawTool)) {
    drawCtx.beginPath();
    drawCtx.moveTo(p.x, p.y);
  }
  if (STATE.drawTool === 'fill') {
    doFloodFill(Math.round(p.x), Math.round(p.y));
    STATE.isDrawing = false;
  }
  // Award for drawing
  if (STATE.drawings === 0) {
    STATE.drawings = 1;
    saveState();
    checkBadges(true);
  }
}

function onDrawMove(e) {
  e.preventDefault();
  if (!STATE.isDrawing) return;
  const p  = getCanvasPos(e);
  const sz = STATE.brushSize;

  switch (STATE.drawTool) {
    case 'pen':
      drawCtx.lineWidth   = sz;
      drawCtx.lineCap     = 'round';
      drawCtx.lineJoin    = 'round';
      drawCtx.strokeStyle = STATE.drawColor;
      drawCtx.lineTo(p.x, p.y);
      drawCtx.stroke();
      drawCtx.beginPath();
      drawCtx.moveTo(p.x, p.y);
      break;

    case 'brush':
      drawCtx.globalAlpha = 0.28;
      drawCtx.fillStyle   = STATE.drawColor;
      for (let k = 0; k < 8; k++) {
        drawCtx.beginPath();
        drawCtx.arc(
          p.x + (Math.random() - 0.5) * sz * 2,
          p.y + (Math.random() - 0.5) * sz * 2,
          sz * 0.65, 0, Math.PI * 2
        );
        drawCtx.fill();
      }
      drawCtx.globalAlpha = 1;
      break;

    case 'spray':
      for (let k = 0; k < 30; k++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * sz * 2;
        drawCtx.globalAlpha = 0.12 + Math.random() * 0.25;
        drawCtx.fillStyle   = STATE.drawColor;
        drawCtx.beginPath();
        drawCtx.arc(p.x + r * Math.cos(a), p.y + r * Math.sin(a), 1.2, 0, Math.PI * 2);
        drawCtx.fill();
      }
      drawCtx.globalAlpha = 1;
      break;

    case 'eraser':
      drawCtx.save();
      drawCtx.globalCompositeOperation = 'destination-out';
      drawCtx.lineWidth   = sz * 2;
      drawCtx.lineCap     = 'round';
      drawCtx.strokeStyle = 'rgba(0,0,0,1)';
      drawCtx.lineTo(p.x, p.y);
      drawCtx.stroke();
      drawCtx.beginPath();
      drawCtx.moveTo(p.x, p.y);
      drawCtx.restore();
      break;

    case 'circle':
    case 'rect':
    case 'triangle':
    case 'star':
    case 'line':
      if (STATE.shapeSnapshot) drawCtx.putImageData(STATE.shapeSnapshot, 0, 0);
      drawShape(STATE.drawTool, STATE.startX, STATE.startY, p.x, p.y, sz);
      break;

    default: break;
  }
}

function onDrawEnd() {
  STATE.isDrawing      = false;
  STATE.shapeSnapshot  = null;
}

function drawShape(tool, x1, y1, x2, y2, lineW) {
  const dx   = x2 - x1;
  const dy   = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  drawCtx.strokeStyle = STATE.drawColor;
  drawCtx.fillStyle   = STATE.drawColor + '44';
  drawCtx.lineWidth   = lineW;
  drawCtx.lineCap     = 'round';
  drawCtx.beginPath();
  switch (tool) {
    case 'circle':
      drawCtx.arc(x1, y1, dist, 0, Math.PI * 2);
      drawCtx.fill(); drawCtx.stroke();
      break;
    case 'rect':
      drawCtx.rect(x1, y1, dx, dy);
      drawCtx.fill(); drawCtx.stroke();
      break;
    case 'line':
      drawCtx.moveTo(x1, y1); drawCtx.lineTo(x2, y2);
      drawCtx.stroke();
      break;
    case 'triangle':
      drawCtx.moveTo(x1, y2); drawCtx.lineTo(x2, y2); drawCtx.lineTo((x1 + x2) / 2, y1);
      drawCtx.closePath(); drawCtx.fill(); drawCtx.stroke();
      break;
    case 'star':
      drawStarPath(drawCtx, x1, y1, dist, dist / 2.2, 5);
      drawCtx.fill(); drawCtx.stroke();
      break;
    default: break;
  }
}

function drawStarPath(ctx, cx, cy, outerR, innerR, pts) {
  ctx.beginPath();
  for (let i = 0; i < pts * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = (i * Math.PI) / pts - Math.PI / 2;
    if (i === 0) ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    else         ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
  }
  ctx.closePath();
}

function doFloodFill(startXi, startYi) {
  const img  = drawCtx.getImageData(0, 0, drawCanvas.width, drawCanvas.height);
  const data = img.data;
  const W    = drawCanvas.width;
  const H    = drawCanvas.height;
  const idx0 = (startXi + startYi * W) * 4;
  const tR = data[idx0], tG = data[idx0+1], tB = data[idx0+2], tA = data[idx0+3];
  const fill = hexToRgba(STATE.drawColor);
  if (tR === fill[0] && tG === fill[1] && tB === fill[2] && tA === fill[3]) return;

  const stack   = [[startXi, startYi]];
  const visited = new Uint8Array(W * H);

  while (stack.length) {
    const pair = stack.pop();
    const cx = pair[0], cy = pair[1];
    if (cx < 0 || cx >= W || cy < 0 || cy >= H) continue;
    if (visited[cx + cy * W]) continue;
    const idx = (cx + cy * W) * 4;
    if (!colorMatch(data[idx], data[idx+1], data[idx+2], data[idx+3], tR, tG, tB, tA)) continue;
    visited[cx + cy * W] = 1;
    data[idx] = fill[0]; data[idx+1] = fill[1]; data[idx+2] = fill[2]; data[idx+3] = fill[3];
    stack.push([cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1]);
  }
  drawCtx.putImageData(img, 0, 0);
}

function colorMatch(r,g,b,a,tr,tg,tb,ta) {
  return Math.abs(r-tr)<32 && Math.abs(g-tg)<32 && Math.abs(b-tb)<32 && Math.abs(a-ta)<32;
}

function hexToRgba(hex) {
  const h = (hex.startsWith('#') ? hex.slice(1) : hex).padEnd(6,'0');
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16), 255];
}

function clearCanvas() {
  if (!drawCtx || !drawCanvas) return;
  saveUndo();
  drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
  speakText('Canvas cleared! Now draw something new! What will you create today?', true);
}

function undoDraw() {
  if (undoStack.length && drawCtx && drawCanvas) {
    drawCtx.putImageData(undoStack.pop(), 0, 0);
  }
}

function downloadArt() {
  if (!drawCanvas) return;
  const link = document.createElement('a');
  link.download = (STATE.user || 'my') + '-artwork.png';
  link.href = drawCanvas.toDataURL('image/png');
  link.click();
  STATE.drawings = Math.max(STATE.drawings, 1);
  addStar(3);
  saveState();
  checkBadges(true);
  speakText('Your beautiful artwork is saved ' + STATE.user + '! You are such a talented artist!', true);
}

/* ============================================================
   13.  AWARDS & BADGES
   ============================================================ */
function addStar(n) {
  STATE.totalStars += n;
  updateStarBadge();
  saveState();
}

function updateStarBadge() {
  const sb = document.getElementById('starBadge');
  if (sb) sb.textContent = String(STATE.totalStars);
}

function checkBadges(announce) {
  BADGE_DEFS.forEach(def => {
    let val = 0;
    if (def.field === 'correctCount')   val = STATE.correctCount;
    if (def.field === 'drawings')       val = STATE.drawings;
    if (def.field === 'sectionsVisited')val = STATE.sectionsVisited;
    if (val >= def.goal) earnBadge(def, announce);
  });
  updateDashboard();
}

function earnBadge(def, announce) {
  const wasEarned = STATE.earnedBadges.has(def.id);
  STATE.earnedBadges.add(def.id);
  // Update badge card in dashboard
  const card = document.getElementById('bdg-' + def.id);
  if (card) card.classList.add('earned');
  if (!wasEarned && announce) {
    saveState();
    showAwardToast(def.icon, def.name, def.desc);
  }
}

function showAwardToast(icon, title, sub) {
  const toast = document.getElementById('awardToast');
  const ic    = document.getElementById('awardIcon');
  const ti    = document.getElementById('awardTitle');
  const su    = document.getElementById('awardSub');
  if (!toast) return;
  if (ic) ic.textContent = icon;
  if (ti) ti.textContent = title;
  if (su) su.textContent = sub;
  toast.classList.add('show');
  triggerExplosion('award');
  speakText('Wow! Congratulations ' + STATE.user + '! You earned the ' + title + ' badge! ' + sub + ' You are absolutely amazing!', true);
  setTimeout(() => toast.classList.remove('show'), 3800);
}

function buildBadgesGrid() {
  const grid = document.getElementById('badgesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  BADGE_DEFS.forEach(def => {
    const earned = STATE.earnedBadges.has(def.id);
    const card = document.createElement('div');
    card.className = 'badge-card' + (earned ? ' earned' : '');
    card.id        = 'bdg-' + def.id;
    card.innerHTML =
      '<span class="badge-card-icon">' + def.icon + '</span>' +
      '<div class="badge-card-name">' + def.name + '</div>' +
      '<div class="badge-card-desc">' + def.desc + '</div>';
    grid.appendChild(card);
  });
}

function updateDashboard() {
  // Star counts
  const ds  = document.getElementById('dashStars');
  const dsc = document.getElementById('dashStarCount');
  if (ds)  ds.textContent  = '⭐'.repeat(Math.min(10, Math.floor(STATE.totalStars / 5))) || '☆';
  if (dsc) dsc.textContent = String(STATE.totalStars);

  // Progress bars
  const maxCorrect  = 25;
  const maxStars    = 100;
  const maxSections = 7;
  const maxBadges   = BADGE_DEFS.length;
  const earned      = STATE.earnedBadges.size;

  setProgress('progCorrect', 'pfCorrect',  STATE.correctCount,    maxCorrect);
  setProgress('progStars',   'pfStars',    STATE.totalStars,      maxStars);
  setProgress('progSections','pfSections', STATE.sectionsVisited, maxSections, '/' + maxSections);
  setProgress('progBadges',  'pfBadges',   earned,                maxBadges,   '/' + maxBadges);
}

function setProgress(labelId, barId, val, max, suffix) {
  const lbl = document.getElementById(labelId);
  const bar = document.getElementById(barId);
  if (lbl) lbl.textContent = String(val) + (suffix || '');
  if (bar) bar.style.width = Math.min(100, Math.round((val / max) * 100)) + '%';
}

/* ============================================================
   14.  PARTICLE EXPLOSION ENGINE
   ============================================================ */
const expCanvas  = document.getElementById('explosionCanvas');
const expCtx     = expCanvas ? expCanvas.getContext('2d') : null;
let   particles  = [];
let   animActive = false;

function resizeExpCanvas() {
  if (!expCanvas) return;
  expCanvas.width  = window.innerWidth;
  expCanvas.height = window.innerHeight;
}
resizeExpCanvas();
window.addEventListener('resize', resizeExpCanvas);

function triggerExplosion(type) {
  if (!expCtx) return;
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const cfg = {
    small: {n:22,  sp:6,  sz:7,  g:0.18},
    big:   {n:55,  sp:11, sz:11, g:0.20},
    award: {n:75,  sp:13, sz:13, g:0.17},
    mega:  {n:110, sp:15, sz:15, g:0.15}
  }[type] || {n:22, sp:6, sz:7, g:0.18};

  for (let i = 0; i < cfg.n; i++) {
    const angle = (Math.PI * 2 * i) / cfg.n + Math.random() * 0.6;
    const speed = cfg.sp * (0.5 + Math.random());
    particles.push({
      x:     cx + (Math.random() - 0.5) * 80,
      y:     cy + (Math.random() - 0.5) * 80,
      vx:    Math.cos(angle) * speed,
      vy:    Math.sin(angle) * speed - 4,
      alpha: 1,
      sz:    cfg.sz * (0.5 + Math.random()),
      color: 'hsl(' + Math.round(Math.random() * 360) + ',100%,60%)',
      emoji: Math.random() > 0.45 ? EMOJI_PARTICLES[Math.floor(Math.random() * EMOJI_PARTICLES.length)] : null,
      g:     cfg.g,
      spin:  (Math.random() - 0.5) * 0.35,
      angle: Math.random() * Math.PI * 2
    });
  }
  if (!animActive) animLoop();
}

function animLoop() {
  if (!expCtx) { animActive = false; return; }
  if (!particles.length) {
    animActive = false;
    expCtx.clearRect(0, 0, expCanvas.width, expCanvas.height);
    return;
  }
  animActive = true;
  expCtx.clearRect(0, 0, expCanvas.width, expCanvas.height);
  particles = particles.filter(p => p.alpha > 0.01);
  particles.forEach(p => {
    p.x     += p.vx;
    p.y     += p.vy;
    p.vy    += p.g;
    p.alpha -= 0.017;
    p.angle += p.spin;
    expCtx.save();
    expCtx.globalAlpha = Math.max(0, p.alpha);
    expCtx.translate(p.x, p.y);
    expCtx.rotate(p.angle);
    if (p.emoji) {
      expCtx.font         = (p.sz * 2) + 'px serif';
      expCtx.textAlign    = 'center';
      expCtx.textBaseline = 'middle';
      expCtx.fillText(p.emoji, 0, 0);
    } else {
      expCtx.fillStyle = p.color;
      expCtx.fillRect(-p.sz / 2, -p.sz / 2, p.sz, p.sz);
    }
    expCtx.restore();
  });
  requestAnimationFrame(animLoop);
}

/* ============================================================
   15.  MODAL
   ============================================================ */
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const box     = document.getElementById('modalBox');
  const closeBtn= document.getElementById('modalClose');
  if (overlay) overlay.addEventListener('click', closeModal);
  if (box)     box.addEventListener('click',     e => e.stopPropagation());
  if (closeBtn)closeBtn.addEventListener('click', closeModal);
}

function showModal(emoji, title, trans, desc) {
  const el = {
    emoji: document.getElementById('modalEmoji'),
    title: document.getElementById('modalTitle'),
    trans: document.getElementById('modalTrans'),
    desc:  document.getElementById('modalDesc'),
    overlay: document.getElementById('modalOverlay')
  };
  if (el.emoji)   el.emoji.textContent   = emoji;
  if (el.title)   el.title.textContent   = title;
  if (el.trans)   el.trans.textContent   = trans  || '';
  if (el.desc)    el.desc.textContent    = desc   || '';
  if (el.overlay) el.overlay.classList.add('show');
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('show');
}

/* ============================================================
   16.  VOICE PANEL TOGGLE + MUTE
   ============================================================ */
function initVoicePanel() {
  const iconBtn = document.getElementById('voiceIconBtn');
  const panel   = document.getElementById('voicePanel');
  const testBtn = document.getElementById('voiceTestBtn');
  const selEl   = document.getElementById('voiceSelect');
  const muteBtn = document.getElementById('muteBtn');

  if (iconBtn && panel) {
    iconBtn.addEventListener('click', e => {
      e.stopPropagation();
      panel.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      const wrap = document.getElementById('voiceWrap');
      if (wrap && !wrap.contains(e.target)) panel.classList.remove('open');
    });
  }
  if (testBtn) testBtn.addEventListener('click', () => {
    if (STATE.isMuted) {
      speakText('');   // no-op — tell user via visual
      const icon = document.getElementById('muteIcon');
      if (icon) {
        icon.textContent = '🔇';
        setTimeout(() => { icon.textContent = '🔇'; }, 500);
      }
    } else {
      speakText('Hello! I am your Fun Learn teacher! Let us learn together!', true);
    }
  });
  if (selEl) selEl.addEventListener('change', onVoiceChange);

  // Mute button
  if (muteBtn) muteBtn.addEventListener('click', toggleMute);
}


/* ============================================================
   17.  BOOTSTRAP
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initVoice();
  initLogin();     // ← loads state, auto-logins if cached, or shows login screen
  initLang();
  initNav();
  initScripts();
  initModal();
  initVoicePanel();
  buildBadgesGrid();
  initCanvas();
  // Note: speakText welcome is handled inside initLogin / enterApp
});
