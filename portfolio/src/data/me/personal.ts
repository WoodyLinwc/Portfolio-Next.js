import type { PersonalInfo, SocialLink } from "@/types/me";

export const personalInfo: PersonalInfo = {
    name: "Woody",
    fullName: "Woody Lin",
    chineseName: "林万程",
    email: "woody.lin001@gmail.com",
    location: "Boston, MA",
    education: {
        degree: "Bachelor degree in Computer Science, minor in Mathematics",
        school: "University of Massachusetts Boston",
        period: "2019 - 2023",
        gpa: "3.72 Dean's List",
    },
    skills: {
        languages:
            "JavaScript, TypeScript, SQL, HTML & CSS, Java, Python, Bash",
        frameworks:
            "React, Next.js, React Native, Express.js, Fastify, AngularJS, Tailwind CSS, Bootstrap, One App, Holocron, Jekyll",
        tools: "AWS, Vercel, Vite, Webpack, Babel, Chrome DevTools, ESLint, Prettier, Jest, Figma, Docker, Git, Postman, VS Code, Node.js, Miniconda, Expo, PM2, Jira",
    },
    links: {
        resume: "https://woodylinwc.github.io/pdf/WoodyLinResume.pdf",
        linkedin: "https://www.linkedin.com/in/woody-lin-32ab48161/",
        github: "https://github.com/WoodyLinwc",
        gitlab: "https://gitlab.com/WoodyLinwc",
        discord: "http://discordapp.com/users/Until_Dawn#0751",
        steam: "https://steamcommunity.com/profiles/76561198373609638/",
        weibo: "https://weibo.com/u/5660627747?is_all=1",
        blog: "https://WoodyLinwc.blogspot.com/",
        portfolio: "https://github.com/WoodyLinwc/WoodyLinwc.github.io",
    },
    hero: {
        greeting: "Hello, my name",
        typedStrings: [
            "Software Engineer",
            "Frontend Developer",
            "Android App Developer",
            "Photographer",
            "林万程",
        ],
    },
    about: {
        title: "A Passionate Software Developer",
        description:
            "As a Frontend Developer with 5+ years of experience. I specialize in building scalable React applications that serve enterprise-level users. My expertise includes modern frameworks like Next.js and React Native, having successfully published mobile apps to the Google Play Store and architected micro-frontend solutions using advanced technologies like One App and Holocron. With experience migrating legacy systems, implementing comprehensive testing strategies, and optimizing performance for thousands of daily users, I combine technical proficiency with business impact. My AWS Cloud Practitioner certification and passion for clean, maintainable code drive me to continuously explore emerging technologies and deliver innovative solutions.",
    },
    certificates: [
        {
            name: "AWS Cloud Practitioner CLF-C02",
            url: "https://www.credly.com/badges/c2d28705-83ee-45ca-ada6-0d6418217e9d/linked_in_profile",
        },
        {
            name: "SAS Certified Specialist A00-231",
            url: "https://www.credly.com/badges/9cab272b-dea0-4ff8-a6bb-80c899f88f6d",
        },
    ],
    locationData: {
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32007.09388043201!2d-71.05258038933074!3d42.33842665666138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1677377310859!5m2!1sen!2sus",
    },
    footer: {
        copyright: "All Rights Reserved.",
        designCredit: {
            name: "MysteryCode",
            url: "https://www.youtube.com/@foolishdeveloper",
        },
        modifiedBy: {
            name: "Woody Lin",
            url: "https://github.com/WoodyLinwc/WoodyLinwc.github.io",
        },
    },
};

// Helper function to get social links as array for components
export const getSocialLinks = (): SocialLink[] => [
    {
        href: personalInfo.links.linkedin,
        icon: "fab fa-linkedin-in",
        label: "LinkedIn",
    },
    {
        href: personalInfo.links.github,
        icon: "fab fa-github",
        label: "GitHub",
    },
    {
        href: personalInfo.links.gitlab,
        icon: "fab fa-gitlab",
        label: "GitLab",
    },
    {
        href: personalInfo.links.discord,
        icon: "fab fa-discord",
        label: "Discord",
    },
    {
        href: personalInfo.links.steam,
        icon: "fab fa-steam",
        label: "Steam",
    },
    {
        href: personalInfo.links.weibo,
        icon: "fab fa-weibo",
        label: "Weibo",
    },
];
