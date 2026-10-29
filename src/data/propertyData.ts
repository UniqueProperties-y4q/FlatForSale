export interface PropertyPhoto {
  id: string;
  title: string;
  category: 'hall' | 'terrace' | 'kitchen' | 'master' | 'bedroom1' | 'bedroom2' | 'entrance';
  categoryLabel: string;
  src: string;
  description: string;
  aspect: 'landscape' | 'portrait';
}

export interface VideoTimestamp {
  seconds: number;
  label: string;
  roomName: string;
  description: string;
}

export interface ConnectivityItem {
  name: string;
  category: 'transit' | 'shopping' | 'education' | 'healthcare' | 'heritage';
  distance: string;
  walkingTime?: string;
  drivingTime?: string;
  description: string;
  iconName: string;
}

export const PROPERTY_DETAILS = {
  title: "Premium 3 BHK Resale Flat in Central Pune",
  subTitle: "Rare Space, Auspicious East Vastu & Private Terrace at Sadashiv Peth Border",
  location: "Sadashiv Peth & Subhash Nagar Border, Central Pune, Maharashtra",
  configuration: "Spacious 3 BHK + Private Terrace + Covered Car Parking",
  propertyType: "Premium Residential Resale",
  ownership: "Freehold / Clear Title",
  vastu: "Auspicious East-Facing Main Entrance",
  waterSupply: "PMC (Pune Municipal Corporation) 24x7 Water Supply",
  parking: "Dedicated Covered Car Parking Space (100 sq ft)",
  
  // Area Details
  area: {
    builtUp: 1235, // sq ft
    terrace: 102,  // sq ft
    coveredParking: 100, // sq ft
    totalUsable: 1437, // sq ft composite
    unit: "sq ft"
  },

  // Contact Details
  contact: {
    email: "sam.pune.property@gmail.com",
    phone: "+91 98220 12345", // representative
    whatsappDisplay: "+91 98220 12345",
    whatsappNumber: "919822012345",
    contactPerson: "Property Owner / Direct Representative"
  },

  overview: `This premium 3 BHK resale property offers an unmatched combination of space, security, and elite central connectivity right on the border of Central Pune. Featuring a spacious 1,235 sq ft built-up layout, an attached 102 sq ft private terrace for outdoor relaxation, and an invaluable 100 sq ft dedicated covered car parking space, this home is a rare gem in the heart of Pune's cultural and commercial core.`,

  keyFeatures: [
    {
      title: "Spacious 3 BHK Configuration",
      highlight: "1,235 sq ft built-up area",
      description: "Generously proportioned living hall, extensive modular kitchen, two airy guest/children bedrooms, and an oversized Master Suite with dual lounge feel.",
      icon: "Home"
    },
    {
      title: "Star Feature: Private Attached Terrace",
      highlight: "102 sq ft of personal open sky",
      description: "Directly connected to the living hall, featuring high-quality translucent weather roofing, privacy foliage lattice, and tiled flooring. Perfect for morning tea or evening breeze.",
      icon: "Sun"
    },
    {
      title: "The Parking Luxury",
      highlight: "Dedicated 100 sq ft covered car parking",
      description: "A massive, stress-free asset for Central Pune where safe car parking is virtually impossible to find. Protects your vehicle from sun and rain.",
      icon: "Car"
    },
    {
      title: "Auspicious Vastu Alignment",
      highlight: "East-Facing Main Entrance",
      description: "Highly preferred according to traditional Vastu Shastra principles, welcoming abundance, natural morning daylight, and positive energy flow.",
      icon: "Compass"
    },
    {
      title: "PMC Corporation Water Supply",
      highlight: "Reliable Municipal Connection",
      description: "Dependable Pune Municipal Corporation water connection, ensuring peace of mind without reliance on expensive private water tankers.",
      icon: "Droplets"
    },
    {
      title: "Unrivalled Central Connectivity",
      highlight: "Sadashiv Peth & Subhash Nagar Belt",
      description: "5-minute walk to Laxmi Road, Tulshibaug, and Mahatma Phule Mandai. Rapid access to Mandai Metro Station and Swargate Multimodal Transit Hub.",
      icon: "MapPin"
    }
  ]
};

