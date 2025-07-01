import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { personalInfo } from "@/data/me/personal";

export default function About() {
    return (
        <>
            <SectionTitle
                backgroundText="Portfolio"
                foregroundText="About Me"
            />

            <section id="about">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        <div className="lg:w-5/12">
                            <Image
                                src="/images/me/me.jpg"
                                alt={personalInfo.fullName}
                                width={500}
                                height={600}
                                className="rounded-lg w-full object-cover"
                            />
                        </div>

                        <div className="lg:w-7/12">
                            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-800">
                                {personalInfo.about.title}
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {personalInfo.about.description}
                            </p>

                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="space-y-3">
                                    <div>
                                        <span className="font-semibold">
                                            Name:
                                        </span>{" "}
                                        <span className="text-gray-600">
                                            {personalInfo.fullName}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">
                                            Location:
                                        </span>{" "}
                                        <span className="text-gray-600">
                                            {personalInfo.location}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">
                                            Email:
                                        </span>{" "}
                                        <span className="text-gray-600">
                                            {personalInfo.email}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">
                                            GPA:
                                        </span>{" "}
                                        <span className="text-gray-600">
                                            {personalInfo.education.gpa}
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
                                                ■{" "}
                                                {personalInfo.education.degree}
                                            </div>
                                            <div>
                                                ■{" "}
                                                {personalInfo.education.school},{" "}
                                                {personalInfo.education.period}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="space-y-4 mb-8">
                                <div>
                                    <span className="font-semibold">
                                        Languages:
                                    </span>
                                    <span className="text-gray-600 text-sm block mt-1">
                                        {personalInfo.skills.languages}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Frameworks:
                                    </span>
                                    <span className="text-gray-600 text-sm block mt-1">
                                        {personalInfo.skills.frameworks}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Certificates:
                                    </span>
                                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                                        {personalInfo.certificates.map(
                                            (cert, index) => (
                                                <div key={index}>
                                                    ■{" "}
                                                    <a
                                                        href={cert.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline"
                                                    >
                                                        {cert.name}
                                                    </a>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Relevant Tools:
                                    </span>
                                    <span className="text-gray-600 text-sm block mt-1">
                                        {personalInfo.skills.tools}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* <a
                                    href={personalInfo.links.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors text-center"
                                >
                                    My Most Recent Resume
                                </a> */}
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
        </>
    );
}
