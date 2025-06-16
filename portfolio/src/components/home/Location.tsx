import SectionTitle from "@/components/SectionTitle";
import WeatherWidget from "@/components/widgets/WeatherWidget";
import { personalInfo } from "@/data/me/personal";

export default function Location() {
    return (
        <>
            <SectionTitle
                backgroundText="Location"
                foregroundText="Work Area"
            />

            <section>
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Weather Widget */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <WeatherWidget />
                    </div>
                    {/* Map */}
                    <div className="flex justify-center">
                        <iframe
                            src={personalInfo.locationData.mapEmbedUrl}
                            className="border-0 w-full max-w-4xl h-96 lg:h-[550px] rounded-lg shadow-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${personalInfo.location} Work Area Map`}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
