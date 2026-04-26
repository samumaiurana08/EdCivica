# Pubblicare il sito su GitHub Pages

Il progetto è già configurato per essere pubblicato gratuitamente come **sito open source** su GitHub Pages.

## Cosa è già pronto nel codice

- **`HashRouter`** in `src/App.tsx` → URL tipo `/#/agenda-2030`, nessun problema di 404 al refresh.
- **`base` dinamico** in `vite.config.ts` → legge la variabile d'ambiente `GH_PAGES_BASE` in fase di build.
- **`public/.nojekyll`** → impedisce a Jekyll di ignorare cartelle che iniziano con `_`.
- **`.github/workflows/deploy.yml`** → workflow che builda e pubblica automaticamente a ogni push su `main`.

## Procedura (una sola volta)

1. **Collega il progetto a GitHub** dall'editor di Lovable: barra laterale → **Connectors** → **GitHub** → Create Repository.
2. Vai sul repo appena creato su github.com → **Settings** → **Pages**.
3. Alla voce **Build and deployment → Source** seleziona **GitHub Actions**.
4. Fai un qualsiasi commit (o vai in **Actions** e lancia manualmente "Deploy to GitHub Pages").
5. Dopo qualche minuto il sito sarà online a:

   ```
   https://<tuo-username>.github.io/<nome-repo>/
   ```

## Sviluppo locale

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # build di produzione (base path "/")
npm run preview  # anteprima della build
```

Il `base` path `/<nome-repo>/` viene applicato **solo** durante la build su GitHub Actions
(grazie alla variabile `GH_PAGES_BASE` impostata nel workflow), quindi in locale tutto continua
a funzionare normalmente da `/`.

## Licenza open source

Per rendere il progetto ufficialmente open source, aggiungi un file `LICENSE` nella root del repo.
Le scelte più comuni sono **MIT** (massima permissività) o **Apache-2.0**.
Su GitHub: tasto "Add file" → "Create new file" → nome `LICENSE` → bottone "Choose a license template".