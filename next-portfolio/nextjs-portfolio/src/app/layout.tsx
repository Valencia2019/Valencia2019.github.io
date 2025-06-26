import type { Metadata } from "next";
import { Sriracha, Playfair_Display } from "next/font/google";
import "./globals.css";

// Body font
const sriracha = Sriracha({
  subsets: ["latin"],
  variable: "--font-sriracha",
  weight: ["400"],
})

// Header font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sriracha.variable} ${playfair.variable}`}>
      <body className="font-sriracha antialiased">
        {children}
      </body>
    </html>
  );
}
