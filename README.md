# 🎰 MEMECOIN ROULETTE - Spin & Win Solana Memecoins 🎰

Gra losująca z prawdziwymi nazwami Solana memecoinów! 🚀

## ✨ Features

- 🎰 **Memecoin Roulette** - Gra losująca z prawdziwymi Solana memecoinami (BONK, PEPE, WIF, MYRO, etc.)
- 👛 **Fake Wallet Connect** - Symulacja połączenia z walletem (demo mode)
- 💎 **Beautiful UI** - Nowoczesny, responsywny design z Tailwind CSS
- 🎨 **Animacje** - Płynne animacje i efekty wizualne
- 📱 **Responsive** - Działa świetnie na wszystkich urządzeniach
- 🚀 **Fast** - Zbudowane na React + Vite

## 🎯 Jak grać?

1. Kliknij "Connect Wallet" aby połączyć fake wallet (demo)
2. Kliknij "SPIN NOW!" aby zakręcić slotami (koszt: 100 monet)
3. Dopasuj 3 takie same symbole = JACKPOT (3x wartość w tokenach + SOL)
4. Dopasuj 2 takie same symbole = wygrana (1x wartość)
5. Wygrywaj BONK, PEPE, WIF i inne popularne memecoiny! 🎉

## 🛠️ Instalacja i uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Podgląd buildu
npm run preview
```

## 🌐 Deployment

### Netlify (Zalecane)

1. Zaloguj się na [Netlify](https://www.netlify.com/)
2. Kliknij "Add new site" → "Import an existing project"
3. Połącz z GitHub/GitLab lub przeciągnij folder projektu
4. Netlify automatycznie wykryje ustawienia z `netlify.toml`
5. Kliknij "Deploy site"

### Vercel

1. Zaloguj się na [Vercel](https://vercel.com/)
2. Kliknij "Add New" → "Project"
3. Importuj repozytorium lub przeciągnij folder
4. Vercel automatycznie skonfiguruje build
5. Kliknij "Deploy"

### Inne opcje

- **GitHub Pages** - Darmowy hosting dla projektów open source
- **Cloudflare Pages** - Szybki CDN i darmowy hosting
- **Render** - Alternatywa dla Netlify/Vercel

## 📦 Technologie

- **React 19** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **PostCSS** - CSS processing

## 🎨 Struktura projektu

```
memecoin-game/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Sekcja hero z nagłówkiem
│   │   ├── SpinGame.jsx       # Główna gra losująca
│   │   ├── Tokenomics.jsx     # Informacje o tokenie
│   │   └── Footer.jsx         # Stopka
│   ├── App.jsx                # Główny komponent
│   ├── index.css              # Style globalne
│   └── main.jsx               # Entry point
├── netlify.toml               # Konfiguracja Netlify
└── package.json
```

## 🚀 Testowanie online

Strona jest gotowa do wdrożenia na:
- **Netlify** - https://app.netlify.com/drop (drag & drop folder `dist` po `npm run build`)
- **Vercel** - https://vercel.com/new
- **Surge.sh** - `npm install -g surge && surge dist`

## 📝 Customizacja

Możesz łatwo dostosować:
- Kolory w `tailwind.config.js`
- Nagrody w grze w `src/components/SpinGame.jsx` (tablica `prizes`)
- Tokenomics w `src/components/Tokenomics.jsx`
- Teksty i emoji w każdym komponencie

## ⚠️ Disclaimer

To jest projekt edukacyjny/rozrywkowy. Zawsze przeprowadzaj własne badania (DYOR) przed inwestowaniem w kryptowaluty!

## 📄 License

MIT - Możesz używać tego projektu jak chcesz!

---

Made with 💜 | MEMECOIN ROULETTE 🎰🚀
