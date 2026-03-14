/* ============================================================
   FunLearn – LKG Magic World | app.js v4.0
   - Language = subject to learn (EN shows English, HI shows Hindi, KN shows Kannada)
   - No voice selection UI – single best voice chosen automatically
   - Fixed double-speech bug (single cancel+speak pattern)
   - No greeting/guide speech – plain informational voice only
   - Responsive, error-free, fully featured
   ============================================================ */

'use strict';

/* ============================================================
   1. DATA
   ============================================================ */

const MASCOTS = [
  '🦄','🐶','🐱','🐸','🐯','🦁','🐼','🐨','🦊','🐻',
  '🐰','🐧','🦋','🐳','🦒','🐘','🦓','🦜','🐬','🐲',
  '🧸','🤖','👾','🌟','⚡','🍄','🌈','🚀','🎃','🦸'
];

/* ------ ENGLISH DATA ------ */
const EN_ALPHABETS = [
  {l:'A', w:'Apple',    e:'🍎'}, {l:'B', w:'Ball',     e:'⚽'},
  {l:'C', w:'Cat',      e:'🐱'}, {l:'D', w:'Dog',      e:'🐶'},
  {l:'E', w:'Elephant', e:'🐘'}, {l:'F', w:'Fish',     e:'🐟'},
  {l:'G', w:'Grapes',   e:'🍇'}, {l:'H', w:'House',    e:'🏠'},
  {l:'I', w:'Ice Cream',e:'🍦'}, {l:'J', w:'Jacket',   e:'🧥'},
  {l:'K', w:'Kite',     e:'🪁'}, {l:'L', w:'Lion',     e:'🦁'},
  {l:'M', w:'Mango',    e:'🥭'}, {l:'N', w:'Nest',     e:'🪹'},
  {l:'O', w:'Orange',   e:'🍊'}, {l:'P', w:'Parrot',   e:'🦜'},
  {l:'Q', w:'Queen',    e:'👸'}, {l:'R', w:'Rabbit',   e:'🐰'},
  {l:'S', w:'Sun',      e:'☀️'}, {l:'T', w:'Tiger',    e:'🐯'},
  {l:'U', w:'Umbrella', e:'☂️'}, {l:'V', w:'Van',      e:'🚐'},
  {l:'W', w:'Water',    e:'💧'}, {l:'X', w:'Xylophone',e:'🎵'},
  {l:'Y', w:'Yak',      e:'🐮'}, {l:'Z', w:'Zebra',    e:'🦓'}
];

const EN_NUMBERS = [
  {n:'1', w:'One',   d:'●',                    speak:'One'},
  {n:'2', w:'Two',   d:'● ●',                  speak:'Two'},
  {n:'3', w:'Three', d:'● ● ●',                speak:'Three'},
  {n:'4', w:'Four',  d:'● ● ● ●',              speak:'Four'},
  {n:'5', w:'Five',  d:'● ● ● ● ●',            speak:'Five'},
  {n:'6', w:'Six',   d:'● ● ● ● ● ●',          speak:'Six'},
  {n:'7', w:'Seven', d:'● ● ● ● ● ● ●',        speak:'Seven'},
  {n:'8', w:'Eight', d:'● ● ● ● ● ● ● ●',      speak:'Eight'},
  {n:'9', w:'Nine',  d:'● ● ● ● ● ● ● ● ●',    speak:'Nine'},
  {n:'10',w:'Ten',   d:'● ● ● ● ● ● ● ● ● ●',  speak:'Ten'}
];

const EN_COLORS = [
  {name:'Red',    bg:'#FF4444', e:'🍎'}, {name:'Blue',   bg:'#4A90E2', e:'🫐'},
  {name:'Yellow', bg:'#FFD700', e:'🌻'}, {name:'Green',  bg:'#7EC850', e:'🍃'},
  {name:'Orange', bg:'#FF8C00', e:'🍊'}, {name:'Pink',   bg:'#FF6BB5', e:'🌸'},
  {name:'Purple', bg:'#9B59B6', e:'🍇'}, {name:'Brown',  bg:'#8B4513', e:'🤎'},
  {name:'White',  bg:'#BDC3C7', e:'⬜'}, {name:'Black',  bg:'#2C3E50', e:'🖤'}
];

const EN_ANIMALS = [
  {e:'🐶',name:'Dog',      sound:'Woof!'},   {e:'🐱',name:'Cat',       sound:'Meow!'},
  {e:'🐮',name:'Cow',      sound:'Moo!'},    {e:'🐘',name:'Elephant',  sound:'Trumpet!'},
  {e:'🦁',name:'Lion',     sound:'Roar!'},   {e:'🐯',name:'Tiger',     sound:'Growl!'},
  {e:'🐸',name:'Frog',     sound:'Ribbit!'}, {e:'🐰',name:'Rabbit',    sound:'Squeak!'},
  {e:'🦋',name:'Butterfly',sound:'Flutter!'},{e:'🐦',name:'Bird',      sound:'Tweet!'},
  {e:'🦒',name:'Giraffe',  sound:'Hum!'},    {e:'🦜',name:'Parrot',    sound:'Hello!'},
  {e:'🐧',name:'Penguin',  sound:'Squawk!'}, {e:'🐢',name:'Turtle',    sound:'Slow!'},
  {e:'🐟',name:'Fish',     sound:'Splash!'}, {e:'🦓',name:'Zebra',     sound:'Bark!'}
];

/* ------ HINDI DATA ------ */
const HI_ALPHABETS = [
  {l:'अ', w:'अनार',  e:'🍎'}, {l:'आ', w:'आम',    e:'🥭'},
  {l:'इ', w:'इमली',  e:'🌿'}, {l:'ई', w:'ईख',    e:'🌾'},
  {l:'उ', w:'उल्लू', e:'🦉'}, {l:'ऊ', w:'ऊन',    e:'🧶'},
  {l:'ए', w:'एड़ी',  e:'👣'}, {l:'ओ', w:'ओखली',  e:'🪨'},
  {l:'क', w:'कमल',   e:'🌸'}, {l:'ख', w:'खरगोश', e:'🐰'},
  {l:'ग', w:'गाय',   e:'🐮'}, {l:'घ', w:'घड़ी',  e:'⏰'},
  {l:'च', w:'चाँद',  e:'🌙'}, {l:'छ', w:'छाता',  e:'☂️'},
  {l:'ज', w:'जहाज',  e:'✈️'}, {l:'ट', w:'टमाटर', e:'🍅'},
  {l:'त', w:'तोता',  e:'🦜'}, {l:'द', w:'दरवाज़ा',e:'🚪'},
  {l:'न', w:'नाव',   e:'⛵'}, {l:'प', w:'पतंग',   e:'🪁'},
  {l:'ब', w:'बकरी',  e:'🐐'}, {l:'म', w:'मछली',  e:'🐟'},
  {l:'य', w:'यात्रा',e:'🚂'}, {l:'र', w:'राजा',  e:'👑'},
  {l:'स', w:'सेब',   e:'🍎'}, {l:'ह', w:'हाथी',  e:'🐘'}
];

