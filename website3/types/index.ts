export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  features: {
    gsm: string;
    size: string;
    material: string;
    usage: string;
  };
  specifications: {
    color: string;
    packing: string;
    moq: string;
    delivery: string;
  };
  image: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  products: Product[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  content: string;
  rating: number;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  experience: number;
  location: string;
  email: string;
  phone: string;
  address: string;
}

export interface NavItem {
  label: string;
  href: string;
}
