# MicroReach

Influencer-Marketing-Plattform (MVP) – moderne Monorepo-Struktur für GitHub, Netlify & Neon (Postgres).

## Struktur

```
/microreach
  /apps
    /web         # Next.js Frontend (Tailwind, Demo, API-Routes)
  /packages
    /db          # Prisma-Schema, Seed-Script
    /ui          # Wiederverwendbare UI-Komponenten
  README.md
  .gitignore
  netlify.toml   # Netlify-Konfiguration
```

## Quickstart

1. `cd apps/web && npm install && npm run dev` (Frontend lokal starten)
2. `cd ../../packages/db && npx prisma db push && node seed.js` (DB anlegen & Demo-Daten)
3. Netlify-Deploy: Repo verbinden, Build-Command `npm run build`, Publish `apps/web/.next`

## Features (Demo)
- Landingpage mit Login (Brand/Influencer)
- Dashboard mit Demo-Profilen & Kampagnen
- 1-Klick-Bewerbung (Mock)
- Modernes UI (Tailwind)
