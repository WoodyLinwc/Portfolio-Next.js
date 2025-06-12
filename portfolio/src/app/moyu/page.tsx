"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import DisqusComments from "@/components/DisqusComments";

export default function MoyuPage() {
    const [currentTweet, setCurrentTweet] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const [currentKpopImage, setCurrentKpopImage] = useState("");
    const [buttonText, setButtonText] = useState("看看下一个");

    const tweets = [
        '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[衣帽间]：emo时的专属房间。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1615083286086254602?ref_src=twsrc%5Etfw">January 16, 2023</a></blockquote>',
        '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[不会说粤语的广州人]：Can\'tonese。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1618274853265764352?ref_src=twsrc%5Etfw">January 25, 2023</a></blockquote>',
        '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[清仓大甩卖]：花钱买教训，结果买一送一。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1551985181334052864?ref_src=twsrc%5Etfw">July 26, 2022</a></blockquote>',
        // Add more tweets as needed
    ];

    const buttonLabels = [
        "不够看！",
        "看看下一个",
        "慢点按~",
        "还有吗？",
        "看点其他的",
        "太少啦~",
        "灵感爆发中...",
        "多整点！",
        "可以可以",
        "信我，下一个更好",
        "整挺好~",
        "还不错吼",
        "继续发点！",
    ];

    const generateRandomTweet = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * tweets.length);
        setCurrentTweet(tweets[randomIndex]);

        const randomLabelIndex = Math.floor(
            Math.random() * buttonLabels.length
        );
        setButtonText(buttonLabels[randomLabelIndex]);

        // Reload Twitter widgets
        if (window.twttr?.widgets) {
            window.twttr.widgets.load();
        }
    }, [tweets, buttonLabels]);

    const generateRandomImage = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * 121) + 1;
        setCurrentImage(`/images/redpanda/red${randomIndex}-min.JPG`);
    }, []);

    const loadRandomKpopImage = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * 1414);
        setCurrentKpopImage(
            `https://woodylinwc.github.io/Image-Storage/GIDLE/image_${randomIndex}.JPG`
        );
    }, []);

    useEffect(() => {
        // Twitter widget script
        const loadTwitterWidget = () => {
            if (!window.twttr) {
                const twitterScript = document.createElement("script");
                twitterScript.src = "https://platform.twitter.com/widgets.js";
                twitterScript.async = true;
                twitterScript.charset = "utf-8";
                document.body.appendChild(twitterScript);
            }
        };

        // Load Twitter widget
        loadTwitterWidget();

        // Generate initial content
        generateRandomTweet();
        generateRandomImage();
        loadRandomKpopImage();
    }, [generateRandomTweet, generateRandomImage, loadRandomKpopImage]);

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center mb-20"></div>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Title */}
                    <div className="relative flex items-center justify-center mb-16">
                        <h1 className="text-6xl lg:text-7xl font-bold text-gray-100 uppercase tracking-wider">
                            今晚又吃点啥呢
                        </h1>
                        <h1 className="absolute text-2xl lg:text-3xl font-bold text-primary uppercase">
                            今天胡思乱想些啥呢
                        </h1>
                    </div>

                    {/* Twitter Section */}
                    <div className="max-w-2xl mx-auto mb-12 text-center">
                        <div
                            className="mb-6"
                            dangerouslySetInnerHTML={{ __html: currentTweet }}
                        />
                        <button
                            onClick={generateRandomTweet}
                            className="bg-white border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors"
                        >
                            {buttonText}
                        </button>
                    </div>

                    {/* Red Panda Section */}
                    <div className="mb-12">
                        <div className="relative flex items-center justify-center mb-8">
                            <h1 className="absolute text-2xl lg:text-3xl font-bold text-primary uppercase">
                                不如看点小熊猫
                            </h1>
                        </div>

                        <div className="flex justify-center mb-6">
                            {currentImage && (
                                <Image
                                    src={currentImage}
                                    alt="Red Panda"
                                    width={400}
                                    height={400}
                                    className="max-w-[80vw] max-h-[80vh] object-contain cursor-pointer"
                                    onClick={generateRandomImage}
                                />
                            )}
                        </div>

                        <div className="text-center">
                            <button
                                onClick={generateRandomImage}
                                className="bg-white border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors"
                            >
                                点击图片来看更多，电脑右键打开，手机长按直接拿图！
                            </button>
                        </div>
                    </div>

                    {/* K-pop Section */}
                    <div className="mb-12">
                        <div className="relative flex items-center justify-center mb-8">
                            <h1 className="absolute text-2xl lg:text-3xl font-bold text-primary uppercase">
                                或者(G)I-DLE
                            </h1>
                        </div>

                        <div className="flex justify-center mb-6">
                            {currentKpopImage && (
                                <Image
                                    src={currentKpopImage}
                                    alt="K-pop Image"
                                    width={800}
                                    height={600}
                                    className="max-w-[80vw] max-h-[80vh] object-contain cursor-pointer"
                                    onClick={loadRandomKpopImage}
                                    unoptimized // Since this is an external URL
                                />
                            )}
                        </div>

                        <div className="text-center">
                            <button
                                onClick={loadRandomKpopImage}
                                className="bg-white border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors"
                            >
                                目前有1000多张！
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comments Section */}
            <DisqusComments
                url="moyu-section"
                identifier="moyu-section"
                title="Moyu Section"
            />
        </>
    );
}

// Extend Window interface for Twitter widgets
declare global {
    interface Window {
        twttr: {
            widgets: {
                load: () => void;
            };
        };
    }
}