const HI_NUMBERS = [
  {n:'१', w:'एक',   d:'●',                    speak:'Ek'},
  {n:'२', w:'दो',   d:'● ●',                  speak:'Do'},
  {n:'३', w:'तीन',  d:'● ● ●',                speak:'Teen'},
  {n:'४', w:'चार',  d:'● ● ● ●',              speak:'Chaar'},
  {n:'५', w:'पाँच', d:'● ● ● ● ●',            speak:'Paanch'},
  {n:'६', w:'छह',   d:'● ● ● ● ● ●',          speak:'Chhah'},
  {n:'७', w:'सात',  d:'● ● ● ● ● ● ●',        speak:'Saat'},
  {n:'८', w:'आठ',   d:'● ● ● ● ● ● ● ●',      speak:'Aath'},
  {n:'९', w:'नौ',   d:'● ● ● ● ● ● ● ● ●',    speak:'Nau'},
  {n:'१०',w:'दस',   d:'● ● ● ● ● ● ● ● ● ●',  speak:'Das'}
];

const HI_COLORS = [
  {name:'लाल',    en:'Red',    bg:'#FF4444', e:'🍎'},
  {name:'नीला',   en:'Blue',   bg:'#4A90E2', e:'🫐'},
  {name:'पीला',   en:'Yellow', bg:'#FFD700', e:'🌻'},
  {name:'हरा',    en:'Green',  bg:'#7EC850', e:'🍃'},
  {name:'नारंगी', en:'Orange', bg:'#FF8C00', e:'🍊'},
  {name:'गुलाबी', en:'Pink',   bg:'#FF6BB5', e:'🌸'},
  {name:'बैंगनी', en:'Purple', bg:'#9B59B6', e:'🍇'},
  {name:'भूरा',   en:'Brown',  bg:'#8B4513', e:'🤎'},
  {name:'सफेद',   en:'White',  bg:'#BDC3C7', e:'⬜'},
  {name:'काला',   en:'Black',  bg:'#2C3E50', e:'🖤'}
];

const HI_ANIMALS = [
  {e:'🐶',name:'कुत्ता',   en:'Dog',       sound:'भौं भौं!'},
  {e:'🐱',name:'बिल्ली',   en:'Cat',       sound:'म्याऊँ!'},
  {e:'🐮',name:'गाय',       en:'Cow',       sound:'मू!'},
  {e:'🐘',name:'हाथी',     en:'Elephant',  sound:'पॉं पॉं!'},
  {e:'🦁',name:'शेर',       en:'Lion',      sound:'दहाड़!'},
  {e:'🐯',name:'बाघ',       en:'Tiger',     sound:'गर्जन!'},
  {e:'🐸',name:'मेंढक',   en:'Frog',       sound:'टर्र!'},
  {e:'🐰',name:'खरगोश', en:'Rabbit',   sound:'चीं!'},
  {e:'🦋',name:'तितली',   en:'Butterfly', sound:'उड़!'},
  {e:'🐦',name:'चिड़िया',  en:'Bird',      sound:'चीं चीं!'},
  {e:'🦒',name:'जिराफ़',   en:'Giraffe',   sound:'हुम!'},
  {e:'🦜',name:'तोता',     en:'Parrot',    sound:'नमस्ते!'},
  {e:'🐧',name:'पेंगुइन', en:'Penguin',   sound:'क्वाक!'},
  {e:'🐢',name:'कछुआ',     en:'Turtle',    sound:'धीरे!'},
  {e:'🐟',name:'मछली',     en:'Fish',      sound:'छपाक!'},
  {e:'🦓',name:'ज़ेब्रा',  en:'Zebra',     sound:'भौं!'}
];

/* ------ KANNADA DATA ------ */
const KN_ALPHABETS = [
  {l:'ಅ', w:'ಅಮ್ಮ',   e:'👩'}, {l:'ಆ', w:'ಆನೆ',    e:'🐘'},
  {l:'ಇ', w:'ಇರುವೆ', e:'🐜'}, {l:'ಈ', w:'ಈಚಲು',   e:'🌴'},
  {l:'ಉ', w:'ಉಪ್ಪು', e:'🧂'}, {l:'ಊ', w:'ಊರು',    e:'🏘️'},
  {l:'ಎ', w:'ಎಲೆ',   e:'🍃'}, {l:'ಓ', w:'ಓಟ',     e:'🏃'},
  {l:'ಕ', w:'ಕಮಲ',   e:'🌸'}, {l:'ಖ', w:'ಖಡ್ಗ',   e:'⚔️'},
  {l:'ಗ', w:'ಗಾಳಿ',  e:'💨'}, {l:'ಘ', w:'ಘಂಟೆ',   e:'🔔'},
  {l:'ಚ', w:'ಚಂದ್ರ', e:'🌙'}, {l:'ಛ', w:'ಛತ್ರಿ',  e:'☂️'},
  {l:'ಜ', w:'ಜಲ',    e:'💧'}, {l:'ಟ', w:'ಟಮಾಟೊ',  e:'🍅'},
  {l:'ತ', w:'ತೋಟ',   e:'🌻'}, {l:'ದ', w:'ದೋಣಿ',   e:'⛵'},
  {l:'ನ', w:'ನಾವು',  e:'👥'}, {l:'ಪ', w:'ಪತಂಗ',   e:'🪁'},
  {l:'ಬ', w:'ಬಾಳೆ',  e:'🍌'}, {l:'ಮ', w:'ಮೀನು',   e:'🐟'},
  {l:'ಯ', w:'ಯಾನ',   e:'🚀'}, {l:'ರ', w:'ರಾಜ',    e:'👑'},
  {l:'ಸ', w:'ಸೇಬು',  e:'🍎'}, {l:'ಹ', w:'ಹಾವು',   e:'🐍'}
];

const KN_NUMBERS = [
  {n:'೧', w:'ಒಂದು',    d:'●',                    speak:'Ondu'},
  {n:'೨', w:'ಎರಡು',    d:'● ●',                  speak:'Eradu'},
  {n:'೩', w:'ಮೂರು',    d:'● ● ●',                speak:'Muuru'},
  {n:'೪', w:'ನಾಲ್ಕು',  d:'● ● ● ●',              speak:'Naalku'},
  {n:'೫', w:'ಐದು',     d:'● ● ● ● ●',            speak:'Aidu'},
  {n:'೬', w:'ಆರು',     d:'● ● ● ● ● ●',          speak:'Aaru'},
  {n:'೭', w:'ಏಳು',     d:'● ● ● ● ● ● ●',        speak:'Yelu'},
  {n:'೮', w:'ಎಂಟು',   d:'● ● ● ● ● ● ● ●',      speak:'Entu'},
  {n:'೯', w:'ಒಂಬತ್ತು',d:'● ● ● ● ● ● ● ● ●',    speak:'Ombattu'},
  {n:'೧೦',w:'ಹತ್ತು',  d:'● ● ● ● ● ● ● ● ● ●',  speak:'Hattu'}
];

