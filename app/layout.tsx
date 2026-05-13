import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowPilot AI | Productivity SaaS Platform",
  description:
    "A modern SaaS landing page demo for an AI productivity platform, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  openGraph: {
    title: "FlowPilot AI | Productivity SaaS Platform",
    description:
      "Automate work, connect tools, and track team performance with an AI productivity SaaS platform.",
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
