import type { BasicTopic } from "../types";

import test from "./content/test.md";
import typescript from "./content/typescript.md";
import interfaceType from "./content/interface-type.md";
import generic from "./content/generic.md";

export const otherBasics: BasicTopic[] = [
  {
    id: "typescript",
    title: "TypeScript",
    category: "Others",
    description: "Configuration, Basic Concepts",
    content: typescript,
  },

  {
    id: "interface-type",
    title: "Interface vs Type",
    category: "Others",
    description:
      "Object Shape, Declaration Merging, Extends, Union Types, Aliasing, Computed Properties",
    content: interfaceType,
  },

  {
    id: "generic",
    title: "Generic",
    category: "Others",
    description: "Placeholder, <T,>",
    content: generic,
  },

  {
    id: "react-native",
    title: "React Native",
    category: "Others",
    description: "",
    content: test,
  },

  {
    id: "nextjs",
    title: "Next.js",
    category: "Others",
    description: "",
    content: test,
  },

  {
    id: "testing",
    title: "Testing & Debugging",
    category: "Others",
    description: "Jest",
    content: test,
  },

  {
    id: "design-pattern",
    title: "Design Pattern",
    category: "Others",
    description: "",
    content: test,
  },

  // {
  //     id: "",
  //     title: "",
  //     category: "Others",
  //     description: "",
  //     content: test,
  // },
];
