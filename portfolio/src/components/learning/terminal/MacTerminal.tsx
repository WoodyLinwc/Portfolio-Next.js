"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Circle } from "lucide-react";
import {
    initialHistory,
    TERMINAL_CONFIG,
    TerminalHistoryItem,
} from "@/data/terminalData";
import { useTerminalHistory } from "@/hooks/useTerminalHistory";
import {
    createCommands,
    handleUnknownCommand,
    parseCommand,
} from "@/components/learning/terminal/TerminalCommands";

export default function MacTerminal() {
    const [input, setInput] = useState("");
    const [widgetLoaded, setWidgetLoaded] = useState(false);
    const [history, setHistory] =
        useState<TerminalHistoryItem[]>(initialHistory);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const { addCommand, navigateHistory } = useTerminalHistory();
    const commands = createCommands(setHistory, widgetLoaded, setWidgetLoaded);

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

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();

        // Add command to history
        addCommand(cmd);

        // Remove the current prompt and add the command to history
        const historyWithoutPrompt = history.slice(0, -1);
        const newHistory: TerminalHistoryItem[] = [
            ...historyWithoutPrompt,
            { type: "input", content: `${TERMINAL_CONFIG.prompt}${cmd}` },
        ];

        if (trimmedCmd === "") {
            setHistory([
                ...newHistory,
                { type: "prompt", content: TERMINAL_CONFIG.prompt },
            ]);
            return;
        }

        // Parse command and arguments
        const { command, args } = parseCommand(trimmedCmd);

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
        } else {
            const errorItem = handleUnknownCommand(command);
            newHistory.push(errorItem);
        }

        if (trimmedCmd !== "clear") {
            newHistory.push({
                type: "prompt",
                content: TERMINAL_CONFIG.prompt,
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
            const prevCommand = navigateHistory("up");
            if (prevCommand) {
                setInput(prevCommand);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const nextCommand = navigateHistory("down");
            setInput(nextCommand);
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
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
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
                                Terminal — woody@MacBook-Pro:{" "}
                                {TERMINAL_CONFIG.currentDirectory}
                            </span>
                            <span className="sm:hidden">
                                Terminal — woody@MBP
                            </span>
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
                        <span>
                            Type &apos;help&apos; for available commands
                        </span>
                    </div>
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
