"use client";
import React from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2, rotate: 2, transition: { type: "spring", stiffness: 300 } },
};

const linkVariants = {
  initial: { opacity: 0.8, y: 0 },
  hover: { opacity: 1, y: -2, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-purple text-white w-full px-4 py-8 rounded-t-2xl shadow-inner-md"
    >
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between items-start gap-8">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-start gap-4 max-w-sm">
          <Logo className="fill-white h-20 w-20 m-0" height={100} width={200} />
          <p className="text-start font-semibold tracking-wide font-serif">
            Penly is a simple, fast, and powerful blogging platform for writers, coders, and
            creators.
          </p>
          <div className="flex gap-4 text-xl">
            {[
              IconBrandGithub,
              IconBrandLinkedin,
              IconBrandX,
              IconBrandInstagram,
              IconBrandYoutube,
            ].map((Icon, i) => (
              <motion.div
                key={i}
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                className="cursor-pointer text-white"
              >
                <Icon size={30} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex flex-col gap-2 items-start">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="flex flex-col gap-2 items-start">
            {[
              { label: "About Us", href: "#about" },
              { label: "Blog", href: "#blog" },
              { label: "Contact", href: "#contact" },
              { label: "Privacy Policy", href: "#privacy" },
            ].map(({ label, href }) => (
              <motion.li key={label} variants={linkVariants} initial="initial" whileHover="hover">
                <a href={href} className="hover:underline underline-offset-2 transition">
                  {label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section: Subscribe Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full md:w-auto"
        >
          <h3 className="text-lg font-bold">Subscribe to our Newsletter</h3>
          <p className="text-sm">
            Stay updated with the latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex items-center gap-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="text-gray placeholder:text-gary border-b border-gray outline-none focus:border-blue transition duration-300 bg-transparent w-full py-2 px-4"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-deep-purple cursor-pointer hover:bg-blue/80 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm font-serif font-semibold tracking-wide text-white">
        <p>© {new Date().getFullYear()} Penly. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <motion.a href="#terms" variants={linkVariants} initial="initial" whileHover="hover">
            Terms of Service
          </motion.a>
          <motion.a href="#privacy" variants={linkVariants} initial="initial" whileHover="hover">
            Privacy Policy
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