const KN_COLORS = [
  {name:'ಕೆಂಪು', en:'Red',    bg:'#FF4444', e:'🍎'},
  {name:'ನೀಲಿ',  en:'Blue',   bg:'#4A90E2', e:'🫐'},
  {name:'ಹಳದಿ',  en:'Yellow', bg:'#FFD700', e:'🌻'},
  {name:'ಹಸಿರು', en:'Green',  bg:'#7EC850', e:'🍃'},
  {name:'ಕಿತ್ತಲೆ',en:'Orange',bg:'#FF8C00', e:'🍊'},
  {name:'ಗುಲಾಬಿ', en:'Pink',  bg:'#FF6BB5', e:'🌸'},
  {name:'ಊದಾ',   en:'Purple', bg:'#9B59B6', e:'🍇'},
  {name:'ಕಂದು',  en:'Brown',  bg:'#8B4513', e:'🤎'},
  {name:'ಬಿಳಿ',  en:'White',  bg:'#BDC3C7', e:'⬜'},
  {name:'ಕಪ್ಪು', en:'Black',  bg:'#2C3E50', e:'🖤'}
];

const KN_ANIMALS = [
  {e:'🐶',name:'ನಾಯಿ',    en:'Dog',       sound:'ಬೌ ಬೌ!'},
  {e:'🐱',name:'ಬೆಕ್ಕು',  en:'Cat',       sound:'ಮ್ಯಾವ್!'},
  {e:'🐮',name:'ಹಸು',     en:'Cow',       sound:'ಅಂಬಾ!'},
  {e:'🐘',name:'ಆನೆ',     en:'Elephant',  sound:'ತುತ್ತು!'},
  {e:'🦁',name:'ಸಿಂಹ',   en:'Lion',      sound:'ಗರ್ಜನೆ!'},
  {e:'🐯',name:'ಹುಲಿ',    en:'Tiger',     sound:'ಗರ್ಜನೆ!'},
  {e:'🐸',name:'ಕಪ್ಪೆ',   en:'Frog',      sound:'ವಟ ವಟ!'},
  {e:'🐰',name:'ಮೊಲ',     en:'Rabbit',    sound:'ಕಿಚ್!'},
  {e:'🦋',name:'ಚಿಟ್ಟೆ',  en:'Butterfly', sound:'ಹಾರು!'},
  {e:'🐦',name:'ಹಕ್ಕಿ',   en:'Bird',      sound:'ಚಿಲಿಪಿಲಿ!'},
  {e:'🦒',name:'ಜಿರಾಫೆ', en:'Giraffe',   sound:'ಹಮ್!'},
  {e:'🦜',name:'ಗಿಣಿ',    en:'Parrot',    sound:'ನಮಸ್ಕಾರ!'},
  {e:'🐧',name:'ಪೆಂಗ್ವಿನ್',en:'Penguin', sound:'ಕಿರ್!'},
  {e:'🐢',name:'ಆಮೆ',     en:'Turtle',    sound:'ಮೆಲ್ಲ!'},
  {e:'🐟',name:'ಮೀನು',    en:'Fish',      sound:'ಪಳ!'},
  {e:'🦓',name:'ಜೀಬ್ರಾ',  en:'Zebra',    sound:'ಬೌ!'}
];

const BADGE_DEFS = [
  {id:'first',   icon:'🎯', name:'First Try!',    desc:'First correct answer',    goal:1,  field:'correctCount'},
  {id:'b5',      icon:'🔥', name:'Hot Streak!',   desc:'5 correct answers',       goal:5,  field:'correctCount'},
  {id:'b10',     icon:'🏆', name:'Champion!',     desc:'10 correct answers',      goal:10, field:'correctCount'},
  {id:'b25',     icon:'👑', name:'Legend!',       desc:'25 correct answers',      goal:25, field:'correctCount'},
  {id:'artist',  icon:'🎨', name:'Little Artist!',desc:'Saved a drawing',         goal:1,  field:'drawings'},
  {id:'explorer',icon:'🌍', name:'Explorer!',     desc:'Visited all 7 sections',  goal:7,  field:'sectionsVisited'}
];

const CARD_COLORS = [
  '#FF5FA2','#FF7A2F','#FFD000','#5DC85A',
  '#3A8FF5','#6C3FC5','#00C9A7','#FF3D3D',
  '#E67E22','#4B4FE0'
];

const EMOJI_PARTICLES = ['⭐','🌟','✨','🎉','🎊','💫','🔥','❤️','🌈','🏆','🎈','🦋'];

const CORRECT_MSGS = {
  en: ['Correct!', 'Well done!', 'That is right!', 'Excellent!', 'Perfect!', 'Fantastic!'],
  hi: ['शाबाश!', 'बहुत अच्छा!', 'सही है!', 'उत्तम!', 'परफेक्ट!'],
  kn: ['ಸರಿ!', 'ಶಾಬಾಸ್!', 'ಉತ್ತಮ!', 'ಪರ್ಫೆಕ್ಟ್!', 'ಚೆನ್ನಾಗಿದೆ!']
};
const WRONG_MSGS = {
  en: ['Not quite. The answer is', 'Try again. The correct answer is', 'The answer is'],
  hi: ['सही उत्तर है', 'उत्तर है', 'सही जवाब है'],
  kn: ['ಸರಿಯಾದ ಉತ್ತರ', 'ಉತ್ತರ', 'ಸರಿ ಉತ್ತರ']
};

/* ============================================================
   2. STATE
   ============================================================ */
const STATE = {
  user:            '',
  mascot:          '🦄',
  lang:            'en',
  isMuted:         false,
  totalStars:      0,
  correctCount:    0,
  sectionsVisited: 0,
  drawings:        0,
  visitedSet:      new Set(),
  earnedBadges:    new Set(),
  quizType:        'alphabets',
  quizScore:       0,
  quizCount:       1,
  quizAnswered:    false,
  currentScript:   'hindi',
  drawTool:        'pen',
  drawColor:       '#FF5FA2',
  brushSize:       8,
  isDrawing:       false,
  startX:          0,
  startY:          0,
  shapeSnapshot:   null
};

/* ============================================================
   3. VOICE ENGINE — single best voice, no user selection
   ============================================================ */
let selectedVoice = null;
let speakTimer = null;  // for debouncing / cancelling

const VOICE_PRIORITY = [
  v => v.name === 'Google UK English Female',
  v => /google/i.test(v.name) && /en.?IN/i.test(v.lang),
  v => /veena/i.test(v.name),
  v => /heera|raveena|priya|aditi/i.test(v.name),
  v => /en.?IN/i.test(v.lang) && /female/i.test(v.name),
  v => /en.?IN/i.test(v.lang),
  v => /samantha|karen|moira|fiona/i.test(v.name),
  v => /female/i.test(v.name) && /en/i.test(v.lang),
  v => /en.?GB/i.test(v.lang),
  v => /en/i.test(v.lang)
];

function voiceScore(v) {
  for (let i = 0; i < VOICE_PRIORITY.length; i++) {
    try { if (VOICE_PRIORITY[i](v)) return i; } catch(e) { /* skip */ }
  }
  return 999;
}

function initVoice() {
  if (!window.speechSynthesis) return;
  function loadVoices() {
    const all = window.speechSynthesis.getVoices();
    if (!all.length) return;
    const sorted = [...all].sort((a, b) => voiceScore(a) - voiceScore(b));
    selectedVoice = sorted[0];
  }
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
  setTimeout(loadVoices, 500);
  setTimeout(loadVoices, 1500);
}

