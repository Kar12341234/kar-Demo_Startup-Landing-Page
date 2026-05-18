import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpsPilot AI | Startup SaaS Landing Page Demo",
  description:
    "A polished AI productivity SaaS landing page demo built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  openGraph: {
    title: "OpsPilot AI | Startup SaaS Landing Page Demo",
    description:
      "Showcase landing page for an AI workflow automation platform focused on productivity, automation, and business efficiency.",
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
