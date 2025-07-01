export interface Website {
    icon: string;
    title: string;
    description: string;
    link: string;
    category?:
        | "security"
        | "learning"
        | "frontend"
        | "backend"
        | "tools"
        | "design"
        | "career"
        | "documentation"
        | "practice";
}

export const websites: Website[] = [
    {
        icon: "fa-shield-halved",
        title: "Hacksplaining",
        description:
            "Interactive security lessons that teach you how the most common web vulnerabilities work and how to defend against them. Perfect for learning cybersecurity concepts through hands-on examples.",
        link: "https://hacksplaining.com/lessons",
        category: "security",
    },
    {
        icon: "fa-route",
        title: "Frontend Roadmap",
        description:
            "Comprehensive roadmap for frontend developers with step-by-step learning path, resources, and best practices. Essential guide for mastering modern frontend development.",
        link: "https://roadmap.sh/frontend",
        category: "frontend",
    },
    {
        icon: "fab fa-react",
        title: "React Documentation",
        description:
            "Official React documentation with comprehensive guides, API references, and best practices. The authoritative source for learning React hooks, components, and modern development patterns.",
        link: "https://react.dev/reference/react",
        category: "documentation",
    },
    {
        icon: "fab fa-js-square",
        title: "MDN Web Docs - JavaScript",
        description:
            "Mozilla Developer Network's comprehensive JavaScript documentation covering language fundamentals, APIs, and web standards. The most trusted resource for JavaScript developers worldwide.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        category: "documentation",
    },
    {
        icon: "fa-code",
        title: "LeetCode",
        description:
            "Platform for practicing coding problems and preparing for technical interviews. Features thousands of algorithm and data structure challenges with detailed solutions and discussion forums.",
        link: "https://leetcode.com/",
        category: "practice",
    },
];

// Helper function to get websites by category
export const getWebsitesByCategory = (
    category: NonNullable<Website["category"]>
) => {
    return websites.filter((website) => website.category === category);
};

// Helper function to get unique categories
export const getWebsiteCategories = (): NonNullable<Website["category"]>[] => {
    return [...new Set(websites.map((website) => website.category))].filter(
        (cat): cat is NonNullable<Website["category"]> => cat !== undefined
    );
};
