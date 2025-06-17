"use client";

import { useState, useEffect, useRef } from "react";
import { Circle } from "lucide-react";

export default function MacTerminal() {
    const [input, setInput] = useState("");
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
        "home",
        "about",
        "projects",
        "photography",
        "tools",
        "games",
        "blog",
        "moyu",
        "learning",
    ];

    const commands: { [key: string]: () => string | null } = {
        ls: () => {
            return pages.join("  ");
        },
        help: () => {
            return "Available commands:\n  ls        - list all pages\n  clear     - clear terminal\n  help      - show this help message\n  whoami    - display current user";
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
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

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

        if (commands[trimmedCmd]) {
            const result = commands[trimmedCmd]();
            if (result !== null) {
                newHistory.push({ type: "output", content: result });
            }
        } else {
            newHistory.push({
                type: "error",
                content: `zsh: command not found: ${trimmedCmd}\nType 'help' for available commands.`,
            });
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
        </>
    );
}
