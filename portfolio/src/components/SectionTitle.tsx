import { ReactNode } from "react";

interface SectionTitleProps {
    backgroundText: string;
    foregroundText: string;
    className?: string;
    overlay?: ReactNode; // Optional overlay component
}

export default function SectionTitle({
    backgroundText,
    foregroundText,
    className = "",
    overlay,
}: SectionTitleProps) {
    return (
        <div
            className={`py-6 sm:py-8 md:py-10 lg:py-12 relative overflow-hidden ${className}`}
        >
            {/* Weather Effect Overlay */}
            {overlay && (
                <div className="absolute inset-0 pointer-events-none z-0">
                    {overlay}
                </div>
            )}

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-32 relative z-10">
                <div className="relative flex items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                    <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-100 uppercase tracking-wider text-center absolute">
                        {backgroundText}
                    </h1>
                    <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary uppercase text-center relative z-10">
                        {foregroundText}
                    </h1>
                </div>
            </div>
        </div>
    );
}
