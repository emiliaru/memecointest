# 🎨 Przewodnik Customizacji MOON COIN

## 🎯 Zmiana nazwy i branding

### Zmień nazwę tokena
Edytuj `src/components/Hero.jsx`:
```jsx
<h1 className="text-6xl md:text-8xl font-bold...">
  TWOJA NAZWA  {/* Zamiast MOON COIN */}
</h1>
```

### Zmień emoji/logo
```jsx
<div className="text-8xl animate-bounce-slow">🔥</div>  {/* Zamiast 🚀 */}
```

## 🎮 Customizacja gry

### Zmień nagrody w grze
Edytuj `src/components/SpinGame.jsx`:
```jsx
const prizes = [
  { emoji: '💎', name: 'Diamond', value: 1000, color: 'from-blue-400 to-cyan-400' },
  { emoji: '🚀', name: 'Rocket', value: 500, color: 'from-orange-400 to-red-400' },
  // Dodaj swoje nagrody tutaj!
  { emoji: '🎁', name: 'Gift', value: 2500, color: 'from-purple-500 to-pink-500' },
]
```

### Zmień koszt spinu
```jsx
const spinCost = 100  // Zmień na dowolną wartość
```

### Zmień początkowy balans
```jsx
const [coins, setCoins] = useState(5000)  // Zamiast 1000
```

## 🎨 Zmiana kolorów

### Główne kolory tła
Edytuj `src/App.jsx`:
```jsx
<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
  {/* Zmień kolory gradientu */}
</div>
```

### Kolory przycisków
W `src/components/Hero.jsx`:
```jsx
className="bg-gradient-to-r from-yellow-400 to-orange-500"
// Zmień na np:
className="bg-gradient-to-r from-green-400 to-blue-500"
```

### Dodaj własne animacje
W `tailwind.config.js`:
```js
animation: {
  'wiggle': 'wiggle 1s ease-in-out infinite',
},
keyframes: {
  wiggle: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' },
  }
}
```

## 💰 Tokenomics

### Zmień dane tokena
Edytuj `src/components/Tokenomics.jsx`:
```jsx
<p className="text-white text-3xl font-bold text-center">1B MOON</p>
// Zmień supply, procenty, etc.
```

### Dodaj nowe sekcje
```jsx
<div className="bg-gradient-to-br from-red-500/20 to-orange-500/20...">
  <div className="text-5xl mb-4 text-center">🎁</div>
  <h3 className="text-2xl font-bold text-red-400 mb-2 text-center">Airdrop</h3>
  <p className="text-white text-3xl font-bold text-center">5%</p>
</div>
```

## 🔗 Social Media Links

### Dodaj prawdziwe linki
Edytuj `src/components/Footer.jsx`:
```jsx
<a href="https://twitter.com/twoj_profil" className="...">
  <span className="text-2xl">🐦</span>
</a>
<a href="https://t.me/twoj_kanal" className="...">
  <span className="text-2xl">💬</span>
</a>
```

## 📊 Dodatkowe funkcje

### Dodaj licznik odwiedzin
Zainstaluj:
```bash
npm install react-countup
```

Użyj w komponencie:
```jsx
import CountUp from 'react-countup'

<CountUp end={1000000} duration={2} />
```

### Dodaj dźwięki
Zainstaluj:
```bash
npm install use-sound
```

Dodaj w `SpinGame.jsx`:
```jsx
import useSound from 'use-sound'

const [playWin] = useSound('/sounds/win.mp3')
// Odtwórz przy wygranej: playWin()
```

### Dodaj particles/confetti
```bash
npm install react-confetti
```

```jsx
import Confetti from 'react-confetti'

{result?.winAmount > 0 && <Confetti />}
```

## 🌐 SEO i Meta Tags

### Dodaj meta tags
Edytuj `index.html`:
```html
<head>
  <title>MOON COIN - Najlepszy Memecoin!</title>
  <meta name="description" content="Graj i wygrywaj z MOON COIN!">
  <meta property="og:title" content="MOON COIN">
  <meta property="og:description" content="Chwytliwy memecoin z grą!">
  <meta property="og:image" content="/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

## 🎯 Zaawansowane customizacje

### Dodaj tryb ciemny/jasny
```jsx
const [darkMode, setDarkMode] = useState(true)

<div className={darkMode ? 'dark' : 'light'}>
  {/* Twoja aplikacja */}
</div>
```

### Dodaj multi-język
```bash
npm install react-i18next i18next
```

### Dodaj wallet connect
```bash
npm install @web3-react/core ethers
```

## 💡 Pomysły na rozszerzenia

- 🎰 Więcej gier (ruletka, kości)
- 🏆 System achievementów
- 📈 Wykres ceny (fake lub prawdziwy)
- 👥 Leaderboard
- 🎁 Daily rewards
- 💬 Chat społecznościowy
- 🔔 Powiadomienia push
- 📱 Progressive Web App (PWA)

## 🔧 Narzędzia pomocnicze

### Generatory kolorów
- https://coolors.co/
- https://colorhunt.co/

### Emoji
- https://emojipedia.org/
- https://getemoji.com/

### Animacje
- https://animate.style/
- https://www.framer.com/motion/

### Ikony (zamiast emoji)
```bash
npm install lucide-react
```

```jsx
import { Rocket, Star, Trophy } from 'lucide-react'
<Rocket size={48} />
```

---

**Baw się dobrze customizując! 🎨🚀**
