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
    id: "5",
    name: "Tamron 35-150mm f/2-2.8 Di III VXD",
    brand: "Tamron",
    model: "Z mount 35-150mm f/2-2.8 Di III VXD",
    specs: [
      "35-150mm focal length",
      "f/2-2.8 large aperture",
      "1190g weight",
      "160.1mm length",
      "82mm filter size",
    ],
    description:
      "My go-to lens for portraits, events, and general photography. Sharp across the entire zoom range with beautiful bokeh. (Very heavy no gonna lie)",
    image: "/images/camera/tamron_35-150f2.8.jpg",
    purchaseYear: 2024,
    favorite: true,
  },
  {
    id: "6",
    name: "Viltrox AF 16mm f/1.8",
    brand: "Viltrox",
    model: "Z mount 16mm f/1.8",
    specs: [
      "16mm focal length",
      "f/1.8 maximum aperture",
      "565g weight",
      "103mm length",
      "77mm filter size",
    ],
    description:
      "Perfect for wide angle shooting, like night sky, milky way. Also, very cost-effective!",
    image: "/images/camera/viltrox_16f1.8.webp",
    purchaseYear: 2024,
  },
  {
    id: "7",
    name: "Sigma 18-50mm f/2.8 DC DN Contemporary",
    brand: "Sigma",
    model: "X mount 18-50mm f/2.8",
    specs: [
      "18-50mm (27-75mm equivalent) focal length",
      "f/2.8 constant aperture",
      "285g weight",
      "76.8mm length",
      "55mm filter size",
    ],
    description:
      "Considering the price, weight and aperture, it is the most suitable lens for X mount.",
    image: "/images/camera/sigma_18-50f2.8.jpg",
    purchaseYear: 2025,
  },
  {
    id: "8",
    name: "Sigma 18-50mm f/2.8 DC DN Contemporary",
    brand: "Sigma",
    model: "L mount 18-50mm f/2.8",
    specs: [
      "18-50mm (27-75mm equivalent) focal length",
      "f/2.8 constant aperture",
      "290g weight",
      "74.5mm length",
      "55mm filter size",
    ],
    description:
      "Considering the price, weight and aperture, it is the most suitable lens for L mount.",
    image: "/images/camera/sigma_18-50f2.8.jpg",
    purchaseYear: 2023,
  },
  {
    id: "9",
    name: "Nikon NIKKOR Z 85mm f/1.8 S",
    brand: "Nikon",
    model: "Z mount 85mm f/1.8",
    specs: [
      "85mm focal length",
      "f/1.8 large aperture",
      "470g weight",
      "99mm length",
      "67mm filter size",
    ],
    description: "Beautiful beautiful bokeh, great for portrait photography!",
    image: "/images/camera/nikon_85f1.8.jpg",
    purchaseYear: 2022,
    favorite: true,
  },
  {
    id: "11",
    name: "Nikon 70-300mm f/4.5-5.6G ED VR",
    brand: "Nikon",
    model: "F mount 70-300mm f/4.5-5.6",
    specs: [
      "70-300mm (105-450mm equivalent) focal length",
      "f/4.5-5.6 variable aperture",
      "415g weight",
      "125mm length",
      "58mm filter size",
      "Vibration Reduction and Extra-low Dispersion glass",
    ],
    description:
      "This is the perfect lens for Nikon F mount APS-C camera, very good at photographing distant objects.",
    image: "/images/camera/nikon_70-300f4.5-6.3.jpg",
    purchaseYear: 2021,
    favorite: false,
  },
  {
    id: "12",
    name: "Nikon 50mm f/1.4 AI",
    brand: "Nikon",
    model: "F mount 50mm f/1.4",
    specs: [
      "50mm focal length",
      "f/1.4 maximum aperture",
      "246g weight",
      "40.6mm length",
      "52mm filter size",
      "manual focus only",
    ],
    description:
      "The model was introduced in 1977, my first manual focus lens, onion-ring bokeh.",
    image: "/images/camera/nikon_50f1.4.webp",
    purchaseYear: 2023,
    favorite: false,
  },
  {
    id: "20",
    name: "Quantaray MC Auto Zoom 28-80mm f/3.5-4.5",
    brand: "Quantaray",
    model: "MC Auto Zoom 28-80mm f/3.5-4.5",
    specs: [
      "28-80mm focal length",
      "f/3.5-4.5 aperture",
      "430g weight",
      "95mm length",
      "62mm filter size",
    ],
    description:
      "It provides a versatile walk-around zoom from a wide field to short telephoto.",
    image: "/images/camera/quantaray_28-80f3.5-4.5.png",
    purchaseYear: 2026,
    favorite: false,
  },
];