/* Single clean speak: cancels any current speech, speaks once */
function speakText(text) {
  if (!window.speechSynthesis) return;
  if (STATE.isMuted) return;
  if (!text || !String(text).trim()) return;

  // Cancel any pending or current speech immediately
  window.speechSynthesis.cancel();
  if (speakTimer) { clearTimeout(speakTimer); speakTimer = null; }

  speakTimer = setTimeout(() => {
    speakTimer = null;
    const u = new SpeechSynthesisUtterance(String(text).trim());
    if (selectedVoice) u.voice = selectedVoice;
    u.lang   = selectedVoice ? (selectedVoice.lang || 'en-IN') : 'en-IN';
    u.rate   = 0.88;
    u.pitch  = 1.1;
    u.volume = 1;
    window.speechSynthesis.speak(u);
  }, 80);
}

/* ============================================================
   4. PERSISTENCE
   ============================================================ */
const LS = {
  get: (k, fb) => { try { const v = localStorage.getItem(k); return v !== null ? v : fb; } catch(e) { return fb; } },
  set: (k, v) => { try { localStorage.setItem(k, String(v)); } catch(e) {} },
  getJSON: (k, fb) => { try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : fb; } catch(e) { return fb; } },
  setJSON: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {} }
};

function saveState() {
  LS.set('fl_user',    STATE.user);
  LS.set('fl_mascot',  STATE.mascot);
  LS.set('fl_lang',    STATE.lang);
  LS.set('fl_muted',   STATE.isMuted ? '1' : '0');
  LS.set('fl_stars',   STATE.totalStars);
  LS.set('fl_correct', STATE.correctCount);
  LS.set('fl_visited', STATE.sectionsVisited);
  LS.set('fl_draw',    STATE.drawings);
  LS.setJSON('fl_vset',   [...STATE.visitedSet]);
  LS.setJSON('fl_badges', [...STATE.earnedBadges]);
}

function loadState() {
  STATE.user            = LS.get('fl_user',    '');
  STATE.mascot          = LS.get('fl_mascot',  '🦄');
  STATE.lang            = LS.get('fl_lang',    'en');
  STATE.isMuted         = LS.get('fl_muted',   '0') === '1';
  STATE.totalStars      = parseInt(LS.get('fl_stars',   '0'), 10) || 0;
  STATE.correctCount    = parseInt(LS.get('fl_correct', '0'), 10) || 0;
  STATE.sectionsVisited = parseInt(LS.get('fl_visited', '0'), 10) || 0;
  STATE.drawings        = parseInt(LS.get('fl_draw',    '0'), 10) || 0;
  STATE.visitedSet      = new Set(LS.getJSON('fl_vset',   []));
  STATE.earnedBadges    = new Set(LS.getJSON('fl_badges', []));
}

/* ============================================================
   4b. MUTE / UNMUTE
   ============================================================ */
function toggleMute() {
  STATE.isMuted = !STATE.isMuted;
  saveState();
  applyMuteUI();
  if (STATE.isMuted) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (speakTimer) { clearTimeout(speakTimer); speakTimer = null; }
  }
}

function applyMuteUI() {
  const btn  = document.getElementById('muteBtn');
  const icon = document.getElementById('muteIcon');
  if (!btn || !icon) return;
  if (STATE.isMuted) {
    icon.textContent = '🔇';
    btn.classList.add('muted');
    btn.title = 'Sound OFF – tap to unmute';
  } else {
    icon.textContent = '🔊';
    btn.classList.remove('muted');
    btn.title = 'Sound ON – tap to mute';
  }
}

/* ============================================================
   5. DATA GETTERS BY LANGUAGE
   ============================================================ */
function getAlphabets() {
  if (STATE.lang === 'hi') return HI_ALPHABETS;
  if (STATE.lang === 'kn') return KN_ALPHABETS;
  return EN_ALPHABETS;
}
function getNumbers() {
  if (STATE.lang === 'hi') return HI_NUMBERS;
  if (STATE.lang === 'kn') return KN_NUMBERS;
  return EN_NUMBERS;
}
function getColors() {
  if (STATE.lang === 'hi') return HI_COLORS;
  if (STATE.lang === 'kn') return KN_COLORS;
  return EN_COLORS;
}
function getAnimals() {
  if (STATE.lang === 'hi') return HI_ANIMALS;
  if (STATE.lang === 'kn') return KN_ANIMALS;
  return EN_ANIMALS;
}

function getLangLabel() {
  const labels = { en: 'English', hi: 'हिन्दी', kn: 'ಕನ್ನಡ' };
  return labels[STATE.lang] || 'English';
}

/* ============================================================
   6. MASCOT
   ============================================================ */
function buildMascotPicker(targetId, onPick) {
  const container = document.getElementById(targetId);
  if (!container) return;
  container.innerHTML = '';
  MASCOTS.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'mascot-opt' + (m === STATE.mascot ? ' selected' : '');
    btn.textContent = m;
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Select mascot ' + m);
    btn.addEventListener('click', () => {
      container.querySelectorAll('.mascot-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      onPick(m);
    });
    container.appendChild(btn);
  });
}

function applyMascot() {
  const hm = document.getElementById('headerMascot');
  const lm = document.getElementById('loginMascot');
  if (hm) hm.textContent = STATE.mascot;
  if (lm) lm.textContent = STATE.mascot;
}

/* ============================================================
   7. LOGIN
   ============================================================ */
function initLogin() {
  loadState();

  const loginMascotEl = document.getElementById('loginMascot');
  const pickerEl      = document.getElementById('mascotPicker');
  const nameInput     = document.getElementById('nameInput');
  const loginBtn      = document.getElementById('loginBtn');

  if (loginMascotEl) loginMascotEl.textContent = STATE.mascot;
  if (nameInput && STATE.user) nameInput.value = STATE.user;

  buildMascotPicker('mascotPicker', (m) => {
    STATE.mascot = m;
    if (loginMascotEl) loginMascotEl.textContent = m;
  });

  if (loginMascotEl) {
    loginMascotEl.addEventListener('click', () => {
      if (pickerEl) pickerEl.classList.toggle('open');
    });
  }

  if (loginBtn)  loginBtn.addEventListener('click', doLogin);
  if (nameInput) nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

  if (STATE.user) {
    setTimeout(() => enterApp(STATE.user), 400);
    return;
  }
}

function doLogin() {
  const nameInput = document.getElementById('nameInput');
  if (!nameInput) return;
  let name = nameInput.value.trim();
  if (!name) {
    nameInput.style.borderColor = 'rgba(255,100,100,0.8)';
    nameInput.focus();
    return;
  }
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  STATE.user = name;
  saveState();
  enterApp(name);
}

function enterApp(name) {
  const loginPage = document.getElementById('loginPage');
  const mainApp   = document.getElementById('mainApp');
  if (loginPage) loginPage.style.display = 'none';
  if (mainApp)   mainApp.style.display   = 'block';

  applyMascot();
  setGreeting(name);
  restoreLangUI();
  applyMuteUI();
  renderAll();
  checkBadges(false);
  updateDashboard();
  updateStarBadge();
}

function setGreeting(name) {
  const h   = new Date().getHours();
  const tod = h < 12 ? '🌅 Good Morning' : h < 17 ? '☀️ Good Afternoon' : '🌙 Good Evening';
  const el  = document.getElementById('greetingBar');
  if (el) el.textContent = tod + ', ' + name + '!';
}

function doLogout() {
  try { localStorage.clear(); } catch(e) {}
  window.location.reload();
}

/* ============================================================
   8. LANGUAGE
   ============================================================ */
