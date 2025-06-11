export default function Location() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative flex items-center justify-center mb-16">
                    <h1 className="text-8xl lg:text-9xl font-bold text-gray-100 uppercase tracking-wider">
                        Location
                    </h1>
                    <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                        Work Area
                    </h1>
                </div>
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
    );
}
