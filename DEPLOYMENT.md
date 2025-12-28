# 🚀 Jak wdrożyć MOON COIN na żywo?

## Metoda 1: Netlify Drop (Najszybsza - 2 minuty!)

1. **Zbuduj projekt:**
   ```bash
   npm run build
   ```

2. **Przejdź do:** https://app.netlify.com/drop

3. **Przeciągnij folder `dist`** na stronę Netlify

4. **Gotowe!** Otrzymasz link typu: `https://random-name-123.netlify.app`

## Metoda 2: Netlify z GitHub (Automatyczne aktualizacje)

1. **Stwórz repozytorium na GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Moon Coin"
   git branch -M main
   git remote add origin https://github.com/TWOJ_USERNAME/moon-coin.git
   git push -u origin main
   ```

2. **Połącz z Netlify:**
   - Zaloguj się na https://app.netlify.com
   - Kliknij "Add new site" → "Import an existing project"
   - Wybierz GitHub i swoje repozytorium
   - Netlify automatycznie wykryje ustawienia z `netlify.toml`
   - Kliknij "Deploy site"

3. **Każdy push do GitHub = automatyczny deploy!**

## Metoda 3: Vercel (Alternatywa dla Netlify)

1. **Zainstaluj Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Lub przez stronę:**
   - Przejdź do https://vercel.com/new
   - Importuj repozytorium z GitHub
   - Kliknij "Deploy"

## Metoda 4: Surge.sh (Super szybki)

1. **Zainstaluj Surge:**
   ```bash
   npm install -g surge
   ```

2. **Deploy:**
   ```bash
   npm run build
   surge dist
   ```

3. **Podaj nazwę domeny** (np. `moon-coin-game.surge.sh`)

## Metoda 5: GitHub Pages (Darmowy)

1. **Zainstaluj gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Dodaj do `package.json`:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   },
   "homepage": "https://TWOJ_USERNAME.github.io/moon-coin"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🎯 Zalecenia

- **Dla testów:** Netlify Drop (najszybsze)
- **Dla produkcji:** Netlify/Vercel z GitHub (automatyczne aktualizacje)
- **Dla prostoty:** Surge.sh (jedna komenda)

## 📱 Testowanie responsywności

Po wdrożeniu, przetestuj na:
- 📱 Telefonie (Chrome DevTools → Toggle device toolbar)
- 💻 Tablecie
- 🖥️ Desktopie

## 🔧 Customowa domena

### Netlify:
1. Kliknij "Domain settings"
2. "Add custom domain"
3. Skonfiguruj DNS u swojego rejestratora

### Vercel:
1. Przejdź do "Settings" → "Domains"
2. Dodaj swoją domenę
3. Skonfiguruj DNS

## 🎨 Przed wdrożeniem - Checklist

- [ ] Zmień nazwę tokena w `Hero.jsx` (jeśli chcesz)
- [ ] Zaktualizuj linki social media w `Footer.jsx`
- [ ] Dostosuj kolory w `tailwind.config.js` (opcjonalnie)
- [ ] Przetestuj grę lokalnie (`npm run dev`)
- [ ] Zbuduj projekt (`npm run build`)
- [ ] Sprawdź czy `dist` folder się utworzył

## 🐛 Troubleshooting

**Problem:** Build się nie udaje
- Sprawdź czy wszystkie zależności są zainstalowane: `npm install`
- Usuń `node_modules` i zainstaluj ponownie: `rm -rf node_modules && npm install`

**Problem:** Strona nie działa po deploy
- Sprawdź czy `netlify.toml` jest w głównym folderze
- Upewnij się że wdrażasz folder `dist`, nie główny folder

**Problem:** Tailwind CSS nie działa
- Sprawdź czy `postcss.config.js` i `tailwind.config.js` istnieją
- Upewnij się że `index.css` zawiera dyrektywy `@tailwind`

## 🎉 Po wdrożeniu

Udostępnij link:
- 🐦 Twitter/X
- 💬 Discord
- 📱 Telegram
- 📘 Facebook

---

**Powodzenia z wdrożeniem! To the moon! 🚀🌙**
