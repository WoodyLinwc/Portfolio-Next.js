export interface AIProject {
  icon: string;
  title: string;
  description: string;
  link: string;
  image?: string;
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
  // https://github.com/WoodyLinwc/dice-throw-simulator/blob/main/img/dice.png
  // https://raw.githubusercontent.com/WoodyLinwc/dice-throw-simulator/main/img/dice.png
  {
    icon: "fa-dice",
    title: "Dice Throw Simulator",
    description:
      "A realistic 3D physics-based dice rolling simulator built with React Three Fiber and Cannon.js.",
    link: "https://woody-lin-dice-throw-simulator.vercel.app/",
    image:
      "https://raw.githubusercontent.com/WoodyLinwc/dice-throw-simulator/main/img/dice.png",
  },
  {
    icon: "fa-sun",
    title: "Mini Solar System",
    description:
      "An interactive 3D solar system visualization built with React Three Fiber, featuring bilingual (English/Chinese) content and some fun easter eggs.",
    link: "https://woody-lin-mini-solar-system.vercel.app/",
    image:
      "https://raw.githubusercontent.com/WoodyLinwc/mini-solar-system/main/img/help.png",
  },
  {
    icon: "fa-coins",
    title: "Texas Hold'em Simulator",
    description:
      "A React-based Texas Hold'em poker simulator that lets you play against AI opponents and analyze your hands with detailed equity calculations at each stage of the game.",
    link: "https://woody-lin-texas-hold-em-simulator.vercel.app/",
    image:
      "https://raw.githubusercontent.com/WoodyLinwc/texas-hold-em-simulator/main/img/result.png",
  },
  {
    icon: "fa-note-sticky",
    title: "Draggable Notes",
    description:
      "A beautiful, interactive sticky notes application with drag-and-drop functionality and persistent storage per browser.",
    link: "https://woody-lin-draggable-notes.vercel.app/",
    image:
      "https://raw.githubusercontent.com/WoodyLinwc/draggable-notes/main/img/main.png",
  },
  {
    icon: "fa-arrow-down-1-9",
    title: "Zenith Sudoku",
    description:
      "A modern, responsive Sudoku game built with React and TypeScript featuring algorithmic board generation and multiple difficulty levels.",
    link: "https://woody-lin-zenith-sudoku.vercel.app/",
    image:
      "https://raw.githubusercontent.com/WoodyLinwc/zenith-sudoku/main/img/sudoku.png",
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
