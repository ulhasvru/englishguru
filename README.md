# 🌈 FunLearn – LKG Magic World v5.0

> Interactive learning app for **LKG / Kindergarten students (age 4–6)** in India.  
> Pure **HTML5 · CSS3 · Vanilla JS** — zero dependencies, zero frameworks, zero build tools.

---

## 🚀 Live Demo

**[https://YOUR-USERNAME.github.io/funlearn](https://YOUR-USERNAME.github.io/funlearn)**

---

## 📋 Table of Contents

- [Features](#-features)
- [Sections](#-learning-sections)
- [Language System](#-language-system)
- [Voice System](#-voice-system)
- [Responsive Design](#-responsive-design)
- [localStorage Cache](#-localstorage-cache)
- [File Structure](#-file-structure)
- [Deploy to GitHub Pages](#-deploy-to-github-pages-4-steps)
- [Deploy to Netlify](#-deploy-to-netlify)
- [Browser Support](#-browser-support)
- [Changelog](#-changelog-v50)

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌍 3 Languages | English · हिन्दी · ಕನ್ನಡ — each as a full subject |
| 🔤 Alphabets | A–Z (EN), अ–ह (HI), ಅ–ಹ (KN) with emoji & words |
| 🔢 Numbers | 1–10 in all three scripts with dot counters |
| 🎨 Colors | 10 colors with native names per language |
| 🐘 Animals | 16 animals with sounds in all languages |
| 🧠 Quiz | 10-question adaptive quiz per language |
| ✏️ Drawing | Full canvas with tools, shapes, colors, undo & save |
| 🔡 Scripts | Hindi & Kannada vowels + consonants (always available) |
| 🏆 Awards | 6 badges + star system + progress bars |
| 🔊 Voice | Auto-selected best TTS voice, single clean speak, no double-fire |
| 💾 Persistence | All progress saved via localStorage |
| 🔄 Auto-Login | Skips login if name is cached |
| 🦄 Mascot | 30 mascots to choose from |
| 📱 Responsive | Works on all screen sizes — phones to desktops |

---

## 📚 Learning Sections

### 🔤 Alphabets
Tap any letter card to hear it spoken aloud and see a popup with the letter, emoji, and word — all in the currently selected language.

### 🔢 Numbers
Tap a number card to hear it spoken. Each card shows the numeral, word name, and dot counter representation.

### 🎨 Colors
10 color swatches displayed with their native name in the active language. Tap to hear the color name.

### 🐘 Animals
16 animal cards each showing the emoji, animal name, and its sound — in the selected language.

### 🧠 Quiz
- 10 questions per round
- 4 answer choices per question
- Covers Alphabets, Numbers, Colors, and Animals
- Adapts to the active language
- Stars and badges awarded for correct answers

### ✏️ Drawing Canvas
- **Tools:** Pen, Brush, Spray, Eraser, Fill (flood)
- **Shapes:** Circle, Box, Triangle, Star, Line
- **Colors:** 11-colour palette
- **Size:** Adjustable brush size slider
- **Actions:** Clear, Undo (25 levels), Save as PNG

### 🔡 Scripts
Always shows Hindi and Kannada letters regardless of the active language — vowels + consonants with romanisation and example words.

### 🏆 Awards
| Badge | How to Earn |
|---|---|
| 🎯 First Try! | First correct quiz answer |
| 🔥 Hot Streak! | 5 correct answers |
| 🏆 Champion! | 10 correct answers |
| 👑 Legend! | 25 correct answers |
| 🎨 Little Artist! | Save a drawing |
| 🌍 Explorer! | Visit all 7 sections |

---

## 🌍 Language System

The language selector (EN / हि / ಕ) in the header controls **what content is shown**, not just translations shown alongside English. Selecting a language changes the entire subject:

| Setting | Alphabets | Numbers | Colors | Animals |
|---|---|---|---|---|
| 🇬🇧 English | A–Z with English words | 1–10 in English | Red, Blue… | Dog, Cat… |
| 🇮🇳 हिन्दी | अ–ह with Hindi words | १–१० in Hindi | लाल, नीला… | कुत्ता, बिल्ली… |
| 🇮🇳 ಕನ್ನಡ | ಅ–ಹ with Kannada words | ೧–೧೦ in Kannada | ಕೆಂಪು, ನೀಲಿ… | ನಾಯಿ, ಬೆಕ್ಕು… |

The Scripts section (Hindi & Kannada vowels/consonants) is always available regardless of the active language.

---

## 🔊 Voice System

- **Auto-selects the best available voice** on the user's device — no manual selection needed
- Priority order: Google UK English Female → Google Indian English → Veena → Heera/Raveena → any Indian English → any English female → British English → any English
- **Single clean speak** — every tap cancels any current speech first, then speaks exactly once with an 80ms debounce to prevent double-firing
- **Plain, informational speech** — just the word/letter/number, no cheerleading
- **Mute/Unmute** button always visible in the header; state saved across sessions

---

## 📱 Responsive Design

Fully fluid layout using `clamp()` and CSS Grid — no fixed pixel widths anywhere.

| Device | Behaviour |
|---|---|
| Tiny phones < 360px | Quiz options stack to 1 column, ultra-compact header |
| Phones 360–599px | 2-column number grid, auto-fill cards |
| Large phones / small tablets 600–899px | 5-col numbers & colors, 4-col animals, tabs fill evenly |
| Tablets 900–1199px | Toolbar rows no longer wrap, wider content area |
| Desktop 1200px+ | Full grid layouts, max-width containers, spacious padding |
| Landscape phone (< 500px height) | Tab labels hidden, login compacted, no wasted vertical space |
| Retina / HiDPI | Thinner shadows for crisp rendering |
| `prefers-reduced-motion` | All animations disabled automatically |

Uses `100dvh` so the login screen fills correctly on mobile browsers with dynamic address bars.

---

## 💾 localStorage Cache

All user progress is saved automatically. Nothing is lost on refresh or next visit.

| Data | Key |
|---|---|
| User name | `fl_user` |
| Mascot choice | `fl_mascot` |
| Active language | `fl_lang` |
| Mute state | `fl_muted` |
| Total stars | `fl_stars` |
| Correct answers | `fl_correct` |
| Sections visited count | `fl_visited` |
| Drawing saved flag | `fl_draw` |
| Visited sections set | `fl_vset` |
| Earned badge IDs | `fl_badges` |

**Auto-Login:** If a name is found in localStorage, the login screen is skipped entirely and the user goes straight to the learning area.

**Switch User:** The "🔄 Switch User" button in the Awards section clears all localStorage and reloads for a fresh start.

---

## 📁 File Structure

```
funlearn/
├── index.html            ← Full HTML structure & layout
├── style.css             ← All styles, animations, responsive breakpoints
├── app.js                ← Data, logic, voice engine, quiz, drawing, storage
├── funlearn-preview.html ← Single self-contained file (CSS + JS inlined) for easy preview
└── README.md             ← This file
```

> **To preview locally:** just open `funlearn-preview.html` directly in any browser — no server needed.  
> **To deploy:** upload `index.html`, `style.css`, and `app.js` together in the same folder.

---

## 🚀 Deploy to GitHub Pages (4 Steps)

1. Create a **public** GitHub repository named `funlearn`
2. Upload `index.html`, `style.css`, `app.js`, and `README.md`
3. Go to **Settings → Pages → Branch: main / Folder: / (root) → Save**
4. Your app is live at:

```
https://YOUR-USERNAME.github.io/funlearn
```

---

## ☁️ Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **Add new site → Deploy manually**
3. Drag and drop the folder containing `index.html`, `style.css`, and `app.js`
4. Done — Netlify gives you a live URL instantly

Or connect your GitHub repo for automatic deploys on every push.

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome (Android & Desktop) | ✅ Full |
| Safari (iOS & macOS) | ✅ Full |
| Firefox | ✅ Full |
| Edge | ✅ Full |
| Samsung Internet | ✅ Full |
| Opera Mini | ⚠️ Layout works; Web Speech API may not be available |

> Speech synthesis (Text-to-Speech) requires the **Web Speech API**, available in all modern browsers. If unavailable, the app works silently without errors.

---

## 📝 Changelog v5.0

### 🌍 Language as Subject
- Selecting English/Hindi/Kannada now changes the **entire content** — alphabets, numbers, colors, animals all switch to that language's script and words
- No more bilingual fallback mixing; each language is a self-contained learning subject

### 🔊 Voice Engine Rewrite
- Removed voice selection UI entirely — best voice chosen automatically
- Fixed double-speech bug: single `cancel()` + 80ms debounce before every utterance
- Plain speech only — no exclamatory filler phrases

### 🎨 Full UI Redesign
- New deep-purple design system with `Baloo 2` + `Nunito` typefaces
- Glass-morphism login card with animated gradient background
- Sticky header with compact controls
- Smooth section transitions with fade-slide animation
- Card hover/active states with `box-shadow` + `transform`

### 📱 Responsive System
- Replaced all fixed `px` sizes with `clamp()` fluid values
- 5-breakpoint system: < 360px · 360–599px · 600–899px · 900–1199px · 1200px+
- Landscape phone mode with collapsed tab labels
- `prefers-reduced-motion` support
- `100dvh` for correct mobile viewport height

### 🛠️ Bug Fixes
- Quiz type buttons no longer accumulate duplicate event listeners on re-entry
- Drawing canvas correctly scales on orientation change
- Modal closes on overlay click without bubbling
- localStorage reads wrapped in try/catch for private browsing mode

---

*Made with ❤️ for little learners of India 🇮🇳*
