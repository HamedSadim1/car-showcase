# Car Showcase

Een moderne webapplicatie voor het verkennen en zoeken van auto's, gebouwd met Next.js 16. Deze applicatie maakt gebruik van de Cars by API-Ninjas API om uitgebreide informatie over auto's op te halen en weer te geven.

## 🚀 Features

- **Zoeken naar auto's**: Zoek op merk, model en jaar
- **Filter opties**: Filter op brandstoftype en productiejaar
- **Responsief design**: Geoptimaliseerd voor desktop en mobiele apparaten
- **Server-side rendering**: Snelle laadtijden met Next.js App Router
- **TypeScript**: Type-veilige ontwikkeling
- **Tailwind CSS**: Moderne styling met utility-first CSS framework

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **API**: Cars by API-Ninjas
- **Deployment**: Vercel (aanbevolen)

## 📋 Prerequisites

- Node.js 18+
- npm of yarn
- API sleutel van [RapidAPI](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)

## 🚀 Installatie

1. **Clone de repository**

   ```bash
   git clone https://github.com/HamedSadim1/car-showcase.git
   cd car-showcase
   ```

2. **Installeer dependencies**

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

## 🏗️ Project Structuur

```bash
car-showcase/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Globale styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React componenten
│   ├── CarCard.tsx         # Auto kaart component
│   ├── SearchBar.tsx       # Zoekbalk
│   └── ...
├── constants/              # Constanten (merken, jaren, etc.)
├── types/                  # TypeScript type definities
├── utils/                  # Utility functies
└── public/                 # Statische assets
```

## 🔧 Scripts

- `npm run dev` - Start ontwikkelserver
- `npm run build` - Bouw voor productie
- `npm run start` - Start productie server
- `npm run lint` - ESLint controle

## 🌐 Deployment

### Vercel (Aanbevolen)

1. Push naar GitHub
2. Verbind repository met Vercel
3. Stel omgevingsvariabelen in Vercel dashboard
4. Deploy

### Andere platforms

De applicatie kan worden gedeployed naar elke platform die Next.js ondersteunt (Netlify, Railway, etc.).

## 🤝 Bijdragen

Bijdragen zijn welkom! Volg deze stappen:

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📝 Licentie

Dit project is gelicentieerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 👨‍💻 Auteur

**Hamed Sadim** - [GitHub](https://github.com/HamedSadim1)

## 🙏 Erkenningen

- [Next.js](https://nextjs.org/) - Het React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Cars by API-Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas) - Auto data API
- [Imagin Studio](https://www.imagin.studio/) - Auto afbeeldingen
