import SectionTitle from "@/components/SectionTitle";
import WeatherWidget from "@/components/WeatherWidget";

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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32007.09388043201!2d-71.05258038933074!3d42.33842665666138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1677377310859!5m2!1sen!2sus"
                            className="border-0 w-full max-w-4xl h-96 lg:h-[550px] rounded-lg shadow-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Boston Work Area Map"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