function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.lang = btn.dataset.lang || 'en';
      saveState();
      renderAll();
      updateSectionSubLabels();
    });
  });
}

function restoreLangUI() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === STATE.lang);
  });
  updateSectionSubLabels();
}

function updateSectionSubLabels() {
  const lbl = getLangLabel();
  const labels = {
    'alpha-lang-label':  'Learning in ' + lbl + '. Tap a card!',
    'num-lang-label':    'Counting in ' + lbl + '. Tap to count!',
    'color-lang-label':  'Colors in ' + lbl + '. Tap to learn!',
    'animal-lang-label': 'Animals in ' + lbl + '. Tap an animal!'
  };
  Object.entries(labels).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

/* ============================================================
   9. NAVIGATION
   ============================================================ */
function initNav() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchSection(btn.dataset.tab));
  });
  document.querySelectorAll('[data-tab="awards"]').forEach(btn => {
    btn.addEventListener('click', () => switchSection('awards'));
  });
  const hm = document.getElementById('headerMascot');
  if (hm) hm.addEventListener('click', showMascotModal);

  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 200);
    }, {passive: true});
  }

  // Mute button
  const muteBtn = document.getElementById('muteBtn');
  if (muteBtn) muteBtn.addEventListener('click', toggleMute);
}

function switchSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('sec-' + id);
  if (target) target.classList.add('active');

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === id);
  });

  if (!STATE.visitedSet.has(id)) {
    STATE.visitedSet.add(id);
    STATE.sectionsVisited = STATE.visitedSet.size;
    saveState();
    checkBadges(true);
  }

  if (id === 'quiz')    initQuizSection();
  if (id === 'scripts') renderScripts(STATE.currentScript);
  if (id === 'awards')  updateDashboard();
  if (id === 'drawing') setTimeout(resizeCanvas, 80);
}

/* ============================================================
   10. MASCOT MODAL
   ============================================================ */
function showMascotModal() {
  let overlay = document.getElementById('mascotModal');
  if (overlay) { overlay.remove(); }

  overlay = document.createElement('div');
  overlay.id = 'mascotModal';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(20,10,50,.6);backdrop-filter:blur(6px);z-index:5000;display:flex;align-items:center;justify-content:center;';
  const box = document.createElement('div');
  box.style.cssText = 'background:white;border-radius:28px;padding:24px 20px;max-width:380px;width:92%;max-height:80vh;overflow-y:auto;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3);animation:popIn .3s cubic-bezier(.34,1.56,.64,1);';
  box.innerHTML = '<div style="font-family:\'Baloo 2\',cursive;font-size:1.3rem;font-weight:800;margin-bottom:12px;color:#2C1B6B;">Choose Your Mascot!</div><div id="inAppMascotPicker" style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:16px;"></div><button id="mascotModalClose" style="background:linear-gradient(135deg,#6C3FC5,#4B4FE0);color:white;border:none;border-radius:12px;padding:10px 28px;font-family:\'Baloo 2\',cursive;font-size:1rem;font-weight:700;cursor:pointer;">Done ✓</button>';
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  document.getElementById('mascotModalClose').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  buildMascotPicker('inAppMascotPicker', (m) => {
    STATE.mascot = m;
    saveState();
    applyMascot();
  });
}

/* ============================================================
   11. RENDER SECTIONS
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
  const data = getAlphabets();
  const isEN = STATE.lang === 'en';
  data.forEach((a, i) => {
    const col  = CARD_COLORS[i % CARD_COLORS.length];
    const card = document.createElement('div');
    card.className = 'alpha-card';
    card.style.borderTopColor = col;
    card.innerHTML =
      '<span class="letter" style="color:' + col + '">' + a.l + '</span>' +
      '<span class="emoji">' + a.e + '</span>' +
      '<span class="word">' + a.w + '</span>';
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      let speechText;
      if (isEN) {
        speechText = a.l + '. ' + a.w + '.';
      } else {
        speechText = a.l + '. ' + a.w + '.';
      }
      speakText(speechText);
      const subtitle = isEN ? '"' + a.l + '" is for ' + a.w : a.l + ' — ' + a.w;
      showModal(a.e, a.l, a.w, subtitle);
    });
    grid.appendChild(card);
  });
}

function renderNumbers() {
  const grid = document.getElementById('numGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const data = getNumbers();
  data.forEach((n, i) => {
    const col  = CARD_COLORS[i % CARD_COLORS.length];
    const card = document.createElement('div');
    card.className = 'number-card';
    card.style.borderTopColor = col;
    card.innerHTML =
      '<span class="num" style="color:' + col + '">' + n.n + '</span>' +
      '<span class="num-word" style="color:' + col + '">' + n.w + '</span>' +
      '<div class="dots" style="color:' + col + '">' + n.d + '</div>';
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(n.speak + '. ' + n.w + '.');
    });
    grid.appendChild(card);
  });
}

function renderColors() {
  const grid = document.getElementById('colorGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const data = getColors();
  data.forEach(cl => {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.style.background = cl.bg;
    const displayName = cl.name;
    const subName = (STATE.lang !== 'en' && cl.en) ? cl.en : '';
    card.innerHTML =
      '<span class="color-emoji">' + cl.e + '</span>' +
      '<div class="color-name">' + displayName + '</div>' +
      (subName ? '<div class="color-tr">' + subName + '</div>' : '');
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(displayName + (subName ? '. ' + subName : '') + '.');
    });
    grid.appendChild(card);
  });
}

function renderAnimals() {
  const grid = document.getElementById('animalGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const data = getAnimals();
  data.forEach((a, i) => {
    const col  = CARD_COLORS[i % CARD_COLORS.length];
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.style.borderTopColor = col;
    const subName = (STATE.lang !== 'en' && a.en) ? a.en : '';
    card.innerHTML =
      '<span class="animal-emoji">' + a.e + '</span>' +
      '<div class="animal-name" style="color:' + col + '">' + a.name + '</div>' +
      (subName ? '<div class="animal-tr">' + subName + '</div>' : '') +
      '<div class="animal-sound">' + a.sound + '</div>';
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(a.name + (subName ? '. ' + subName : '') + '.');
    });
    grid.appendChild(card);
  });
}

/* ============================================================
   12. SCRIPTS (Hindi / Kannada)
   ============================================================ */
