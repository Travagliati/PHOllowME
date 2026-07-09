# Pubblicare PHOllowME (PWA)

Questa cartella è un'app web installabile (PWA). Per installarla su iOS/Android
deve essere servita da un host **HTTPS**. I percorsi sono **relativi**, quindi
funziona sia alla radice di un dominio sia in una sottocartella (es. GitHub Pages).

## Opzione A — Netlify Drop (più veloce, senza git)
1. Da PC apri https://app.netlify.com/drop
2. Trascina questa cartella (`pwa`) nell'area di rilascio.
3. Ottieni un URL HTTPS tipo `https://<nome>.netlify.app` (rinominabile nelle impostazioni).

## Opzione B — GitHub Pages (repo permanente e versionato)
1. Crea un repository su https://github.com/new (es. `phollowme`), Public.
2. Carica il **contenuto** di questa cartella nella root del repo
   (Add file → Upload files, oppure via git).
3. Settings → Pages → Source: branch `main`, cartella `/ (root)` → Save.
4. Dopo ~1 minuto l'app è online su `https://<utente>.github.io/phollowme/`.

Con git da terminale (dentro la cartella `pwa`):

    git init
    git add .
    git commit -m "PHOllowME PWA"
    git branch -M main
    git remote add origin https://github.com/<utente>/phollowme.git
    git push -u origin main

poi attiva Pages come al punto 3.

## Installare sul telefono (dopo A o B)
- **Android (Chrome):** menu ⋮ → "Installa app" / "Aggiungi a schermata Home".
- **iOS (Safari):** Condividi → "Aggiungi a Home".

Si apre a schermo intero e funziona offline.

## Note
- Deve essere **HTTPS**: da `file://` il service worker (offline + installazione) è bloccato.
- Su HTTPS la **geolocalizzazione** ("Cerca intorno a te", "Posizione in tempo reale")
  chiede il permesso e usa la posizione reale.
