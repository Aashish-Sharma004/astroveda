// config/siteConfig.ts

export interface Astrologer {
  id: number;
  name: string;
  skills: string[];
  languages: string[];
  exp: number;
  rating: number;
  orders: number;
  ordersLabel: string;
  price: number;
  originalPrice?: number;
  status: 'Online' | 'Busy';
  waitTime?: string;
  badge?: 'Celebrity' | 'Top Choice' | 'Rising Star' | null;
  isTrending?: boolean;
  avatar: string;
}

// 👇 Fixed interface (removed symbol & dates, added image)
export interface ZodiacSign {
  name: string;
  hindi: string;
  image: string;
  element: string;
  luckyNum: number;
  luckyColor: string;
  love: number;
  career: number;
  prediction: string;
  remedy: string;
}

export const SITE_CONFIG = {
  brandName: "AstroVeda",
  brandHighlight: "Veda",
  tagline: "Vedic Astrology & Life Guidance",
  logoUrl: "",
  heroVideoUrl: "/hero-zodiac.mp4",
  supportPhone: "+91 98765 43210",
  supportEmail: "support@yourdomain.com",
  freeMinutesOffer: "First Chat Free (5 Mins)",
  playStoreUrl: "#playstore",
  appStoreUrl: "#appstore",
  appBonusText: "Get ₹100 Instant AstroWallet Bonus on App Install!",
};

export const ASTROLOGERS: Astrologer[] = [
  {
    id: 1,
    name: "Ranjan",
    skills: ["Vedic", "Kundli", "Marriage"],
    languages: ["English", "Hindi"],
    exp: 20,
    rating: 5.0,
    orders: 50000,
    ordersLabel: "50k+",
    price: 59,
    originalPrice: 72,
    status: "Online",
    badge: "Celebrity",
    isTrending: true,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Tarot Ruby",
    skills: ["Numerology", "Tarot", "Life Coach", "Love"],
    languages: ["English", "Hindi"],
    exp: 6,
    rating: 4.8,
    orders: 1200,
    ordersLabel: "1k+",
    price: 35,
    originalPrice: 45,
    status: "Online",
    badge: "Top Choice",
    isTrending: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Sumedh",
    skills: ["Vedic", "Nadi", "Vastu", "Career"],
    languages: ["Hindi"],
    exp: 11,
    rating: 5.0,
    orders: 10000,
    ordersLabel: "10k+",
    price: 62,
    originalPrice: 78,
    status: "Online",
    badge: "Top Choice",
    isTrending: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "VimalA",
    skills: ["Vedic", "Vastu", "Prashana", "Education"],
    languages: ["English", "Hindi"],
    exp: 14,
    rating: 5.0,
    orders: 10000,
    ordersLabel: "10k+",
    price: 72,
    originalPrice: 90,
    status: "Online",
    badge: "Celebrity",
    isTrending: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Darshila",
    skills: ["Vedic", "Lal Kitab", "Love"],
    languages: ["Hindi", "English"],
    exp: 3,
    rating: 4.9,
    orders: 10000,
    ordersLabel: "10k+",
    price: 29,
    originalPrice: 38,
    status: "Busy",
    waitTime: "6m",
    badge: "Top Choice",
    isTrending: false,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Abhilok",
    skills: ["Vedic", "Face Reading", "Life Coach", "Career"],
    languages: ["Hindi"],
    exp: 7,
    rating: 5.0,
    orders: 10000,
    ordersLabel: "10k+",
    price: 46,
    originalPrice: 58,
    status: "Online",
    badge: "Celebrity",
    isTrending: true,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80"
  }
];

