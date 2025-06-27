export interface Tool {
    icon: string;
    title: string;
    description: string;
    link: string;
    category?:
        | "development"
        | "productivity"
        | "design"
        | "cloud"
        | "collaboration";
}

export const tools: Tool[] = [
    {
        icon: "fa-computer",
        title: "Visual Studio Code",
        description:
            "Visual Studio Code is a lightweight but powerful code editor that is well-suited for many different types of development, including web development, data science, and game development.",
        link: "https://code.visualstudio.com/",
        category: "development",
    },
    {
        icon: "fa-bars-progress",
        title: "Homebrew",
        description:
            "Homebrew is a package manager for macOS that makes it easy to install and manage open-source software.",
        link: "https://brew.sh/",
        category: "development",
    },
    {
        icon: "fab fa-microsoft",
        title: "Microsoft Office",
        description:
            "Microsoft Office is a suite of productivity software developed by Microsoft. It includes a variety of applications, such as Word, Excel, PowerPoint, and Outlook.",
        link: "https://www.microsoft.com/en-us/microsoft-365",
        category: "productivity",
    },
    {
        icon: "fa-microchip",
        title: "ChatGPT",
        description:
            "ChatGPT is a large language generation model developed by OpenAI. It uses deep learning techniques to generate human-like text based on the input it receives.",
        link: "https://chat.openai.com/chat",
        category: "productivity",
    },
    {
        icon: "fa-file-zipper",
        title: "7-Zip",
        description:
            "7-Zip is a free and open-source file archiver software for Windows, Linux, and other operating systems. It supports various archive formats including 7z, ZIP, RAR, and TAR.",
        link: "https://www.7-zip.org/download.html",
        category: "productivity",
    },
    {
        icon: "fa-desktop",
        title: "GitHub Desktop",
        description:
            "GitHub Desktop is a free and open-source Git client developed by GitHub. It is designed to simplify the process of working with Git and GitHub.",
        link: "https://desktop.github.com/",
        category: "development",
    },
    {
        icon: "fab fa-docker",
        title: "Docker",
        description:
            "Docker is a platform that uses containerization to package applications and their dependencies, ensuring consistent environments across development, testing, and production.",
        link: "https://www.docker.com/",
        category: "development",
    },
    {
        icon: "fa-paper-plane",
        title: "Postman",
        description:
            "Postman is an API development platform that simplifies testing, documenting, and sharing APIs. It provides a user-friendly interface for making HTTP requests and managing API workflows.",
        link: "https://www.postman.com/",
        category: "development",
    },
    {
        icon: "fa-pen-nib",
        title: "Figma",
        description:
            "Figma is a collaborative design tool for creating user interfaces, prototypes, and design systems. It enables real-time collaboration and seamless developer handoffs for web and mobile design.",
        link: "https://www.figma.com/",
        category: "design",
    },
    {
        icon: "fab fa-slack",
        title: "Slack",
        description:
            "Slack is a messaging platform for teams that integrates with hundreds of tools, making communication and collaboration seamless. It's essential for remote work and team coordination.",
        link: "https://slack.com/",
        category: "collaboration",
    },
    {
        icon: "fa-rocket",
        title: "Vercel",
        description:
            "Vercel is a cloud platform for static sites and serverless functions that provides instant deployment, automatic scaling, and global CDN. Perfect for deploying React, Next.js, and other modern web applications.",
        link: "https://vercel.com/",
        category: "cloud",
    },
];

// Helper function to get tools by category
export const getToolsByCategory = (category: NonNullable<Tool["category"]>) => {
    return tools.filter((tool) => tool.category === category);
};

// Helper function to get unique categories
export const getToolCategories = (): NonNullable<Tool["category"]>[] => {
    return [...new Set(tools.map((tool) => tool.category))].filter(
        (cat): cat is NonNullable<Tool["category"]> => cat !== undefined
    );
};
