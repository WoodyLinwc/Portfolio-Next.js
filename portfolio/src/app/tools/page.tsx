// import DisqusComments from "@/components/DisqusComments";
import SectionTitle from "@/components/SectionTitle";

export default function ToolsPage() {
    const tools = [
        {
            icon: "fa-computer",
            title: "Visual Studio Code",
            description:
                "Visual Studio Code is a lightweight but powerful code editor that is well-suited for many different types of development, including web development, data science, and game development.",
            link: "https://code.visualstudio.com/",
        },
        {
            icon: "fa-bars-progress",
            title: "Homebrew",
            description:
                "Homebrew is a package manager for macOS that makes it easy to install and manage open-source software.",
            link: "https://brew.sh/",
        },
        {
            icon: "fab fa-microsoft",
            title: "Microsoft Office",
            description:
                "Microsoft Office is a suite of productivity software developed by Microsoft. It includes a variety of applications, such as Word, Excel, PowerPoint, and Outlook, that are widely used for tasks such as word processing, data analysis, presentations, and email management.",
            link: "https://www.microsoft.com/en-us/microsoft-365",
        },
        {
            icon: "fa-calculator",
            title: "WolframAlpha",
            description:
                "Wolfram Alpha is a computational knowledge engine developed by Wolfram Research. It is designed to provide answers to questions and calculations in a wide range of fields including mathematics, science, engineering, and technology.",
            link: "https://www.wolframalpha.com/",
        },
        {
            icon: "fa-microchip",
            title: "ChatGPT",
            description:
                "ChatGPT is a large language generation model developed by OpenAI. It uses deep learning techniques to generate human-like text based on the input it receives.",
            link: "https://chat.openai.com/chat",
        },
        {
            icon: "fa-file-zipper",
            title: "7-Zip",
            description:
                "7-Zip is a free and open-source file archiver software for Windows, Linux, and other operating systems. It supports various archive formats including 7z, ZIP, RAR, and TAR.",
            link: "https://www.7-zip.org/download.html",
        },
        {
            icon: "fa-box-open",
            title: "Dropbox",
            description:
                "Dropbox is a cloud-based file storage and sharing platform that allows users to store, share, and access files from anywhere with an internet connection. It allows users to create and organize folders, and share them with others.",
            link: "https://www.dropbox.com/",
        },
        {
            icon: "fa-desktop",
            title: "GitHub Desktop",
            description:
                "GitHub Desktop is a free and open-source Git client developed by GitHub. It is designed to simplify the process of working with Git and GitHub.",
            link: "https://desktop.github.com/",
        },
        {
            icon: "fa-spell-check",
            title: "Grammarly",
            description:
                "Grammarly is an AI-powered writing assistant that helps users to improve their grammar, punctuation, and spelling. It can detect and correct over 250 types of grammatical errors, and provide suggestions for word choice, tone, and style.",
            link: "https://app.grammarly.com/",
        },
        {
            icon: "fa-blog",
            title: "Blogger",
            description:
                "Blogger is a free web-based platform that allows users to create and publish blogs. It allows users to write and publish blog posts, customize the look and feel of their blog, and interact with readers through comments.",
            link: "https://www.blogger.com/",
        },
    ];

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
