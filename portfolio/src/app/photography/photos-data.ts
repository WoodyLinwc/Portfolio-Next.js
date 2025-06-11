export interface Photo {
    src: string;
    category: "night" | "travel" | "street" | "animal" | "event";
    alt: string;
    date?: string; // When the photo was taken
    location?: string; // Where it was taken
    camera?: string; // Camera/equipment used
    featured?: boolean; // Mark as featured
    tags?: string[]; // Additional tags
}

export const photos: Photo[] = [
    {
        src: "/images/album/shadow-min.JPG",
        category: "night",
        alt: "Shadow night photography",
    },
    {
        src: "/images/album/comparision-min.jpg",
        category: "night",
        alt: "Comparison night shot",
    },
    {
        src: "/images/album/taxi-min.JPG",
        category: "travel",
        alt: "Taxi travel photography",
    },
    {
        src: "/images/album/mirror-min.JPG",
        category: "street",
        alt: "Mirror street photography",
    },
    {
        src: "/images/album/bike-min.JPG",
        category: "street",
        alt: "Bike street scene",
    },
    {
        src: "/images/album/three-min.JPG",
        category: "street",
        alt: "Three people street",
    },
    {
        src: "/images/album/train-min.JPG",
        category: "travel",
        alt: "Train travel",
    },
    {
        src: "/images/album/starring-min.JPG",
        category: "travel",
        alt: "Starring travel shot",
    },
    {
        src: "/images/album/handsome-min.JPG",
        category: "event",
        alt: "Event photography",
    },
    {
        src: "/images/album/summervibe-min.JPG",
        category: "street",
        alt: "Summer vibe street",
    },
    {
        src: "/images/album/god-min.JPG",
        category: "event",
        alt: "Event photography",
    },
    {
        src: "/images/album/descending-min.JPG",
        category: "event",
        alt: "Descending event",
    },
    {
        src: "/images/album/hog-min.JPG",
        category: "animal",
        alt: "Animal photography",
    },
    {
        src: "/images/album/dual-min.JPG",
        category: "night",
        alt: "Dual night shot",
    },
    {
        src: "/images/album/fatherlove-min.JPG",
        category: "street",
        alt: "Father love street",
    },
    {
        src: "/images/album/selling-min.JPG",
        category: "event",
        alt: "Selling event",
    },
    {
        src: "/images/album/sparow-min.jpg",
        category: "animal",
        alt: "Sparrow animal",
    },
    {
        src: "/images/album/handsup-min.JPG",
        category: "event",
        alt: "Hands up event",
    },
    {
        src: "/images/album/kiss1-min.JPG",
        category: "night",
        alt: "Kiss night 1",
    },
    {
        src: "/images/album/kiss2-min.JPG",
        category: "night",
        alt: "Kiss night 2",
    },
    {
        src: "/images/album/lightwave-min.JPG",
        category: "event",
        alt: "Light wave event",
    },
    {
        src: "/images/album/maid-min.JPG",
        category: "event",
        alt: "Maid event",
    },
    {
        src: "/images/album/piano-min.JPG",
        category: "event",
        alt: "Piano event",
    },
    {
        src: "/images/album/shine-min.JPG",
        category: "travel",
        alt: "Shine travel",
    },
    {
        src: "/images/album/window-min.JPG",
        category: "travel",
        alt: "Window travel",
    },
    {
        src: "/images/album/walking-min.JPG",
        category: "street",
        alt: "Walking street",
    },
    {
        src: "/images/album/sunset-min.JPG",
        category: "street",
        alt: "Sunset street",
    },
    {
        src: "/images/album/cannon-min.JPG",
        category: "travel",
        alt: "Cannon travel",
    },
    {
        src: "/images/album/crane-min.JPG",
        category: "animal",
        alt: "Crane animal",
    },
    {
        src: "/images/album/capture-min.JPG",
        category: "night",
        alt: "Capture night",
    },
];

// You can also export filter configurations if needed
export const filterOptions = [
    { key: "all", label: "All" },
    { key: "night", label: "Night" },
    { key: "travel", label: "Travel" },
    { key: "street", label: "Street" },
    { key: "animal", label: "Animal" },
    { key: "event", label: "Event" },
] as const;
