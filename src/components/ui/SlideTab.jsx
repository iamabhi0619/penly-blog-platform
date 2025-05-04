"use client";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Create", href: "/create" },
  { label: "About", href: "/about" },
];

export const SlideTab = () => {
  return (
    <div className="">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const pathname = usePathname();
  const tabRefs = useRef({});
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  const moveCursorToPath = () => {
    const activeTab = tabRefs.current[pathname];
    if (activeTab) {
      const { offsetLeft, offsetWidth } = activeTab;
      setPosition({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    moveCursorToPath();
  }, [pathname]);

  return (
    <ul
      onMouseLeave={moveCursorToPath}
      className="relative mx-auto flex w-fit rounded-full border border-purple bg-gray px-1 py-2 pb-3 sm:py-1  shadow-inner"
    >
      {tabs.map(({ label, href }) => (
        <li
          key={href}
          ref={(el) => (tabRefs.current[href] = el)}
          onMouseEnter={() => {
            if (!tabRefs.current[href]) return;
            const { offsetLeft, offsetWidth } = tabRefs.current[href];
            setPosition({
              left: offsetLeft,
              width: offsetWidth,
              opacity: 1,
            });
          }}
          className={`relative z-10 px-4 py-2 text-sm font-medium uppercase transition-all md:px-6 md:text-base
              ${pathname === href ? "text-black" : "text-text-primary hover:text-text-black"}`}
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      layout
      transition={{ type: "spring", stiffness: 500, damping: 30, duration: 0.3 }}
      animate={position}
      className="absolute z-0 h-10 rounded-full bg-blue backdrop-blur-md"
    />
  );
};
