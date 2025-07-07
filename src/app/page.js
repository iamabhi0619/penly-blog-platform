// app/page.js
'use client';
import Footer from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center">
      {/* Header */}
      <NavigationBar />

      {/* Hero Section */}
      <HeroHighlight containerClassName="bg-gray-light" className="bg-white/50 p-10 rounded-3xl">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-serif max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Turn your thoughts into published stories that resonate, inspire, and spark conversation.
          <br />
          <Highlight className="bg-gradient-to-r from-blue to-purple text-text-black">
            Your Voice, Your Blog, Your Platform.
          </Highlight>
        </motion.h1>
      </HeroHighlight>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Penly</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Penly is a simple, fast, and powerful platform designed for bloggers,
          writers, and creators. With modern tools and a seamless user experience,
          writing and sharing your thoughts has never been easier.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Fast & Easy</h3>
            <p className="text-gray-600 mt-4">
              Quick setup and user-friendly interface to start blogging in minutes.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Customizable Themes</h3>
            <p className="text-gray-600 mt-4">
              Choose from a variety of themes or design your own to match your style.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">SEO Optimized</h3>
            <p className="text-gray-600 mt-4">
              Built-in SEO features to help your blog rank higher on search engines.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have any questions? Feel free to reach out, and we’d be happy to help.
        </p>
        <Link
          href="https://iamabhi.tech" // Replace with your contact email
          className="bg-blue-600 text-white py-2 px-6 rounded-full text-xl mt-6 inline-block"
        >
          Contact Support
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
