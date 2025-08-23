import type { BasicTopic } from "../types";

import coreReact from "./content/core-react.md";

export const reactBasics: BasicTopic[] = [
    {
        id: "jsx-components",
        title: "JSX and Components",
        category: "React",
        description: "Understanding JSX syntax and creating React components.",
        content: coreReact,
        exampleUrl: "https://codesandbox.io/p/devbox/react-jsx-components",
        tags: ["jsx", "components", "props", "functional-components"],
    },
];
