# Car Showcase

Een moderne webapplicatie voor het verkennen en zoeken van auto's, gebouwd met Next.js 16. Deze applicatie maakt gebruik van de Cars by API-Ninjas API om uitgebreide informatie over auto's op te halen en weer te geven.

## 🚀 Features

- **Zoeken naar auto's**: Zoek op merk, model en jaar
- **Filter opties**: Filter op brandstoftype en productiejaar
- **Responsief design**: Geoptimaliseerd voor desktop en mobiele apparaten
- **Server-side rendering**: Snelle laadtijden met Next.js App Router
- **TypeScript**: Type-veilige ontwikkeling met `strict: true`
- **Tailwind CSS v4**: Moderne styling met utility-first CSS framework
- **Foutafhandeling**: Error boundary + API-foutafhandeling met `try/catch` en `response.ok` checks
- **Pre-commit checks**: Husky voert automatisch lint en typecheck uit bij elke commit
- **CI/CD**: GitHub Actions workflow voor typecheck, lint en build op pull requests

## 🛠️ Tech Stack

| Technologie | Versie | Rol |
|------------|--------|-----|
| Next.js | 16 | Framework (App Router) |
| React | 19 | UI Library |
| TypeScript | 6 | Type-veilige ontwikkeling |
| Tailwind CSS | 4 | Styling |
| Headless UI | 2.2 | UI componenten (dialogs, listboxes) |
| Husky | 9 | Git hooks |

## 📋 Prerequisites

- Node.js 20+
- npm
- API sleutel van [RapidAPI](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)

## 🚀 Installatie

1. **Clone de repository**

   ```bash
   git clone https://github.com/HamedSadim1/car-showcase.git
   cd car-showcase
   ```

2. **Installeer dependencies** (incl. Husky hooks)

   ```bash
   npm install
   ```

3. **Omgevingsvariabelen instellen**
   Maak een `.env.local` bestand in de root directory:

   ```env
   NEXT_PUBLIC_RAPID_API_KEY=jouw_api_sleutel_hier
   NEXT_PUBLIC_IMAGIN_API_KEY=hrjavascript-mastery
   ```

4. **Ontwikkelserver starten**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📖 Gebruik

- **Zoeken**: Gebruik de zoekbalk om auto's te vinden op merk en model
- **Filters**: Gebruik de dropdowns voor brandstoftype en jaar om resultaten te verfijnen
- **Details bekijken**: Klik op een auto voor meer informatie
- **Meer laden**: Klik op "Show More" om meer resultaten te laden

## 🏗️ Project Structuur

```
car-showcase/
├── app/                        # Next.js App Router
│   ├── globals.css             # Globale styles (Tailwind v4)
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page (Server Component)
│   └── error.tsx               # Error boundary
├── components/                 # React componenten
│   ├── CarCard.tsx             # Auto kaart component (memo'd)
│   ├── CarDetails.tsx          # Auto detail modal (memo'd)
│   ├── CarMainImage.tsx        # Hoofd afbeelding (memo'd)
│   ├── CarThumbnails.tsx       # Thumbnail afbeeldingen (memo'd)
│   ├── CarSpecs.tsx            # Auto specificaties (memo'd)
│   ├── CustomButton.tsx        # Herbruikbare knop (memo'd)
│   ├── CustomFilter.tsx        # Filter dropdown
│   ├── Footer.tsx              # Footer
│   ├── Hero.tsx                # Hero sectie
│   ├── Navbar.tsx              # Navigatiebalk
│   ├── SearchBar.tsx           # Zoekbalk
│   ├── SearchFilters.tsx       # Zoek filters wrapper
│   ├── SearchManufacturer.tsx  # Merk zoekcomponent
│   └── ShowMore.tsx            # "Meer laden" knop
├── hooks/                      # Gedeelde React hooks
│   └── useUpdateSearchParams.ts # URL search params beheer
├── constants/                  # Centrale constanten (SSOT)
│   └── index.ts                # Merken, jaren, brandstoffen, API config
├── types/                      # TypeScript type definities
├── utils/                      # Utility functies
│   └── index.ts                # fetchCars, generateCarImageUrl
├── .github/
│   └── workflows/
│       └── pr.yml              # GitHub Actions CI workflow
├── .husky/
│   └── pre-commit              # Pre-commit hook (lint + typecheck)
└── public/                     # Statische assets
```

## 🔧 Scripts

| Command | Beschrijving |
|---------|-------------|
| `npm run dev` | Start ontwikkelserver |
| `npm run build` | Bouw voor productie |
| `npm run start` | Start productie server |
| `npm run lint` | ESLint controle |
| `npx tsc --noEmit` | TypeScript typecheck |

### Git Hooks (Husky)

Bij elke commit wordt automatisch uitgevoerd:
- ✅ `npm run lint` — ESLint code kwaliteit check
- ✅ `npx tsc --noEmit` — TypeScript typecheck

## 🔄 CI/CD

GitHub Actions draait automatisch bij elke pull request naar `main`:
- **Type Check** — `npx tsc --noEmit`
- **Lint** — `npm run lint`
- **Build** — `npm run build`

## 🌐 Deployment

### Vercel (Aanbevolen)

1. Push naar GitHub
2. Verbind repository met Vercel
3. Stel omgevingsvariabelen in Vercel dashboard:
   - `NEXT_PUBLIC_RAPID_API_KEY`
   - `NEXT_PUBLIC_IMAGIN_API_KEY`
4. Deploy

### Andere platforms

De applicatie kan worden gedeployed naar elk platform dat Next.js ondersteunt (Netlify, Railway, etc.).

## 🤝 Bijdragen

Bijdragen zijn welkom! Volg deze stappen:

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (de pre-commit hook voert automatisch lint + typecheck uit)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📝 Licentie

Dit project is gelicentieerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 👨‍💻 Auteur

**Hamed Sadim** - [GitHub](https://github.com/HamedSadim1)

## 🙏 Erkenningen

- [Next.js](https://nextjs.org/) - Het React framework
- [React](https://react.dev/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Headless UI](https://headlessui.com/) - Accessible UI componenten
- [Cars by API-Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas) - Auto data API
- [Imagin Studio](https://www.imagin.studio/) - Auto afbeeldingen
- [Husky](https://typicode.github.io/husky/) - Git hooks
