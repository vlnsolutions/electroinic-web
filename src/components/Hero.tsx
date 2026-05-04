"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const mockupVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 dark:bg-brand-orange/10 rounded-full blur-[120px] -mr-96 -mt-96" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[100px] -ml-48 -mb-48" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(235,136,53,0.03)_0,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(235,136,53,0.08)_0,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 border border-brand-orange/20 dark:border-brand-orange/30 text-brand-orange dark:text-brand-orange-light text-sm font-bold mb-8"
            >
              <Zap size={16} className="mr-2 fill-brand-orange" />
              FAST. SECURE. RELIABLE.
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[0.95] mb-8 tracking-tighter transition-colors duration-500"
            >
              Experience <br />
              the Future of <br />
              <span className="text-brand-orange inline-block">Payments</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed transition-colors duration-500">
              VPay makes your financial life simpler. Send money, pay bills, and invest in your future—all from one beautiful app.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 shadow-xl shadow-brand-orange/20 hover:scale-105 transition-all active:scale-95">
                <span>Get Started Now</span>
                <ArrowRight size={20} />
              </button>
              <button className="bg-white dark:bg-gray-800 text-brand-orange border-2 border-brand-orange/20 dark:border-brand-orange/40 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-orange/5 dark:hover:bg-brand-orange/10 transition-all">
                Learn More
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">10M+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Active Users</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">500+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Partners</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Uptime</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div
            variants={mockupVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-brand-orange/10 dark:shadow-brand-orange/5">
              <Image
                src="/hero-mockup.png"
                alt="VPay Mobile App"
                width={800}
                height={1200}
                className="w-full h-auto object-contain max-h-[700px]"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3 border border-gray-100 dark:border-gray-700 transition-colors duration-500"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Transaction</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Verified & Secure</p>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3 border border-gray-100 dark:border-gray-700 transition-colors duration-500"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-brand-blue dark:text-blue-400 rounded-full flex items-center justify-center">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Global</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Access Anywhere</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
