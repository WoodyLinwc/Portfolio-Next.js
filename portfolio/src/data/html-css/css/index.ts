// src/data/html-css/css.ts

import type { HtmlCssTopic } from "../types";

import flexbox from "./content/flexbox.md";
import flexboxGrow from "./content/flexbox-grow.md";
import flexboxWrap from "./content/flexbox-wrap.md";
import threeColumn from "./content/three-column-layout.md";

export const cssTopics: HtmlCssTopic[] = [
  {
    id: "flexbox",
    title: "Flex Box Axis",
    category: "CSS",
    description:
      "display, flex-direction, justify-content, align-items, align-self, box-sizing",
    content: flexbox,
  },
  {
    id: "flexbox-grow",
    title: "Flex Box Grow",
    category: "CSS",
    description: "flex, flex-grow, flex-shrink, flex-basis",
    content: flexboxGrow,
  },
  {
    id: "flexbox-wrap",
    title: "Flexbox Wrap",
    category: "CSS",
    description: "flex-wrap, align-content",
    content: flexboxWrap,
  },

  {
    id: "three-column-layout",
    title: "Three Column Layout",
    category: "CSS",
    description: "flex-shrink: 0; flex-grow: 1; max-width, min-width",
    content: threeColumn,
  },

  //     {
  //     id: "",
  //     title: "",
  //     category: "CSS",
  //     description: "",
  //     content: flexboxGrow,
  //   },
];
