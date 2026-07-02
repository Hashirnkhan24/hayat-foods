import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HAYAT Gourmet Bites | Premium Nuts & Dried Fruits",
  description: "Experience the ultimate in organic luxury with HAYAT Gourmet Bites. Premium, handpicked gourmet nuts and dried fruits crafted for true connoisseurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-espresso">
        {children}
      </body>
    </html>
  );
}

