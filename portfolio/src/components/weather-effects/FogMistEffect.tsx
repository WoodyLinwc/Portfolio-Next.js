"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface FogMistEffectProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    isActive: boolean;
    intensity?: "mist" | "fog"; // Determines density and opacity
}

export default function FogMistEffect({
    canvasRef,
    isActive,
    intensity = "fog",
}: FogMistEffectProps) {
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

        // Create soft cloud texture for fog/mist
        const createCloudTexture = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext("2d");

            if (ctx) {
                // Clear canvas
                ctx.clearRect(0, 0, 64, 64);

                // Create radial gradient for soft cloud effect
                const gradient = ctx.createRadialGradient(
                    32,
                    32,
                    0,
                    32,
                    32,
                    32
                );
                gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)"); // Center - more opaque
                gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.4)"); // Middle
                gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.1)"); // Edge
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Transparent edge

                // Draw soft circular cloud
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 64, 64);
            }

            return new THREE.CanvasTexture(canvas);
        };

        // Set parameters based on intensity
        const isMist = intensity === "mist";
        const particleCount = isMist ? 150 : 300; // Fewer particles for mist
        const baseOpacity = isMist ? 0.15 : 0.25; // Lower opacity for mist
        const baseSize = isMist ? 60 : 80; // Larger minimum sizes
        const moveSpeed = isMist ? 0.3 : 0.4; // Much faster movement

        // Create fog/mist particle geometry
        const fogGeometry = new THREE.BufferGeometry();
        const vertices: number[] = [];
        const sizes: number[] = [];

        for (let i = 0; i < particleCount; i++) {
            vertices.push(Math.random() * 800 - 400); // x - wide spread
            vertices.push(Math.random() * 400 - 200); // y - moderate height
            vertices.push(Math.random() * 600 - 300); // z - deep range

            // Larger, more consistent sizes for better visibility
            sizes.push(Math.random() * 30 + baseSize); // 30-110 for fog, 30-90 for mist
        }

        fogGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );
        fogGeometry.setAttribute(
            "size",
            new THREE.Float32BufferAttribute(sizes, 1)
        );

        // Create fog/mist particle material with cloud texture
        const cloudTexture = createCloudTexture();
        const fogMaterial = new THREE.PointsMaterial({
            map: cloudTexture,
            color: 0xf0f0f0, // Light gray-white
            size: baseSize,
            transparent: true,
            opacity: baseOpacity,
            alphaTest: 0.01,
            sizeAttenuation: true,
            depthWrite: false, // Important for proper blending
        });

        const fogParticles = new THREE.Points(fogGeometry, fogMaterial);
        scene.add(fogParticles);

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;
        particlesRef.current = fogParticles;
        geometryRef.current = fogGeometry;

        // Animation loop
        function animate() {
            if (!isActive) return;

            animationIdRef.current = requestAnimationFrame(animate);

            const positions = fogGeometry.getAttribute("position")
                .array as Float32Array;

            // Fog/mist animation - horizontal movement from left to right (opposite of wind)
            for (let i = 0; i < positions.length; i += 3) {
                // Move from left to right (opposite direction of wind)
                positions[i] += moveSpeed;

                // Reset particle position when it goes off screen
                if (positions[i] > 400) {
                    positions[i] = -400;
                }
            }

            fogGeometry.getAttribute("position").needsUpdate = true;
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

            // Cleanup texture
            cloudTexture.dispose();
        };
    }, [isActive, canvasRef, intensity]);

    return null; // This component only manages the Three.js scene
}
