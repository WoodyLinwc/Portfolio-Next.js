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
        | "career";
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
