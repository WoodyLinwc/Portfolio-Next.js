"use client";

import { useState } from "react";
import DisqusComments from "@/components/widgets/DisqusComments";
import SectionTitle from "@/components/SectionTitle";
import { tools } from "@/data/tools";
import { websites } from "@/data/websites";
import QuoteWidget from "@/components/widgets/QuoteWidget";

export default function ToolsPage() {
    const [showTools, setShowTools] = useState(false);
    const [showWebsites, setShowWebsites] = useState(false);

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

    const handleToggleTools = () => {
        setShowTools(!showTools);
    };

    const handleToggleWebsites = () => {
        setShowWebsites(!showWebsites);
    };

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* Tools Section */}
            <SectionTitle backgroundText="Essential" foregroundText="Toolkit" />

            {/* Quote of the Day Widget */}
            <section>
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <QuoteWidget className="mb-12" />
                </div>
            </section>

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Tools Stats - Clickable */}
                        <button
                            onClick={handleToggleTools}
                            className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors cursor-pointer w-full group text-center"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                                My Toolkit
                            </h3>
                            <div className="text-4xl font-bold text-primary mb-2">
                                {tools.length}
                            </div>
                            <p className="text-gray-600 mb-2">
                                Essential tools for development, productivity,
                                and collaboration
                            </p>
                            <div className="flex items-center justify-center space-x-2 text-primary">
                                <span className="text-sm font-medium">
                                    {showTools
                                        ? "Hide Tools"
                                        : "Show All Tools"}
                                </span>
                                <i
                                    className={`fa ${
                                        showTools
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                    } text-sm transition-transform duration-300`}
                                ></i>
                            </div>
                        </button>

                        {/* Websites Stats - Clickable */}
                        <button
                            onClick={handleToggleWebsites}
                            className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors cursor-pointer w-full group text-center"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                                Useful Websites
                            </h3>
                            <div className="text-4xl font-bold text-primary mb-2">
                                {websites.length}
                            </div>
                            <p className="text-gray-600 mb-2">
                                Curated learning resources, development tools,
                                and career guides
                            </p>
                            <div className="flex items-center justify-center space-x-2 text-primary">
                                <span className="text-sm font-medium">
                                    {showWebsites
                                        ? "Hide Websites"
                                        : "Show All Websites"}
                                </span>
                                <i
                                    className={`fa ${
                                        showWebsites
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                    } text-sm transition-transform duration-300`}
                                ></i>
                            </div>
                        </button>
                    </div>

                    {/* Tools Grid - Only show when showTools is true */}
                    {showTools && (
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                                Development & Productivity Tools
                            </h2>
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
                        </div>
                    )}

                    {/* Websites Grid - Only show when showWebsites is true */}
                    {showWebsites && (
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                                Learning Resources & Developer Websites
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {websites.map((website, index) => (
                                    <div
                                        key={index}
                                        className="service-box text-center group hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-center mb-6">
                                            <i
                                                className={`fa fa-3x ${website.icon} text-primary mr-4 group-hover:scale-110 transition-transform duration-300`}
                                            ></i>
                                            <h4 className="font-bold text-xl text-gray-800">
                                                {website.title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {website.description}
                                        </p>
                                        <a
                                            href={website.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block border-b-2 border-primary text-primary hover:text-primary/80 transition-colors font-medium"
                                        >
                                            Visit Website
                                        </a>
                                        {website.category && (
                                            <div className="mt-3">
                                                <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium capitalize">
                                                    {website.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Comments Section */}
            <DisqusComments
                url="https://woody-lin-personal.vercel.app/tools"
                identifier="productivity-section"
                title="Productivity Tools"
                shortname="https-woody-lin-personal-vercel-app-tools"
            />
        </>
    );
}
