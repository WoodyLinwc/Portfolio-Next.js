"use client";

import { useRef } from "react";
import WindEffect from "./WindEffect";
import RainEffect from "./RainEffect";
import SnowEffect from "./SnowEffect";

interface WeatherEffectOverlayProps {
    weatherCondition: string;
    className?: string;
}

export default function WeatherEffectOverlay({
    weatherCondition,
    className = "",
}: WeatherEffectOverlayProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Check if weather condition should show particle effect
    const shouldShowEffect = () => {
        const condition = weatherCondition.toLowerCase();
        return (
            condition.includes("clear") ||
            condition.includes("cloudy") ||
            condition.includes("partly") ||
            condition.includes("rain") ||
            condition.includes("shower") ||
            condition.includes("drizzle") ||
            condition.includes("snow") ||
            condition.includes("flurries")
        );
    };

    // Determine which effect to show based on weather
    const getEffectType = () => {
        const condition = weatherCondition.toLowerCase();
        if (condition.includes("snow") || condition.includes("flurries")) {
            return "snow";
        }
        if (
            condition.includes("rain") ||
            condition.includes("shower") ||
            condition.includes("drizzle")
        ) {
            return "rain";
        }
        return "wind";
    };

    // Don't render anything if weather condition doesn't warrant particles
    if (!shouldShowEffect()) {
        return null;
    }

    const effectType = getEffectType();

    return (
        <div
            className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
            style={{ zIndex: 1 }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
            />

            {/* Conditionally render the appropriate effect */}
            <WindEffect
                canvasRef={canvasRef}
                isActive={effectType === "wind"}
            />
            <RainEffect
                canvasRef={canvasRef}
                isActive={effectType === "rain"}
            />
            <SnowEffect
                canvasRef={canvasRef}
                isActive={effectType === "snow"}
            />
        </div>
    );
}
