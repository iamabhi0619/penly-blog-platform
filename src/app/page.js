// app/page.js

import Footer from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center">
      {/* Header */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center py-20 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Penly</h1>
        <p className="text-lg text-gray-600 mb-8">
          A beautiful blogging platform for writers and creators.
        </p>
      </section>

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