export async function getAstrologersList(): Promise<Astrologer[]> {
  return ASTROLOGERS;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: "Aries",
    hindi: "मेष",
    image: "/Horoscope/aries.avif",
    element: "Fire",
    luckyNum: 9,
    luckyColor: "Crimson Red",
    love: 88,
    career: 92,
    prediction: "Mars energizes your 10th house of career today. Strong leadership opportunities and pending approvals will move in your favor.",
    remedy: "Offer water mixed with red Kumkum to Lord Surya at sunrise."
  },
  {
    name: "Taurus",
    hindi: "वृषभ",
    image: "/Horoscope/taurus.avif",
    element: "Earth",
    luckyNum: 6,
    luckyColor: "Emerald Green",
    love: 94,
    career: 84,
    prediction: "Venus brings financial stability and warmth in personal relationships. A favorable day for long-term investments.",
    remedy: "Feed green fodder to cows and chant Shukra Beej Mantra."
  },
  {
    name: "Gemini",
    hindi: "मिथुन",
    image: "/Horoscope/gemini.avif",
    element: "Air",
    luckyNum: 5,
    luckyColor: "Canary Yellow",
    love: 82,
    career: 90,
    prediction: "Mercury sharpens your communication skills. Ideal day for interviews, business negotiations, and client pitches.",
    remedy: "Offer fresh Durva grass to Lord Ganesha."
  },
  {
    name: "Cancer",
    hindi: "कर्क",
    image: "/Horoscope/cancer.avif",
    element: "Water",
    luckyNum: 2,
    luckyColor: "Pearl White",
    love: 91,
    career: 79,
    prediction: "Moon enhances your emotional clarity and intuition. Focus on family harmony and property-related decisions.",
    remedy: "Offer raw milk and water on Shiva Lingam."
  },
  {
    name: "Leo",
    hindi: "सिंह",
    image: "/Horoscope/leo.avif",
    element: "Fire",
    luckyNum: 1,
    luckyColor: "Saffron Gold",
    love: 86,
    career: 95,
    prediction: "Sun illuminates your creative sector. Senior officials and authorities will recognize your leadership.",
    remedy: "Recite Aditya Hridaya Stotra in the morning."
  },
  {
    name: "Virgo",
    hindi: "कन्या",
    image: "/Horoscope/virgo.avif",
    element: "Earth",
    luckyNum: 5,
    luckyColor: "Olive Green",
    love: 80,
    career: 91,
    prediction: "Analytical clarity helps you solve a pending project bottleneck effortlessly. Health and daily routine improve.",
    remedy: "Donate green moong dal on Wednesday."
  },
  {
    name: "Libra",
    hindi: "तुला",
    image: "/Horoscope/libra.avif",
    element: "Air",
    luckyNum: 7,
    luckyColor: "Pastel Pink",
    love: 95,
    career: 87,
    prediction: "Balance returns to your personal and professional life. Partnerships and marriage talks bring positive news.",
    remedy: "Light a ghee lamp near Tulsi plant in the evening."
  },
  {
    name: "Scorpio",
    hindi: "वृश्चिक",
    image: "/Horoscope/scorpio.avif",
    element: "Water",
    luckyNum: 8,
    luckyColor: "Maroon",
    love: 89,
    career: 93,
    prediction: "Sudden financial gains and breakthrough insights in research or technical work are indicated today.",
    remedy: "Recite Hanuman Chalisa and offer sindoor to Lord Hanuman."
  },
  {
    name: "Sagittarius",
    hindi: "धनु",
    image: "/Horoscope/sagittarius.avif",
    element: "Fire",
    luckyNum: 3,
    luckyColor: "Turmeric Yellow",
    love: 85,
    career: 94,
    prediction: "Jupiter blesses your higher learning and fortune house. Long-distance travel or foreign collaborations thrive.",
    remedy: "Apply a tilak of kesar or haldi on your forehead."
  },
  {
    name: "Capricorn",
    hindi: "मकर",
    image: "/Horoscope/capricorn.avif",
    element: "Earth",
    luckyNum: 4,
    luckyColor: "Royal Blue",
    love: 78,
    career: 96,
    prediction: "Saturn rewards your disciplined hard work with career promotion and long-awaited recognition.",
    remedy: "Light a mustard oil lamp under a Peepal tree on Saturday."
  },
  {
    name: "Aquarius",
    hindi: "कुंभ",
    image: "/Horoscope/aquarius.avif",
    element: "Air",
    luckyNum: 11,
    luckyColor: "Electric Blue",
    love: 84,
    career: 89,
    prediction: "Networking and innovative ideas open new income streams. Friends and mentors offer valuable support.",
    remedy: "Feed birds with seven types of grains (Satnaja)."
  },
  {
    name: "Pisces",
    hindi: "मीन",
    image: "/Horoscope/pisces.avif",
    element: "Water",
    luckyNum: 3,
    luckyColor: "Sea Green",
    love: 92,
    career: 86,
    prediction: "Spiritual peace and creative inspiration peak today. Romantic relationships grow deeper and more harmonious.",
    remedy: "Offer yellow flowers and chana dal at a Vishnu temple."
  }
];

// config/siteConfig.ts ke sabse niche yeh add karein:

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  zodiac: string;
  category: 'Marriage & Love' | 'Career & Abroad' | 'Kundli & Vastu' | 'Business';
  rating: number;
  consultedWith: string;
  serviceType: 'Chat' | 'Call';
  date: string;
  review: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ritika Sharma",
    location: "Jaipur, Rajasthan",
    zodiac: "♌ Leo",
    category: "Marriage & Love",
    rating: 5.0,
    consultedWith: "Acharya Ranjan",
    serviceType: "Call",
    date: "2 days ago",
    review: "My marriage talks were getting delayed for 2 years due to Manglik dosha confusion. Acharya Ranjan explained my Lagna chart so clearly and suggested a simple Vedic upay. Within 3 months, my roka was fixed!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Vikramaditya Singh",
    location: "Bengaluru, India",
    zodiac: "♑ Capricorn",
    category: "Career & Abroad",
    rating: 5.0,
    consultedWith: "Sumedh",
    serviceType: "Chat",
    date: "5 days ago",
    review: "I was stuck between switching jobs in India or waiting for my Europe onsite visa. Sumedh ji predicted the exact week my visa approval would come based on Rahu-Jupiter transit. Spot on prediction!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Neha & Rohan Verma",
    location: "Delhi NCR",
    zodiac: "♎ Libra",
    category: "Kundli & Vastu",
    rating: 4.9,
    consultedWith: "VimalA",
    serviceType: "Call",
    date: "1 week ago",
    review: "We took a Vastu & Ashtakoot Gun Milan session before buying our new flat. Without breaking any walls, the simple directional remedies brought so much peace and positivity to our home.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Karan Malhotra",
    location: "Mumbai, Maharashtra",
    zodiac: "♈ Aries",
    category: "Business",
    rating: 5.0,
    consultedWith: "Tarot Ruby",
    serviceType: "Chat",
    date: "2 weeks ago",
    review: "Tarot Ruby's reading about my startup partnership saved me from a huge financial mistake. Her numerology name correction also helped our brand gain traction rapidly.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Pooja Rathore",
    location: "Udaipur, Rajasthan",
    zodiac: "♋ Cancer",
    category: "Marriage & Love",
    rating: 5.0,
    consultedWith: "Abhilok",
    serviceType: "Chat",
    date: "3 weeks ago",
    review: "I was going through a very stressful phase in my relationship. A 15-minute chat session gave me complete emotional clarity and practical remedies that genuinely worked.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80"
  }
];

// 🔥 Backend API Ready Helper
export async function getTestimonialsList(): Promise<Testimonial[]> {
  // const res = await fetch('https://your-api.com/api/testimonials');
  // return res.json();
  return TESTIMONIALS;
}