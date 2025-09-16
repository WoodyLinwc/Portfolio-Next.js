import type { BasicTopic } from "../types";

import test from "./content/test.md";
import typescript from "./content/typescript.md";
import interfaceType from "./content/interface-type.md";
import generic from "./content/generic.md";
import testing from "./content/testing-debugging.md";
import frontendProblems from "./content/frontend-problems.md";
import jwt from "./content/jwt.md";
import webAttacks from "./content/web-attacks.md";
import websocket from "./content/websocket.md";
import nextjs from "./content/nextjs.md";
import reactNative from "./content/react-native.md";

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
    content: reactNative,
  },

  {
    id: "nextjs",
    title: "Next.js",
    category: "Others",
    description: "",
    content: nextjs,
  },

  {
    id: "jwt",
    title: "JWT (JSON Web Token), Session, Cookie",
    category: "Others",
    description: "JWT, Session, Cookie, Storing JWT",
    content: jwt,
  },

  {
    id: "websocket",
    title: "WebSocket",
    category: "Others",
    description: "",
    content: websocket,
  },

  {
    id: "web-attacks",
    title: "Web Attacks",
    category: "Others",
    description:
      "XSS (HttpOnly), CSRF(SameSite), SQLi(Parameterized Queries), MITM(Https), Clickjacking, CSP",
    content: webAttacks,
  },

  {
    id: "frontend-problems",
    title: "Frontend Common Problems",
    category: "Others",
    description: "",
    content: frontendProblems,
  },

  {
    id: "testing",
    title: "Testing & Debugging",
    category: "Others",
    description: "Jest",
    content: testing,
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
