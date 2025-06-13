export interface Photo {
    src: string;
    category: "bw" | "travel" | "event" | "night" | "photojournalism";
    alt: string;
    date?: string; // When the photo was taken
    location?: string; // Where it was taken
    camera?: string; // Camera/equipment used
    featured?: boolean; // Mark as featured
    tags?: string[]; // Additional tags
}

export const photos: Photo[] = [
    // B&W Photos (from B&W.txt)
    {
        src: "/images/album/B&W/distant_island-min.JPG",
        category: "bw",
        alt: "Distant island black and white",
    },
    {
        src: "/images/album/B&W/trunk_beach-min.JPG",
        category: "bw",
        alt: "Trunk beach black and white",
    },
    {
        src: "/images/album/B&W/cloud_mountain-min.JPG",
        category: "bw",
        alt: "Cloud mountain black and white",
    },
    {
        src: "/images/album/B&W/museum_reflection-min.JPG",
        category: "bw",
        alt: "Museum reflection black and white",
    },
    {
        src: "/images/album/B&W/whip_men-min.JPG",
        category: "bw",
        alt: "Whip men black and white",
    },
    {
        src: "/images/album/B&W/wheel_museum-min.JPG",
        category: "bw",
        alt: "Wheel museum black and white",
    },
    {
        src: "/images/album/B&W/old_man-min.JPG",
        category: "bw",
        alt: "Old man black and white",
    },
    {
        src: "/images/album/B&W/museum_statue-min.jpg",
        category: "bw",
        alt: "Museum statue black and white",
    },
    {
        src: "/images/album/B&W/nine_grid-min.JPG",
        category: "bw",
        alt: "Nine grid black and white",
    },
    {
        src: "/images/album/B&W/museum_view-min.JPG",
        category: "bw",
        alt: "Museum view black and white",
    },
    {
        src: "/images/album/B&W/museum_exposure-min.JPG",
        category: "bw",
        alt: "Museum exposure black and white",
    },
    {
        src: "/images/album/B&W/couple_dog-min.JPG",
        category: "bw",
        alt: "Couple dog black and white",
    },
    {
        src: "/images/album/B&W/island_walk-min.JPG",
        category: "bw",
        alt: "Island walk black and white",
    },
    {
        src: "/images/album/B&W/island_boat-min.JPG",
        category: "bw",
        alt: "Island boat black and white",
    },
    {
        src: "/images/album/B&W/side_look-min.JPG",
        category: "bw",
        alt: "Side look black and white",
    },
    {
        src: "/images/album/B&W/waiting_train-min.JPG",
        category: "bw",
        alt: "Waiting train black and white",
    },
    {
        src: "/images/album/B&W/glass_man-min.JPG",
        category: "bw",
        alt: "Glass man black and white",
    },
    {
        src: "/images/album/B&W/beach_kid-min.JPG",
        category: "bw",
        alt: "Beach kid black and white",
    },
    {
        src: "/images/album/B&W/museum_shadow-min.jpg",
        category: "bw",
        alt: "Museum shadow black and white",
    },
    {
        src: "/images/album/B&W/museum_glass-min.JPG",
        category: "bw",
        alt: "Museum glass black and white",
    },
    {
        src: "/images/album/B&W/island_bird-min.JPG",
        category: "bw",
        alt: "Island bird black and white",
    },
    {
        src: "/images/album/B&W/train_smoke-min.jpg",
        category: "bw",
        alt: "Train smoke black and white",
    },

    // Event Photos (from Event.txt)
    {
        src: "/images/album/Event/boat_jialong-min.JPG",
        category: "event",
        alt: "Boat Jialong event",
    },
    {
        src: "/images/album/Event/ab_glasses-min.JPG",
        category: "event",
        alt: "AB glasses event",
    },
    {
        src: "/images/album/Event/ab_maid2-min.JPG",
        category: "event",
        alt: "AB maid 2 event",
    },
    {
        src: "/images/album/Event/cos_three-min.PNG",
        category: "event",
        alt: "Cos three event",
    },
    {
        src: "/images/album/Event/hanfu_tree-min.JPG",
        category: "event",
        alt: "Hanfu tree event",
    },
    {
        src: "/images/album/Event/hanfu_man-min.JPG",
        category: "event",
        alt: "Hanfu man event",
    },
    {
        src: "/images/album/Event/ab_couple-min.JPG",
        category: "event",
        alt: "AB couple event",
    },
    {
        src: "/images/album/Event/kpop_piano-min.JPG",
        category: "event",
        alt: "Kpop piano event",
    },
    {
        src: "/images/album/Event/hanfu_xinyu-min.JPG",
        category: "event",
        alt: "Hanfu Xinyu event",
    },
    {
        src: "/images/album/Event/ab_maid-min.JPG",
        category: "event",
        alt: "AB maid event",
    },
    {
        src: "/images/album/Event/hanfu_aidi-min.JPG",
        category: "event",
        alt: "Hanfu Aidi event",
    },
    {
        src: "/images/album/Event/hanfu_couple-min.JPG",
        category: "event",
        alt: "Hanfu couple event",
    },
    {
        src: "/images/album/Event/hanfu_pink-min.JPG",
        category: "event",
        alt: "Hanfu pink event",
    },
    {
        src: "/images/album/Event/kpop_hands-min.JPG",
        category: "event",
        alt: "Kpop hands event",
    },
    {
        src: "/images/album/Event/xinyu_katie-min.JPG",
        category: "event",
        alt: "Xinyu Katie event",
    },

    // Night Photos (from Night.txt)
    {
        src: "/images/album/Night/men_kiss2-min.JPG",
        category: "night",
        alt: "Men kiss 2 night",
    },
    {
        src: "/images/album/Night/night_sky-min.JPG",
        category: "night",
        alt: "Night sky",
    },
    {
        src: "/images/album/Night/foodtruck_girl-min.jpg",
        category: "night",
        alt: "Food truck girl night",
    },
    {
        src: "/images/album/Night/night_boat-min.JPG",
        category: "night",
        alt: "Night boat",
    },
    {
        src: "/images/album/Night/men_kiss-min.JPG",
        category: "night",
        alt: "Men kiss night",
    },
    {
        src: "/images/album/Night/night_sky3-min.JPG",
        category: "night",
        alt: "Night sky 3",
    },
    {
        src: "/images/album/Night/night_sky2-min.JPG",
        category: "night",
        alt: "Night sky 2",
    },
    {
        src: "/images/album/Night/night_shadow-min.JPG",
        category: "night",
        alt: "Night shadow",
    },

    // Photojournalism Photos (from Photojournalism.txt)
    {
        src: "/images/album/Photojournalism/museum_bold-min.JPG",
        category: "photojournalism",
        alt: "Museum bold photojournalism",
    },
    {
        src: "/images/album/Photojournalism/museum_girl-min.JPG",
        category: "photojournalism",
        alt: "Museum girl photojournalism",
    },
    {
        src: "/images/album/Photojournalism/protest_sign-min.JPG",
        category: "photojournalism",
        alt: "Protest sign photojournalism",
    },
    {
        src: "/images/album/Photojournalism/museum_back-min.JPG",
        category: "photojournalism",
        alt: "Museum back photojournalism",
    },
    {
        src: "/images/album/Photojournalism/museum_three-min.JPG",
        category: "photojournalism",
        alt: "Museum three photojournalism",
    },
    {
        src: "/images/album/Photojournalism/god_talking-min.jpg",
        category: "photojournalism",
        alt: "God talking photojournalism",
    },
    {
        src: "/images/album/Photojournalism/protest_man-min.JPG",
        category: "photojournalism",
        alt: "Protest man photojournalism",
    },
    {
        src: "/images/album/Photojournalism/blue_bike-min.jpg",
        category: "photojournalism",
        alt: "Blue bike photojournalism",
    },
    {
        src: "/images/album/Photojournalism/museum_criminal-min.JPG",
        category: "photojournalism",
        alt: "Museum criminal photojournalism",
    },
    {
        src: "/images/album/Photojournalism/protest_flag-min.JPG",
        category: "photojournalism",
        alt: "Protest flag photojournalism",
    },

    // Travel Photos (from Travel.txt)
    {
        src: "/images/album/Travel/moon_shadow-min.JPG",
        category: "travel",
        alt: "Moon shadow travel",
    },
    {
        src: "/images/album/Travel/seaport_women-min.JPG",
        category: "travel",
        alt: "Seaport women travel",
    },
    {
        src: "/images/album/Travel/father_love-min.JPG",
        category: "travel",
        alt: "Father love travel",
    },
    {
        src: "/images/album/Travel/square_walk-min.JPG",
        category: "travel",
        alt: "Square walk travel",
    },
    {
        src: "/images/album/Travel/seaport_family-min.JPG",
        category: "travel",
        alt: "Seaport family travel",
    },
    {
        src: "/images/album/Travel/concert_man-min.JPG",
        category: "travel",
        alt: "Concert man travel",
    },
    {
        src: "/images/album/Travel/concert_photographer-min.JPG",
        category: "travel",
        alt: "Concert photographer travel",
    },
    {
        src: "/images/album/Travel/canon_staff-min.JPG",
        category: "travel",
        alt: "Canon staff travel",
    },
    {
        src: "/images/album/Travel/winter_dusk-min.JPG",
        category: "travel",
        alt: "Winter dusk travel",
    },
    {
        src: "/images/album/Travel/night_beach-min.JPG",
        category: "travel",
        alt: "Night beach travel",
    },
    {
        src: "/images/album/Travel/taxi_woman-min.JPG",
        category: "travel",
        alt: "Taxi woman travel",
    },
    {
        src: "/images/album/Travel/walk_shadow-min.JPG",
        category: "travel",
        alt: "Walk shadow travel",
    },
    {
        src: "/images/album/Travel/seaport_couple-min.JPG",
        category: "travel",
        alt: "Seaport couple travel",
    },
    {
        src: "/images/album/Travel/airport_kid-min.JPG",
        category: "travel",
        alt: "Airport kid travel",
    },
    {
        src: "/images/album/Travel/train_couple-min.jpg",
        category: "travel",
        alt: "Train couple travel",
    },
    {
        src: "/images/album/Travel/boat_starring-min.JPG",
        category: "travel",
        alt: "Boat starring travel",
    },
    {
        src: "/images/album/Travel/park_concert-min.JPG",
        category: "travel",
        alt: "Park concert travel",
    },
    {
        src: "/images/album/Travel/cloud_shadow-min.JPG",
        category: "travel",
        alt: "Cloud shadow travel",
    },
    {
        src: "/images/album/Travel/back_hands-min.JPG",
        category: "travel",
        alt: "Back hands travel",
    },
    {
        src: "/images/album/Travel/island_window-min.JPG",
        category: "travel",
        alt: "Island window travel",
    },
    {
        src: "/images/album/Travel/sailing_view-min.JPG",
        category: "travel",
        alt: "Sailing view travel",
    },
    {
        src: "/images/album/Travel/reflection_walk-min.JPG",
        category: "travel",
        alt: "Reflection walk travel",
    },
    {
        src: "/images/album/Travel/moon_light-min.JPG",
        category: "travel",
        alt: "Moon light travel",
    },
    {
        src: "/images/album/Travel/traine_outside-min.JPG",
        category: "travel",
        alt: "Traine outside travel",
    },
    {
        src: "/images/album/Travel/city_hole-min.JPG",
        category: "travel",
        alt: "City hole travel",
    },
];

// Updated filter configurations
export const filterOptions = [
    { key: "all", label: "All" },
    { key: "bw", label: "B&W" },
    { key: "travel", label: "Travel" },
    { key: "event", label: "Event" },
    { key: "night", label: "Night" },
    { key: "photojournalism", label: "Photojournalism" },
] as const;
