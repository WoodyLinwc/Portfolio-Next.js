// import DisqusComments from "@/components/DisqusComments";
import SectionTitle from "@/components/SectionTitle";
import { tools } from "@/data/tools";
import QuoteWidget from "@/components/QuoteWidget";

export default function ToolsPage() {
    const getButtonText = (tool: { title: string }) => {
        // Web services that you "try out" vs downloadable software
        const webServices = [
            "ChatGPT",
            "WolframAlpha",
            "Grammarly",
            "Blogger",
            "Postman",
            "Figma",
            "Notion",
            "Slack",
            "Vercel",
        ];
        return webServices.includes(tool.title) ? "Try it out" : "Download";
    };

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center mb-20"></div>

            {/* Tools Section */}
            <SectionTitle
                backgroundText="Productivity"
                foregroundText="Essential Tools"
            />

            {/* Quote of the Day Widget */}
            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <QuoteWidget className="mb-12" />
                </div>
            </section>

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* All Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="service-box text-center group hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center justify-center mb-6">
                                    <i
                                        className={`fa fa-3x ${tool.icon} text-primary mr-4 group-hover:scale-110 transition-transform duration-300`}
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
                                    {getButtonText(tool)}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-16 text-center">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                My Toolkit
                            </h3>
                            <div className="text-4xl font-bold text-primary mb-2">
                                {tools.length}
                            </div>
                            <p className="text-gray-600">
                                Essential tools for development, productivity,
                                and collaboration
                            </p>
                        </div>
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
