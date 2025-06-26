// app/photography/page.tsx
import { seoConfig } from "@/lib/seo";
import PhotographyClient from "./PhotographyClient";

export const metadata = seoConfig.photography;

export default function PhotographyPage() {
    return <PhotographyClient />;
}
