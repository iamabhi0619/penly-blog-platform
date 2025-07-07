"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useUserStore } from "@/store/userStore";
import { IconChevronDown, IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";

export default function AuthForm() {
  const { login, register, loading, error, message } = useUserStore();
  const [type, setType] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      if (type === "signup") {
        const res = await register(data);
        if (res) {
          setType("login");
        }
      } else {
        await login(data);
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
    }
  };

  const toggleFormType = () => {
    setType(type === "login" ? "signup" : "login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-light rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Left Graphic */}
        <div
          className="h-48 md:h-auto md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/authbg.svg')" }}
        />

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center"
        >
          <Link href="/" className="text-sm text-deep-purple font-bold hover:underline font-mono -tracking-wider">
            &larr; Back to website
          </Link>

          <div className="flex justify-between font-sans-serif mt-2">
            <button
              onClick={() => setType("login")}
              className={`text-sm font-bold font-Inter px-4 py-1 rounded-full cursor-pointer transition ${
                type !== "login" ? " text-text-black " : "text-text-black hover:bg-blue/80 bg-blue"
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => setType("signup")}
              className={`text-sm font-bold font-Inter px-4 py-1 rounded-full cursor-pointer transition ${
                type !== "signup" ? "text-text-black " : "text-text-black hover:bg-blue/80 bg-blue"
              }`}
            >
              Sign up
            </button>
          </div>

          <h2 className="text-3xl font-bold mt-4 text-deep-purple font-Inter">
            {type === "login" ? "Welcome back!" : "Create an account"}
          </h2>
          <p className="text-sm text-text-muted mb-6 font-mono">
            {type === "login"
              ? "Log in to access your dashboard."
              : "Join now and get started for free!"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {type === "signup" && (
              <>
                {/* Name Field */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green/50 transition"
                />

                {/* Gender Field */}
                <div className="relative">
                  <select
                    name="gender"
                    defaultValue=""
                    className="w-full appearance-none border rounded-full p-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-green bg-white text-gray-700"
                  >
                    <option value="" disabled hidden>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <IconChevronDown />
                  </div>
                </div>
              </>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
              className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green/50 transition"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green/50 transition"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
              </button>
            </div>

            {type === "login" && (
              <div className="text-right">
                <Link
                  href="https://www.iamabhi.tech/forgot-password"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-sm font-bold font-FiraCode py-3 rounded-full transition-all duration-200 ${
                loading
                  ? "bg-purple/60 text-white cursor-not-allowed "
                  : "bg-purple text-white hover:bg-green/80 cursor-pointer"
              }`}
            >
              {loading ? (
                <motion.div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
              ) : type === "login" ? (
                "Log in"
              ) : (
                "Sign up"
              )}
            </button>
          </form>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-red-500 mt-4 text-sm text-center font-semibold"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {message && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-green-600 mt-4 text-sm text-center font-semibold"
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={toggleFormType}
              className="text-sm text-blue-600 hover:underline font-semibold"
            >
              {type === "login"
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-400 font-mono">
            <Link
              href="https://www.iamabhi.tech/term"
              className="hover:text-blue-600 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="https://www.iamabhi.tech/privacy-policy"
              className="hover:text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.iamabhi.tech/contact"
              className="hover:text-blue-600 hover:underline"
            >
              Contact Support
            </Link>
            <span className="text-green font-semibold">Social logins coming soon 🚀</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