export const PROPERTY_PHOTOS: PropertyPhoto[] = [
  {
    id: "hall-1",
    title: "Grand Living Hall & Lounge",
    category: "hall",
    categoryLabel: "Living Hall",
    src: "/assets/aistudio/HALL_View1_df0b1bee.jpg",
    description: "Expansive hall with polished vitrified tile flooring, curved false ceiling with warm recessed LED spotlights, and direct access to the attached private terrace.",
    aspect: "landscape"
  },
  {
    id: "hall-2",
    title: "Living Room Seating & Entertainment Console",
    category: "hall",
    categoryLabel: "Living Hall",
    src: "/assets/aistudio/Hall_View2_4574ff84.jpg",
    description: "Generous layout accommodating an L-shaped sofa, wooden entertainment credenza, and wall-mounted acoustic provisions.",
    aspect: "landscape"
  },
  {
    id: "hall-3",
    title: "Living Room Foyer & Dining Space",
    category: "hall",
    categoryLabel: "Living Hall",
    src: "/assets/aistudio/Hall_View3_afffa04c.jpg",
    description: "Bright and airy living area with cove lighting design, providing ample room for family gatherings and dining setup.",
    aspect: "landscape"
  },
  {
    id: "terrace-hall",
    title: "Terrace Access from Living Hall",
    category: "terrace",
    categoryLabel: "Private Terrace",
    src: "/assets/aistudio/TerraceFromHall_a0c63c01.jpg",
    description: "Sliding glass doors with ornamental safety gate leading seamlessly from the living hall to the covered 102 sq ft terrace.",
    aspect: "portrait"
  },
  {
    id: "terrace-1",
    title: "Attached Private Terrace (The Star Feature)",
    category: "terrace",
    categoryLabel: "Private Terrace",
    src: "/assets/aistudio/Terrace1_a3ba94fc.jpg",
    description: "102 sq ft of attached private terrace equipped with weather-proof polycarbonate skylight pergola, safety railings, decorative green privacy screening, and clean ceramic tiles.",
    aspect: "portrait"
  },
  {
    id: "kitchen-1",
    title: "Spacious L-Shaped Modular Kitchen",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    src: "/assets/aistudio/Kitchen_View1_66cb25ae.jpg",
    description: "Spacious L-shaped black granite countertop with dual-tone lime & ivory storage cabinets, stainless steel sink, large window for natural ventilation, and crockery unit.",
    aspect: "portrait"
  },
  {
    id: "kitchen-2",
    title: "Kitchen Dining / Utility Corridor",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    src: "/assets/aistudio/Kichen_View2_db7ed332.jpg",
    description: "Wide kitchen expanse with space for refrigerator, water purifier, gas stove, and storage lofts.",
    aspect: "portrait"
  },
  {
    id: "master-1",
    title: "Expansive Master Bedroom Suite",
    category: "master",
    categoryLabel: "Master Bedroom",
    src: "/assets/aistudio/MasterBedRoom_View1_e9d536cc.jpg",
    description: "Grand master bedroom suite with separate dressing/lounge alcove, wooden wardrobes with overhead storage lofts, dual ceiling fans, and ensuite space.",
    aspect: "portrait"
  },
  {
    id: "master-2",
    title: "Master Suite Dressing & Wardrobe Zone",
    category: "master",
    categoryLabel: "Master Bedroom",
    src: "/assets/aistudio/MasterBedRoom_View2_71a8a5de.jpg",
    description: "Dedicated dressing section with full-length mirror, floor-to-ceiling wooden storage, sofa seating space, and privacy arch.",
    aspect: "portrait"
  },
  {
    id: "master-3",
    title: "Master Bedroom Bed Setup",
    category: "master",
    categoryLabel: "Master Bedroom",
    src: "/assets/aistudio/MasterBedRoom_View3_5e5b88af.jpg",
    description: "Cozy king-size sleeping zone framed by ambient headboard lighting, window drapery, and wooden side units.",
    aspect: "portrait"
  },
  {
    id: "bedroom1-1",
    title: "Bedroom 1 (Guest / Second Suite)",
    category: "bedroom1",
    categoryLabel: "Bedroom 1",
    src: "/assets/aistudio/BedRoom1_View1_ca33c4fe.jpg",
    description: "Well-ventilated bedroom with ceiling-height wooden cabinetry, corner alcove, accent wall styling, and double-bed layout.",
    aspect: "portrait"
  },
  {
    id: "bedroom1-2",
    title: "Bedroom 1 Alternate Perspective",
    category: "bedroom1",
    categoryLabel: "Bedroom 1",
    src: "/assets/aistudio/BedRoom1_View2_410626ea.jpg",
    description: "Shows wide entrance doorway, clean flooring, study or dresser nook, and peaceful privacy.",
    aspect: "landscape"
  },
  {
    id: "bedroom1-3",
    title: "Bedroom 1 Full Wardrobe & Loft Storage",
    category: "bedroom1",
    categoryLabel: "Bedroom 1",
    src: "/assets/aistudio/BedRoom1_View3_0f856307.jpg",
    description: "Fitted overhead wooden lofts and full-height wardrobe units maximizing storage efficiency.",
    aspect: "portrait"
  },
  {
    id: "bedroom2-1",
    title: "Bedroom 2 (Children / Study Room)",
    category: "bedroom2",
    categoryLabel: "Bedroom 2",
    src: "/assets/aistudio/BedRoom2_View1_4799d641.jpg",
    description: "Bright room featuring wooden overhead cabinets, window with curtains, and spacious layout suitable for children's room, study, or home office.",
    aspect: "portrait"
  },
  {
    id: "bedroom2-2",
    title: "Bedroom 2 Wall View & Storage",
    category: "bedroom2",
    categoryLabel: "Bedroom 2",
    src: "/assets/aistudio/BedRoom2_View2_d58065c6.jpg",
    description: "Two-tone accent wall, sleek door latch, clean white tiling, and built-in closet units.",
    aspect: "portrait"
  },
  {
    id: "entrance",
    title: "East-Facing Main Entrance & Foyer",
    category: "entrance",
    categoryLabel: "Entrance & Foyer",
    src: "/assets/aistudio/Entrance_dd8b391a.jpg",
    description: "Auspicious East-facing entrance foyer with shoe console bench, welcoming entryway arch, and direct passage into the living hall.",
    aspect: "portrait"
  }
];

