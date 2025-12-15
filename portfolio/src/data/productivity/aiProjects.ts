export interface AIProject {
  icon: string;
  title: string;
  description: string;
  link: string;
  category?:
    | "nlp"
    | "computer-vision"
    | "generative"
    | "automation"
    | "analytics";
}

export const aiProjects: AIProject[] = [
  // Add your AI projects here
  // Example:
  // {
  //     icon: "fa-brain",
  //     title: "Sentiment Analysis Tool",
  //     description: "AI-powered sentiment analysis that processes text to determine emotional tone and context using natural language processing.",
  //     link: "https://example.com/sentiment-analysis",
  //     category: "nlp",
  // },
];

// Helper function to get projects by category
export const getProjectsByCategory = (
  category: NonNullable<AIProject["category"]>
) => {
  return aiProjects.filter((project) => project.category === category);
};

// Helper function to get unique categories
export const getProjectCategories = (): NonNullable<
  AIProject["category"]
>[] => {
  return [...new Set(aiProjects.map((project) => project.category))].filter(
    (cat): cat is NonNullable<AIProject["category"]> => cat !== undefined
  );
};
