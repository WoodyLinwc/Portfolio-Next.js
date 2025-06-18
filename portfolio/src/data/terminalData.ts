export const restrictedCommands = [
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

export const pages = [
    "Home",
    "About",
    "Projects & Experience",
    "Productivity",
    "Photography",
    "Learning",
    "Blog",
];

export const pageDescriptions: { [key: string]: string } = {
    home: "Welcome page with hero section and introduction",
    about: "Information about Woody Lin - education, skills, and experience",
    projects: "Showcase of projects and professional experience",
    productivity: "Collection of essential development and productivity tools",
    photography: "Photo gallery and camera gear showcase",
    learning: "Interactive terminal and learning resources",
    blog: "Personal blog and articles",
};

// Type definition for terminal history items
export interface TerminalHistoryItem {
    type: "output" | "input" | "error" | "prompt";
    content: string;
}

export const initialHistory: TerminalHistoryItem[] = [
    {
        type: "output",
        content: "Last login: " + new Date().toLocaleString() + " on ttys000",
    },
    { type: "output", content: "Welcome to Woody's Terminal!" },
    { type: "prompt", content: "woody@MacBook-Pro:~$ " },
];

// Terminal configuration constants
export const TERMINAL_CONFIG = {
    prompt: "woody@MacBook-Pro:~$ ",
    currentDirectory: "~",
    welcomeMessage: "Welcome to Woody's Terminal!",
} as const;
