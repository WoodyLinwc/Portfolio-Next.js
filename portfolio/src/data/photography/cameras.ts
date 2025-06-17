export interface Camera {
    id: string;
    name: string;
    brand: string;
    model: string;
    specs: string[];
    description: string;
    image: string;
    purchaseYear?: number;
    favorite?: boolean;
}

export const cameras: Camera[] = [
    {
        id: "1",
        name: "Canon EOS R6",
        brand: "Canon",
        model: "EOS R6",
        specs: [
            "20.1MP Full-Frame CMOS Sensor",
            "DIGIC X Image Processor",
            "4K UHD Video Recording",
            "In-Body Image Stabilization",
            "Dual Pixel CMOS AF II",
        ],
        description:
            "My primary camera body for both photography and videography. Excellent low-light performance and reliable autofocus system.",
        image: "/images/gear/canon-r6.jpg",
        purchaseYear: 2021,
        favorite: true,
    },
    // Add more cameras here as needed
];
