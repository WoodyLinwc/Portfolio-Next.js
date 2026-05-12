import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { personalInfo } from "@/data/me/personal";

export default function About() {
  return (
    <>
      <SectionTitle backgroundText="Portfolio" foregroundText="About Me" />

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

              {/* Programming Skills */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                  Software & Development
                </h4>
                <div>
                  <span className="font-semibold">Languages:</span>
                  <span className="text-gray-600 text-sm block mt-1">
                    {personalInfo.skills.languages}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Frameworks:</span>
                  <span className="text-gray-600 text-sm block mt-1">
                    {personalInfo.skills.frameworks}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Relevant Tools:</span>
                  <span className="text-gray-600 text-sm block mt-1">
                    {personalInfo.skills.tools}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Certificates:</span>
                  <div className="text-gray-600 text-sm mt-1 space-y-1">
                    {personalInfo.certificates.map((cert, index) => (
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
                    ))}
                  </div>
                </div>
              </div>

              {/* Laboratory Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                  Laboratory & Biotech
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold">Laboratory:</span>
                    <span className="text-gray-600 text-sm block mt-1">
                      {personalInfo.skills.laboratory}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Equipment:</span>
                    <span className="text-gray-600 text-sm block mt-1">
                      {personalInfo.skills.equipment}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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
