"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Circle } from "lucide-react";

export default function MacTerminal() {
    const [input, setInput] = useState("");
    const [widgetLoaded, setWidgetLoaded] = useState(false);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [history, setHistory] = useState([
        {
            type: "output",
            content:
                "Last login: " + new Date().toLocaleString() + " on ttys000",
        },
        { type: "output", content: "Welcome to Woody's Terminal!" },
        { type: "prompt", content: "woody@MacBook-Pro:~$ " },
    ]);
    const [currentDirectory] = useState("~");
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    // Add custom scrollbar styles to hide scrollbar
    const scrollbarStyles = `
        .terminal-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .terminal-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    `;

    // Available pages/commands
    const pages = [
        "Home",
        "About",
        "Projects & Experience",
        "Productivity",
        "Photography",
        "Learning",
        "Blog",
    ];

    // Page descriptions for cat command
    const pageDescriptions: { [key: string]: string } = {
        home: "Welcome page with hero section and introduction",
        about: "Information about Woody Lin - education, skills, and experience",
        projects: "Showcase of projects and professional experience",
        productivity:
            "Collection of essential development and productivity tools",
        photography: "Photo gallery and camera gear showcase",
        learning: "Interactive terminal and learning resources",
        blog: "Personal blog and articles",
    };

    // Common Linux commands that should show permission denied
    const restrictedCommands = [
        "sudo",
        "su",
        "chmod",
        "chown",
        "mount",
        "umount",
        "fdisk",
        "ifconfig",
        "iptables",
        "systemctl",
        "service",
        "kill",
        "killall",
        "ps",
        "top",
        "htop",
        "netstat",
        "ss",
        "lsof",
        "df",
        "du",
        "free",
        "uname",
        "uptime",
        "who",
        "w",
        "last",
        "history",
        "passwd",
        "useradd",
        "userdel",
        "usermod",
        "groupadd",
        "groupdel",
        "crontab",
        "vim",
        "nano",
        "emacs",
        "less",
        "more",
        "head",
        "tail",
        "grep",
        "find",
        "locate",
        "which",
        "whereis",
        "file",
        "ln",
        "cp",
        "mv",
        "mkdir",
        "rmdir",
        "tar",
        "gzip",
        "gunzip",
        "zip",
        "unzip",
        "wget",
        "curl",
        "ssh",
        "scp",
        "rsync",
        "ping",
        "traceroute",
        "nslookup",
        "dig",
    ];

    const commands: { [key: string]: (args?: string[]) => string | null } = {
        ls: () => {
            return pages.join("  ");
        },
        help: () => {
            return "Available commands:\n  ls        - list all pages\n  clear     - clear terminal\n  help      - show this help message\n  whoami    - display current user\n  cat       - display page description\n  cd        - change directory (restricted)\n  echo      - prints text to terminal\n  rm        - remove files (restricted)\n  widget    - load Live2D widget";
        },
        clear: () => {
            // Add a small delay to show the refreshing effect
            setTimeout(() => {
                setHistory([
                    {
                        type: "output",
                        content:
                            "Last login: " +
                            new Date().toLocaleString() +
                            " on ttys000",
                    },
                    { type: "output", content: "Welcome to Woody's Terminal!" },
                    { type: "prompt", content: "woody@MacBook-Pro:~$ " },
                ]);
            }, 100);
            return null;
        },
        whoami: () => {
            return "woody";
        },
        cat: (args) => {
            if (!args || args.length === 0) {
                return (
                    "cat: missing file operand\nTry 'cat [page]' where page is one of: " +
                    Object.keys(pageDescriptions).join(", ")
                );
            }
            const page = args[0].toLowerCase();
            if (pageDescriptions[page]) {
                return pageDescriptions[page];
            }
            return `cat: ${args[0]}: No such file or directory`;
        },
        cd: (args) => {
            if (!args || args.length === 0) {
                return "Error: cd: missing directory argument";
            }
            if (args[0] === "..") {
                return "Error: cd: permission denied: you don't have permission to go up";
            }
            const target = args[0].toLowerCase();
            if (
                pages.some((page) =>
                    page.toLowerCase().replace(/\s+/g, "").includes(target)
                )
            ) {
                return `Error: cd: ${args[0]}: is not a directory (it's a page)`;
            }
            return `Error: cd: ${args[0]}: No such file or directory`;
        },
        echo: (args) => {
            if (!args || args.length === 0) {
                return "";
            }
            return args.join(" ");
        },
        rm: (args) => {
            if (!args || args.length === 0) {
                return "Error: rm: missing file operand";
            }
            if (
                args.includes("-r") ||
                args.includes("-rf") ||
                args.includes("-fr")
            ) {
                return "Error: rm: permission denied: you don't have permission to remove directories";
            }
            return "Error: rm: permission denied: you don't have permission to remove files";
        },
        // Widget command to load Live2D widget permanently
        widget: () => {
            if (widgetLoaded) {
                return "Live2D widget is already loaded and active.";
            } else {
                setWidgetLoaded(true);
                return "Loading Live2D widget... It will stay active once loaded.";
            }
        },
        // Keep the woody command functional but hidden from help
        woody: () => {
            return "Hello, my friend! You found the Easter Egg! 🥚\nAlthough I don't think 'woody' is a Linux command =)\n\nFun fact: This terminal is built with React and TypeScript!";
        },
        date: () => {
            return new Date().toString();
        },
        pwd: () => {
            return "/home/woody";
        },
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();

        // Add command to history if it's not empty and not the same as the last command
        if (
            trimmedCmd &&
            (commandHistory.length === 0 ||
                commandHistory[commandHistory.length - 1] !== trimmedCmd)
        ) {
            setCommandHistory((prev) => [...prev, trimmedCmd]);
        }

        // Reset history index
        setHistoryIndex(-1);

        // Remove the current prompt and add the command to history
        const historyWithoutPrompt = history.slice(0, -1);
        const newHistory = [
            ...historyWithoutPrompt,
            { type: "input", content: `woody@MacBook-Pro:~$ ${cmd}` },
        ];

        if (trimmedCmd === "") {
            setHistory([
                ...newHistory,
                { type: "prompt", content: "woody@MacBook-Pro:~$ " },
            ]);
            return;
        }

        // Parse command and arguments
        const parts = trimmedCmd.split(/\s+/);
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (commands[command]) {
            const result = commands[command](args);
            if (result !== null) {
                // Check if the result is an error message
                if (result.startsWith("Error: ")) {
                    newHistory.push({
                        type: "error",
                        content: result.substring(7),
                    });
                } else {
                    newHistory.push({ type: "output", content: result });
                }
            }
        } else if (restrictedCommands.includes(command)) {
            newHistory.push({
                type: "error",
                content: `${command}: permission denied: you don't have permission to execute this command`,
            });
        } else {
            // Check for common command variations
            if (command.startsWith("rm")) {
                newHistory.push({
                    type: "error",
                    content:
                        "rm: permission denied: you don't have permission to remove files",
                });
            } else if (command.startsWith("cd")) {
                newHistory.push({
                    type: "error",
                    content:
                        "cd: permission denied: you don't have permission to change directories",
                });
            } else {
                newHistory.push({
                    type: "error",
                    content: `zsh: command not found: ${command}\nType 'help' for available commands.`,
                });
            }
        }

        if (trimmedCmd !== "clear") {
            newHistory.push({
                type: "prompt",
                content: "woody@MacBook-Pro:~$ ",
            });
        }

        setHistory(newHistory);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input);
            setInput("");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex =
                    historyIndex === -1
                        ? commandHistory.length - 1
                        : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex >= 0) {
                const newIndex = historyIndex + 1;
                if (newIndex >= commandHistory.length) {
                    setHistoryIndex(-1);
                    setInput("");
                } else {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                }
            }
        }
    };

    // Auto-focus input and scroll to bottom
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    // Keep focus on input
    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Handle Live2D widget events
    const handleLive2DLoad = useCallback(() => {
        console.log("Live2D widget loaded and will stay active");
    }, []);

    const handleLive2DError = useCallback((error: Error) => {
        console.error("Live2D widget failed to load:", error);
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
            <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-gray-700 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Circle className="w-3 h-3 fill-red-500 text-red-500" />
                        <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        <Circle className="w-3 h-3 fill-green-500 text-green-500" />
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm font-medium text-center truncate px-2">
                        <span className="hidden sm:inline">
                            Terminal — woody@MacBook-Pro: {currentDirectory}
                        </span>
                        <span className="sm:hidden">Terminal — woody@MBP</span>
                        {widgetLoaded && (
                            <span className="ml-2 text-green-400">
                                [Live2D: ACTIVE]
                            </span>
                        )}
                    </div>
                    <div className="w-16"></div>
                </div>

                {/* Terminal Content */}
                <div
                    ref={terminalRef}
                    className="bg-black text-green-400 font-mono text-sm p-4 h-96 overflow-y-auto cursor-text terminal-scrollbar"
                    onClick={handleTerminalClick}
                >
                    {history.map((item, index) => (
                        <div key={index} className="mb-1">
                            {item.type === "output" && (
                                <div className="whitespace-pre-wrap text-gray-300">
                                    {item.content}
                                </div>
                            )}
                            {item.type === "input" && (
                                <div className="text-green-400">
                                    {item.content}
                                </div>
                            )}
                            {item.type === "error" && (
                                <div className="text-red-400 whitespace-pre-wrap">
                                    {item.content}
                                </div>
                            )}
                            {item.type === "prompt" &&
                                index === history.length - 1 && (
                                    <div className="flex items-center">
                                        <span className="text-green-400 mr-2 flex-shrink-0">
                                            {item.content}
                                        </span>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={input}
                                            onChange={(e) =>
                                                setInput(e.target.value)
                                            }
                                            onKeyDown={handleKeyDown}
                                            className="bg-transparent border-none outline-none flex-1 text-white caret-green-400 min-w-0"
                                            autoComplete="off"
                                            spellCheck="false"
                                        />
                                        <span className="text-green-400 animate-pulse ml-1">
                                            █
                                        </span>
                                    </div>
                                )}
                            {item.type === "prompt" &&
                                index !== history.length - 1 && (
                                    <div className="text-green-400">
                                        {item.content}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>

                {/* Terminal Footer Info */}
                <div className="bg-gray-700 px-4 py-2 text-xs text-gray-400 flex justify-between">
                    <span>Press Enter to execute commands</span>
                    <span>Type &apos;help&apos; for available commands</span>
                </div>
            </div>

            {/* Live2D Widget - loads once and stays active */}
            {widgetLoaded && (
                <Live2DWidgetLoader
                    onLoad={handleLive2DLoad}
                    onError={handleLive2DError}
                />
            )}
        </>
    );
}

// Simple widget loader - loads once and stays active
function Live2DWidgetLoader({
    onLoad,
    onError,
}: {
    onLoad: () => void;
    onError: (error: Error) => void;
}) {
    const [Widget, setWidget] = useState<React.ComponentType<{
        onLoad: () => void;
        onError: (error: Error) => void;
    }> | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load the widget once
        import("@/components/widgets/Live2DWidget")
            .then((module) => {
                setWidget(() => module.default);
                setIsLoading(false);
                onLoad();
            })
            .catch((error) => {
                console.error("Failed to load Live2D widget:", error);
                setIsLoading(false);
                onError(error);
            });
    }, [onLoad, onError]);

    if (isLoading) {
        return (
            <div className="fixed bottom-4 left-4 bg-blue-500 text-white px-3 py-2 rounded text-sm z-40">
                Loading Live2D widget...
            </div>
        );
    }

    if (!Widget) {
        return (
            <div className="fixed bottom-4 left-4 bg-red-500 text-white px-3 py-2 rounded text-sm z-40">
                Failed to load Live2D widget
            </div>
        );
    }

    return <Widget onLoad={onLoad} onError={onError} />;
}
