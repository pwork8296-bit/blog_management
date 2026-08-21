import type { Metadata } from "next";
import { siteConfig } from "./config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: "PS Ricca - Online Plant Nursery in Delhi NCR",
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon,
  },
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