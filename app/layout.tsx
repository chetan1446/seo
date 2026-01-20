import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Award-Winning UK SEO Company - The SEO Works",
  description: "Leading SEO agency in the UK providing expert SEO services, PPC, content marketing, and digital marketing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
