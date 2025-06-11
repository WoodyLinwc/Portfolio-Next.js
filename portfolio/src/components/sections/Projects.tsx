import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";

export default function Projects() {
    return (
        <>
            <SectionTitle backgroundText="Quality" foregroundText="My Works" />

            <section className="pb-20" id="project">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
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
                                            <strong>{project.subtitle}</strong>{" "}
                                            | <small>{project.date}</small>
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
                                                        <p key={idx}>
                                                            ■ {detail}
                                                        </p>
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
                                                {exp.details.map(
                                                    (detail, idx) => (
                                                        <p key={idx}>
                                                            ■ {detail}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
