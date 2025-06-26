import { seoConfig } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Location from "@/components/home/Location";

export const metadata = seoConfig.home;

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Location />
        </>
    );
}
