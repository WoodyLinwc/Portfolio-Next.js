// src/components/SectionTitle.tsx
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
        <div className={`py-12 ${className}`}>
            <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                <div className="relative flex items-center justify-center mb-16">
                    <h1 className="text-7xl lg:text-8xl font-bold text-gray-100 uppercase tracking-wider">
                        {backgroundText}
                    </h1>
                    <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                        {foregroundText}
                    </h1>
                </div>
            </div>
        </div>
    );
}
