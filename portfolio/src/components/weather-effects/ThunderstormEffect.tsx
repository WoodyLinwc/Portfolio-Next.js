"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThunderstormEffectProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    isActive: boolean;
}

export default function ThunderstormEffect({
    canvasRef,
    isActive,
}: ThunderstormEffectProps) {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationIdRef = useRef<number | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const geometryRef = useRef<THREE.BufferGeometry | null>(null);
    const lightningOverlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isActive || !canvasRef.current) {
            // Cleanup if not active
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
                animationIdRef.current = null;
            }
            // Remove lightning overlay
            if (lightningOverlayRef.current) {
                lightningOverlayRef.current.remove();
                lightningOverlayRef.current = null;
            }
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

        // Create lightning overlay element
        const createLightningOverlay = () => {
            const overlay = document.createElement("div");
            overlay.style.position = "absolute";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
            overlay.style.pointerEvents = "none";
            overlay.style.zIndex = "2";
            overlay.style.transition = "background-color 0.1s ease-out";

            // Add to the canvas parent
            if (canvasRef.current?.parentElement) {
                canvasRef.current.parentElement.appendChild(overlay);
                lightningOverlayRef.current = overlay;
            }

            return overlay;
        };

        const lightningOverlay = createLightningOverlay();

        // Create intense rain geometry (thunderstorm has heavy rain)
        const rainGeometry = new THREE.BufferGeometry();
        const vertices: number[] = [];
        const particleCount = 1200; // Dense rain for thunderstorm

        for (let i = 0; i < particleCount; i++) {
            vertices.push(Math.random() * 700 - 350); // x - very wide spread
            vertices.push(Math.random() * 800 - 400); // y - tall range
            vertices.push(Math.random() * 500 - 250); // z
        }

        rainGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );

        // Create thunderstorm rain material - darker blue for stormy weather
        const rainMaterial = new THREE.PointsMaterial({
            color: 0x4a7ba7, // Darker stormy blue
            size: 4, // Larger raindrops
            transparent: true,
            opacity: 0.9, // More opaque for heavy rain
        });

        const rainParticles = new THREE.Points(rainGeometry, rainMaterial);
        scene.add(rainParticles);

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;
        particlesRef.current = rainParticles;
        geometryRef.current = rainGeometry;

        // Lightning timing variables
        let nextLightningTime = Math.random() * 180 + 120; // 2-5 seconds
        let frameCount = 0;

        // Lightning flash function
        const createLightningFlash = () => {
            if (!lightningOverlay) return;

            // Quick bright flash
            lightningOverlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";

            // Fade out quickly
            setTimeout(() => {
                if (lightningOverlay) {
                    lightningOverlay.style.backgroundColor =
                        "rgba(255, 255, 255, 0.3)";
                }
            }, 50);

            setTimeout(() => {
                if (lightningOverlay) {
                    lightningOverlay.style.backgroundColor =
                        "rgba(255, 255, 255, 0)";
                }
            }, 150);

            // Sometimes add a second flash for realism
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    if (lightningOverlay) {
                        lightningOverlay.style.backgroundColor =
                            "rgba(255, 255, 255, 0.6)";
                        setTimeout(() => {
                            if (lightningOverlay) {
                                lightningOverlay.style.backgroundColor =
                                    "rgba(255, 255, 255, 0)";
                            }
                        }, 80);
                    }
                }, 200);
            }
        };

        // Animation loop
        function animate() {
            if (!isActive) return;

            animationIdRef.current = requestAnimationFrame(animate);
            frameCount++;

            const positions = rainGeometry.getAttribute("position")
                .array as Float32Array;

            // Heavy rain animation - very fast falling with strong wind
            for (let i = 0; i < positions.length; i += 3) {
                // Very fast downward movement
                positions[i + 1] -= 5; // Fastest rain speed

                // Strong diagonal wind effect
                positions[i] -= 0.8;

                // Reset particle position when it goes off screen
                if (positions[i + 1] < -400) {
                    positions[i + 1] = 400;
                    positions[i] = Math.random() * 700 - 350; // Reset x position
                }

                // Wrap horizontally
                if (positions[i] < -350) {
                    positions[i] = 350;
                }
            }

            // Lightning timing
            if (frameCount >= nextLightningTime) {
                createLightningFlash();
                // Set next lightning time (2-8 seconds)
                nextLightningTime = frameCount + Math.random() * 360 + 120;
            }

            rainGeometry.getAttribute("position").needsUpdate = true;
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

            if (geometryRef.current) {
                geometryRef.current.dispose();
            }

            if (sceneRef.current) {
                sceneRef.current.clear();
            }

            // Remove lightning overlay
            if (lightningOverlayRef.current) {
                lightningOverlayRef.current.remove();
                lightningOverlayRef.current = null;
            }
        };
    }, [isActive, canvasRef]);

    return null; // This component only manages the Three.js scene
}
