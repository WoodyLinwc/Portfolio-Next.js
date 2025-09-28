// src/data/html-css/html.ts

import type { HtmlCssTopic } from "../types";

import basicHTML from "./content/basic-html.md";
import semanticHTML from "./content/semantic.md";
import semanticHTML2 from "./content/semantic2.md";
import dom from "./content/dom.md";

export const htmlTopics: HtmlCssTopic[] = [
  {
    id: "basic-html",
    title: "Basic HTML Structure",
    category: "HTML",
    description:
      "!DOCTYPE, html, head, meta, title, link, body, header, nav, ul, li, section, article, aside, footer",
    content: basicHTML,
  },
  {
    id: "sementic-html",
    title: "Sementic HTML",
    category: "HTML",
    description: "Text, Lists, Links & Media, Tables",
    content: semanticHTML,
  },
  {
    id: "sementic-html2",
    title: "Sementic HTML 2",
    category: "HTML",
    description:
      "Forms, form, fieldset, label for, input type id name, select id name, option value ",
    content: semanticHTML2,
  },
  {
    id: "dom",
    title: "DOM",
    category: "HTML",
    description: "innerHTML, textContent",
    content: dom,
  },
  // {
  //     id: "",
  //     title: "",
  //     category: "HTML",
  //     description: "",
  //     content: semanticHTML,
  // },
];
