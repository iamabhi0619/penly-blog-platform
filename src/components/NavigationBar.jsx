"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideTab } from "./ui/SlideTab";
import Link from "next/link";
import { Logo } from "./Logo";

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hideMobileExtras, setHideMobileExtras] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

      // Only hide extras on mobile view
      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        setHideMobileExtras(scrollY > window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        paddingTop: scrolled ? 8 : 16,
        paddingBottom: scrolled ? 8 : 16,
        opacity: scrolled ? 0.9 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 35,
        mass: 0.7,
        duration: 0.4,
      }}
      className="w-full px-4 md:px-12 bg-white shadow-sm sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 rounded-b-2xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        {/* Logo */}
        <AnimatePresence>
          {(!hideMobileExtras || (typeof window !== "undefined" && window.innerWidth >= 640)) && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1,
              }}
              className="flex justify-center sm:justify-start"
            >
              <Link href="/" className="flex items-center gap-2">
                <Logo className="h-10 w-10" width={100} height={50} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center SlideTab */}
        <div className="mx-auto">
          <SlideTab />
        </div>

        {/* CTA Button */}
        <AnimatePresence>
          {(!hideMobileExtras || (typeof window !== "undefined" && window.innerWidth >= 640)) && (
            <motion.div
              key="cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1,
              }}
              className="flex justify-center sm:justify-end"
            >
              <Link
                href="/get-started"
                className="bg-purple text-white px-5 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-purple/90 transition-all shadow-md"
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
