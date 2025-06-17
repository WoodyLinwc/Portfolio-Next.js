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
        name: "Nikon ℤ63",
        brand: "Nikon",
        model: "ℤ63",
        specs: [
            "24.5MP partially stacked CMOS sensor",
            "EXPEED 7 processor",
            "6K/60p internal RAW recording",
            "Full HD/240p video recording for slow-motion",
            "Advanced subject detection with 9 subject types",
            "760g weight",
        ],
        description:
            "My primary camera body for both photography and videography. Excellent low-light performance and reliable autofocus system.",
        image: "/images/camera/nikon_z63.jpg",
        purchaseYear: 2025,
        favorite: true,
    },
    {
        id: "2",
        name: "Fujifilm X-T50",
        brand: "Fujifilm",
        model: "X-T50",
        specs: [
            "40.2MP APS-C X-Trans CMOS 5 HR sensor",
            "X-Processor 5",
            "Film Simulation",
            "6.2K video recording",
            "Full HD/240p video recording for slow-motion",
            "Built-in flash",
            "438g weight",
        ],
        description: "My go-to camera for portrait!",
        image: "/images/camera/fujifilm_xt50.jpg",
        purchaseYear: 2025,
        favorite: true,
    },
    {
        id: "3",
        name: "Leica Typ 701",
        brand: "Leica",
        model: "Typ 701",
        specs: [
            "16.2MP APS-C CMOS sensor",
            "3.7-inch touchscreen LCD",
            "Built-in flash",
            "Made in Germany",
            "339g weight",
        ],
        description:
            "I love the camera design, the body is crafted from a single block of aluminum!",
        image: "/images/camera/leica_typ701.jpg",
        purchaseYear: 2023,
        favorite: false,
    },
    {
        id: "4",
        name: "Nikon FM2",
        brand: "Nikon",
        model: "FM2",
        specs: [
            "135 film (35mm) SLR camera",
            "Nikon F mount",
            "12-6400 ISO range",
            "1s-1/4000s shutter speed",
            "540g weight",
        ],
        description:
            "In production from 1982-2001, this camera is one the most reliable film cameras. (I play DSLR camera more)",
        image: "/images/camera/nikon_fm2.webp",
        purchaseYear: 2023,
        favorite: false,
    },
    {
        id: "10",
        name: "Nikon D5600",
        brand: "Nikon",
        model: "D5600",
        specs: [
            "24.2 MP DX-format CMOS sensor",
            "EXPEED 4 processor",
            "3.2 inch fully articulating touchscreen LCD with 1.04M dots",
            "5.0 fps continuous shooting",
            "465g weight",
        ],
        description:
            "My first SLR camera! (I later switched to mirrorless full-frame camera, Nikon ℤ5, for better image quality)",
        image: "/images/camera/nikon_d5600.jpg",
        purchaseYear: 2021,
        favorite: false,
    },

    // Add more cameras here as needed
];
