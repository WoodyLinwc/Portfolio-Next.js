"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/me/personal";

// Update the NavItem interface to support dropdown
interface NavItem {
    href: string;
    label: string;
    dropdown?: { href: string; label: string }[];
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown and mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null);
            }
        };

        const handleMobileMenuClose = (event: MouseEvent) => {
            // Close mobile menu when clicking outside navbar
            const navbar = document.querySelector("nav");
            if (navbar && !navbar.contains(event.target as Node)) {
                setIsOpen(false);
                setOpenDropdown(null);
                setMobileDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("mousedown", handleMobileMenuClose);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("mousedown", handleMobileMenuClose);
        };
    }, []);

    const navItems: NavItem[] = [
        { href: "/", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#project", label: "Projects & Experience" },
        { href: "/tools", label: "Productivity" },
        { href: "/photography", label: "Photography" },
        {
            href: "/learning",
            label: "Learning",
            dropdown: [
                { href: "/learning/react", label: "React" },
                { href: "/learning/html-css", label: "HTML/CSS" },
                {
                    href: "/learning/coding-challenges",
                    label: "Coding Challenges",
                },
            ],
        },
    ];

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    const toggleMobileDropdown = (label: string) => {
        setMobileDropdown(mobileDropdown === label ? null : label);
    };

    const closeAllMenus = () => {
        setOpenDropdown(null);
        setMobileDropdown(null);
        setIsOpen(false);
    };

    // Close mobile menu when window resizes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
                setOpenDropdown(null);
                setMobileDropdown(null);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isActiveItem = (item: NavItem) => {
        if (item.dropdown) {
            // Check if current path matches main item or any dropdown item
            return (
                pathname === item.href ||
                item.dropdown.some((subItem) => pathname === subItem.href)
            );
        }
        return pathname === item.href;
    };

    const isActiveDropdownItem = (href: string) => {
        return pathname === href;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "flex bg-white shadow-lg" : "hidden"
            } py-2 xl:py-3 px-3 xl:px-5`}
        >
            <div className="container mx-auto flex items-center justify-between max-w-7xl">
                <Link href="/" className="ml-2 xl:ml-3 flex-shrink-0">
                    <h1 className="text-2xl xl:text-3xl font-bold">
                        <span className="text-primary">
                            {personalInfo.name}
                        </span>
                        Lin
                    </h1>
                </Link>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden flex flex-col items-center justify-center w-6 h-6"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setOpenDropdown(null); // Close any open dropdown when toggling menu
                        setMobileDropdown(null); // Close mobile dropdown too
                    }}
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
                <div
                    className="hidden lg:flex items-center space-x-4 xl:space-x-6"
                    ref={dropdownRef}
                >
                    {navItems.map((item) => (
                        <div key={item.href} className="relative">
                            {item.dropdown ? (
                                // Dropdown menu item
                                <div className="relative">
                                    <button
                                        onClick={() =>
                                            toggleDropdown(item.label)
                                        }
                                        className={`flex items-center px-2 xl:px-3 py-2 font-medium text-sm xl:text-base transition-colors hover:text-primary whitespace-nowrap ${
                                            isActiveItem(item)
                                                ? "text-primary"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        {item.label}
                                        <i
                                            className={`fa fa-chevron-down ml-1 text-xs transition-transform ${
                                                openDropdown === item.label
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        ></i>
                                    </button>

                                    {/* Dropdown menu */}
                                    {openDropdown === item.label && (
                                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                            <Link
                                                href={item.href}
                                                onClick={() =>
                                                    setOpenDropdown(null)
                                                }
                                                className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                                                    pathname === item.href
                                                        ? "text-primary bg-blue-50"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                Overview
                                            </Link>
                                            <div className="border-t border-gray-100 my-1"></div>
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    onClick={() =>
                                                        setOpenDropdown(null)
                                                    }
                                                    className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                                                        isActiveDropdownItem(
                                                            subItem.href
                                                        )
                                                            ? "text-primary bg-blue-50"
                                                            : "text-gray-700"
                                                    }`}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Regular menu item
                                <Link
                                    href={item.href}
                                    className={`px-2 xl:px-3 py-2 font-medium text-sm xl:text-base transition-colors hover:text-primary whitespace-nowrap ${
                                        isActiveItem(item)
                                            ? "text-primary"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="bg-primary text-white px-4 xl:px-6 py-2 rounded-full hover:bg-primary/90 transition-colors text-sm xl:text-base whitespace-nowrap"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Mobile menu */}
                <div
                    className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
                        isOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                    <div className="px-5 py-3 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.href}>
                                {item.dropdown ? (
                                    // Mobile dropdown
                                    <div className="bg-white">
                                        <button
                                            onClick={() =>
                                                toggleMobileDropdown(item.label)
                                            }
                                            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-primary transition-colors bg-white"
                                        >
                                            {item.label}
                                            <i
                                                className={`fa fa-chevron-down text-xs transition-transform ${
                                                    mobileDropdown ===
                                                    item.label
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            ></i>
                                        </button>
                                        {mobileDropdown === item.label && (
                                            <div className="bg-gray-50 border-l-2 border-primary ml-4 space-y-1">
                                                <Link
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors bg-gray-50"
                                                    onClick={() =>
                                                        setMobileDropdown(null)
                                                    }
                                                >
                                                    Overview
                                                </Link>
                                                {item.dropdown.map(
                                                    (subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors bg-gray-50"
                                                            onClick={() =>
                                                                setMobileDropdown(
                                                                    null
                                                                )
                                                            }
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    // Mobile regular item
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-2 text-gray-700 hover:text-primary transition-colors bg-white"
                                        onClick={closeAllMenus}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="block bg-primary text-white px-4 py-2 rounded-full text-center hover:bg-primary/90 transition-colors"
                            onClick={closeAllMenus}
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
