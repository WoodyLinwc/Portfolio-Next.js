import type { BasicTopic } from "../types";

import coreReact from "./content/core-react.md";
import test from "./content/test.md";

export const reactBasics: BasicTopic[] = [
    {
        id: "core-react",
        title: "React Overview",
        category: "React",
        description: "",
        content: coreReact,
    },

    // {
    //     id: "",
    //     title: "",
    //     category: "React",
    //     description: "",
    //     content: test,
    // },
];
