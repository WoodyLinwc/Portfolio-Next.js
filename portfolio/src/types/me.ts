export interface PersonalInfo {
    name: string;
    fullName: string;
    chineseName: string;
    email: string;
    location: string;
    education: {
        degree: string;
        school: string;
        period: string;
        gpa: string;
    };
    skills: {
        languages: string;
        frameworks: string;
        tools: string;
    };
    links: {
        resume: string;
        linkedin: string;
        github: string;
        gitlab: string;
        discord: string;
        steam: string;
        weibo: string;
        blog: string;
        portfolio: string;
    };
    hero: {
        greeting: string;
        typedStrings: string[];
    };
    about: {
        title: string;
        description: string;
    };
    certificates: Array<{
        name: string;
        url: string;
    }>;
    locationData: {
        mapEmbedUrl: string;
    };
    footer: {
        copyright: string;
        designCredit: {
            name: string;
            url: string;
        };
        modifiedBy: {
            name: string;
            url: string;
        };
    };
}

export interface SocialLink {
    href: string;
    icon: string;
    label: string;
}

export interface Project {
    title: string;
    subtitle: string;
    date: string;
    link: string;
    linkText: string;
    details: string[];
}

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
