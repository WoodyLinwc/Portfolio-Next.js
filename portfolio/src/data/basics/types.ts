export interface BasicTopic {
    id: string;
    title: string;
    category: "JavaScript" | "React";
    description: string;
    content: string;
    exampleUrl?: string;
    difficulty?: "Beginner" | "Intermediate" | "Advanced";
    tags?: string[];
}
