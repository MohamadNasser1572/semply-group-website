import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: "Semply Group | Creative Marketing & Production Agency",
  description:
    "Semply Group is a Beirut-based creative marketing and production agency building brands, content, and digital presence across Lebanon and the UAE.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} bg-ink text-sand antialiased`}>
        {children}
      </body>
    </html>
  );
}
