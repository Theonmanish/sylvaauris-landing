import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sylva Auris | Premium Living Terrariums",
  description:
    "Handcrafted enclosed botanical installations for discerning interiors. Premium terrarium commissions by Sylva Auris.",
  icons: [{ rel: "icon", url: "/logo.png", type: "image/png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}