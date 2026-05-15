import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LandingLab | Custom Landing Page Service",
  description:
    "A premium custom landing page demo for founders, consultants, creators, service businesses, and agencies.",
  openGraph: {
    title: "LandingLab | Custom Landing Page Service",
    description:
      "Conversion-focused landing page design and development for marketplace clients who need a clear offer and working CTA flow.",
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
