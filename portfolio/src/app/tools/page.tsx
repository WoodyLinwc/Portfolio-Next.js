// import DisqusComments from "@/components/DisqusComments";
import SectionTitle from "@/components/SectionTitle";
import { tools } from "@/data/tools";

export default function ToolsPage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center mb-20"></div>

            {/* Tools Section */}
            <SectionTitle
                backgroundText="Productivity"
                foregroundText="Essential Tools"
            />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="service-box text-center"
                            >
                                <div className="flex items-center justify-center mb-6">
                                    <i
                                        className={`fa fa-3x ${tool.icon} text-primary mr-4`}
                                    ></i>
                                    <h4 className="font-bold text-xl text-gray-800">
                                        {tool.title}
                                    </h4>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {tool.description}
                                </p>
                                <a
                                    href={tool.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border-b-2 border-primary text-primary hover:text-primary/80 transition-colors font-medium"
                                >
                                    {tool.title === "ChatGPT" ||
                                    tool.title === "WolframAlpha" ||
                                    tool.title === "Grammarly" ||
                                    tool.title === "Blogger"
                                        ? "Try out"
                                        : "Download"}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comments Section */}
            {/* <DisqusComments
                url="productivity-section"
                identifier="productivity-section"
                title="Productivity Tools"
            /> */}
        </>
    );
}
