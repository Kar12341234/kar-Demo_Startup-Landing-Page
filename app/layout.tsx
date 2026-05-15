import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightNest Cleaning | Premium Home Cleaning",
  description:
    "A customer-facing website demo for a premium local home cleaning service brand.",
  openGraph: {
    title: "BrightNest Cleaning | Premium Home Cleaning",
    description:
      "Book reliable home cleaning with clear packages, vetted cleaners, eco-friendly supplies, and simple quote requests.",
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
