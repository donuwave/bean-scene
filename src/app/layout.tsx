import type { Metadata } from "next";
import { Playfair_Display, Clicker_Script } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const playfairSans = Playfair_Display({
  variable: "--font-playfair-sans",
  subsets: ["latin"],
});

const clickerScript = Clicker_Script({
  variable: "--font-clicker-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Krist Ecommerce",
  description: "Krist Ecommerce",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html data-toolpad-color-scheme="light" lang="en">
      <body
        className={`${playfairSans.variable} ${clickerScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