const HINDI_VOWELS = [
  {ch:'अ',roman:'a',  w:'अनार'}, {ch:'आ',roman:'aa', w:'आम'},
  {ch:'इ',roman:'i',  w:'इमली'}, {ch:'ई',roman:'ee', w:'ईख'},
  {ch:'उ',roman:'u',  w:'उल्लू'},{ch:'ऊ',roman:'oo', w:'ऊन'},
  {ch:'ए',roman:'e',  w:'एड़ी'}, {ch:'ओ',roman:'o',  w:'ओखली'}
];
const HINDI_CONSONANTS = [
  {ch:'क',roman:'ka',  w:'कमल'},  {ch:'ख',roman:'kha', w:'खरगोश'},
  {ch:'ग',roman:'ga',  w:'गाय'},  {ch:'घ',roman:'gha', w:'घड़ी'},
  {ch:'च',roman:'cha', w:'चाँद'}, {ch:'छ',roman:'chha',w:'छाता'},
  {ch:'ज',roman:'ja',  w:'जहाज'}, {ch:'ट',roman:'ta',  w:'टमाटर'},
  {ch:'त',roman:'ta',  w:'तोता'}, {ch:'द',roman:'da',  w:'दरवाज़ा'},
  {ch:'न',roman:'na',  w:'नाव'},  {ch:'प',roman:'pa',  w:'पतंग'},
  {ch:'ब',roman:'ba',  w:'बकरी'}, {ch:'म',roman:'ma',  w:'मछली'},
  {ch:'य',roman:'ya',  w:'यात्रा'},{ch:'र',roman:'ra',  w:'राजा'},
  {ch:'स',roman:'sa',  w:'सेब'},  {ch:'ह',roman:'ha',  w:'हाथी'}
];
const KANNADA_VOWELS = [
  {ch:'ಅ',roman:'a',  w:'ಅಮ್ಮ'}, {ch:'ಆ',roman:'aa', w:'ಆನೆ'},
  {ch:'ಇ',roman:'i',  w:'ಇರುವೆ'},{ch:'ಈ',roman:'ee', w:'ಈಚಲು'},
  {ch:'ಉ',roman:'u',  w:'ಉಪ್ಪು'},{ch:'ಊ',roman:'oo', w:'ಊರು'},
  {ch:'ಎ',roman:'e',  w:'ಎಲೆ'},  {ch:'ಓ',roman:'o',  w:'ಓಟ'}
];
const KANNADA_CONSONANTS = [
  {ch:'ಕ',roman:'ka',  w:'ಕಮಲ'},  {ch:'ಖ',roman:'kha', w:'ಖಡ್ಗ'},
  {ch:'ಗ',roman:'ga',  w:'ಗಾಳಿ'}, {ch:'ಘ',roman:'gha', w:'ಘಂಟೆ'},
  {ch:'ಚ',roman:'cha', w:'ಚಂದ್ರ'},{ch:'ಛ',roman:'chha',w:'ಛತ್ರಿ'},
  {ch:'ಜ',roman:'ja',  w:'ಜಲ'},   {ch:'ಟ',roman:'ta',  w:'ಟಮಾಟೊ'},
  {ch:'ತ',roman:'ta',  w:'ತೋಟ'},  {ch:'ದ',roman:'da',  w:'ದೋಣಿ'},
  {ch:'ನ',roman:'na',  w:'ನಾವು'}, {ch:'ಪ',roman:'pa',  w:'ಪತಂಗ'},
  {ch:'ಬ',roman:'ba',  w:'ಬಾಳೆ'}, {ch:'ಮ',roman:'ma',  w:'ಮೀನು'},
  {ch:'ಯ',roman:'ya',  w:'ಯಾನ'},  {ch:'ರ',roman:'ra',  w:'ರಾಜ'},
  {ch:'ಸ',roman:'sa',  w:'ಸೇಬು'}, {ch:'ಹ',roman:'ha',  w:'ಹಾವು'}
];

function initScripts() {
  document.querySelectorAll('.script-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.script-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.currentScript = btn.dataset.script || 'hindi';
      renderScripts(STATE.currentScript);
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
    const col     = CARD_COLORS[i % CARD_COLORS.length];
    const isVowel = i < vowels.length;
    const card    = document.createElement('div');
    card.className = 'script-card';
    card.style.borderColor = col;
    card.innerHTML =
      '<span class="script-char" style="color:' + col + '">' + s.ch + '</span>' +
      '<span class="script-roman">' + s.roman + '</span>' +
      '<span class="script-word">' + s.w + '</span>' +
      (isVowel ? '<span class="vowel-badge" style="background:' + col + '">vowel</span>' : '');
    card.addEventListener('click', () => {
      addStar(1);
      triggerExplosion('small');
      speakText(s.roman + '. ' + s.w + '.');
      showModal(s.ch, s.roman.toUpperCase(), s.w, '"' + s.ch + '" — ' + s.roman + ' — as in ' + s.w);
    });
    grid.appendChild(card);
  });
}

/* ============================================================
   13. QUIZ
   ============================================================ */
function initQuizSection() {
  // Re-bind type buttons each time (avoid duplicate listeners with flag)
  document.querySelectorAll('.qtype-btn').forEach(btn => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', () => {
      document.querySelectorAll('.qtype-btn').forEach(b => b.classList.remove('active'));
      newBtn.classList.add('active');
      STATE.quizType  = newBtn.dataset.qtype || 'alphabets';
      STATE.quizScore = 0;
      STATE.quizCount = 1;
      const qs = document.getElementById('quizScore');
      const qn = document.getElementById('quizNum');
      const ss = document.getElementById('scoreStars');
      if (qs) qs.textContent = '0';
      if (qn) qn.textContent = '1';
      if (ss) ss.textContent = '☆☆☆☆☆';
      loadQuestion();
    });
  });

  const nb = document.getElementById('quizNextBtn');
  if (nb) {
    const newNb = nb.cloneNode(true);
    nb.parentNode.replaceChild(newNb, nb);
    newNb.addEventListener('click', nextQuestion);
    newNb.style.display = 'none';
  }

  loadQuestion();
}

