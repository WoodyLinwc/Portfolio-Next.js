import { useState } from "react";

export function useTerminalHistory() {
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const addCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();
        // Add command to history if it's not empty and not the same as the last command
        if (
            trimmedCmd &&
            (commandHistory.length === 0 ||
                commandHistory[commandHistory.length - 1] !== trimmedCmd)
        ) {
            setCommandHistory((prev) => [...prev, trimmedCmd]);
        }
        // Reset history index after adding command
        setHistoryIndex(-1);
    };

    const navigateHistory = (direction: "up" | "down"): string => {
        if (direction === "up" && commandHistory.length > 0) {
            const newIndex =
                historyIndex === -1
                    ? commandHistory.length - 1
                    : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            return commandHistory[newIndex];
        } else if (direction === "down" && historyIndex >= 0) {
            const newIndex = historyIndex + 1;
            if (newIndex >= commandHistory.length) {
                setHistoryIndex(-1);
                return "";
            } else {
                setHistoryIndex(newIndex);
                return commandHistory[newIndex];
            }
        }
        return "";
    };

    const clearHistory = () => {
        setCommandHistory([]);
        setHistoryIndex(-1);
    };

    return {
        commandHistory,
        addCommand,
        navigateHistory,
        clearHistory,
        currentHistoryIndex: historyIndex,
    };
}
