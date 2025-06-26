import { Metadata } from "next";

const baseUrl = "https://woody-lin-personal.vercel.app";

// Base metadata that can be shared
export const baseMetadata = {
    openGraph: {
        type: "website" as const,
        locale: "en_US",
        siteName: "Woody Lin - Software Developer Portfolio",
        url: baseUrl,
    },
    twitter: {
        card: "summary_large_image" as const,
        creator: "@WoodyLinwc",
    },
    robots: {
        index: true,
        follow: true,
    },
};

// Page-specific metadata
export const photographyMetadata: Metadata = {
    title: "Photography Gallery - Camera Gear & Photo Collection",
    description:
        "Explore Woody Lin's photography portfolio featuring travel, black & white, event, and night photography. Camera gear reviews including Nikon, Fujifilm, and Leica equipment.",
    keywords: [
        "Woody Lin Photography",
        "Photography Portfolio",
        "Travel Photography",
        "Black and White Photography",
        "Event Photography",
        "Night Photography",
        "Camera Gear Reviews",
        "Nikon Photography",
        "Fujifilm X-T50",
        "Leica Camera",
        "Boston Photographer",
        "Photography Equipment",
    ],
    openGraph: {
        ...baseMetadata.openGraph,
        title: "Photography Gallery - Woody Lin",
        description:
            "Explore my photography portfolio featuring travel, B&W, event, and night photography with detailed camera gear reviews.",
        url: `${baseUrl}/photography`,
        images: [
            {
                url: "/images/album/Travel/boat_starring-min.JPG",
                width: 1200,
                height: 630,
                alt: "Woody Lin Photography Portfolio",
            },
        ],
    },
    twitter: {
        ...baseMetadata.twitter,
        title: "Photography Gallery - Woody Lin",
        description:
            "Explore my photography portfolio with camera gear reviews and photo collections.",
        images: ["/images/album/Travel/boat_starring-min.JPG"],
    },
    alternates: {
        canonical: `${baseUrl}/photography`,
    },
};

export const toolsMetadata: Metadata = {
    title: "Developer Tools & Productivity Stack",
    description:
        "Essential development tools and productivity software used by Woody Lin. Discover the best tools for React development, design, cloud services, and collaboration.",
    keywords: [
        "Developer Tools",
        "Productivity Tools",
        "React Development Tools",
        "Visual Studio Code",
        "Docker",
        "Figma",
        "AWS Tools",
        "Development Stack",
        "Programming Tools",
        "Web Development Tools",
    ],
    openGraph: {
        ...baseMetadata.openGraph,
        title: "Developer Tools & Productivity Stack - Woody Lin",
        description:
            "Essential development tools and productivity software for modern web development.",
        url: `${baseUrl}/tools`,
        images: [
            {
                url: "/images/tools-preview.jpg", // Create this image
                width: 1200,
                height: 630,
                alt: "Developer Tools and Productivity Stack",
            },
        ],
    },
    twitter: {
        ...baseMetadata.twitter,
        title: "Developer Tools & Productivity Stack",
        description:
            "Essential tools for React development, design, and productivity.",
        images: ["/images/tools-preview.jpg"],
    },
    alternates: {
        canonical: `${baseUrl}/tools`,
    },
};

export const learningMetadata: Metadata = {
    title: "Interactive Learning & Coding Tutorials",
    description:
        "Interactive terminal, React tutorials, and coding challenges. Learn frontend development with hands-on examples including Tic-Tac-Toe game and component-based coding.",
    keywords: [
        "Interactive Learning",
        "React Tutorials",
        "Coding Challenges",
        "Frontend Learning",
        "JavaScript Tutorials",
        "React Components",
        "Web Development Learning",
        "Coding Education",
        "Programming Tutorials",
    ],
    openGraph: {
        ...baseMetadata.openGraph,
        title: "Interactive Learning & Coding Tutorials - Woody Lin",
        description:
            "Learn frontend development with interactive tutorials and coding challenges.",
        url: `${baseUrl}/learning`,
        images: [
            {
                url: "/images/learning-preview.jpg", // Create this image
                width: 1200,
                height: 630,
                alt: "Interactive Learning and Coding Tutorials",
            },
        ],
    },
    twitter: {
        ...baseMetadata.twitter,
        title: "Interactive Learning & Coding Tutorials",
        description: "Learn frontend development with interactive tutorials.",
        images: ["/images/learning-preview.jpg"],
    },
    alternates: {
        canonical: `${baseUrl}/learning`,
    },
};

export const homeMetadata: Metadata = {
    title: "Woody Lin - Software Developer & Photographer",
    description:
        "Passionate software developer specializing in React, TypeScript, and mobile app development. Computer Science graduate from UMass Boston with AWS certification.",
    keywords: [
        "Woody Lin",
        "Software Developer",
        "React Developer",
        "TypeScript",
        "Mobile App Developer",
        "AWS Certified",
        "UMass Boston",
        "Full Stack Developer",
        "Boston Developer",
    ],
    openGraph: {
        ...baseMetadata.openGraph,
        title: "Woody Lin - Software Developer & Photographer",
        description:
            "Passionate software developer specializing in React, TypeScript, and mobile development.",
        url: baseUrl,
        images: [
            {
                url: "/images/me/me.jpg",
                width: 1200,
                height: 630,
                alt: "Woody Lin - Software Developer",
            },
        ],
    },
    twitter: {
        ...baseMetadata.twitter,
        title: "Woody Lin - Software Developer & Photographer",
        description:
            "Passionate software developer specializing in React, TypeScript, and mobile development.",
        images: ["/images/me/me.jpg"],
    },
    alternates: {
        canonical: baseUrl,
    },
};
