# Portfolio Project File Structure

```
portfolio/
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── blog/
    │   │   └── page.tsx
    │   ├── games/
    │   │   ├── GameShowcase.tsx
    │   │   └── page.tsx
    │   ├── learning/
    │   │   ├── page.tsx
    │   │   └── react/
    │   │       ├── page.tsx
    │   │       └── tic-tac-toe/
    │   │           ├── page.tsx
    │   │           └── ticTacToe.jsx
    │   ├── photography/
    │   │   └── page.tsx
    │   └── tools/
    │       └── page.tsx
    ├── components/
    │   ├── Footer.tsx
    │   ├── LazyImage.tsx
    │   ├── Navbar.tsx
    │   ├── ScrollToTop.tsx
    │   ├── SectionTitle.tsx
    │   ├── Spinner.tsx
    │   ├── home/
    │   │   ├── About.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Location.tsx
    │   │   └── Projects.tsx
    │   ├── learning/
    │   │   └── terminal/
    │   │       ├── MacTerminal.tsx
    │   │       └── TerminalCommands.tsx
    │   ├── photography/
    │   │   ├── CameraGearShowcase.tsx
    │   │   └── PhotoGalleryShowcase.tsx
    │   └── widgets/
    │       ├── DisqusComments.tsx
    │       ├── Live2DWidget.tsx
    │       ├── QuoteWidget.tsx
    │       └── WeatherWidget.tsx
    ├── data/
    │   ├── fallbackQuotes.ts
    │   ├── games.ts
    │   ├── terminalData.ts
    │   ├── tools.ts
    │   ├── learning/
    │   │   └── flashcards/
    │   │       ├── javascript.ts
    │   │       ├── nodejs.ts
    │   │       ├── react.ts
    │   │       └── types.ts
    │   ├── me/
    │   │   ├── experiences.ts
    │   │   ├── personal.ts
    │   │   └── projects.ts
    │   └── photography/
    │       ├── cameras.ts
    │       ├── lenses.ts
    │       └── photos.ts
    ├── hooks/
    │   ├── useLazyLoading.ts
    │   └── useTerminalHistory.ts
    ├── lib/
    │   ├── constants.ts
    │   └── utils.ts
    └── types/
        └── me.ts
```

## Key Features

### 🏠 **Home Page**

-   Hero section with animated typing effect
-   About section with personal information and skills
-   Projects and experience timeline
-   Location with weather widget and map

### 📸 **Photography**

-   Interactive photo gallery with category filters
-   Camera gear showcase with detailed specifications
-   Lazy loading for optimized performance
-   Lightbox modal for enlarged photo viewing

### 🎮 **Games**

-   Game showcase carousel
-   Links to playable games (Space Invader, Minesweeper, Snake, The Aviator)
-   Embedded game news feed

### 🛠️ **Tools/Productivity**

-   Comprehensive toolkit of development and productivity tools
-   Quote of the day widget with translation
-   Categorized tool listings

### 📚 **Learning**

-   Interactive terminal simulator with Linux commands
-   React learning components (Tic Tac Toe game)
-   Educational resources and tutorials

### 📝 **Blog**

-   Embedded blog feed
-   Live2D widget integration
-   Comment system with Disqus

## Tech Stack

-   **Framework**: Next.js 15 with TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: Custom React components
-   **State Management**: React hooks (useState, useEffect)
-   **Animations**: Framer Motion, CSS animations
-   **Deployment**: Vercel
-   **Analytics**: Vercel Analytics & Speed Insights

## Data Structure

-   **Personal Info**: Centralized in `src/data/me/`
-   **Photography**: Camera/lens specs and photo collections
-   **Tools**: Development and productivity tool listings
-   **Games**: Game information and links
-   **Terminal**: Command definitions and help system

## Custom Hooks

-   `useLazyLoading`: Intersection Observer for performance optimization
-   `useTerminalHistory`: Command history management for terminal

## Widgets & Features

-   **Weather Widget**: Real-time Boston weather data
-   **Quote Widget**: Daily quotes with Chinese translation
-   **Live2D Widget**: Interactive character (terminal-activated)
-   **Terminal Simulator**: Functional Linux command simulation
-   **Photo Gallery**: Optimized image loading and categorization
