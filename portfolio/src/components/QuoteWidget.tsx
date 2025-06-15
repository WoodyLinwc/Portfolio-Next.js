"use client";

import { useState, useEffect } from "react";
import { fallbackQuotes } from "@/data/fallbackQuotes";

interface QuoteData {
    text: string;
    author: string;
    category: string;
}

interface QuoteWidgetProps {
    className?: string;
}

interface QuoteResponse {
    quotes: Array<{
        quote: string;
        author: string;
    }>;
}

export default function QuoteWidget({ className = "" }: QuoteWidgetProps) {
    const [quote, setQuote] = useState<QuoteData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchQuote = async (isManualRefresh = false) => {
        if (isManualRefresh) {
            setIsRefreshing(true);
        }

        try {
            // Start both the API call and minimum delay for manual refresh
            const [response] = await Promise.all([
                fetch("https://dummyjson.com/quotes?limit=20"), // Get 20 quotes to filter short quote
                // Minimum 1 second delay for manual refresh to show loading state
                isManualRefresh
                    ? new Promise((resolve) => setTimeout(resolve, 1000))
                    : Promise.resolve(),
            ]);

            if (!response.ok) {
                throw new Error("Quote data unavailable");
            }

            const data = (await response.json()) as QuoteResponse;

            // Filter for shorter quotes (less than 80 characters for better fit)
            const shortQuotes = data.quotes.filter((q) => q.quote.length <= 80);

            // If we have short quotes, use them; otherwise use any quote
            const quotesToChooseFrom =
                shortQuotes.length > 0 ? shortQuotes : data.quotes;

            // Get a random quote from the filtered list
            const randomIndex = Math.floor(
                Math.random() * quotesToChooseFrom.length
            );
            const selectedQuote = quotesToChooseFrom[randomIndex];

            setQuote({
                text: selectedQuote.quote,
                author: selectedQuote.author,
                category: "inspirational",
            });
        } catch (error) {
            console.error("Quote fetch error:", error);
            // Use fallback quotes from data file
            const randomQuote =
                fallbackQuotes[
                    Math.floor(Math.random() * fallbackQuotes.length)
                ];
            setQuote(randomQuote);
        } finally {
            setLoading(false);
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const handleRefresh = () => {
        if (!isRefreshing) {
            fetchQuote(true);
        }
    };

    const getCategoryIcon = (category: string) => {
        const iconMap: { [key: string]: string } = {
            programming: "fa-code",
            technology: "fa-microchip",
            motivational: "fa-rocket",
            wisdom: "fa-lightbulb",
            design: "fa-paint-brush",
            productivity: "fa-tasks",
            startup: "fa-chart-line",
            innovation: "fa-brain",
            learning: "fa-graduation-cap",
            philosophy: "fa-quote-right",
        };
        return iconMap[category] || "fa-quote-right";
    };

    if (loading || isRefreshing) {
        return (
            <div className={`max-w-4xl mx-auto ${className}`}>
                <div className="border-2 border-primary text-primary px-6 py-4 rounded text-center">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                        <i className="fa fa-quote-left text-2xl"></i>
                        <span className="font-medium text-lg">
                            {loading
                                ? "Loading quote..."
                                : "Getting new quote..."}
                        </span>
                        <i className="fa fa-refresh animate-spin"></i>
                    </div>

                    <div
                        className="text-sm opacity-75"
                        style={{ fontSize: "10px" }}
                    >
                        Quote of the Day • Powered by type.fit
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`max-w-4xl mx-auto ${className}`}>
            <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="border-2 border-primary text-primary px-6 py-4 rounded hover:bg-primary hover:text-white transition-colors text-center w-full disabled:opacity-50"
            >
                <div className="flex items-center justify-center space-x-3 mb-3">
                    <i className="fa fa-quote-left text-2xl flex-shrink-0"></i>
                    <div className="flex-grow">
                        <p className="text-lg font-medium italic leading-relaxed">
                            &ldquo;{quote?.text}&rdquo;
                        </p>
                    </div>
                    <i className="fa fa-quote-right text-2xl flex-shrink-0"></i>
                </div>

                <div className="flex items-center justify-center space-x-3 mb-2">
                    <i
                        className={`fa ${getCategoryIcon(
                            quote?.category || "wisdom"
                        )} text-sm`}
                    ></i>
                    <span className="font-bold">— {quote?.author}</span>
                    <i className="fa fa-refresh text-sm hover:animate-spin transition-transform"></i>
                </div>

                <div
                    className="text-sm opacity-75 capitalize"
                    style={{ fontSize: "10px" }}
                >
                    Quote of the Day • {quote?.category} • Powered by DummyJSON
                </div>
            </button>
        </div>
    );
}
