// app/layout.js (or app/layout.tsx for TS)

import { Overpass, Overpass_Mono, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/Sonner";

const serif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const mono = Overpass_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",

});

const sansSerif = Overpass({
  variable: "--font-sans-serif",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Penly – Blog for Writers and Thinkers",
  description: "Penly is a thoughtfully crafted blog platform for writers, coders, and creators.",
  icons: {
    icon: "/assets/icons/favicon.ico",
    apple: "/assets/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sansSerif.variable} ${serif.variable} ${mono.variable}  antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
