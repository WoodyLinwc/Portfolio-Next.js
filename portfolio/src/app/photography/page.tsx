// app/photography/page.tsx
import { seoConfig } from "@/lib/seo";
import PhotographyClient from "./PhotographyClient";
import DisqusComments from "@/components/widgets/DisqusComments";

export const metadata = seoConfig.photography;

export default function PhotographyPage() {
    return (
        <>
            <PhotographyClient />;{/* Comments Section */}
            <DisqusComments
                url="https://woody-lin-personal.vercel.app/photography"
                identifier="photo-section"
                title="Photography Gallery"
                shortname="https-woody-lin-personal-vercel-app-photography"
            />
        </>
    );
}