export const VIDEO_TIMESTAMPS: VideoTimestamp[] = [
  { seconds: 0, label: "0:00", roomName: "Entrance & Foyer", description: "Auspicious East entrance & foyer walkthrough" },
  { seconds: 6, label: "0:06", roomName: "Living Room", description: "Spacious hall with false ceiling & recessed lights" },
  { seconds: 15, label: "0:15", roomName: "Private Terrace", description: "102 sq ft attached terrace with skylight pergola" },
  { seconds: 28, label: "0:28", roomName: "Living Credenza & Hallway", description: "L-shaped living seating and passage corridor" },
  { seconds: 48, label: "0:48", roomName: "Spacious Kitchen", description: "Full L-shaped modular kitchen with ample prep space" },
  { seconds: 62, label: "1:02", roomName: "Bedroom 1", description: "Double bedroom with built-in lofts & wardrobes" },
  { seconds: 74, label: "1:14", roomName: "Bedroom 2", description: "Study / kids bedroom with overhead wooden cabinets" },
  { seconds: 88, label: "1:28", roomName: "Master Bedroom Suite", description: "Grand master suite with dressing alcove & lounge" }
];

export const CONNECTIVITY_HIGHLIGHTS: ConnectivityItem[] = [
  {
    name: "Laxmi Road & Tulshibaug",
    category: "shopping",
    distance: "400 - 500 m",
    walkingTime: "5 mins walk",
    description: "Pune's legendary retail and shopping district for apparel, festive shopping, gold, jewelry, and daily lifestyle.",
    iconName: "ShoppingBag"
  },
  {
    name: "Mandai Metro Station",
    category: "transit",
    distance: "600 m",
    walkingTime: "6 mins walk",
    drivingTime: "2 mins",
    description: "Direct connection to Pune Metro Line, seamlessly linking Pimpri-Chinchwad, Swargate, Civil Court interchange, and Vanaz.",
    iconName: "Train"
  },
  {
    name: "Mahatma Phule Mandai Market",
    category: "shopping",
    distance: "500 m",
    walkingTime: "5 mins walk",
    description: "Historic fresh vegetable, fruit, grocery, and flower wholesale market for fresh daily produce.",
    iconName: "Store"
  },
  {
    name: "Swargate ST Stand & Multimodal Transit",
    category: "transit",
    distance: "1.3 km",
    drivingTime: "4 mins",
    walkingTime: "12 mins",
    description: "Inter-city bus terminal, city PMT bus depot, and key underground metro station.",
    iconName: "Bus"
  },
  {
    name: "Sadashiv Peth & Subhash Nagar Hub",
    category: "heritage",
    distance: "Adjacent",
    walkingTime: "1 min walk",
    description: "Heart of Peshwa heritage, renowned library culture, mess & eateries, traditional sweets (Chitale Bandhu), and quiet residential lanes.",
    iconName: "Landmark"
  },
  {
    name: "Top Schools & Colleges",
    category: "education",
    distance: "1 to 2.5 km",
    drivingTime: "5-8 mins",
    description: "Renowned institutions: NMV High School, Bhave School, SP College, Tilak Maharashtra Vidyapeeth, Fergusson College easily accessible.",
    iconName: "GraduationCap"
  },
  {
    name: "Premier Healthcare & Hospitals",
    category: "healthcare",
    distance: "1.5 to 3 km",
    drivingTime: "5-10 mins",
    description: "Poona Hospital, Deenanath Mangeshkar Hospital, Sancheti Hospital, and specialized clinics across Tilak Road & Bajirao Road.",
    iconName: "Activity"
  },
  {
    name: "Pune Railway Station",
    category: "transit",
    distance: "4.5 km",
    drivingTime: "14 mins",
    description: "Pune Junction railway station for high-speed express trains and Mumbai-Pune Vande Bharat express.",
    iconName: "Navigation"
  }
];

