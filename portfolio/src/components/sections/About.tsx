import Image from "next/image";

export default function About() {
    return (
        <section className="py-20" id="about">
            <div className="container mx-auto px-4">
                <div className="relative flex items-center justify-center mb-16">
                    <h1 className="text-8xl lg:text-9xl font-bold text-gray-100 uppercase tracking-wider">
                        Portfolio
                    </h1>
                    <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                        About Me
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                    <div className="lg:w-5/12">
                        <Image
                            src="/images/me/me.jpg"
                            alt="Woody Lin"
                            width={500}
                            height={600}
                            className="rounded-lg w-full object-cover"
                        />
                    </div>

                    <div className="lg:w-7/12">
                        <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-800">
                            A Passionate Software Developer
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            As a recent Computer Science graduate from UMass
                            Boston and an active software developer, I combine
                            technical expertise with a drive for innovation. My
                            experience spans mobile app development and
                            full-stack web solutions, where I've successfully
                            delivered projects using React Native, TypeScript,
                            and cloud technologies. With an AWS Cloud
                            Practitioner certification and a strong foundation
                            in computer science, I continuously embrace new
                            challenges and technologies to create impactful
                            solutions. My passion for clean code and
                            problem-solving drives me to stay at the forefront
                            of technological advancement.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="space-y-3">
                                <div>
                                    <span className="font-semibold">Name:</span>{" "}
                                    <span className="text-gray-600">
                                        Woody Lin
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Location:
                                    </span>{" "}
                                    <span className="text-gray-600">
                                        Boston, MA
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Email:
                                    </span>{" "}
                                    <span className="text-gray-600">
                                        lin.wancheng001@gmail.com
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">GPA:</span>{" "}
                                    <span className="text-gray-600">
                                        3.72 Dean's List
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <span className="font-semibold">
                                        Education:
                                    </span>
                                    <div className="text-gray-600 text-sm mt-1">
                                        <div>
                                            ■ Bachelor degree in Computer
                                            Science, minor in Mathematics
                                        </div>
                                        <div>
                                            ■ University of Massachusetts
                                            Boston, 2019 - 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div>
                                <span className="font-semibold">
                                    Languages:
                                </span>
                                <span className="text-gray-600 text-sm block mt-1">
                                    Java, Python, JavaScript, TypeScript, SQL,
                                    HTML & CSS, C/C++, Bash
                                </span>
                            </div>
                            <div>
                                <span className="font-semibold">
                                    Frameworks:
                                </span>
                                <span className="text-gray-600 text-sm block mt-1">
                                    ReactJS, React Native, NestJS, Next.js,
                                    Spring Boot, Tailwind CSS, Jekyll
                                </span>
                            </div>
                            <div>
                                <span className="font-semibold">
                                    Relevant Tools:
                                </span>
                                <span className="text-gray-600 text-sm block mt-1">
                                    MongoDB, Git, AWS, Node.js, Miniconda,
                                    PostgreSQL, Prisma ORM, Redis, Docker, Jira
                                </span>
                            </div>
                            <div>
                                <span className="font-semibold">
                                    Technical Skills:
                                </span>
                                <div className="text-gray-600 text-sm mt-1">
                                    <div>■ Object-oriented programming</div>
                                    <div>■ Data Structures and Algorithms</div>
                                    <div>■ GitHub Workflow</div>
                                    <div>■ Functional programming</div>
                                    <div>■ Scripting and Automation</div>
                                    <div>■ Data Management</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://woodylinwc.github.io/pdf/WoodyLinResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors text-center"
                            >
                                My Most Recent Resume
                            </a>
                            <a
                                href="#project"
                                className="border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors text-center"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
