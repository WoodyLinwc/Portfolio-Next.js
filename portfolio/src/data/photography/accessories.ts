export interface Accessory {
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

export const accessories: Accessory[] = [
    {
        id: "13",
        name: "Friday",
        brand: "Domestic Shorthair, Moggy",
        model: "Black & White 🐄",
        specs: [
            "Dual 8mm biological wide-angle eyes",
            "Organic fur-polymer blend with whisker sensors",
            "f0.95 perfect low-light performance",
            "Fast and reactive autofocus, especially on moving objects",
            "Solar-rechargeable through naps in sunny windows",
            "Weight: still growing~",
        ],
        description:
            "Self-cleaning, self-willed, and sometimes self-destructive, this is not just a camera – it’s a living surveillance unit powered by naps and chaos.",
        image: "/images/camera/my_cat_friday.jpeg",
        purchaseYear: 2024,
        favorite: true,
    },
    {
        id: "14",
        name: "MEDALight F1 mini camera flash",
        brand: "MEDALight",
        model: "F1 mini",
        specs: [
            "Hot shoe mount",
            "28g weight",
            "4 adjustable options: full power, 1/2, 1/4, and 1/8 ",
            "Come with diffuser",
            "Rechargeable via USB-C cable",
        ],
        description:
            "A lightweight compact flash light that I used often with Fujifilm X-T50.",
        image: "/images/camera/medalight_f1_flashlight.jpg",
        purchaseYear: 2024,
    },
    {
        id: "15",
        name: "ongnuo YN560 IV Speedlite",
        brand: "Peak Design",
        model: "Slide Lite",
        specs: [
            "Hot shoe mount",
            "24-105mm zoom range",
            "350g weight without batteries",
            "Built-in bounce card and diffuser",
            "Guide Number: 190' / 58m at ISO 100 (105mm)",
        ],
        description:
            "Overall, a entry-level flashlight for DSLRs. I wish it came with TTL, the auto setting for flash.",
        image: "/images/camera/yn_560iv_flashlight.jpg",
        purchaseYear: 2023,
    },
    // Add more accessories as needed
];
