# Rohan Mirza Textiles — Next.js 14 Website

Premium B2B textile manufacturer and exporter website built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS v3
- **Database**: Prisma ORM with SQLite
- **Animations**: Framer Motion v11
- **Forms**: React Hook Form + Zod validation
- **AI Chatbot**: OpenAI GPT-4o-mini integration
- **SEO**: Next.js Metadata API
- **Responsive Design**: Mobile-first with custom breakpoints

## Project Structure

```
rohan-mirza-textiles/
├── app/                    # Next.js App Router pages and API routes
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── products/           # Products pages
│   ├── contact/page.tsx    # Contact form page
│   └── api/                # API routes
├── components/             # Reusable React components
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Home page sections
│   ├── products/           # Product components
│   ├── ui/                 # UI primitives
│   └── chatbot/            # AI Chat widget
├── lib/                    # Utilities and configurations
├── prisma/                 # Database schema and seed
├── types/                  # TypeScript type definitions
└── styles/                 # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Edit `.env.local` and add your OpenAI API key:
   ```
   DATABASE_URL="file:./dev.db"
   OPENAI_API_KEY="your-openai-api-key-here"
   ```

3. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run seed` | Seed database with products |

## Company Information

**Rohan Mirza Textiles**
- Location: Plot 42, SITE Industrial Area, Karachi, Sindh 75700, Pakistan
- Founded: 2005
- Facility: 120,000 sq ft
- Workers: 350+
- Production: 12M+ units/year
- Export Countries: 45+
- Certifications: ISO 9001, OEKO-TEX, GOTS, WRAP

## Product Categories

1. **Shop Towels** - Industrial cleaning towels for automotive and manufacturing
2. **Terry Towels** - Hotel and hospitality bath, hand, and face towels
3. **Industrial Textile** - Wipers, rags, and canvas fabrics
4. **Hospitality Textile** - Bathrobes, bed linens, and restaurant textiles

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion v11
- **Icons**: lucide-react
- **Database**: Prisma + SQLite
- **Forms**: React Hook Form + Zod
- **Fonts**: Cormorant Garamond + DM Sans (Google Fonts)
- **AI**: OpenAI GPT-4o-mini

## License

© 2025 Rohan Mirza Textiles. All rights reserved.
