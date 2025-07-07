"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeavyRainEffectProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    isActive: boolean;
}

export default function HeavyRainEffect({
    canvasRef,
    isActive,
}: HeavyRainEffectProps) {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationIdRef = useRef<number | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const geometryRef = useRef<THREE.BufferGeometry | null>(null);

    useEffect(() => {
        if (!isActive || !canvasRef.current) {
            // Cleanup if not active
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
                animationIdRef.current = null;
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

        // Create heavy rain particle geometry - back to the working approach
        const rainGeometry = new THREE.BufferGeometry();
        const vertices: number[] = [];
        const particleCount = 800;

        for (let i = 0; i < particleCount; i++) {
            vertices.push(Math.random() * 600 - 300); // x - wide spread
            vertices.push(Math.random() * 700 - 350); // y - tall range
            vertices.push(Math.random() * 400 - 200); // z
        }

        rainGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );

        // Create rain particle material - simple and reliable
        const rainMaterial = new THREE.PointsMaterial({
            color: 0x88b9e1,
            size: 3, // Small square particles
            transparent: true,
            opacity: 0.8,
        });

        const rainParticles = new THREE.Points(rainGeometry, rainMaterial);
        scene.add(rainParticles);

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;
        particlesRef.current = rainParticles;
        geometryRef.current = rainGeometry;

        // Animation loop
        function animate() {
            if (!isActive) return;

            animationIdRef.current = requestAnimationFrame(animate);

            const positions = rainGeometry.getAttribute("position")
                .array as Float32Array;

            // Heavy rain animation - fast falling with slight angle
            for (let i = 0; i < positions.length; i += 3) {
                // Fast downward movement
                positions[i + 1] -= 4; // Much faster than regular rain

                // Slight diagonal movement for wind effect
                positions[i] -= 0.5;

                // Reset particle position when it goes off screen
                if (positions[i + 1] < -350) {
                    positions[i + 1] = 350;
                    positions[i] = Math.random() * 600 - 300; // Reset x position
                }

                // Wrap horizontally
                if (positions[i] < -300) {
                    positions[i] = 300;
                }
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
        };
    }, [isActive, canvasRef]);

    return null; // This component only manages the Three.js scene
}
