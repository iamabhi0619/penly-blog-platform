// app/layout.js (or app/layout.tsx for TS)

import { Source_Serif_4, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Penly – Blog for Writers and Thinkers",
  description: "Penly is a thoughtfully crafted blog platform for writers, coders, and creators.",
  themeColor: "#D8E2DC",
  icons: {
    icon: "/assets/icons/favicon.ico",
    apple: "/assets/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${code.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
