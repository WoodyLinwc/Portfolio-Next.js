// src/lib/seo.ts
import { Metadata } from "next";

const baseUrl = "https://woody-lin-personal.vercel.app";
const siteName = "Woody Lin - Software Developer Portfolio";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image = "/images/me/me.jpg",
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = path ? `${title} | Woody Lin` : title;

  return {
    metadataBase: new URL(baseUrl), // Add this line
    title: fullTitle,
    description,
    keywords: [
      "Woody Lin",
      "Software Developer",
      "React Developer",
      "TypeScript",
      ...keywords,
    ],
    authors: [{ name: "Woody Lin", url: "https://github.com/WoodyLinwc" }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@WoodyLinwc",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: url,
    },
  };
}

// Pre-configured metadata for common pages
export const seoConfig = {
  home: generateMetadata({
    title: "Woody Lin - Biotech & Software Developer & Photographer",
    description:
      "A Passionate Biotech Associate and Full-Stack Software Developer",
    keywords: [
      "Portfolio",
      "AWS Certified",
      "Biotech",
      "Woody Lin",
      "Photographer",
      "UMass Boston",
      "Mobile App Developer",
    ],
  }),

  photography: generateMetadata({
    title: "Photography Gallery - Camera Gear & Photo Collection",
    description:
      "Explore Woody Lin's photography portfolio featuring travel, black & white, event, and night photography. Camera gear reviews including Nikon, Fujifilm, and Leica equipment.",
    keywords: [
      "Photography",
      "Camera Gear",
      "Travel Photography",
      "Nikon",
      "Fujifilm",
    ],
    path: "/photography",
    image: "/images/album/Travel/boat_starring-min.JPG",
  }),

  productivity: generateMetadata({
    title: "Productivity Tools & Developer Resources",
    description:
      "Essential productivity tools and developer resources used by Woody Lin. Discover the best tools for React development, design, cloud services, collaboration, and learning websites.",
    keywords: [
      "Productivity Tools",
      "Developer Tools",
      "VS Code",
      "Docker",
      "Figma",
      "AWS Tools",
      "Learning Resources",
    ],
    path: "/productivity",
    image: "/images/productivity-preview.jpg",
  }),

  learning: generateMetadata({
    title: "Interactive Learning & Coding Tutorials",
    description:
      "Interactive terminal, React tutorials, and coding challenges. Learn frontend development with hands-on examples including Tic-Tac-Toe game and component-based coding.",
    keywords: [
      "React Tutorials",
      "Interactive Learning",
      "Coding Challenges",
      "Frontend Learning",
    ],
    path: "/learning",
    image: "/images/learning-preview.jpg",
  }),
};
