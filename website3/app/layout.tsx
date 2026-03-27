import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/lib/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rohan Mirza Textiles | Premium Textile Manufacturer & Exporter",
    template: "%s | Rohan Mirza Textiles",
  },
  description:
    "Leading textile manufacturer and exporter based in Karachi, Pakistan. Premium quality shop towels, terry towels, industrial and hospitality textiles for global markets.",
  keywords: [
    "textile manufacturer",
    "textile exporter",
    "shop towels",
    "terry towels",
    "industrial textile",
    "hospitality textile",
    "Pakistan textiles",
    "bulk textiles",
    "textile wholesale",
  ],
  authors: [{ name: "Rohan Mirza Textiles" }],
  creator: "Rohan Mirza Textiles",
  publisher: "Rohan Mirza Textiles",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohanmirzatextiles.com",
    title: "Rohan Mirza Textiles | Premium Textile Manufacturer & Exporter",
    description:
      "Leading textile manufacturer and exporter based in Karachi, Pakistan. Premium quality textiles for global markets.",
    siteName: "Rohan Mirza Textiles",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohan Mirza Textiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Mirza Textiles | Premium Textile Manufacturer & Exporter",
    description:
      "Leading textile manufacturer and exporter based in Karachi, Pakistan.",
  },
  metadataBase: new URL("https://rohanmirzatextiles.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
