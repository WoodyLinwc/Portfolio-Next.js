// src/components/FloatingGreeting.tsx
"use client";

import { useEffect, useState } from "react";

interface FloatingGreetingProps {
    className?: string;
}

interface Greeting {
    text: string;
    language: string;
}

export default function FloatingGreeting({
    className = "",
}: FloatingGreetingProps) {
    const [greetings, setGreetings] = useState<
        Array<
            Greeting & {
                id: string;
                fontSize: number;
                startY: number;
                duration: number;
                delay: number;
            }
        >
    >([]);

    // Get current time-based greetings
    const getCurrentGreetings = (): Greeting[] => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            // Morning greetings
            return [
                { text: "Good Morning", language: "English" },
                { text: "Buenos Días", language: "Spanish" },
                { text: "早上好", language: "Chinese" },
                { text: "おはようございます", language: "Japanese" },
                { text: "Доброе утро", language: "Russian" },
                { text: "Guten Morgen", language: "German" },
                { text: "Bonjour", language: "French" },
                { text: "صباح الخير", language: "Arabic" },
                { text: "Chào buổi sáng", language: "Vietnamese" },
                { text: "सुप्रभात", language: "Hindi" },
                { text: "좋은 아침", language: "Korean" },
                { text: "Buongiorno", language: "Italian" },
                { text: "صبح بخیر", language: "Urdu" },
                { text: "Bom dia", language: "Portuguese" },
            ];
        } else if (hour >= 12 && hour < 18) {
            // Afternoon greetings
            return [
                { text: "Good Afternoon", language: "English" },
                { text: "Buenas Tardes", language: "Spanish" },
                { text: "下午好", language: "Chinese" },
                { text: "こんにちは", language: "Japanese" },
                { text: "Добрый день", language: "Russian" },
                { text: "Guten Tag", language: "German" },
                { text: "Bon après-midi", language: "French" },
                { text: "مساء الخير", language: "Arabic" },
                { text: "Chào buổi chiều", language: "Vietnamese" },
                { text: "नमस्कार", language: "Hindi" },
                { text: "좋은 오후", language: "Korean" },
                { text: "Buon pomeriggio", language: "Italian" },
                { text: "دوپہر بخیر", language: "Urdu" },
                { text: "Boa tarde", language: "Portuguese" },
            ];
        } else {
            // Evening/Night greetings
            return [
                { text: "Good Evening", language: "English" },
                { text: "Buenas Noches", language: "Spanish" },
                { text: "晚上好", language: "Chinese" },
                { text: "こんばんは", language: "Japanese" },
                { text: "Добрый вечер", language: "Russian" },
                { text: "Guten Abend", language: "German" },
                { text: "Bonsoir", language: "French" },
                { text: "مساء الخير", language: "Arabic" },
                { text: "Chào buổi tối", language: "Vietnamese" },
                { text: "शुभ संध्या", language: "Hindi" },
                { text: "좋은 저녁", language: "Korean" },
                { text: "Buonasera", language: "Italian" },
                { text: "شام بخیر", language: "Urdu" },
                { text: "Boa noite", language: "Portuguese" },
            ];
        }
    };

    // Generate random greeting properties
    const generateGreetingProps = (greeting: Greeting) => {
        return {
            ...greeting,
            id: `greeting-${Date.now()}-${Math.random()}`,
            fontSize: Math.random() * 14 + 16, // 16px to 30px
            startY: Math.random() * 60 + 20, // 20% to 80% from top
            duration: Math.random() * 5000 + 8000, // 8-13 seconds
            delay: 0, // No delay for continuous flow
        };
    };

    // Add a single random greeting
    const addRandomGreeting = () => {
        const currentGreetings = getCurrentGreetings();
        const randomGreeting =
            currentGreetings[
                Math.floor(Math.random() * currentGreetings.length)
            ];
        const greetingWithProps = generateGreetingProps(randomGreeting);

        setGreetings((prev) => [...prev, greetingWithProps]);
    };

    // Add English greeting specifically
    const addEnglishGreeting = () => {
        const currentGreetings = getCurrentGreetings();
        const englishGreeting = currentGreetings.find(
            (g) => g.language === "English"
        );
        if (englishGreeting) {
            const greetingWithProps = generateGreetingProps(englishGreeting);
            setGreetings((prev) => [...prev, greetingWithProps]);
        }
    };

    // Remove greeting when animation completes
    const handleAnimationEnd = (greetingId: string) => {
        setGreetings((prev) => prev.filter((g) => g.id !== greetingId));
    };

    // Initialize continuous greeting flow with tab visibility handling
    useEffect(() => {
        let interval: NodeJS.Timeout;
        let isVisible = !document.hidden;

        // Ensure English greeting is added first on initial load
        const initializeWithEnglish = () => {
            setGreetings([]); // Clear any existing greetings
            setTimeout(() => {
                addEnglishGreeting();
            }, 50); // Small delay to ensure state is clean
        };

        // Add English greeting first on initial load
        initializeWithEnglish();

        const startInterval = () => {
            if (interval) clearInterval(interval);
            interval = setInterval(() => {
                // Only add greeting if tab is visible
                if (!document.hidden) {
                    addRandomGreeting();
                }
            }, 2000); // New greeting every 2 seconds
        };

        const handleVisibilityChange = () => {
            const wasVisible = isVisible;
            isVisible = !document.hidden;

            if (isVisible && !wasVisible) {
                // Tab became visible - clear any accumulated greetings and restart fresh with English
                setGreetings([]);
                setTimeout(() => {
                    addEnglishGreeting();
                }, 50);
                startInterval();
            } else if (!isVisible && wasVisible) {
                // Tab became hidden - clear interval
                if (interval) clearInterval(interval);
            }
        };

        // Set up visibility change listener
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Start the interval after a brief delay to ensure English greeting appears first
        setTimeout(() => {
            startInterval();
        }, 1000);

        return () => {
            if (interval) clearInterval(interval);
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []);

    return (
        <>
            {/* CSS for the animation */}
            <style jsx>{`
                @keyframes float-greeting {
                    0% {
                        transform: translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(-120vw);
                        opacity: 0;
                    }
                }

                .animate-float-greeting {
                    animation: float-greeting linear forwards;
                }
            `}</style>

            <div
                className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            >
                {greetings.map((greeting) => (
                    <div
                        key={greeting.id}
                        className="absolute whitespace-nowrap text-white font-bold animate-float-greeting"
                        style={{
                            fontSize: `${greeting.fontSize}px`,
                            top: `${greeting.startY}%`,
                            right: "-20%", // Start from off-screen right
                            animationDuration: `${greeting.duration}ms`,
                            animationDelay: `${greeting.delay}ms`,
                            animationFillMode: "forwards",
                            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        }}
                        onAnimationEnd={() => handleAnimationEnd(greeting.id)}
                    >
                        {greeting.text}
                    </div>
                ))}
            </div>
        </>
    );
}
