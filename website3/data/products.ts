import { Product, ProductCategory, Testimonial, CompanyInfo } from "@/types";

export const companyInfo: CompanyInfo = {
  name: "Rohan Mirza Textiles",
  tagline: "Premium Textile Manufacturer & Exporter",
  description: "Leading manufacturer and exporter of high-quality textile products serving clients worldwide with excellence since 2005.",
  mission: "To deliver exceptional textile products that exceed global quality standards while maintaining sustainable manufacturing practices and building lasting partnerships with our clients.",
  vision: "To be the most trusted textile exporter in South Asia, recognized for innovation, quality, and reliability in every product we deliver.",
  experience: 18,
  location: "Karachi, Pakistan",
  email: "info@rohanmirzatextiles.com",
  phone: "+92 21 1234 5678",
  address: "Plot 45-B, Industrial Area, Karachi, Sindh, Pakistan",
};

export const productCategories: ProductCategory[] = [
  {
    id: "shop-towels",
    name: "Shop Towels",
    slug: "shop-towels",
    description: "Industrial-grade shop towels for automotive, manufacturing, and maintenance applications.",
    icon: "clean",
    products: [
      {
        id: "st-001",
        name: "Premium Shop Towel Roll",
        slug: "premium-shop-towel-roll",
        category: "shop-towels",
        description: "High-absorbency shop towels perfect for industrial cleaning and maintenance tasks.",
        features: {
          gsm: "80-120 GSM",
          size: "30cm x 35cm",
          material: "100% Cotton Blend",
          usage: "Industrial Cleaning",
        },
        specifications: {
          color: "White, Blue, Green",
          packing: "100 pcs/roll",
          moq: "500 rolls",
          delivery: "15-20 days",
        },
        image: "/products/shop-towel-1.jpg",
      },
      {
        id: "st-002",
        name: "Heavy Duty Shop Towel",
        slug: "heavy-duty-shop-towel",
        category: "shop-towels",
        description: "Extra durable shop towels designed for heavy-duty cleaning applications.",
        features: {
          gsm: "120-150 GSM",
          size: "35cm x 40cm",
          material: "Cotton-Polyester Blend",
          usage: "Heavy Duty Cleaning",
        },
        specifications: {
          color: "Gray, Navy",
          packing: "80 pcs/roll",
          moq: "400 rolls",
          delivery: "15-20 days",
        },
        image: "/products/shop-towel-2.jpg",
      },
    ],
  },
  {
    id: "terry-towels",
    name: "Terry Towels",
    slug: "terry-towels",
    description: "Luxurious terry towels for hospitality, retail, and personal use.",
    icon: "towel",
    products: [
      {
        id: "tt-001",
        name: "Hotel Bath Towel",
        slug: "hotel-bath-towel",
        category: "terry-towels",
        description: "Premium quality bath towels designed for luxury hotels and resorts.",
        features: {
          gsm: "500-600 GSM",
          size: "70cm x 140cm",
          material: "100% Combed Cotton",
          usage: "Hospitality",
        },
        specifications: {
          color: "White, Ivory, Custom",
          packing: "50 pcs/carton",
          moq: "200 cartons",
          delivery: "20-25 days",
        },
        image: "/products/terry-towel-1.jpg",
      },
      {
        id: "tt-002",
        name: "Hand Towel Set",
        slug: "hand-towel-set",
        category: "terry-towels",
        description: "Soft and absorbent hand towels perfect for bathrooms and kitchens.",
        features: {
          gsm: "400-450 GSM",
          size: "40cm x 70cm",
          material: "100% Ring Spun Cotton",
          usage: "Home & Hospitality",
        },
        specifications: {
          color: "Assorted Colors",
          packing: "100 pcs/carton",
          moq: "150 cartons",
          delivery: "20-25 days",
        },
        image: "/products/terry-towel-2.jpg",
      },
    ],
  },
  {
    id: "industrial-textile",
    name: "Industrial Textile",
    slug: "industrial-textile",
    description: "Specialized textile solutions for industrial and manufacturing applications.",
    icon: "factory",
    products: [
      {
        id: "it-001",
        name: "Canvas Fabric Roll",
        slug: "canvas-fabric-roll",
        category: "industrial-textile",
        description: "Heavy-duty canvas fabric for industrial covers, bags, and protective applications.",
        features: {
          gsm: "350-500 GSM",
          size: "150cm width",
          material: "100% Cotton Canvas",
          usage: "Industrial Manufacturing",
        },
        specifications: {
          color: "Natural, Black, Olive",
          packing: "50 meters/roll",
          moq: "100 rolls",
          delivery: "18-22 days",
        },
        image: "/products/industrial-1.jpg",
      },
      {
        id: "it-002",
        name: "Technical Textile Fabric",
        slug: "technical-textile-fabric",
        category: "industrial-textile",
        description: "Advanced technical textile for specialized industrial applications.",
        features: {
          gsm: "200-300 GSM",
          size: "160cm width",
          material: "Polyester-Cotton Tech",
          usage: "Technical Applications",
        },
        specifications: {
          color: "Custom Colors",
          packing: "100 meters/roll",
          moq: "50 rolls",
          delivery: "25-30 days",
        },
        image: "/products/industrial-2.jpg",
      },
    ],
  },
  {
    id: "hospitality-textile",
    name: "Hospitality Textile",
    slug: "hospitality-textile",
    description: "Complete textile solutions for hotels, restaurants, and hospitality industry.",
    icon: "hotel",
    products: [
      {
        id: "ht-001",
        name: "Hotel Bed Linen Set",
        slug: "hotel-bed-linen-set",
        category: "hospitality-textile",
        description: "Luxury bed linen sets for premium hotels and hospitality establishments.",
        features: {
          gsm: "120-140 GSM",
          size: "Queen/King Size",
          material: "100% Egyptian Cotton",
          usage: "Hospitality",
        },
        specifications: {
          color: "White, Ivory, Custom",
          packing: "20 sets/carton",
          moq: "100 cartons",
          delivery: "25-30 days",
        },
        image: "/products/hospitality-1.jpg",
      },
      {
        id: "ht-002",
        name: "Restaurant Table Linen",
        slug: "restaurant-table-linen",
        category: "hospitality-textile",
        description: "Elegant table linens for restaurants, banquets, and catering services.",
        features: {
          gsm: "180-220 GSM",
          size: "Various Sizes",
          material: "Polyester-Cotton Blend",
          usage: "Food Service",
        },
        specifications: {
          color: "White, Black, Custom",
          packing: "50 pcs/carton",
          moq: "80 cartons",
          delivery: "20-25 days",
        },
        image: "/products/hospitality-2.jpg",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "James Mitchell",
    company: "Global Supplies Inc.",
    country: "United States",
    content: "Rohan Mirza Textiles has been our trusted partner for over 5 years. Their quality is consistently excellent and delivery is always on time.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sarah Ahmed",
    company: "Luxury Hotels Group",
    country: "United Arab Emirates",
    content: "The hospitality textiles we receive are of premium quality. Our guests appreciate the softness and durability of the towels and linens.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Michael Weber",
    company: "EuroTextile GmbH",
    country: "Germany",
    content: "Outstanding quality control and professional service. They understand European standards and deliver accordingly.",
    rating: 5,
  },
];

export const features = [
  {
    title: "Premium Quality",
    description: "Every product meets international quality standards with rigorous inspection processes.",
    icon: "quality",
  },
  {
    title: "Competitive Pricing",
    description: "Direct manufacturer pricing ensures you get the best value without compromising quality.",
    icon: "pricing",
  },
  {
    title: "Global Export",
    description: "Extensive experience exporting to USA, Europe, Middle East, and beyond.",
    icon: "global",
  },
  {
    title: "On-Time Delivery",
    description: "Reliable production schedules and logistics partnerships ensure timely delivery.",
    icon: "delivery",
  },
];

export const exportMarkets = [
  { region: "United States", percentage: 35 },
  { region: "Europe", percentage: 30 },
  { region: "Middle East", percentage: 20 },
  { region: "Asia Pacific", percentage: 15 },
];
