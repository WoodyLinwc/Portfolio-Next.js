// src/components/Spinner.tsx
interface SpinnerProps {
    size?: "small" | "medium" | "large";
    color?: "primary" | "white" | "gray";
    className?: string;
}

export default function Spinner({
    size = "medium",
    color = "primary",
    className = "",
}: SpinnerProps) {
    const sizeClasses = {
        small: "w-4 h-4",
        medium: "w-8 h-8",
        large: "w-12 h-12",
    };

    const colorClasses = {
        primary: "border-primary border-t-transparent",
        white: "border-white border-t-transparent",
        gray: "border-gray-300 border-t-transparent",
    };

    return (
        <div
            className={`
                ${sizeClasses[size]} 
                ${colorClasses[color]} 
                border-2 
                rounded-full 
                animate-[spinner-grow_0.75s_linear_infinite]
                ${className}
            `}
            role="status"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
}

// Loading overlay for iframes
interface LoadingOverlayProps {
    isVisible: boolean;
    message?: string;
}

export function LoadingOverlay({
    isVisible,
    message = "Loading...",
}: LoadingOverlayProps) {
    if (!isVisible) return null;

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-lg z-10">
            <Spinner size="large" color="primary" />
            <p className="mt-4 text-gray-600 font-medium">{message}</p>
        </div>
    );
}
