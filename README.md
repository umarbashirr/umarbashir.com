# Umar Bashir Rather - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my work as a Full Stack Developer. This website features a clean design, optimized performance, and comprehensive project showcases.

## 🌟 Live Website

Visit the live website: [https://www.umarbashir.com](https://www.umarbashir.com)

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Friendly**: Comprehensive meta tags, structured data, and sitemap
- **Project Showcase**: Detailed portfolio with featured projects
- **Experience Timeline**: Professional experience with detailed responsibilities
- **Tech Stack Display**: Interactive technology showcase
- **Contact Integration**: Easy ways to get in touch
- **Multilingual Ready**: Prepared for internationalization

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **Next Themes** - Theme management

### Backend & Deployment

- **Node.js** - Runtime environment
- **Vercel** - Hosting and deployment
- **Google Tag Manager** - Analytics integration

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Package management

## 📁 Project Structure

```
src/
├── app/
│   ├── (website)/
│   │   ├── _components/          # Website-specific components
│   │   │   ├── experience.tsx    # Experience timeline
│   │   │   ├── footer.tsx        # Footer component
│   │   │   ├── landing-hero-section.tsx
│   │   │   ├── navbar.tsx        # Navigation bar
│   │   │   ├── project-grid.tsx  # Project showcase
│   │   │   ├── social-links.tsx  # Social media links
│   │   │   └── tech-stack-grid.tsx
│   │   ├── (routes)/
│   │   │   ├── about/            # About page
│   │   │   ├── my-work/          # Portfolio page
│   │   │   └── page.tsx          # Homepage
│   │   └── layout.tsx            # Website layout
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── sitemap.ts                # Sitemap generation
├── components/
│   ├── homepage/                 # Homepage-specific components
│   ├── ui/                       # Reusable UI components
│   └── project-card.tsx          # Project card component
├── lib/
│   └── utils.ts                  # Utility functions
├── providers/
│   └── theme-provider.tsx        # Theme context provider
├── types/
│   └── work.ts                   # TypeScript type definitions
└── utils/
    ├── cn.ts                     # Class name utility
    └── home-content.ts           # Content data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/umarbashir.com.git
   cd umarbashir.com
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your environment variables:

   ```env
   NEXT_PUBLIC_APP_URL=https://www.umarbashir.com
   GOOGLE_TAG_MANAGER_ID=your_gtm_id
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Adding New Projects

1. Edit `src/utils/home-content.ts`
2. Add your project to the `clientWork` array
3. Follow the existing structure for consistency

### Updating Experience

1. Edit `src/app/(website)/_components/experience.tsx`
2. Update the experience cards with your information
3. Modify responsibilities and technologies as needed

### Changing Content

- **Homepage**: Edit `src/app/(website)/(routes)/page.tsx`
- **About Page**: Edit `src/app/(website)/(routes)/about/page.tsx`
- **Portfolio**: Edit `src/app/(website)/(routes)/my-work/page.tsx`
- **Skills**: Edit `src/utils/home-content.ts`

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific sharing
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 📱 Performance

- **Next.js 15**: Latest framework with optimizations
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting
- **Static Generation**: Pre-rendered pages for speed
- **Turbopack**: Fast development builds

## 🎯 Key Pages

### Homepage (`/`)

- Hero section with introduction
- Featured projects showcase
- Tech stack display
- Experience timeline
- Complete project grid

### About Page (`/about`)

- Personal introduction
- Professional philosophy
- Skills breakdown
- Personal interests

### Portfolio (`/my-work`)

- Complete project showcase
- Project details and technologies
- Live project links
- Categorized projects

## 🔧 Configuration

### Theme Configuration

The website supports both light and dark themes. Configuration is handled in `src/providers/theme-provider.tsx`.

### Analytics

Google Tag Manager is integrated for analytics. Set your GTM ID in the environment variables.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/umarbashir.com/issues).

## 📞 Contact

**Umar Bashir Rather**

- **Email**: mail.umarbashir@gmail.com
- **Phone**: +91 7889737464
- **Location**: Charigam, Pahalgam, District Anantnag, Jammu and Kashmir, India
- **Website**: [https://www.umarbashir.com](https://www.umarbashir.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Vercel](https://vercel.com/) for the hosting platform

---

⭐ If you found this project helpful, please give it a star!
