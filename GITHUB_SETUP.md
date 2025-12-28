# 🚀 Jak dodać projekt na GitHub

## Krok 1: Utwórz repozytorium na GitHub

1. Przejdź do: https://github.com/new
2. Wypełnij dane:
   - **Repository name:** `memecoin-game` (lub dowolna nazwa)
   - **Description:** "Chwytliwy memecoin z grą Spin & Win w React"
   - **Public** lub **Private** (wybierz)
   - ❌ **NIE zaznaczaj** "Add a README file" (już mamy)
   - ❌ **NIE zaznaczaj** "Add .gitignore" (już mamy)
3. Kliknij **"Create repository"**

## Krok 2: Połącz lokalne repozytorium z GitHub

GitHub pokaże Ci instrukcje. Użyj tych komend w terminalu:

```bash
# Dodaj remote (zamień USERNAME na swoją nazwę użytkownika GitHub)
git remote add origin https://github.com/USERNAME/memecoin-game.git

# Zmień nazwę brancha na main (jeśli potrzeba)
git branch -M main

# Wypchnij kod na GitHub
git push -u origin main
```

## Krok 3: Gotowe! 🎉

Twój projekt jest teraz na GitHub pod adresem:
`https://github.com/USERNAME/memecoin-game`

---

## 📋 Szybkie komendy (skopiuj i wklej)

**Zastąp `USERNAME` swoją nazwą użytkownika GitHub:**

```bash
git remote add origin https://github.com/USERNAME/memecoin-game.git
git branch -M main
git push -u origin main
```

---

## 🔄 Przyszłe aktualizacje

Gdy wprowadzisz zmiany w projekcie:

```bash
git add .
git commit -m "Opis zmian"
git push
```

---

## 🌐 Automatyczny deploy z GitHub

### Netlify:
1. Zaloguj się na https://app.netlify.com
2. Kliknij "Add new site" → "Import an existing project"
3. Wybierz GitHub → Wybierz repozytorium `memecoin-game`
4. Netlify automatycznie wykryje ustawienia
5. Kliknij "Deploy site"

**Każdy push do GitHub = automatyczny deploy!** 🚀

### Vercel:
1. Zaloguj się na https://vercel.com
2. Kliknij "Add New" → "Project"
3. Importuj z GitHub
4. Wybierz repozytorium `memecoin-game`
5. Kliknij "Deploy"

---

## 🔧 Troubleshooting

**Problem:** `git push` pyta o hasło
- Użyj Personal Access Token zamiast hasła
- Lub skonfiguruj SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

**Problem:** `remote origin already exists`
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/memecoin-game.git
```

**Problem:** `failed to push some refs`
```bash
git pull origin main --rebase
git push -u origin main
```

---

**Powodzenia! 🎉**
