import type { PersonalInfo, SocialLink } from "@/types/me";

export const personalInfo: PersonalInfo = {
    name: "Woody",
    fullName: "Woody Lin",
    chineseName: "林万程",
    email: "lin.wancheng001@gmail.com",
    location: "Boston, MA",
    education: {
        degree: "Bachelor degree in Computer Science, minor in Mathematics",
        school: "University of Massachusetts Boston",
        period: "2019 - 2023",
        gpa: "3.72 Dean's List",
    },
    skills: {
        languages:
            "Java, Python, JavaScript, TypeScript, SQL, HTML & CSS, C/C++, Bash",
        frameworks:
            "ReactJS, React Native, NestJS, Next.js, Spring Boot, Tailwind CSS, Jekyll",
        tools: "MongoDB, Git, AWS, Node.js, Miniconda, PostgreSQL, Prisma ORM, Redis, Docker, Jira",
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
            "As a recent Computer Science graduate from UMass Boston and an active software developer, I combine technical expertise with a drive for innovation. My experience spans mobile app development and full-stack web solutions, where I've successfully delivered projects using React Native, TypeScript, and cloud technologies. With an AWS Cloud Practitioner certification and a strong foundation in computer science, I continuously embrace new challenges and technologies to create impactful solutions. My passion for clean code and problem-solving drives me to stay at the forefront of technological advancement.",
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
