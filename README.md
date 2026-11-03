# Emery's Universe

Portfolio d'Emery — développeuse web, BTS SIO option SLAM.

👉 **En ligne :** https://emerylenaiglaborderie-creator.github.io/Emery_s_Universe/

## Stack

React 19 · TypeScript · Vite · React Router — déployé sur GitHub Pages via GitHub Actions.

## Lancer en local

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
npm run lint
```

## Structure

```
src/
  pages/        Splash, Home (présentation), Projets, Cv
  components/   Header, Navbar, ProjectsCarousel, ProjectModal, ...
  data/         projects.ts — liste des projets (page Projets + carrousel)
  hooks/        useTrackingEyes — les yeux de la mascotte qui suivent la souris
  assets/       images (WebP)
public/
  404.html      redirection pour que les URLs /projets, /cv fonctionnent sur GitHub Pages
```

## Ajouter un projet

1. Déposer la miniature dans `src/assets/` (WebP, ~1280px de large max) :
   `cwebp -q 80 -resize 1280 0 image.png -o image.webp`
2. L'importer et ajouter une entrée dans `src/data/projects.ts`.

Un projet s'ouvre directement via `/projets?projet=<id>`.
