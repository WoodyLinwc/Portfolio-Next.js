"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SnowEffectProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    isActive: boolean;
}

export default function SnowEffect({ canvasRef, isActive }: SnowEffectProps) {
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

        // Create hexagonal snowflake texture
        const createHexagonTexture = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext("2d");

            if (ctx) {
                const centerX = 16;
                const centerY = 16;
                const radius = 12;

                // Clear canvas
                ctx.clearRect(0, 0, 32, 32);

                // Draw pure hexagon - no inner lines
                ctx.beginPath();
                ctx.fillStyle = "#ffffff";

                for (let i = 0; i < 6; i++) {
                    const angle = (i * Math.PI) / 3;
                    const x = centerX + radius * Math.cos(angle);
                    const y = centerY + radius * Math.sin(angle);

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.closePath();
                ctx.fill();
            }

            return new THREE.CanvasTexture(canvas);
        };

        // Create snow particle geometry
        const snowGeometry = new THREE.BufferGeometry();
        const vertices: number[] = [];
        const sizes: number[] = [];
        const rotations: number[] = [];
        const swayOffsets: number[] = [];
        const particleCount = 300; // Much lighter snowfall

        for (let i = 0; i < particleCount; i++) {
            // Better distribution - avoid center clustering
            let x, z;
            do {
                x = Math.random() * 1000 - 500; // Even wider spread
                z = Math.random() * 800 - 400;
            } while (Math.abs(x) < 50 && Math.abs(z) < 50); // Avoid center cluster

            vertices.push(x); // x
            vertices.push(Math.random() * 600 - 300); // y
            vertices.push(z); // z

            // More varied sizes for better distribution
            sizes.push(Math.random() * 4 + 0.5);

            // Random rotation for each snowflake
            rotations.push(Math.random() * Math.PI * 2);

            // Random sway offset for natural movement
            swayOffsets.push(Math.random() * Math.PI * 2);
        }

        snowGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );
        snowGeometry.setAttribute(
            "size",
            new THREE.Float32BufferAttribute(sizes, 1)
        );
        snowGeometry.setAttribute(
            "rotation",
            new THREE.Float32BufferAttribute(rotations, 1)
        );

        // Create snow particle material with hexagon texture
        const hexagonTexture = createHexagonTexture();
        const snowMaterial = new THREE.PointsMaterial({
            map: hexagonTexture,
            color: 0xffffff,
            size: 12, // Slightly larger base size
            transparent: true,
            opacity: 0.8,
            alphaTest: 0.1,
            sizeAttenuation: true,
        });

        const snowParticles = new THREE.Points(snowGeometry, snowMaterial);
        scene.add(snowParticles);

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;
        particlesRef.current = snowParticles;
        geometryRef.current = snowGeometry;

        let time = 0;

        // Animation loop
        function animate() {
            if (!isActive) return;

            animationIdRef.current = requestAnimationFrame(animate);
            time += 0.01;

            const positions = snowGeometry.getAttribute("position")
                .array as Float32Array;
            const rotationAttr = snowGeometry.getAttribute("rotation")
                .array as Float32Array;

            // Snow animation - slow falling with gentle sway
            for (let i = 0; i < positions.length; i += 3) {
                const particleIndex = i / 3;

                // Slow downward movement
                positions[i + 1] -= 0.5; // Much slower than rain

                // Gentle horizontal sway
                const swayAmount =
                    Math.sin(time + swayOffsets[particleIndex]) * 0.2;
                positions[i] += swayAmount * 0.1;

                // Rotate snowflakes slowly
                rotationAttr[particleIndex] += 0.005;

                // Reset particle position when it goes off screen
                if (positions[i + 1] < -300) {
                    positions[i + 1] = 300;
                    // Reset with better distribution - avoid center clustering
                    let newX;
                    do {
                        newX = Math.random() * 1000 - 500;
                    } while (Math.abs(newX) < 50); // Avoid center
                    positions[i] = newX;
                }

                // Keep particles within wider horizontal bounds
                if (positions[i] < -500) {
                    positions[i] = 500;
                } else if (positions[i] > 500) {
                    positions[i] = -500;
                }
            }

            snowGeometry.getAttribute("position").needsUpdate = true;
            snowGeometry.getAttribute("rotation").needsUpdate = true;
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
            hexagonTexture.dispose();
        };
    }, [isActive, canvasRef]);

    return null; // This component only manages the Three.js scene
}
