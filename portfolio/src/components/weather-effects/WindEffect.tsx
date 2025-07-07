"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface WindEffectProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    isActive: boolean;
}

export default function WindEffect({ canvasRef, isActive }: WindEffectProps) {
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

        // Create wind particle geometry
        const windGeometry = new THREE.BufferGeometry();
        const vertices = [];
        const particleCount = 3000;

        for (let i = 0; i < particleCount; i++) {
            vertices.push(Math.random() * 400 - 200); // x
            vertices.push(Math.random() * 400 - 200); // y
            vertices.push(Math.random() * 200 - 100); // z
        }

        windGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );

        // Create wind particle material
        const windMaterial = new THREE.PointsMaterial({
            color: 0xa8c5e0,
            size: 0.6,
            transparent: true,
            opacity: 0.5,
        });

        const windParticles = new THREE.Points(windGeometry, windMaterial);
        scene.add(windParticles);

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;
        particlesRef.current = windParticles;
        geometryRef.current = windGeometry;

        // Animation loop
        function animate() {
            if (!isActive) return;

            animationIdRef.current = requestAnimationFrame(animate);

            const positions = windGeometry.getAttribute("position")
                .array as Float32Array;

            // Wind animation - particles move horizontally with slight vertical drift
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
