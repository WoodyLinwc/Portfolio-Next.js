// src/data/html-css/css.ts

import type { HtmlCssTopic } from "./types";

export const cssTopics: HtmlCssTopic[] = [
    {
        id: "css-selectors",
        title: "CSS Selectors and Specificity",
        category: "CSS",
        description:
            "Understanding CSS selectors, specificity, and how styles are applied.",
        content:
            "CSS selectors target HTML elements to apply styles.\n" +
            "\n" +
            "Basic Selectors:\n" +
            "/* Element selector */\n" +
            "p {\n" +
            "    color: blue;\n" +
            "}\n" +
            "\n" +
            "/* Class selector */\n" +
            ".highlight {\n" +
            "    background-color: yellow;\n" +
            "}\n" +
            "\n" +
            "/* ID selector */\n" +
            "#header {\n" +
            "    font-size: 2rem;\n" +
            "}\n" +
            "\n" +
            "/* Attribute selector */\n" +
            'input[type="email"] {\n' +
            "    border: 2px solid green;\n" +
            "}\n" +
            "\n" +
            "/* Pseudo-classes */\n" +
            "a:hover {\n" +
            "    color: red;\n" +
            "}\n" +
            "\n" +
            "/* Descendant selector */\n" +
            ".container p {\n" +
            "    margin: 1rem;\n" +
            "}\n" +
            "\n" +
            "Specificity Order (highest to lowest):\n" +
            "1. Inline styles\n" +
            "2. IDs\n" +
            "3. Classes, attributes, pseudo-classes\n" +
            "4. Elements",
        exampleUrl: "https://codesandbox.io/p/devbox/css-selectors",
        tags: ["selectors", "specificity", "classes", "ids", "pseudo-classes"],
    },
    {
        id: "css-box-model",
        title: "CSS Box Model",
        category: "CSS",
        description:
            "Understanding the CSS box model: content, padding, border, margin.",
        content:
            "The CSS box model describes how elements take up space on a page.\n" +
            "\n" +
            "Box Model Components:\n" +
            ".box {\n" +
            "    width: 200px;           /* Content width */\n" +
            "    height: 100px;          /* Content height */\n" +
            "    padding: 20px;          /* Space inside border */\n" +
            "    border: 2px solid black; /* Border around padding */\n" +
            "    margin: 10px;           /* Space outside border */\n" +
            "}\n" +
            "\n" +
            "Box Sizing:\n" +
            "/* Default - content-box */\n" +
            ".content-box {\n" +
            "    box-sizing: content-box;\n" +
            "    /* Total width = width + padding + border */\n" +
            "}\n" +
            "\n" +
            "/* Border-box (recommended) */\n" +
            ".border-box {\n" +
            "    box-sizing: border-box;\n" +
            "    /* Total width = width (includes padding + border) */\n" +
            "}\n" +
            "\n" +
            "/* Global border-box */\n" +
            "* {\n" +
            "    box-sizing: border-box;\n" +
            "}\n" +
            "\n" +
            "Visual Layout:\n" +
            "┌─────── margin ──────┐\n" +
            "│ ┌───── border ────┐ │\n" +
            "│ │ ┌── padding ──┐ │ │\n" +
            "│ │ │   content   │ │ │\n" +
            "│ │ └─────────────┘ │ │\n" +
            "│ └─────────────────┘ │\n" +
            "└─────────────────────┘",
        exampleUrl: "https://codesandbox.io/p/devbox/css-box-model",
        tags: ["box-model", "padding", "margin", "border", "box-sizing"],
    },
    {
        id: "flexbox",
        title: "CSS Flexbox Layout",
        category: "CSS",
        description: "Creating flexible layouts with CSS Flexbox.",
        content:
            "Flexbox provides a flexible way to arrange elements in one dimension.\n" +
            "\n" +
            "Flex Container:\n" +
            ".container {\n" +
            "    display: flex;\n" +
            "    flex-direction: row;        /* row | column */\n" +
            "    justify-content: center;    /* main axis alignment */\n" +
            "    align-items: center;        /* cross axis alignment */\n" +
            "    flex-wrap: wrap;            /* wrap | nowrap */\n" +
            "    gap: 1rem;                  /* space between items */\n" +
            "}\n" +
            "\n" +
            "Flex Items:\n" +
            ".item {\n" +
            "    flex: 1;                    /* grow, shrink, basis */\n" +
            "    flex-grow: 1;               /* how much to grow */\n" +
            "    flex-shrink: 0;             /* how much to shrink */\n" +
            "    flex-basis: 200px;          /* initial size */\n" +
            "    align-self: flex-start;     /* individual alignment */\n" +
            "}\n" +
            "\n" +
            "Common Patterns:\n" +
            "/* Center everything */\n" +
            ".center {\n" +
            "    display: flex;\n" +
            "    justify-content: center;\n" +
            "    align-items: center;\n" +
            "}\n" +
            "\n" +
            "/* Equal width columns */\n" +
            ".columns > * {\n" +
            "    flex: 1;\n" +
            "}",
        exampleUrl: "https://codesandbox.io/p/devbox/css-flexbox",
        tags: [
            "flexbox",
            "layout",
            "justify-content",
            "align-items",
            "flex-grow",
        ],
    },
    {
        id: "css-grid",
        title: "CSS Grid Layout",
        category: "CSS",
        description: "Creating complex two-dimensional layouts with CSS Grid.",
        content:
            "CSS Grid provides powerful two-dimensional layout capabilities.\n" +
            "\n" +
            "Grid Container:\n" +
            ".grid {\n" +
            "    display: grid;\n" +
            "    grid-template-columns: 1fr 2fr 1fr;  /* 3 columns */\n" +
            "    grid-template-rows: auto 1fr auto;   /* 3 rows */\n" +
            "    gap: 1rem;                           /* spacing */\n" +
            "    height: 100vh;\n" +
            "}\n" +
            "\n" +
            "Grid Items:\n" +
            ".header {\n" +
            "    grid-column: 1 / -1;     /* span all columns */\n" +
            "    grid-row: 1;\n" +
            "}\n" +
            "\n" +
            ".sidebar {\n" +
            "    grid-column: 1;\n" +
            "    grid-row: 2;\n" +
            "}\n" +
            "\n" +
            ".main {\n" +
            "    grid-column: 2;\n" +
            "    grid-row: 2;\n" +
            "}\n" +
            "\n" +
            "Grid Template Areas:\n" +
            ".layout {\n" +
            "    display: grid;\n" +
            "    grid-template-areas:\n" +
            '        "header header header"\n' +
            '        "sidebar main aside"\n' +
            '        "footer footer footer";\n' +
            "}\n" +
            "\n" +
            ".header { grid-area: header; }\n" +
            ".sidebar { grid-area: sidebar; }\n" +
            ".main { grid-area: main; }",
        exampleUrl: "https://codesandbox.io/p/devbox/css-grid",
        tags: [
            "grid",
            "layout",
            "grid-template",
            "grid-area",
            "two-dimensional",
        ],
    },
    {
        id: "responsive-design",
        title: "Responsive Design",
        category: "CSS",
        description: "Creating responsive layouts that work on all devices.",
        content:
            "Responsive design ensures websites work well on all device sizes.\n" +
            "\n" +
            "Media Queries:\n" +
            "/* Mobile first approach */\n" +
            ".container {\n" +
            "    width: 100%;\n" +
            "    padding: 1rem;\n" +
            "}\n" +
            "\n" +
            "/* Tablet */\n" +
            "@media (min-width: 768px) {\n" +
            "    .container {\n" +
            "        max-width: 750px;\n" +
            "        margin: 0 auto;\n" +
            "    }\n" +
            "}\n" +
            "\n" +
            "/* Desktop */\n" +
            "@media (min-width: 1024px) {\n" +
            "    .container {\n" +
            "        max-width: 1200px;\n" +
            "        padding: 2rem;\n" +
            "    }\n" +
            "}\n" +
            "\n" +
            "Flexible Units:\n" +
            ".responsive {\n" +
            "    width: 100%;           /* Relative to parent */\n" +
            "    max-width: 1200px;     /* Maximum width */\n" +
            "    font-size: 1.2rem;     /* Relative to root font */\n" +
            "    padding: 2vw;          /* Relative to viewport */\n" +
            "    margin: 5% auto;       /* Percentage margins */\n" +
            "}\n" +
            "\n" +
            "Common Breakpoints:\n" +
            "• Mobile: 320px - 767px\n" +
            "• Tablet: 768px - 1023px\n" +
            "• Desktop: 1024px+",
        exampleUrl: "https://codesandbox.io/p/devbox/responsive-design",
        tags: [
            "responsive",
            "media-queries",
            "breakpoints",
            "mobile-first",
            "viewport",
        ],
    },
    {
        id: "css-animations",
        title: "CSS Animations and Transitions",
        category: "CSS",
        description:
            "Adding smooth animations and transitions to enhance user experience.",
        content:
            "CSS animations bring life to web interfaces with smooth transitions.\n" +
            "\n" +
            "Transitions:\n" +
            ".button {\n" +
            "    background-color: blue;\n" +
            "    transition: all 0.3s ease;\n" +
            "}\n" +
            "\n" +
            ".button:hover {\n" +
            "    background-color: red;\n" +
            "    transform: scale(1.1);\n" +
            "}\n" +
            "\n" +
            "Keyframe Animations:\n" +
            "@keyframes fadeIn {\n" +
            "    from {\n" +
            "        opacity: 0;\n" +
            "        transform: translateY(20px);\n" +
            "    }\n" +
            "    to {\n" +
            "        opacity: 1;\n" +
            "        transform: translateY(0);\n" +
            "    }\n" +
            "}\n" +
            "\n" +
            ".fade-in {\n" +
            "    animation: fadeIn 0.5s ease-out;\n" +
            "}\n" +
            "\n" +
            "Loading Spinner:\n" +
            "@keyframes spin {\n" +
            "    from { transform: rotate(0deg); }\n" +
            "    to { transform: rotate(360deg); }\n" +
            "}\n" +
            "\n" +
            ".spinner {\n" +
            "    animation: spin 1s linear infinite;\n" +
            "}\n" +
            "\n" +
            "Animation Properties:\n" +
            "• duration: how long\n" +
            "• timing-function: easing curve\n" +
            "• delay: when to start\n" +
            "• iteration-count: how many times\n" +
            "• direction: forward/reverse",
        exampleUrl: "https://codesandbox.io/p/devbox/css-animations",
        difficulty: "Advanced",
        tags: ["animations", "transitions", "keyframes", "transform", "easing"],
    },
];