function loadQuestion() {
  STATE.quizAnswered = false;
  const fb = document.getElementById('quizFeedback');
  const nb = document.getElementById('quizNextBtn');
  if (fb) { fb.textContent = ''; fb.style.color = ''; }
  if (nb) nb.style.display = 'none';
  document.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('correct','wrong'));

  let pool, correct, opts, img, q, labels, correctLabel;

  if (STATE.quizType === 'alphabets') {
    pool = shuffle([...getAlphabets()]);
    correct = pool[0]; opts = shuffle(pool.slice(0, 4));
    img = correct.e;
    if (STATE.lang === 'en') {
      q = 'What letter does "' + correct.w + '" start with?';
      labels = opts.map(o => o.l); correctLabel = correct.l;
    } else {
      q = correct.l + ' — which word is this?';
      labels = opts.map(o => o.w); correctLabel = correct.w;
    }
  } else if (STATE.quizType === 'numbers') {
    pool = shuffle([...getNumbers()]);
    correct = pool[0]; opts = shuffle(pool.slice(0, 4));
    img = correct.n;
    q = correct.n + ' — what is the word?';
    labels = opts.map(o => o.w); correctLabel = correct.w;
  } else if (STATE.quizType === 'colors') {
    pool = shuffle([...getColors()]);
    correct = pool[0]; opts = shuffle(pool.slice(0, 4));
    img = correct.e;
    q = 'What color is ' + correct.e + '?';
    labels = opts.map(o => o.name); correctLabel = correct.name;
  } else {
    pool = shuffle([...getAnimals()]);
    correct = pool[0]; opts = shuffle(pool.slice(0, 4));
    img = correct.e;
    q = 'Which animal is this ' + correct.e + '?';
    labels = opts.map(o => o.name); correctLabel = correct.name;
  }

  const qi = document.getElementById('quizImage');
  const qq = document.getElementById('quizQuestion');
  if (qi) qi.textContent = img;
  if (qq) qq.textContent = q;
  renderQuizOptions(labels, correctLabel);

  // Speak question once, with a delay
  setTimeout(() => {
    if (!STATE.quizAnswered) speakText(q);
  }, 600);
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
  const lang = STATE.lang;

  if (selected === correct) {
    btn.classList.add('correct');
    const msgs = CORRECT_MSGS[lang] || CORRECT_MSGS.en;
    const msg = msgs[Math.floor(Math.random() * msgs.length)];
    if (fb) { fb.textContent = '🎉 ' + msg; fb.style.color = '#1a6b1a'; }
    STATE.quizScore++;
    STATE.correctCount++;
    const qs = document.getElementById('quizScore');
    if (qs) qs.textContent = String(STATE.quizScore);
    updateQuizStars();
    addStar(2);
    triggerExplosion('big');
    speakText(msg);
    checkBadges(true);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-opt').forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
    const wrongPfx = (WRONG_MSGS[lang] || WRONG_MSGS.en);
    const pfx = wrongPfx[Math.floor(Math.random() * wrongPfx.length)];
    if (fb) { fb.textContent = '😊 ' + pfx + ': ' + correct; fb.style.color = '#aa1111'; }
    speakText(pfx + '. ' + correct + '.');
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
    if (qq) qq.textContent = STATE.user + ' scored ' + STATE.quizScore + ' out of 10!';
    if (qo) qo.innerHTML   = '';
    if (nb) { nb.textContent = '🔄 Play Again'; nb.style.display = 'inline-block'; }
    const fb = document.getElementById('quizFeedback');
    if (fb) { fb.textContent = ''; }
    triggerExplosion('mega');
    speakText(STATE.quizScore + ' out of 10.');

    if (nb) {
      const restart = nb.cloneNode(true);
      nb.parentNode.replaceChild(restart, nb);
      restart.addEventListener('click', () => {
        STATE.quizScore = 0; STATE.quizCount = 1;
        const qs = document.getElementById('quizScore');
        const qnum = document.getElementById('quizNum');
        const ss = document.getElementById('scoreStars');
        if (qs) qs.textContent = '0';
        if (qnum) qnum.textContent = '1';
        if (ss) ss.textContent = '☆☆☆☆☆';
        restart.textContent = 'Next ➡️';
        restart.style.display = 'none';
        const freshBtn = restart.cloneNode(true);
        restart.parentNode.replaceChild(freshBtn, restart);
        freshBtn.addEventListener('click', nextQuestion);
        freshBtn.style.display = 'none';
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
   14. DRAWING CANVAS
   ============================================================ */
let drawCanvas, drawCtx;
const undoStack = [];

function initCanvas() {
  drawCanvas = document.getElementById('drawCanvas');
  if (!drawCanvas) return;
  drawCtx = drawCanvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', () => setTimeout(resizeCanvas, 150));

  document.querySelectorAll('.draw-tool-btn[data-tool]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.draw-tool-btn[data-tool]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.drawTool = btn.dataset.tool || 'pen';
      drawCanvas.style.cursor = STATE.drawTool === 'eraser' ? 'cell' : 'crosshair';
    });
  });

  const clearBtn = document.getElementById('clearBtn');
  const undoBtn  = document.getElementById('undoBtn');
  const saveBtn  = document.getElementById('saveBtn');
  if (clearBtn) clearBtn.addEventListener('click', clearCanvas);
  if (undoBtn)  undoBtn.addEventListener('click',  undoDraw);
  if (saveBtn)  saveBtn.addEventListener('click',  downloadArt);

  const bs = document.getElementById('brushSize');
  if (bs) bs.addEventListener('input', e => { STATE.brushSize = parseInt(e.target.value, 10); });

  const PAL_COLORS = ['#FF3D3D','#FF5FA2','#FF7A2F','#FFD000','#5DC85A','#3A8FF5','#6C3FC5','#00C9A7','#333333','#8B4513','#ffffff'];
  const pal = document.getElementById('colorPalette');
  if (pal) {
    PAL_COLORS.forEach((col, i) => {
      const dot = document.createElement('div');
      dot.className = 'palette-dot' + (i === 0 ? ' active' : '');
      dot.style.background = col;
      if (col === '#ffffff') dot.style.border = '3px solid #ccc';
      dot.addEventListener('click', () => {
        STATE.drawColor = col;
        if (STATE.drawTool === 'eraser') {
          STATE.drawTool = 'pen';
          document.querySelectorAll('.draw-tool-btn[data-tool]').forEach(b => b.classList.remove('active'));
          const penBtn = document.querySelector('.draw-tool-btn[data-tool="pen"]');
          if (penBtn) penBtn.classList.add('active');
        }
        document.querySelectorAll('.palette-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
      pal.appendChild(dot);
    });
  }

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
  const saved  = drawCtx.getImageData(0, 0, drawCanvas.width, drawCanvas.height);
  const parent = drawCanvas.parentElement || document.body;
  const newW   = Math.min(860, parent.clientWidth - 36);
  const newH   = Math.max(260, Math.min(420, window.innerHeight * 0.45));
  drawCanvas.width  = newW;
  drawCanvas.height = newH;
  try { drawCtx.putImageData(saved, 0, 0); } catch(e) { /* size changed */ }
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
  if (!drawCanvas || !drawCtx) return;
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
        drawCtx.arc(p.x + (Math.random()-0.5)*sz*2, p.y + (Math.random()-0.5)*sz*2, sz*0.65, 0, Math.PI*2);
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
        drawCtx.arc(p.x + r*Math.cos(a), p.y + r*Math.sin(a), 1.2, 0, Math.PI*2);
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
  STATE.isDrawing     = false;
  STATE.shapeSnapshot = null;
}

function drawShape(tool, x1, y1, x2, y2, lw) {
  const dx = x2-x1, dy = y2-y1;
  const dist = Math.sqrt(dx*dx+dy*dy);
  drawCtx.strokeStyle = STATE.drawColor;
  drawCtx.fillStyle   = STATE.drawColor + '44';
  drawCtx.lineWidth   = lw;
  drawCtx.lineCap     = 'round';
  drawCtx.beginPath();
  switch (tool) {
    case 'circle':   drawCtx.arc(x1,y1,dist,0,Math.PI*2); drawCtx.fill(); drawCtx.stroke(); break;
    case 'rect':     drawCtx.rect(x1,y1,dx,dy);             drawCtx.fill(); drawCtx.stroke(); break;
    case 'line':     drawCtx.moveTo(x1,y1); drawCtx.lineTo(x2,y2); drawCtx.stroke(); break;
    case 'triangle': drawCtx.moveTo(x1,y2); drawCtx.lineTo(x2,y2); drawCtx.lineTo((x1+x2)/2,y1); drawCtx.closePath(); drawCtx.fill(); drawCtx.stroke(); break;
    case 'star':     drawStarPath(drawCtx,x1,y1,dist,dist/2.2,5); drawCtx.fill(); drawCtx.stroke(); break;
  }
}

function drawStarPath(ctx, cx, cy, outerR, innerR, pts) {
  ctx.beginPath();
  for (let i = 0; i < pts*2; i++) {
    const r = i%2===0 ? outerR : innerR;
    const a = (i*Math.PI)/pts - Math.PI/2;
    if (i===0) ctx.moveTo(cx+r*Math.cos(a), cy+r*Math.sin(a));
    else        ctx.lineTo(cx+r*Math.cos(a), cy+r*Math.sin(a));
  }
  ctx.closePath();
}

function doFloodFill(startXi, startYi) {
  const img  = drawCtx.getImageData(0, 0, drawCanvas.width, drawCanvas.height);
  const data = img.data;
  const W    = drawCanvas.width;
  const H    = drawCanvas.height;
  if (startXi<0||startXi>=W||startYi<0||startYi>=H) return;
  const idx0 = (startXi + startYi*W)*4;
  const tR=data[idx0],tG=data[idx0+1],tB=data[idx0+2],tA=data[idx0+3];
  const fill = hexToRgba(STATE.drawColor);
  if (tR===fill[0]&&tG===fill[1]&&tB===fill[2]&&tA===fill[3]) return;
  const stack   = [[startXi,startYi]];
  const visited = new Uint8Array(W*H);
  while (stack.length) {
    const [cx,cy] = stack.pop();
    if (cx<0||cx>=W||cy<0||cy>=H||visited[cx+cy*W]) continue;
    const idx = (cx+cy*W)*4;
    if (!colorMatch(data[idx],data[idx+1],data[idx+2],data[idx+3],tR,tG,tB,tA)) continue;
    visited[cx+cy*W]=1;
    data[idx]=fill[0];data[idx+1]=fill[1];data[idx+2]=fill[2];data[idx+3]=fill[3];
    stack.push([cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1]);
  }
  drawCtx.putImageData(img,0,0);
}

function colorMatch(r,g,b,a,tr,tg,tb,ta) {
  return Math.abs(r-tr)<32&&Math.abs(g-tg)<32&&Math.abs(b-tb)<32&&Math.abs(a-ta)<32;
}

function hexToRgba(hex) {
  const h = (hex.startsWith('#')?hex.slice(1):hex).padEnd(6,'0');
  return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16),255];
}

function clearCanvas() {
  if (!drawCtx||!drawCanvas) return;
  saveUndo();
  drawCtx.clearRect(0,0,drawCanvas.width,drawCanvas.height);
}

function undoDraw() {
  if (undoStack.length&&drawCtx&&drawCanvas) drawCtx.putImageData(undoStack.pop(),0,0);
}

function downloadArt() {
  if (!drawCanvas) return;
  const link = document.createElement('a');
  link.download = (STATE.user||'my')+'-artwork.png';
  link.href = drawCanvas.toDataURL('image/png');
  link.click();
  STATE.drawings = Math.max(STATE.drawings,1);
  addStar(3);
  saveState();
  checkBadges(true);
}

/* ============================================================
   15. AWARDS & BADGES
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
    if (def.field === 'correctCount')    val = STATE.correctCount;
    if (def.field === 'drawings')        val = STATE.drawings;
    if (def.field === 'sectionsVisited') val = STATE.sectionsVisited;
    if (val >= def.goal) earnBadge(def, announce);
  });
  updateDashboard();
}

function earnBadge(def, announce) {
  const wasEarned = STATE.earnedBadges.has(def.id);
  STATE.earnedBadges.add(def.id);
  const card = document.getElementById('bdg-'+def.id);
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
  speakText(title + '!');
  setTimeout(() => toast.classList.remove('show'), 3500);
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
  const ds  = document.getElementById('dashStars');
  const dsc = document.getElementById('dashStarCount');
  if (ds)  ds.textContent  = '⭐'.repeat(Math.min(10, Math.floor(STATE.totalStars/5))) || '☆';
  if (dsc) dsc.textContent = String(STATE.totalStars);

  setProgress('progCorrect', 'pfCorrect',  STATE.correctCount,    25);
  setProgress('progStars',   'pfStars',    STATE.totalStars,      100);
  setProgress('progSections','pfSections', STATE.sectionsVisited, 7,   '/7');
  setProgress('progBadges',  'pfBadges',   STATE.earnedBadges.size, BADGE_DEFS.length, '/' + BADGE_DEFS.length);
}

function setProgress(labelId, barId, val, max, suffix) {
  const lbl = document.getElementById(labelId);
  const bar = document.getElementById(barId);
  if (lbl) lbl.textContent = String(val) + (suffix || '');
  if (bar) bar.style.width = Math.min(100, Math.round((val/Math.max(max,1))*100)) + '%';
}

/* ============================================================
   16. PARTICLE EXPLOSION
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
  const cx = window.innerWidth/2, cy = window.innerHeight/2;
  const cfg = {
    small: {n:20, sp:6,  sz:7,  g:0.18},
    big:   {n:50, sp:10, sz:10, g:0.20},
    award: {n:70, sp:13, sz:13, g:0.17},
    mega:  {n:100,sp:15, sz:14, g:0.15}
  }[type] || {n:20, sp:6, sz:7, g:0.18};

  for (let i=0; i<cfg.n; i++) {
    const angle = (Math.PI*2*i)/cfg.n + Math.random()*0.6;
    const speed = cfg.sp*(0.5+Math.random());
    particles.push({
      x:cx+(Math.random()-0.5)*80, y:cy+(Math.random()-0.5)*80,
      vx:Math.cos(angle)*speed, vy:Math.sin(angle)*speed-4,
      alpha:1, sz:cfg.sz*(0.5+Math.random()),
      color:'hsl('+Math.round(Math.random()*360)+',100%,60%)',
      emoji:Math.random()>0.5?EMOJI_PARTICLES[Math.floor(Math.random()*EMOJI_PARTICLES.length)]:null,
      g:cfg.g, spin:(Math.random()-0.5)*0.35, angle:Math.random()*Math.PI*2
    });
  }
  if (!animActive) animLoop();
}

function animLoop() {
  if (!expCtx) { animActive=false; return; }
  if (!particles.length) { animActive=false; expCtx.clearRect(0,0,expCanvas.width,expCanvas.height); return; }
  animActive=true;
  expCtx.clearRect(0,0,expCanvas.width,expCanvas.height);
  particles = particles.filter(p=>p.alpha>0.01);
  particles.forEach(p => {
    p.x+=p.vx; p.y+=p.vy; p.vy+=p.g; p.alpha-=0.018; p.angle+=p.spin;
    expCtx.save();
    expCtx.globalAlpha=Math.max(0,p.alpha);
    expCtx.translate(p.x,p.y);
    expCtx.rotate(p.angle);
    if (p.emoji) {
      expCtx.font=(p.sz*2)+'px serif';
      expCtx.textAlign='center';
      expCtx.textBaseline='middle';
      expCtx.fillText(p.emoji,0,0);
    } else {
      expCtx.fillStyle=p.color;
      expCtx.fillRect(-p.sz/2,-p.sz/2,p.sz,p.sz);
    }
    expCtx.restore();
  });
  requestAnimationFrame(animLoop);
}

/* ============================================================
   17. MODAL
   ============================================================ */
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const box     = document.getElementById('modalBox');
  const closeBtn= document.getElementById('modalClose');
  if (overlay) overlay.addEventListener('click', closeModal);
  if (box)     box.addEventListener('click', e=>e.stopPropagation());
  if (closeBtn)closeBtn.addEventListener('click', closeModal);
}

function showModal(emoji, title, trans, desc) {
  const el = {
    emoji:   document.getElementById('modalEmoji'),
    title:   document.getElementById('modalTitle'),
    trans:   document.getElementById('modalTrans'),
    desc:    document.getElementById('modalDesc'),
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
   18. BOOTSTRAP
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initVoice();
  initLogin();
  initLang();
  initNav();
  initScripts();
  initModal();
  buildBadgesGrid();
  initCanvas();
});
