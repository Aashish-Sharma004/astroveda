// config/siteConfig.ts

export interface Astrologer {
  id: number;
  name: string;
  skills: string[];
  languages: string[];
  exp: number;
  rating: number;
  orders: number;
  ordersLabel: string; // e.g., "50k+", "10k+", "1k+"
  price: number;
  originalPrice?: number; // e.g., strikethrough ₹62/min
  status: 'Online' | 'Busy';
  waitTime?: string;
  badge?: 'Celebrity' | 'Top Choice' | 'Rising Star' | null;
  isTrending?: boolean;
  avatar: string;
}

export interface ZodiacSign {
  name: string;
  hindi: string;
  symbol: string;
  dates: string;
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
  freeMinutesOffer: "First Chat Free",
};

// 👇 Demo Data (Matches the video design & fields)
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

// 🔥 Backend API Ready Helper:
// Jab aapka backend ready ho, sirf niche wali fetch line uncomment kar dena!
export async function getAstrologersList(): Promise<Astrologer[]> {
  // const res = await fetch('https://your-api.com/api/astrologers');
  // return res.json();
  return ASTROLOGERS;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: "Aries", hindi: "मेष", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire", luckyNum: 9, luckyColor: "Crimson Red", love: 88, career: 92, prediction: "Mars energizes your 10th house of career today. Strong leadership opportunities await.", remedy: "Offer water mixed with red Kumkum to Lord Surya at sunrise." },
  { name: "Taurus", hindi: "वृषभ", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth", luckyNum: 6, luckyColor: "Emerald Green", love: 94, career: 84, prediction: "Venus brings financial clarity and warmth in personal relationships.", remedy: "Feed green fodder to cows and chant Shukra Beej Mantra." },
  { name: "Gemini", hindi: "मिथुन", symbol: "♊", dates: "May 21 - Jun 20", element: "Air", luckyNum: 5, luckyColor: "Canary Yellow", love: 82, career: 90, prediction: "Mercury sharpens your communication skills. Ideal day for interviews and client pitches.", remedy: "Offer Durva grass to Lord Ganesha." },
  { name: "Cancer", hindi: "कर्क", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water", luckyNum: 2, luckyColor: "Pearl White", love: 91, career: 79, prediction: "Moon enhances your intuition. Focus on domestic peace and long-term savings.", remedy: "Offer raw milk on Shiva Lingam." },
  { name: "Leo", hindi: "सिंह", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire", luckyNum: 1, luckyColor: "Saffron Gold", love: 86, career: 95, prediction: "Sun illuminates your creative sector. Senior officials will notice your work.", remedy: "Recite Aditya Hridaya Stotra in the morning." },
  { name: "Virgo", hindi: "कन्या", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth", luckyNum: 5, luckyColor: "Olive Green", love: 80, career: 91, prediction: "Analytical clarity helps you solve a pending project bottleneck effortlessly.", remedy: "Donate green moong dal on Wednesday." }
];