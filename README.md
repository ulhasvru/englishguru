# 🌈 FunLearn – LKG Magic World v3.1

Interactive learning website for **LKG students (age ~6)** in India.
Pure HTML5 · CSS3 · Vanilla JS — zero dependencies, zero frameworks.

## 🚀 Live Demo
**[https://YOUR-USERNAME.github.io/funlearn](https://YOUR-USERNAME.github.io/funlearn)**

---

## ✨ What's New in v3.1

### 💾 Full localStorage Cache
| What's cached | localStorage key |
|---|---|
| User name | `fl_user` |
| Mascot choice | `fl_mascot` |
| Language (EN/HI/KN) | `fl_lang` |
| Mute on/off | `fl_muted` |
| Chosen voice name | `fl_voice` |
| Total stars | `fl_stars` |
| Correct answers | `fl_correct` |
| Sections visited | `fl_visited` |
| Drawing count | `fl_draw` |
| Visited set | `fl_vset` |
| Earned badges | `fl_badges` |

### 🔄 Auto-Login
- If a name is already cached, the app **skips the login screen** entirely and goes straight to the learning area with a "Welcome back!" greeting.

### 🔇 Mute / Unmute Button
- **🔊 icon** in the control bar — always visible.
- One tap mutes all speech; button turns red with a pulsing ring.
- One tap again restores sound and plays a confirmation.
- Mute state is saved and restored on next visit.

### 🔄 Switch User
- "🔄 Switch User" button in the Awards Dashboard.
- Clears all localStorage and reloads the page for a fresh login.

### 🎤 Voice Persistence
- Last chosen voice is saved and automatically restored on next visit.

---

## 📁 File Structure
```
funlearn/
├── index.html   ← HTML structure
├── style.css    ← All styles & animations
├── app.js       ← Logic, data, voice, storage
└── README.md    ← This file
```

## 🚀 GitHub Pages in 4 Steps
1. Create a **public** repo named `funlearn`
2. Upload all 4 files
3. Settings → Pages → main / root → Save
4. Live at `https://YOUR-USERNAME.github.io/funlearn`

*Made with ❤️ for little learners of India 🇮🇳*
