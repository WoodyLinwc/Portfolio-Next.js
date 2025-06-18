import {
    pages,
    pageDescriptions,
    restrictedCommands,
    initialHistory,
    TerminalHistoryItem,
} from "@/data/terminalData";

export type CommandFunction = (args?: string[]) => string | null;

export function createCommands(
    setHistory: React.Dispatch<React.SetStateAction<TerminalHistoryItem[]>>,
    widgetLoaded: boolean,
    setWidgetLoaded: React.Dispatch<React.SetStateAction<boolean>>
): { [key: string]: CommandFunction } {
    return {
        ls: () => {
            return pages.join("  ");
        },

        help: () => {
            return "Available commands:\n  ls        - list all pages\n  clear     - clear terminal\n  help      - show this help message\n  whoami    - display current user\n  cat       - display page description\n  cd        - change directory (restricted)\n  echo      - prints text to terminal\n  rm        - remove files (restricted)\n  widget    - load Live2D widget";
        },

        clear: () => {
            // Add a small delay to show the refreshing effect
            setTimeout(() => {
                setHistory(initialHistory);
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
}

export function handleUnknownCommand(command: string): TerminalHistoryItem {
    if (restrictedCommands.includes(command)) {
        return {
            type: "error",
            content: `${command}: permission denied: you don't have permission to execute this command`,
        };
    }

    // Check for common command variations
    if (command.startsWith("rm")) {
        return {
            type: "error",
            content:
                "rm: permission denied: you don't have permission to remove files",
        };
    }

    if (command.startsWith("cd")) {
        return {
            type: "error",
            content:
                "cd: permission denied: you don't have permission to change directories",
        };
    }

    return {
        type: "error",
        content: `zsh: command not found: ${command}\nType 'help' for available commands.`,
    };
}

export function parseCommand(input: string): {
    command: string;
    args: string[];
} {
    const parts = input.trim().split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    return { command, args };
}
