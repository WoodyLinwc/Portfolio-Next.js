export default function Footer() {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/woody-lin-32ab48161/",
            icon: "fab fa-linkedin-in",
        },
        { href: "https://github.com/WoodyLinwc", icon: "fab fa-github" },
        { href: "https://gitlab.com/WoodyLinwc", icon: "fab fa-gitlab" },
        {
            href: "http://discordapp.com/users/Until_Dawn#0751",
            icon: "fab fa-discord",
        },
        {
            href: "https://steamcommunity.com/profiles/76561198373609638/",
            icon: "fab fa-steam",
        },
        {
            href: "https://weibo.com/u/5660627747?is_all=1",
            icon: "fab fa-weibo",
        },
    ];

    return (
        <footer className="bg-primary text-white mt-20 py-1 px-4 md:px-20">
            <div className="container mx-auto text-center py-12">
                <div className="flex justify-center mb-8 space-x-4">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 bg-white text-primary rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>

                <p className="text-sm">
                    &copy;{" "}
                    <a
                        className="text-white font-bold hover:underline"
                        href="https://github.com/WoodyLinwc/WoodyLinwc.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Woody Lin
                    </a>
                    . All Rights Reserved. Designed by{" "}
                    <a
                        className="text-white font-bold hover:underline"
                        href="https://www.youtube.com/@foolishdeveloper"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MysteryCode
                    </a>
                    . Modified by{" "}
                    <a
                        className="text-white font-bold hover:underline"
                        href="https://github.com/WoodyLinwc/WoodyLinwc.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Woody Lin
                    </a>{" "}
                    using Next.js.
                </p>
            </div>
        </footer>
    );
}
