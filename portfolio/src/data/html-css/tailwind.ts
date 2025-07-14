// src/data/html-css/tailwind.ts

import type { HtmlCssTopic } from "./types";

export const tailwindTopics: HtmlCssTopic[] = [
    {
        id: "tailwind-basics",
        title: "Tailwind CSS Basics",
        category: "Tailwind",
        description: "Getting started with Tailwind CSS utility classes.",
        content:
            "Tailwind CSS is a utility-first CSS framework for rapid UI development.\n" +
            "\n" +
            "Installation:\n" +
            "npm install -D tailwindcss\n" +
            "npx tailwindcss init\n" +
            "\n" +
            "Basic Usage:\n" +
            '<div class="bg-blue-500 text-white p-4 rounded-lg">\n' +
            '    <h1 class="text-2xl font-bold mb-2">Hello World</h1>\n' +
            '    <p class="text-sm opacity-75">This is a Tailwind example</p>\n' +
            "</div>\n" +
            "\n" +
            "Common Utilities:\n" +
            "• Colors: bg-red-500, text-blue-700\n" +
            "• Spacing: p-4 (padding), m-2 (margin)\n" +
            "• Typography: text-xl, font-bold, italic\n" +
            "• Layout: flex, grid, block, hidden\n" +
            "• Borders: border, rounded-lg, shadow-md\n" +
            "\n" +
            "Responsive Design:\n" +
            '<div class="w-full md:w-1/2 lg:w-1/3">\n' +
            "    Responsive width\n" +
            "</div>\n" +
            "\n" +
            "Hover States:\n" +
            '<button class="bg-blue-500 hover:bg-blue-700 transition-colors">\n' +
            "    Click me\n" +
            "</button>",
        exampleUrl: "https://codesandbox.io/p/devbox/tailwind-basics",
        tags: ["tailwind", "utility-first", "classes", "responsive", "hover"],
    },
    {
        id: "tailwind-layout",
        title: "Layout with Tailwind",
        category: "Tailwind",
        description:
            "Creating layouts using Tailwind's flexbox and grid utilities.",
        content:
            "Tailwind provides powerful utilities for creating flexible layouts.\n" +
            "\n" +
            "Flexbox Layout:\n" +
            '<div class="flex flex-col md:flex-row gap-4">\n' +
            '    <div class="flex-1 bg-gray-100 p-4">\n' +
            "        Sidebar\n" +
            "    </div>\n" +
            '    <div class="flex-2 bg-white p-4">\n' +
            "        Main content\n" +
            "    </div>\n" +
            "</div>\n" +
            "\n" +
            "Centering:\n" +
            '<div class="flex items-center justify-center h-screen">\n' +
            '    <div class="text-center">\n' +
            '        <h1 class="text-4xl font-bold">Centered</h1>\n' +
            "    </div>\n" +
            "</div>\n" +
            "\n" +
            "Grid Layout:\n" +
            '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n' +
            '    <div class="bg-white p-6 rounded-lg shadow">Card 1</div>\n' +
            '    <div class="bg-white p-6 rounded-lg shadow">Card 2</div>\n' +
            '    <div class="bg-white p-6 rounded-lg shadow">Card 3</div>\n' +
            "</div>\n" +
            "\n" +
            "Container:\n" +
            '<div class="container mx-auto px-4">\n' +
            '    <div class="max-w-4xl mx-auto">\n' +
            "        Centered container with max width\n" +
            "    </div>\n" +
            "</div>",
        exampleUrl: "https://codesandbox.io/p/devbox/tailwind-layout",
        tags: ["layout", "flexbox", "grid", "container", "responsive"],
    },
    {
        id: "tailwind-components",
        title: "Building Components with Tailwind",
        category: "Tailwind",
        description: "Creating reusable UI components using Tailwind classes.",
        content:
            "Learn to build common UI components with Tailwind CSS.\n" +
            "\n" +
            "Button Component:\n" +
            '<button class="\n' +
            "    px-4 py-2 bg-blue-600 text-white font-medium rounded-md\n" +
            "    hover:bg-blue-700 focus:outline-none focus:ring-2\n" +
            "    focus:ring-blue-500 focus:ring-offset-2\n" +
            "    transition-colors duration-200\n" +
            '">\n' +
            "    Click Me\n" +
            "</button>\n" +
            "\n" +
            "Card Component:\n" +
            '<div class="\n' +
            "    bg-white rounded-lg shadow-lg overflow-hidden\n" +
            "    transform hover:scale-105 transition-transform duration-200\n" +
            '">\n' +
            '    <img class="w-full h-48 object-cover" src="image.jpg" alt="">\n' +
            '    <div class="p-6">\n' +
            '        <h3 class="text-xl font-semibold mb-2">Card Title</h3>\n' +
            '        <p class="text-gray-600">Card description...</p>\n' +
            "    </div>\n" +
            "</div>\n" +
            "\n" +
            "Navigation:\n" +
            '<nav class="bg-white shadow-sm border-b">\n' +
            '    <div class="container mx-auto px-4">\n' +
            '        <div class="flex justify-between items-center h-16">\n' +
            '            <div class="text-xl font-bold">Logo</div>\n' +
            '            <div class="hidden md:flex space-x-8">\n' +
            '                <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>\n' +
            '                <a href="#" class="text-gray-700 hover:text-blue-600">About</a>\n' +
            '                <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>\n' +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</nav>\n" +
            "\n" +
            "Form Input:\n" +
            '<div class="mb-4">\n' +
            '    <label class="block text-sm font-medium text-gray-700 mb-2">\n' +
            "        Email Address\n" +
            "    </label>\n" +
            '    <input type="email" class="\n' +
            "        w-full px-3 py-2 border border-gray-300 rounded-md\n" +
            "        focus:outline-none focus:ring-2 focus:ring-blue-500\n" +
            "        focus:border-transparent\n" +
            '    " placeholder="Enter your email">\n' +
            "</div>",
        exampleUrl: "https://codesandbox.io/p/devbox/tailwind-components",
        tags: ["components", "buttons", "cards", "navigation", "forms"],
    },
    {
        id: "tailwind-responsive",
        title: "Responsive Design with Tailwind",
        category: "Tailwind",
        description:
            "Creating responsive layouts using Tailwind's breakpoint system.",
        content:
            "Tailwind uses a mobile-first approach with responsive prefixes.\n" +
            "\n" +
            "Breakpoint Prefixes:\n" +
            "• sm: 640px and up\n" +
            "• md: 768px and up\n" +
            "• lg: 1024px and up\n" +
            "• xl: 1280px and up\n" +
            "• 2xl: 1536px and up\n" +
            "\n" +
            "Responsive Text:\n" +
            '<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">\n' +
            "    Responsive Heading\n" +
            "</h1>\n" +
            "\n" +
            "Responsive Layout:\n" +
            '<div class="\n' +
            "    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4\n" +
            "    gap-4 sm:gap-6 lg:gap-8\n" +
            '">\n' +
            "    <!-- Grid items -->\n" +
            "</div>\n" +
            "\n" +
            "Hide/Show Elements:\n" +
            '<div class="block md:hidden">\n' +
            "    Mobile menu\n" +
            "</div>\n" +
            '<div class="hidden md:block">\n' +
            "    Desktop navigation\n" +
            "</div>\n" +
            "\n" +
            "Responsive Spacing:\n" +
            '<section class="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">\n' +
            '    <div class="max-w-sm sm:max-w-md lg:max-w-4xl mx-auto">\n' +
            "        Content with responsive spacing\n" +
            "    </div>\n" +
            "</section>",
        exampleUrl: "https://codesandbox.io/p/devbox/tailwind-responsive",
        tags: ["responsive", "breakpoints", "mobile-first", "grid", "spacing"],
    },
    {
        id: "tailwind-customization",
        title: "Customizing Tailwind CSS",
        category: "Tailwind",
        description:
            "Extending Tailwind with custom colors, fonts, and utilities.",
        content:
            "Customize Tailwind to match your design system and brand.\n" +
            "\n" +
            "tailwind.config.js:\n" +
            "module.exports = {\n" +
            "  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],\n" +
            "  theme: {\n" +
            "    extend: {\n" +
            "      colors: {\n" +
            "        primary: {\n" +
            "          50: '#eff6ff',\n" +
            "          500: '#3b82f6',\n" +
            "          900: '#1e3a8a',\n" +
            "        },\n" +
            "        brand: '#ff6b6b',\n" +
            "      },\n" +
            "      fontFamily: {\n" +
            "        sans: ['Inter', 'sans-serif'],\n" +
            "        mono: ['Fira Code', 'monospace'],\n" +
            "      },\n" +
            "      spacing: {\n" +
            "        '72': '18rem',\n" +
            "        '84': '21rem',\n" +
            "      },\n" +
            "      animation: {\n" +
            "        'spin-slow': 'spin 3s linear infinite',\n" +
            "      }\n" +
            "    }\n" +
            "  },\n" +
            "  plugins: [],\n" +
            "}\n" +
            "\n" +
            "Using Custom Values:\n" +
            '<div class="bg-primary-500 text-white p-72">\n' +
            "    Custom primary color and spacing\n" +
            "</div>\n" +
            "\n" +
            '<h1 class="font-mono text-brand animate-spin-slow">\n' +
            "    Custom font and animation\n" +
            "</h1>\n" +
            "\n" +
            "Arbitrary Values:\n" +
            '<div class="bg-[#bada55] text-[14px] top-[117px]">\n' +
            "    One-off custom values\n" +
            "</div>",
        exampleUrl: "https://codesandbox.io/p/devbox/tailwind-customization",
        difficulty: "Advanced",
        tags: [
            "customization",
            "config",
            "colors",
            "fonts",
            "spacing",
            "plugins",
        ],
    },
    {
        id: "tailwind-dark-mode",
        title: "Dark Mode with Tailwind",
        category: "Tailwind",
        description:
            "Implementing dark mode using Tailwind's dark mode utilities.",
        content:
            "Tailwind provides built-in dark mode support with the 'dark:' prefix.\n" +
            "\n" +
            "Enable Dark Mode (tailwind.config.js):\n" +
            "module.exports = {\n" +
            "  darkMode: 'class', // or 'media'\n" +
            "  // ... rest of config\n" +
            "}\n" +
            "\n" +
            "Dark Mode Classes:\n" +
            '<div class="\n' +
            "    bg-white dark:bg-gray-900\n" +
            "    text-gray-900 dark:text-white\n" +
            "    border border-gray-200 dark:border-gray-700\n" +
            '">\n' +
            '    <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">\n' +
            "        Dark mode content\n" +
            "    </h2>\n" +
            '    <p class="text-gray-600 dark:text-gray-300">\n' +
            "        This adapts to dark mode\n" +
            "    </p>\n" +
            "</div>\n" +
            "\n" +
            "Toggle Dark Mode (JavaScript):\n" +
            "// Toggle function\n" +
            "function toggleDarkMode() {\n" +
            "    document.documentElement.classList.toggle('dark');\n" +
            "}\n" +
            "\n" +
            "// Check system preference\n" +
            "if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n" +
            "    document.documentElement.classList.add('dark');\n" +
            "}\n" +
            "\n" +
            "Dark Mode Button:\n" +
            '<button class="\n' +
            "    p-2 rounded-lg bg-gray-200 dark:bg-gray-700\n" +
            "    text-gray-800 dark:text-gray-200\n" +
            "    hover:bg-gray-300 dark:hover:bg-gray-600\n" +
            '" onclick="toggleDarkMode()">\n' +
            "    🌙 Toggle Dark Mode\n" +
            "</button>",
        exampleUrl: "https://codesandbox.io/p/devbox/tailwind-dark-mode",
        difficulty: "Advanced",
        tags: [
            "dark-mode",
            "theming",
            "preferences",
            "toggle",
            "accessibility",
        ],
    },
];
