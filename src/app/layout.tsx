import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Layer Caker",
  description: "A Sanity-powered Next.js blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
