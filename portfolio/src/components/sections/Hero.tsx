"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed_strings = [
            "Software Engineer",
            "Android App Developer",
            "Game Developer",
            "Photographer",
            "林万程",
        ];

        let currentIndex = 0;
        let currentText = "";
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const current = typed_strings[currentIndex];

            if (isDeleting) {
                currentText = current.substring(0, currentText.length - 1);
                typeSpeed = 20;
            } else {
                currentText = current.substring(0, currentText.length + 1);
                typeSpeed = 100;
            }

            if (typedRef.current) {
                typedRef.current.textContent = currentText;
            }

            if (!isDeleting && currentText === current) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentText === "") {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % typed_strings.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }, []);

    return (
        <section
            className="min-h-screen bg-primary flex items-center"
            id="home"
        >
            <div className="container mx-auto px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-7/12 text-center lg:text-left mb-8 lg:mb-0">
                        <h3 className="text-white font-normal mb-3 text-lg">
                            Hello, my name
                        </h3>
                        <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-4 stroke-white uppercase">
                            Woody Lin
                        </h1>
                        <div className="text-white text-xl lg:text-2xl font-light min-h-[2rem]">
                            <span ref={typedRef}></span>
                            <span className="text-white text-4xl lg:text-5xl animate-blink">
                                |
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start pt-12 space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="mailto:lin.wancheng001@gmail.com"
                                className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                            >
                                Email Me
                            </a>
                            <a
                                href="https://www.linkedin.com/in/woody-lin-32ab48161/"
                                className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-colors hidden sm:block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/WoodyLinwc"
                                className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-colors hidden sm:block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-5/12 flex justify-center lg:justify-start lg:-ml-8">
                        <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
                            <Image
                                src="/images/GitHub-Mark.png"
                                alt="Woody Lin"
                                fill
                                className="rounded-full shadow-lg object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
