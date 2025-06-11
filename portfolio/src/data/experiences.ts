export interface Experience {
    title: string;
    company: string;
    date: string;
    link?: string;
    linkText?: string;
    githubLink?: string;
    secondaryLink?: string;
    secondaryLinkText?: string;
    details: string[];
}

export const experiences: Experience[] = [
    {
        title: "Android Mobile Application Developer",
        company: "React Native Apps Community",
        date: "Sep 2024 - Current",
        link: "https://play.google.com/store/apps/details?id=com.woodylinwc.FlashcardApp",
        linkText: "Google Play Store",
        githubLink: "https://github.com/WoodyLinwc/Flashcard-Expo-V2",
        details: [
            "Developed and published a mobile flashcard application to Google Play Store using TypeScript and React Native, showcasing the ability to manage the full app lifecycle from concept to production release.",
            "Designed a comprehensive system for users to create new flashcards and decks, edit existing contents, and delete unnecessary items, providing full control over study materials.",
            "Utilized SQLite database for efficient local data management, enabling offline access and ensuring user data persistence across app sessions.",
            "Implemented smooth card flipping animations and swipe gestures using React Native's Animated API, enhancing the app's interactivity and user engagement.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company: "Twygs.io",
        date: "Jun 2024 - Oct 2024",
        details: [
            "Utilized TypeScript, Node.js, React, and Next.js to develop and maintain web application interfaces, and refined the authentication UI designs with Tailwind CSS.",
            "Enhanced the One-Time Password (OTP) input system by implementing automatic tabbing between adjacent inputs upon entering a number, streamlining the email verification process.",
            "Implemented feature to make last name input optional for Creator/Advertiser account creation, increasing sign-up flexibility. Modified both backend constraints and frontend validation to support this change.",
            "Adopted PostgreSQL for local database management, including account creation after the email authentication process and data manipulation for testing purposes.",
        ],
    },
    {
        title: "Teaching Assistant",
        company: "UMass Boston, CS Department",
        date: "Feb 2023 - Dec 2023",
        link: "https://www.cs.umb.edu/~stchang/cs420/s23/info.html",
        linkText: "CS420: Intro to Theory of Computation",
        secondaryLink: "https://woodylinwc.github.io/pdf/CS310_Syllabus.pdf",
        secondaryLinkText: "CS310: Advanced Data Structures and Algorithms",
        details: [
            "Assisted professor in grading assignments and projects.",
            "Held office hours to help students with course material and homework assignments.",
            "Collaborated with fellow TAs to plan instructional activities.",
            "Communicated with students on Piazza and via email.",
        ],
    },
    {
        title: "Website Designer",
        company: "Part-time job",
        date: "Jul 2023 - Aug 2023",
        link: "https://www.fe4f.com/",
        linkText: "A Start-up Company: Financial Education for Families",
        details: [
            "Collaborated with a designer to lead a successful website redesign project for a small finance company, amplifying their value proposition and strategic goals.",
            "Leveraged user-centered design principles to optimize website navigation, resulting in enhanced user experience across various devices.",
            "Managed project timelines, adapting to changing requirements and consistently exceeding milestones.",
            "Integrated Google Domains to host the website.",
        ],
    },
];
