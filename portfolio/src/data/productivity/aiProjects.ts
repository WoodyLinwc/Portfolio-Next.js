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
  {
    icon: "fa-sun",
    title: "Mini Solar System",
    description:
      "An interactive 3D solar system visualization built with React Three Fiber, featuring bilingual (English/Chinese) content and some fun easter eggs.",
    link: "https://woody-lin-mini-solar-system.vercel.app/",
  },
  {
    icon: "fa-comments-dollar",
    title: "Texas Hold'em Simulator",
    description:
      "A React-based Texas Hold'em poker simulator that lets you play against AI opponents and analyze your hands with detailed equity calculations at each stage of the game.",
    link: "https://woody-lin-texas-hold-em-simulator.vercel.app/",
  },
  {
    icon: "fa-arrow-down-1-9",
    title: "Zenith Sudoku",
    description:
      "A modern, responsive Sudoku game built with React and TypeScript featuring algorithmic board generation and multiple difficulty levels.",
    link: "https://woody-lin-zenith-sudoku.vercel.app/",
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
