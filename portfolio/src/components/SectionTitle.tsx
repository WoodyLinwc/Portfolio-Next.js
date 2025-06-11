interface SectionTitleProps {
    backgroundText: string;
    foregroundText: string;
    className?: string;
}

export default function SectionTitle({
    backgroundText,
    foregroundText,
    className = "",
}: SectionTitleProps) {
    return (
        <div className={`py-6 sm:py-8 md:py-10 lg:py-12 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-32">
                <div className="relative flex items-center justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-100 uppercase tracking-wider text-center">
                        {backgroundText}
                    </h1>
                    <h1 className="absolute text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary uppercase text-center">
                        {foregroundText}
                    </h1>
                </div>
            </div>
        </div>
    );
}
