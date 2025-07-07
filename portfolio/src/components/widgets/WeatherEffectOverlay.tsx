"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface WeatherEffectOverlayProps {
    weatherCondition: string;
    className?: string;
}

export default function WeatherEffectOverlay({
    weatherCondition,
    className = "",
}: WeatherEffectOverlayProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationIdRef = useRef<number | null>(null);

    // Check if weather condition should show particle effect
    const shouldShowEffect = () => {
        const condition = weatherCondition.toLowerCase();
        return (
            condition.includes("clear") ||
            condition.includes("cloudy") ||
            condition.includes("partly")
        );
    };

    useEffect(() => {
        if (!shouldShowEffect() || !canvasRef.current) {
            return;
        }

        // Initialize Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000, 0);

        // Set canvas size to match container
        const updateSize = () => {
            if (canvasRef.current) {
                const parent = canvasRef.current.parentElement;
                if (parent) {
                    const width = parent.clientWidth;
                    const height = parent.clientHeight;
                    renderer.setSize(width, height);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                }
            }
        };

        updateSize();

        // Create particle geometry
        const windGeometry = new THREE.BufferGeometry();
        const vertices = [];
        const particleCount = 3000; // Reduced for better performance

        for (let i = 0; i < particleCount; i++) {
            vertices.push(Math.random() * 400 - 200); // x
            vertices.push(Math.random() * 400 - 200); // y
            vertices.push(Math.random() * 200 - 100); // z
        }

        windGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );

        // Create particle material with slightly darker color
        const windMaterial = new THREE.PointsMaterial({
            color: 0xa8c5e0,
            size: 0.6,
            transparent: true,
            opacity: 0.7,
        });

        const wind = new THREE.Points(windGeometry, windMaterial);
        scene.add(wind);

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;

        // Animation loop
        function animate() {
            animationIdRef.current = requestAnimationFrame(animate);

            const positions = windGeometry.getAttribute("position")
                .array as Float32Array;

            for (let i = 0; i < positions.length; i += 3) {
                // Move particles horizontally (wind effect)
                positions[i] -= 0.1;
                // Add slight vertical movement for natural look
                positions[i + 1] += Math.random() * 0.06 - 0.03;

                // Reset particle position when it goes off screen
                if (positions[i] < -200) {
                    positions[i] = 200;
                }
                if (positions[i + 1] < -200) {
                    positions[i + 1] = 200;
                } else if (positions[i + 1] > 200) {
                    positions[i + 1] = -200;
                }
            }

            windGeometry.getAttribute("position").needsUpdate = true;
            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        const handleResize = () => {
            updateSize();
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);

            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }

            if (rendererRef.current) {
                rendererRef.current.dispose();
            }

            if (sceneRef.current) {
                sceneRef.current.clear();
            }
        };
    }, [weatherCondition]);

    // Don't render anything if weather condition doesn't warrant particles
    if (!shouldShowEffect()) {
        return null;
    }

    return (
        <div
            className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/10 to-transparent pointer-events-none" />
        </div>
    );
}
