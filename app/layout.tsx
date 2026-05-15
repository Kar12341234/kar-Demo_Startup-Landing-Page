import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClientFlow | Booking CRM for Service Teams",
  description:
    "A customer-facing SaaS landing page demo for an appointment booking CRM built for service teams.",
  openGraph: {
    title: "ClientFlow | Booking CRM for Service Teams",
    description:
      "Turn website visitors into booked appointments with booking pages, reminders, client records, payments, and reporting.",
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