export const COMPARISON_POINTS = [
  {
    feature: "Main Entrance Vastu",
    thisProperty: "Auspicious East-Facing Entrance",
    marketAverage: "Mixed or South/West orientations",
    advantage: true
  },
  {
    feature: "Private Attached Terrace",
    thisProperty: "102 sq ft attached terrace with covered pergola",
    marketAverage: "Small standing balcony or no balcony",
    advantage: true
  },
  {
    feature: "Car Parking",
    thisProperty: "Dedicated 100 sq ft Covered Car Parking",
    marketAverage: "Rare in Central Pune (most have street or 2-wheeler only)",
    advantage: true
  },
  {
    feature: "Water Infrastructure",
    thisProperty: "Direct PMC Municipal Corporation Water Supply",
    marketAverage: "Frequent tanker dependency in suburbs",
    advantage: true
  },
  {
    feature: "Flat Configuration & Scale",
    thisProperty: "Large 1,235 sq ft built-up 3 BHK + 102 sq ft terrace",
    marketAverage: "Cramped 700-900 sq ft 2/3 BHKs",
    advantage: true
  },
  {
    feature: "Metro & Walkability",
    thisProperty: "5-min walk to Mandai Metro & Laxmi Rd",
    marketAverage: "Dependent on personal transport / auto rickshaws",
    advantage: true
  }
];
