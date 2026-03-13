import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'; // Modern sans-serif
import { GeistMono } from 'geist/font/mono'; // Great for coding project labels
import "./globals.css";

export const metadata: Metadata = {
  title: "Primavera Ventures",
  description: "Building consumer products, wellness, and digital health companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased font-sans">
        {/* The 'font-sans' class applies GeistSans to everything inside */}
        {children}
      </body>
    </html>
  );
}