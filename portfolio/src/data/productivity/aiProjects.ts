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
  {
    icon: "fa-dice",
    title: "Dice Throw Simulator",
    description:
      "A realistic 3D physics-based dice rolling simulator built with React Three Fiber and Cannon.js.",
    link: "https://woody-lin-dice-throw-simulator.vercel.app/",
  },
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
