// src/data/html-css/html.ts

import type { HtmlCssTopic } from "./types";

export const htmlTopics: HtmlCssTopic[] = [
    {
        id: "html-basics",
        title: "HTML Basics and Structure",
        category: "HTML",
        description:
            "Understanding HTML document structure, elements, and basic syntax.",
        content:
            "HTML (HyperText Markup Language) is the standard markup language for web pages.\n" +
            "\n" +
            "Basic HTML Structure:\n" +
            "<!DOCTYPE html>\n" +
            '<html lang="en">\n' +
            "<head>\n" +
            '    <meta charset="UTF-8">\n' +
            '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
            "    <title>Page Title</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "    <h1>Main Heading</h1>\n" +
            "    <p>This is a paragraph.</p>\n" +
            "</body>\n" +
            "</html>\n" +
            "\n" +
            "Key Elements:\n" +
            "• DOCTYPE - tells browser this is HTML5\n" +
            "• html - root element\n" +
            "• head - metadata and links\n" +
            "• body - visible content",
        exampleUrl: "https://codesandbox.io/p/devbox/html-basics",
        tags: ["html", "structure", "doctype", "head", "body"],
    },
    {
        id: "semantic-html",
        title: "Semantic HTML Elements",
        category: "HTML",
        description:
            "Using semantic HTML elements for better structure and accessibility.",
        content:
            "Semantic HTML provides meaning to content, improving accessibility and SEO.\n" +
            "\n" +
            "Semantic Elements:\n" +
            "<header>\n" +
            "    <nav>\n" +
            "        <ul>\n" +
            '            <li><a href="#home">Home</a></li>\n' +
            '            <li><a href="#about">About</a></li>\n' +
            "        </ul>\n" +
            "    </nav>\n" +
            "</header>\n" +
            "\n" +
            "<main>\n" +
            "    <article>\n" +
            "        <section>\n" +
            "            <h2>Article Title</h2>\n" +
            "            <p>Article content...</p>\n" +
            "        </section>\n" +
            "    </article>\n" +
            "    <aside>\n" +
            "        <h3>Related Links</h3>\n" +
            "    </aside>\n" +
            "</main>\n" +
            "\n" +
            "<footer>\n" +
            "    <p>&copy; 2024 Company Name</p>\n" +
            "</footer>\n" +
            "\n" +
            "Benefits:\n" +
            "• Better accessibility for screen readers\n" +
            "• Improved SEO\n" +
            "• Clearer code structure",
        exampleUrl: "https://codesandbox.io/p/devbox/semantic-html",
        tags: [
            "semantic",
            "accessibility",
            "seo",
            "header",
            "nav",
            "main",
            "article",
            "aside",
            "footer",
        ],
    },
    {
        id: "forms-inputs",
        title: "Forms and Input Elements",
        category: "HTML",
        description:
            "Creating interactive forms with various input types and validation.",
        content:
            "HTML forms collect user input and send data to servers.\n" +
            "\n" +
            "Basic Form Structure:\n" +
            '<form action="/submit" method="POST">\n' +
            "    <div>\n" +
            '        <label for="name">Name:</label>\n' +
            '        <input type="text" id="name" name="name" required>\n' +
            "    </div>\n" +
            "    \n" +
            "    <div>\n" +
            '        <label for="email">Email:</label>\n' +
            '        <input type="email" id="email" name="email" required>\n' +
            "    </div>\n" +
            "    \n" +
            "    <div>\n" +
            '        <label for="message">Message:</label>\n' +
            '        <textarea id="message" name="message" rows="4"></textarea>\n' +
            "    </div>\n" +
            "    \n" +
            "    <div>\n" +
            "        <label>\n" +
            '            <input type="checkbox" name="newsletter">\n' +
            "            Subscribe to newsletter\n" +
            "        </label>\n" +
            "    </div>\n" +
            "    \n" +
            '    <button type="submit">Submit</button>\n' +
            "</form>\n" +
            "\n" +
            "Input Types: text, email, password, number, date, checkbox, radio, select",
        exampleUrl: "https://codesandbox.io/p/devbox/html-forms",
        tags: [
            "forms",
            "input",
            "validation",
            "label",
            "textarea",
            "checkbox",
            "radio",
        ],
    },
    {
        id: "multimedia",
        title: "Images, Audio, and Video",
        category: "HTML",
        description: "Working with multimedia elements in HTML.",
        content:
            "HTML supports various multimedia elements for rich content.\n" +
            "\n" +
            "Images:\n" +
            '<img src="image.jpg" alt="Description" width="300" height="200">\n' +
            "\n" +
            "Responsive Images:\n" +
            "<picture>\n" +
            '    <source media="(min-width: 800px)" srcset="large.jpg">\n' +
            '    <source media="(min-width: 400px)" srcset="medium.jpg">\n' +
            '    <img src="small.jpg" alt="Responsive image">\n' +
            "</picture>\n" +
            "\n" +
            "Audio:\n" +
            "<audio controls>\n" +
            '    <source src="audio.mp3" type="audio/mpeg">\n' +
            '    <source src="audio.ogg" type="audio/ogg">\n' +
            "    Your browser does not support audio.\n" +
            "</audio>\n" +
            "\n" +
            "Video:\n" +
            '<video controls width="400">\n' +
            '    <source src="video.mp4" type="video/mp4">\n' +
            '    <source src="video.webm" type="video/webm">\n' +
            "    Your browser does not support video.\n" +
            "</video>\n" +
            "\n" +
            "Best Practices:\n" +
            "• Always include alt text for images\n" +
            "• Provide multiple formats for compatibility\n" +
            "• Use appropriate dimensions",
        exampleUrl: "https://codesandbox.io/p/devbox/html-multimedia",
        tags: [
            "images",
            "audio",
            "video",
            "multimedia",
            "responsive",
            "alt-text",
        ],
    },
    {
        id: "accessibility",
        title: "HTML Accessibility",
        category: "HTML",
        description: "Creating accessible HTML for all users.",
        content:
            "Accessibility ensures web content is usable by people with disabilities.\n" +
            "\n" +
            "ARIA Attributes:\n" +
            '<button aria-label="Close dialog" aria-expanded="false">\n' +
            "    ×\n" +
            "</button>\n" +
            "\n" +
            '<div role="alert" aria-live="polite">\n' +
            "    Form saved successfully!\n" +
            "</div>\n" +
            "\n" +
            "Skip Navigation:\n" +
            '<a href="#main-content" class="skip-link">\n' +
            "    Skip to main content\n" +
            "</a>\n" +
            "\n" +
            "Focus Management:\n" +
            "<nav>\n" +
            "    <ul>\n" +
            '        <li><a href="#" tabindex="0">Home</a></li>\n' +
            '        <li><a href="#" tabindex="0">About</a></li>\n' +
            "    </ul>\n" +
            "</nav>\n" +
            "\n" +
            "Key Principles:\n" +
            "• Provide meaningful alt text\n" +
            "• Use proper heading hierarchy\n" +
            "• Ensure keyboard navigation\n" +
            "• Maintain good color contrast\n" +
            "• Use ARIA attributes appropriately",
        exampleUrl: "https://codesandbox.io/p/devbox/html-accessibility",
        difficulty: "Advanced",
        tags: [
            "accessibility",
            "aria",
            "screen-readers",
            "keyboard-navigation",
            "a11y",
        ],
    },
];
