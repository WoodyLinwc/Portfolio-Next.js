# Woody Lin - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features interactive components, photography gallery, terminal simulator, and comprehensive project showcase.

## 🌐 Live Demo

**[woody-lin-personal.vercel.app](https://woody-lin-personal.vercel.app)**

## ✨ Key Features

### 🏠 **Dynamic Home Page**

-   Animated typing effect with multiple role titles
-   Responsive hero section with professional image
-   Comprehensive about section with skills and education
-   Interactive project timeline and experience showcase
-   Real-time weather widget for Boston, MA
-   Embedded Google Maps integration

### 📸 **Advanced Photography Portfolio**

-   **Interactive photo gallery** with category filtering (Travel, B&W, Event, Night, Photojournalism)
-   **Smart image optimization** with WebP thumbnails and original lightbox viewing
-   **Magnifier feature** for detailed photo inspection (desktop hover/mobile touch)
-   **Camera gear showcase** with detailed specifications and reviews
-   **Background preloading** with persistent caching for optimal performance
-   **Lazy loading** with intersection observer for efficient image delivery

### 🛠️ **Developer Tools & Productivity**

-   Curated collection of 16+ essential development tools
-   **Quote of the Day widget** with automatic Chinese translation
-   Categories: Development, Productivity, Design, Cloud, Collaboration
-   Tool recommendations with direct download/access links

### 🎮 **Games Showcase**

-   Interactive carousel featuring playable games
-   Links to live games: Space Invader, Minesweeper, Snake, The Aviator
-   Embedded gaming news feed from GameSpot

### 📚 **Interactive Learning Platform**

-   **Full-featured terminal simulator** with 15+ Linux commands
-   **Live2D widget integration** (desktop only with WebGL support)
-   **React learning components** including interactive Tic-Tac-Toe
-   **Code visualization** with syntax highlighting
-   Mobile-responsive tabbed interface for code/demo viewing

### 🧑‍💻 **Professional Experience**

-   Detailed timeline of work experience and projects
-   **Mobile app development** with Google Play Store publications
-   **Full-stack web development** portfolio
-   **Teaching assistant** experience and certifications
-   Direct links to live projects and repositories

## 🚀 Tech Stack

### **Core Framework**

-   **Next.js 15** - React framework with App Router
-   **TypeScript** - Type-safe development
-   **Tailwind CSS** - Utility-first styling
-   **React 19** - Latest React features

### **Performance & Analytics**

-   **Vercel Analytics** - Performance monitoring
-   **Speed Insights** - Core Web Vitals tracking
-   **Image optimization** with Sharp for thumbnails
-   **Background preloading** with caching strategies

### **Interactive Features**

-   **Framer Motion** - Smooth animations
-   **Lucide React** - Modern icon system
-   **Custom hooks** for lazy loading and terminal history
-   **Live2D widget** integration
-   **Real-time APIs** (Weather, Quotes, Translation)

### **Development Tools**

-   **ESLint** with Next.js configuration
-   **PM2** process management for background services
-   **Sharp** for automated image optimization
-   **Bundle analyzer** for performance optimization

## 📁 Project Structure

```
portfolio/
├── 📱 src/app/                    # Next.js App Router pages
│   ├── 🏠 page.tsx               # Home page with hero & about
│   ├── 📸 photography/           # Photo gallery & camera gear
│   ├── 🎮 games/                 # Games showcase
│   ├── 🛠️ tools/                 # Developer tools collection
│   ├── 📚 learning/              # Interactive learning platform
│   │   └── 🔄 react/             # React tutorials & components
│   └── 📝 blog/                  # Blog integration
├── 🧩 src/components/            # Reusable React components
│   ├── 🏠 home/                  # Homepage components
│   ├── 📸 photography/           # Gallery & gear showcases
│   ├── 📚 learning/terminal/     # Terminal simulator
│   └── 🔧 widgets/               # Weather, quotes, Live2D
├── 📊 src/data/                  # Structured data files
│   ├── 👤 me/                    # Personal info & experience
│   ├── 📸 photography/           # Photos & camera gear
│   └── 📚 learning/              # Educational content
├── 🎣 src/hooks/                 # Custom React hooks
├── 📦 src/lib/                   # Utilities & configurations
└── 🔧 scripts/                   # Build & optimization tools
```

## ⚡ Performance Features

### **Image Optimization Pipeline**

```bash
# Automated image optimization with WebP conversion
npm run optimize-images

# Watch mode for automatic optimization
npm run optimize-images:watch
```

-   **Smart thumbnail generation** (600x600px, 78% quality, ~80-120KB)
-   **WebP format** with JPEG fallbacks
-   **Duplicate detection** to skip already optimized images
-   **Comprehensive optimization manifest** with metadata

### **Advanced Caching Strategy**

-   **Background preloading** with 24-hour localStorage cache
-   **Progressive loading** with configurable concurrency
-   **Intersection Observer** for efficient lazy loading
-   **Browser storage optimization** for repeated visits

## 🔧 Development Commands

```bash
# Development with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint

# Image optimization
npm run optimize-images

# Bundle analysis
npm run analyze

# Performance check
npm run check-performance
```

## 🌟 Unique Features

### **Terminal Simulator**

-   **15+ Linux commands** with realistic responses
-   **Command history** with arrow key navigation
-   **Live2D widget** integration via terminal command
-   **Mobile/WebGL detection** for optimal experience
-   **Easter eggs** and hidden features

### **Photography System**

-   **Smart image loading** (thumbnails → originals)
-   **Magnifier tool** for detailed inspection
-   **Category filtering** with smooth transitions
-   **Background preloading** for instant lightbox viewing
-   **Persistent cache** for repeat visitors

### **Real-time Integrations**

-   **Weather API** with Boston, MA data
-   **Quote translation** (English → Chinese)
-   **Live gaming news** from GameSpot
-   **Disqus comments** system

## 🔍 SEO & Accessibility

-   **Comprehensive meta tags** with Open Graph and Twitter Cards
-   **Structured data** with JSON-LD
-   **Semantic HTML** with proper ARIA labels
-   **Responsive design** across all device sizes
-   **Core Web Vitals optimization**
-   **Sitemap and robots.txt** generation

## 🚀 Deployment

**Hosted on Vercel** with automatic deployments from GitHub:

-   **Edge Network** for global performance
-   **Automatic HTTPS** and domain management
-   **Analytics integration** for performance monitoring
-   **Preview deployments** for feature branches

## 📞 Contact & Links

-   **Email**: [lin.wancheng001@gmail.com](mailto:lin.wancheng001@gmail.com)
-   **LinkedIn**: [Woody Lin](https://www.linkedin.com/in/woody-lin-32ab48161/)
-   **GitHub**: [WoodyLinwc](https://github.com/WoodyLinwc)
-   **Portfolio**: [Live Demo](https://woody-lin-personal.vercel.app)

---

_Built with ❤️ using modern web technologies. Inspired by [MysteryCode](https://www.youtube.com/@foolishdeveloper) design patterns._
