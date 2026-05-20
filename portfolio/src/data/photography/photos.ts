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
  // Travel Photos
  {
    src: "/images/album/Travel/boat_starring-min.JPG",
    category: "travel",
    alt: "Boat starring travel",
  },
  {
    src: "/images/album/Travel/square_walk-min.JPG",
    category: "travel",
    alt: "Square walk travel",
  },
  {
    src: "/images/album/Travel/taxi_woman-min.JPG",
    category: "travel",
    alt: "Taxi woman travel",
  },
  {
    src: "/images/album/Travel/moon_shadow-min.JPG",
    category: "travel",
    alt: "Moon shadow travel",
  },

  {
    src: "/images/album/Travel/family_city-min.JPG",
    category: "travel",
    alt: "Family city travel",
  },
  {
    src: "/images/album/Travel/father_love-min.JPG",
    category: "travel",
    alt: "Father love travel",
  },
  {
    src: "/images/album/Travel/cloud_me-min.JPG",
    category: "travel",
    alt: "Cloud me travel",
  },
  {
    src: "/images/album/Travel/seaport_women-min.JPG",
    category: "travel",
    alt: "Seaport women travel",
  },
  {
    src: "/images/album/Travel/watching_window-min.JPG",
    category: "travel",
    alt: "Watching window travel",
  },
  {
    src: "/images/album/Travel/train_outside-min.JPG",
    category: "travel",
    alt: "Train outside travel",
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
    src: "/images/album/Travel/blue_beach-min.JPG",
    category: "travel",
    alt: "singing beach at manchester-by-the-sea",
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
    src: "/images/album/Travel/park_feeding-min.JPG",
    category: "travel",
    alt: "Man feeding squall",
  },
  {
    src: "/images/album/Travel/night_beach-min.JPG",
    category: "travel",
    alt: "Night beach travel",
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
    src: "/images/album/Travel/stranger_beach-min.JPG",
    category: "travel",
    alt: "George Lane Beach travel",
  },
  {
    src: "/images/album/Travel/zecong_look-min.JPG",
    category: "travel",
    alt: "zecong travel",
  },
  {
    src: "/images/album/Travel/horse_look-min.JPG",
    category: "travel",
    alt: "horse look",
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
    src: "/images/album/Travel/red_behind-min.JPG",
    category: "travel",
    alt: "ICA travel",
  },
  {
    src: "/images/album/Travel/three_men-min.JPG",
    category: "travel",
    alt: "Snow Boston Common",
  },

  {
    src: "/images/album/Travel/back_hands-min.JPG",
    category: "travel",
    alt: "Back hands travel",
  },
  {
    src: "/images/album/Travel/train_girl-min.JPG",
    category: "travel",
    alt: "MBTA girl",
  },
  {
    src: "/images/album/Travel/hat_beach-min.JPG",
    category: "travel",
    alt: "singing beach at manchester-by-the-sea",
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
    src: "/images/album/Travel/side_look-min.JPG",
    category: "travel",
    alt: "Bow Market travel",
  },
  {
    src: "/images/album/Travel/starring_beach-min.JPG",
    category: "travel",
    alt: "George Lane Beach travel",
  },
  {
    src: "/images/album/Travel/warm_smile-min.JPG",
    category: "travel",
    alt: "Bow Market travel",
  },
  {
    src: "/images/album/Travel/hill_person-min.JPG",
    category: "travel",
    alt: "Hill person travel",
  },
  {
    src: "/images/album/Travel/reflection_walk-min.JPG",
    category: "travel",
    alt: "Reflection walk travel",
  },

  // {
  //     src: "/images/album/Travel/moon_light-min.JPG",
  //     category: "travel",
  //     alt: "Moon light travel",
  // },
  {
    src: "/images/album/Travel/city_hole-min.JPG",
    category: "travel",
    alt: "City hole travel",
  },

  // B&W Photos
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
    src: "/images/album/B&W/black_fish-min.JPG",
    category: "bw",
    alt: "Old man fishing",
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
    src: "/images/album/B&W/black_beach-min.JPG",
    category: "bw",
    alt: "George Lane Beach black and white",
  },
  {
    src: "/images/album/B&W/metro-flag-min.JPG",
    category: "bw",
    alt: "A man waiting for train",
  },
  {
    src: "/images/album/B&W/island_boat-min.JPG",
    category: "bw",
    alt: "Island boat black and white",
  },
  {
    src: "/images/album/B&W/island_walk-min.JPG",
    category: "bw",
    alt: "Island walk black and white",
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

  {
    src: "/images/album/B&W/john_cena-min.jpg",
    category: "bw",
    alt: "John Cena Anime Boston",
  },

  // Event Photos
  {
    src: "/images/album/Event/Alexandra1-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Alexandra5-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Alexandra3-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Alexandra2-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Alexandra4-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Alexandra6-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Sophia1-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Sophia2-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Lilian1-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Lilian2-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Jenifer2-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/Jenifer1-min.jpg",
    category: "event",
    alt: "2026 BU graduation",
  },
  {
    src: "/images/album/Event/as1-min.jpg",
    category: "event",
    alt: "Japan Festival",
  },
  {
    src: "/images/album/Event/as2-min.jpg",
    category: "event",
    alt: "Japan Festival",
  },
  {
    src: "/images/album/Event/as3-min.jpg",
    category: "event",
    alt: "Japan Festival",
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
    src: "/images/album/Event/boat_jialong-min.JPG",
    category: "event",
    alt: "Boat Jialong event",
  },
  {
    src: "/images/album/Event/hanfu_pink-min.JPG",
    category: "event",
    alt: "Hanfu pink event",
  },
  {
    src: "/images/album/Event/hanfu_couple-min.JPG",
    category: "event",
    alt: "Hanfu couple event",
  },
  {
    src: "/images/album/Event/hanfu_aidi-min.JPG",
    category: "event",
    alt: "Hanfu Aidi event",
  },
  {
    src: "/images/album/Event/hanfu_man-min.JPG",
    category: "event",
    alt: "Hanfu man event",
  },
  {
    src: "/images/album/Event/girl_turnback-min.JPG",
    category: "event",
    alt: "Girl look back",
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
    src: "/images/album/Event/ab_couple-min.JPG",
    category: "event",
    alt: "AB couple event",
  },
  {
    src: "/images/album/Event/xinyu_katie-min.JPG",
    category: "event",
    alt: "Xinyu Katie event",
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
    src: "/images/album/Event/kpop_hands-min.JPG",
    category: "event",
    alt: "Kpop hands event",
  },
  {
    src: "/images/album/Event/kpop_piano-min.JPG",
    category: "event",
    alt: "Kpop piano event",
  },
  {
    src: "/images/album/Event/close_hu-min.JPG",
    category: "event",
    alt: "close up shot hu",
  },
  {
    src: "/images/album/Event/side_hu-min.JPG",
    category: "event",
    alt: "close up shot hu",
  },
  {
    src: "/images/album/Event/katie_hu-min.JPG",
    category: "event",
    alt: "close up shot katie and hu",
  },
  {
    src: "/images/album/Event/close_hu2-min.JPG",
    category: "event",
    alt: "close up shot hu",
  },
  {
    src: "/images/album/Event/spin_katie-min.JPG",
    category: "event",
    alt: "close up shot katie",
  },
  {
    src: "/images/album/Event/nice_hu-min.JPG",
    category: "event",
    alt: "close up shot hu",
  },

  {
    src: "/images/album/Event/katie_umi-min.JPG",
    category: "event",
    alt: "Katie and Umi",
  },
  {
    src: "/images/album/Event/katie_fuji-min.JPG",
    category: "event",
    alt: "Katie",
  },

  {
    src: "/images/album/Event/ab_starring-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/ding_cos-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/fox_girl-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },

  {
    src: "/images/album/Event/grey_cos-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/grey_cos2-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/lin_cos-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/lin_cos2-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/red_cos-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/red_cos2-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },

  {
    src: "/images/album/Event/serena_dance-min.JPG",
    category: "event",
    alt: "Serena and Stephenie",
  },
  {
    src: "/images/album/Event/girl_team-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/girl_team2-min.JPG",
    category: "event",
    alt: "Anime Boston",
  },
  {
    src: "/images/album/Event/sign_keshi-min.JPG",
    category: "event",
    alt: "keshi concert",
  },
  {
    src: "/images/album/Event/blue_keshi-min.JPG",
    category: "event",
    alt: "keshi concert",
  },

  // Night Photos
  {
    src: "/images/album/Night/night_sky-min.JPG",
    category: "night",
    alt: "Night sky",
  },
  {
    src: "/images/album/Night/night_sky2-min.JPG",
    category: "night",
    alt: "Night sky 2",
  },
  {
    src: "/images/album/Night/night_sky3-min.JPG",
    category: "night",
    alt: "Night sky 3",
  },
  {
    src: "/images/album/Night/men_kiss-min.JPG",
    category: "night",
    alt: "Men kiss night",
  },
  {
    src: "/images/album/Night/men_kiss2-min.JPG",
    category: "night",
    alt: "Men kiss 2 night",
  },
  {
    src: "/images/album/Night/blue_love-min.JPG",
    category: "night",
    alt: "Water lantern night",
  },

  {
    src: "/images/album/Night/night_boat-min.JPG",
    category: "night",
    alt: "Night boat",
  },
  {
    src: "/images/album/Night/night_shadow-min.JPG",
    category: "night",
    alt: "Night shadow",
  },
  {
    src: "/images/album/Night/concert_shadow-min.JPG",
    category: "night",
    alt: "katie silhouette",
  },
  {
    src: "/images/album/Night/foodtruck_girl-min.jpg",
    category: "night",
    alt: "Food truck girl night",
  },

  // Photojournalism Photos
  {
    src: "/images/album/Photojournalism/protest_man-min.JPG",
    category: "photojournalism",
    alt: "Protest man photojournalism",
  },
  {
    src: "/images/album/Photojournalism/protest_flag-min.JPG",
    category: "photojournalism",
    alt: "Protest flag photojournalism",
  },
  {
    src: "/images/album/Photojournalism/protest_sign-min.JPG",
    category: "photojournalism",
    alt: "Protest sign photojournalism",
  },
  {
    src: "/images/album/Photojournalism/american_dream-min.JPG",
    category: "photojournalism",
    alt: "American dream photojournalism",
  },
  {
    src: "/images/album/Photojournalism/museum_three-min.JPG",
    category: "photojournalism",
    alt: "Museum three photojournalism",
  },
  {
    src: "/images/album/Photojournalism/museum_girl-min.JPG",
    category: "photojournalism",
    alt: "Museum girl photojournalism",
  },

  {
    src: "/images/album/Photojournalism/museum_back-min.JPG",
    category: "photojournalism",
    alt: "Museum back photojournalism",
  },
  {
    src: "/images/album/Photojournalism/museum_criminal-min.JPG",
    category: "photojournalism",
    alt: "Museum criminal photojournalism",
  },
  {
    src: "/images/album/Photojournalism/museum_bold-min.JPG",
    category: "photojournalism",
    alt: "Museum bold photojournalism",
  },

  {
    src: "/images/album/Photojournalism/god_talking-min.jpg",
    category: "photojournalism",
    alt: "God talking photojournalism",
  },

  {
    src: "/images/album/Photojournalism/blue_bike-min.jpg",
    category: "photojournalism",
    alt: "Blue bike photojournalism",
  },
  {
    src: "/images/album/Photojournalism/anti_club-min.jpg",
    category: "photojournalism",
    alt: "Anti Apartheid Club photojournalism",
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
