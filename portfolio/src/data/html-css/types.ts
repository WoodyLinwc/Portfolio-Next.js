// src/data/html-css/types.ts

export interface HtmlCssTopic {
    id: string;
    title: string;
    category: "HTML" | "CSS" | "Tailwind";
    description: string;
    content: string;
    exampleUrl?: string;
    difficulty?: "Beginner" | "Intermediate" | "Advanced";
    tags?: string[];
}
