export default function Projects() {
    const projects = [
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

    const experiences = [
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
            secondaryLink:
                "https://woodylinwc.github.io/pdf/CS310_Syllabus.pdf",
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

    return (
        <section className="py-20" id="project">
            <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                <div className="relative flex items-center justify-center mb-16">
                    <h1 className="text-8xl lg:text-9xl font-bold text-gray-100 uppercase tracking-wider">
                        Quality
                    </h1>
                    <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                        My Works
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Projects Column */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-gray-800">
                            My Projects
                        </h3>
                        <div className="border-l-4 border-primary pl-8 ml-4 space-y-8">
                            {projects.map((project, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-11 top-2 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                    <h5 className="text-xl font-bold mb-2 text-gray-800">
                                        {project.title}
                                    </h5>
                                    <p className="text-sm mb-2">
                                        <strong>{project.subtitle}</strong> |{" "}
                                        <small>{project.date}</small>
                                    </p>
                                    <div className="space-y-2">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline font-medium"
                                        >
                                            {project.linkText}
                                        </a>
                                        <div className="text-gray-600 text-sm space-y-1">
                                            {project.details.map(
                                                (detail, idx) => (
                                                    <p key={idx}>■ {detail}</p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-gray-800">
                            My Experience
                        </h3>
                        <div className="border-l-4 border-primary pl-8 ml-4 space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-11 top-2 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                    <h5 className="text-xl font-bold mb-2 text-gray-800">
                                        {exp.title}
                                    </h5>
                                    <p className="text-sm mb-2">
                                        <strong>{exp.company}</strong> |{" "}
                                        <small>{exp.date}</small>
                                    </p>
                                    <div className="space-y-2">
                                        {exp.link && (
                                            <div className="flex flex-wrap gap-2 text-sm">
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:underline font-medium"
                                                >
                                                    {exp.linkText}
                                                </a>
                                                {exp.githubLink && (
                                                    <>
                                                        <span className="text-gray-400">
                                                            |
                                                        </span>
                                                        <a
                                                            href={
                                                                exp.githubLink
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary hover:underline font-medium"
                                                        >
                                                            GitHub
                                                        </a>
                                                    </>
                                                )}
                                                {exp.secondaryLink && (
                                                    <>
                                                        <br />
                                                        <a
                                                            href={
                                                                exp.secondaryLink
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary hover:underline font-medium"
                                                        >
                                                            {
                                                                exp.secondaryLinkText
                                                            }
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                        <div className="text-gray-600 text-sm space-y-1">
                                            {exp.details.map((detail, idx) => (
                                                <p key={idx}>■ {detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
