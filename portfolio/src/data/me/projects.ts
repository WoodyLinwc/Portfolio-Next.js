export interface Project {
    title: string;
    subtitle: string;
    date: string;
    link: string;
    linkText: string;
    details: string[];
}

export const projects: Project[] = [
    {
        title: "Full-Stack Kpop Review Platform",
        subtitle: "Full-Stack Project",
        date: "Oct 2023 - Dec 2023",
        link: "https://github.com/WoodyLinwc/kpop.rating.springboot",
        linkText: "Spring Boot, ReactJS, MongoDB",
        details: [
            "Crafted a song review application utilizing Spring Boot as the back end and ReactJS as the front end.",
            "Utilized Axios to fetch K-pop songs and review data from the back-end API in Spring Boot.",
            "Implemented a RESTful API with endpoints to facilitate CRUD operations on K-pop contents.",
            "Leveraged MongoTemplate to perform more complex MongoDB interactions, such as updating associated K-pop content documents with review IDs when a new review is created.",
            'Employed Lombok to generate boilerplate code, reducing verbosity in both "Kpop" and "Review" classes.',
            'Applied dependency injection with @Autowired annotations, automatically injecting instances into the "ReviewService" class when it\'s initialized.',
        ],
    },
    {
        title: "LE-V-EL",
        subtitle: "CS410 Software Engineering",
        date: "Feb 2023 - May 2023",
        link: "https://github.com/WoodyLinwc/LEVEL",
        linkText: "LE-V-EL: Visualization Benchmarks for Machines",
        details: [
            "Designed a dynamic website showcasing rankings of machine graphical perception algorithms on benchmark datasets using HTML, CSS, JavaScript, and Jekyll.",
            "Managed Python files using Miniconda to ensure smooth execution and mitigate conflicts on the server side.",
            "Leveraged GitHub Workflow to automate project processes directly within the GitHub repository.",
            "Implemented a robust lock mechanism based on YAML configuration file on the school server; prevented the risk of infinite loops and streamlined workflow efficiency during GitHub Action execution.",
            "Standardized the datasets and improved calculation speed by 40% on the school's server by employing scikit-learn (sklearn), numpy, and nltk for efficient data preprocessing and analysis tasks.",
        ],
    },
    {
        title: "Twitter Bot",
        subtitle: "Extracurricular",
        date: "May 2023 - Jun 2023",
        link: "https://github.com/WoodyLinwc/Auto-Twitter-Bot",
        linkText: "Automated Twitter Bot with Image Posting",
        details: [
            "Developed a Twitter bot based on AWS EC2 instance to select and upload pictures from a designated database once every 6 hours (still operational remotely).",
            "Implemented a time-based CronJob to acquire the necessary components by Node.js; integrated the Twitter API for automated tweeting, optimizing efficiency with async/await for handling asynchronous tasks.",
            "Leveraged PM2 for real-time monitoring management of the Twitter bot, ensuring consistent performance.",
            "Published over 2,000 tweets to date and constantly gained followers.",
        ],
    },
    {
        title: "2D Game Project",
        subtitle: "Extracurricular",
        date: "May 2022 - Aug 2022",
        link: "https://github.com/WoodyLinwc/Metro-Girl",
        linkText: "2D Hack and Slash Game",
        details: [
            "Designed and implemented game mechanics, UI, and graphics for a 2D game using Gamemaker Studio 2.",
            "Created original game characters and assets, using tools such as Procreate and Adobe Photoshop.",
            "Debugged and tested the game, ensuring a smooth and enjoyable gamer experience.",
        ],
    },
];
