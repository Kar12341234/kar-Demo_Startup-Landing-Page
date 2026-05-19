import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlowCare Aesthetics | Advanced Skin and Laser Clinic",
  description:
    "Personalized facial, laser, acne, brightening, and skin rejuvenation treatments with a consultation-first approach.",
  openGraph: {
    title: "GlowCare Aesthetics | Advanced Skin and Laser Clinic",
    description:
      "Book a personalized skin consultation and explore transparent treatment packages for clearer, brighter, natural-looking skin.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
