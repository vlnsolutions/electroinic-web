"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Business Solutions", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Trust & Safety", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50 shadow-sm py-0" 
          : "bg-transparent py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0">

          {/* Logo — Always visible, Top Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="VPay Logo"
                width={480}
                height={160}
                className={`w-auto object-contain drop-shadow-sm transition-all duration-500 ${
                  scrolled ? "h-20" : "h-44"
                }`}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu — Right */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium hover:text-brand-orange transition-colors ${
                      scrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-full transition-colors ${
                  scrolled ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" : "text-gray-800 dark:text-gray-100 hover:bg-white/20"
                }`}
                aria-label="Toggle Dark Mode"
              >
                <Sun className="h-5 w-5 hidden dark:block" />
                <Moon className="h-5 w-5 block dark:hidden" />
              </button>
              <Link
                href="/login"
                className="bg-brand-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all active:scale-95 shadow-md shadow-brand-orange/20"
              >
                Login
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button — Right on mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-800 dark:text-gray-100"}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <div className="flex justify-end px-3 py-2">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800"
                >
                  <Sun className="h-5 w-5 hidden dark:block" />
                  <Moon className="h-5 w-5 block dark:hidden" />
                </button>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  href="/login"
                  className="block w-full bg-brand-orange text-white text-center px-6 py-3 rounded-xl font-semibold shadow-md shadow-brand-orange/20"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
