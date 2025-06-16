import { getSocialLinks, personalInfo } from "@/data/me/personal";

export default function Footer() {
    const socialLinks = getSocialLinks();

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
                            aria-label={link.label}
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>

                <p className="text-sm">
                    &copy;{" "}
                    <a
                        className="text-white font-bold hover:underline"
                        href={personalInfo.links.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {personalInfo.fullName}
                    </a>
                    . {personalInfo.footer.copyright} Designed by{" "}
                    <a
                        className="text-white font-bold hover:underline"
                        href={personalInfo.footer.designCredit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {personalInfo.footer.designCredit.name}
                    </a>
                    . Modified by{" "}
                    <a
                        className="text-white font-bold hover:underline"
                        href={personalInfo.footer.modifiedBy.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {personalInfo.footer.modifiedBy.name}
                    </a>{" "}
                    using Next.js.
                </p>
            </div>
        </footer>
    );
}
