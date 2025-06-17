export interface Lens {
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

export const lenses: Lens[] = [
    {
        id: "2",
        name: "Canon RF 24-70mm f/2.8L IS USM",
        brand: "Canon",
        model: "RF 24-70mm f/2.8L IS USM",
        specs: [
            "24-70mm focal length",
            "f/2.8 constant aperture",
            "Image Stabilization",
            "Weather sealing",
            "USM autofocus motor",
        ],
        description:
            "My go-to lens for portraits, events, and general photography. Sharp across the entire zoom range with beautiful bokeh.",
        image: "/images/gear/rf-24-70.jpg",
        purchaseYear: 2021,
        favorite: true,
    },
    {
        id: "3",
        name: "Canon RF 85mm f/1.2L USM",
        brand: "Canon",
        model: "RF 85mm f/1.2L USM",
        specs: [
            "85mm focal length",
            "f/1.2 maximum aperture",
            "L-series build quality",
            "Blue Spectrum Refractive Optics",
            "Ring USM autofocus",
        ],
        description:
            "Perfect for portrait photography with incredible shallow depth of field and stunning image quality.",
        image: "/images/gear/rf-85mm.jpg",
        purchaseYear: 2022,
    },
    {
        id: "4",
        name: "Canon RF 16-35mm f/2.8L IS USM",
        brand: "Canon",
        model: "RF 16-35mm f/2.8L IS USM",
        specs: [
            "16-35mm focal length",
            "f/2.8 constant aperture",
            "Image Stabilization",
            "Ultra-wide angle coverage",
            "Weather resistant",
        ],
        description:
            "Essential for landscape photography and architectural shots. Great for capturing wide scenes and environmental portraits.",
        image: "/images/gear/rf-16-35.jpg",
        purchaseYear: 2022,
    },
    {
        id: "5",
        name: "Canon RF 70-200mm f/2.8L IS USM",
        brand: "Canon",
        model: "RF 70-200mm f/2.8L IS USM",
        specs: [
            "70-200mm focal length",
            "f/2.8 constant aperture",
            "5-stop Image Stabilization",
            "Compact telephoto design",
            "Professional build quality",
        ],
        description:
            "Perfect for sports, wildlife, and event photography. Excellent compression and subject isolation capabilities.",
        image: "/images/gear/rf-70-200.jpg",
        purchaseYear: 2023,
    },
];
