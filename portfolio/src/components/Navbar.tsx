"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#project", label: "Projects & Experience" },
        { href: "/tools", label: "Productivity" },
        { href: "/photography", label: "Photography" },
        { href: "/games", label: "Game" },
        { href: "/blog", label: "Blog" },
        // { href: "/moyu", label: "Moyu" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "flex bg-white shadow-lg" : "hidden"
            } py-2 xl:py-3 px-3 xl:px-5`}
        >
            <div className="container mx-auto flex items-center justify-between max-w-7xl">
                <Link href="/" className="ml-2 xl:ml-3 flex-shrink-0">
                    <h1 className="text-2xl xl:text-3xl font-bold">
                        <span className="text-primary">Woody</span>Lin
                    </h1>
                </Link>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden flex flex-col items-center justify-center w-6 h-6"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-gray-600 transition-all ${
                            isOpen ? "rotate-45 translate-y-1" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-600 transition-all my-1 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-600 transition-all ${
                            isOpen ? "-rotate-45 -translate-y-1" : ""
                        }`}
                    />
                </button>

                {/* Desktop menu */}
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-2 xl:px-3 py-2 font-medium text-sm xl:text-base transition-colors hover:text-primary whitespace-nowrap ${
                                pathname === item.href
                                    ? "text-primary"
                                    : "text-gray-700"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="mailto:lin.wancheng001@gmail.com"
                        className="bg-primary text-white px-4 xl:px-6 py-2 rounded-full hover:bg-primary/90 transition-colors text-sm xl:text-base whitespace-nowrap"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Mobile menu */}
                <div
                    className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
                        isOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                    <div className="px-5 py-3 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="mailto:lin.wancheng001@gmail.com"
                            className="block bg-primary text-white px-4 py-2 rounded-full text-center hover:bg-primary/90 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
