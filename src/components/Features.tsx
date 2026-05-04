"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  CreditCard, 
  ShieldCheck, 
  TrendingUp, 
  Smartphone as PhoneIcon,
  Tv,
  Zap,
  Droplets,
  Car,
  HeartPulse,
  Home,
  Plane,
  ArrowRight
} from "lucide-react";

const services = [
  { img: "/icons/pay-bill-orange.png", name: "Pay Bills" },
  { img: "/icons/money-transfer-orange.png", name: "Money Transfer" },
  { img: "/icons/qr-code-orange.png", name: "QR Code" },
  { img: "/icons/bank-to-bank-orange.png", name: "Bank Transfer" },
  { img: "/icons/wallet-to-wallet-orange.png", name: "Wallet" },
  { img: "/icons/insurance-orange.png", name: "Insurance" },
  { img: "/icons/ticket-orange.png", name: "Tickets" },
  { img: "/icons/booking-orange.png", name: "Bookings" },
];

const mainServices = [
  {
    title: "Payments",
    desc: "Manage all your payments seamlessly",
    img: "/icons/pay-bill-orange.png",
    delay: 0,
  },
  {
    title: "Investments",
    desc: "Build, manage & grow your wealth",
    img: "/icons/mutual-funds-orange.png",
    delay: 0.2,
  },
  {
    title: "Insurance",
    desc: "Protect, plan & secure your future",
    img: "/icons/insurance-orange.png",
    delay: 0.4,
  },
  {
    title: "Lending",
    desc: "Access quick, transparent & secure loans",
    img: "/icons/asset-loans-orange.png",
    delay: 0.6,
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Everything you need, in one place</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From daily bills to long-term investments, VPay has you covered with the simplest and most secure platform.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {mainServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: service.delay,
                times: [0, 0.5, 1]
              }}
              className="bg-white rounded-[40px] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col items-center text-center relative border border-gray-100"
            >
              <div className="relative w-40 h-40 mb-8 rounded-[36px] overflow-hidden shadow-xl border-[6px] border-white group-hover:shadow-brand-orange/20 transition-all duration-500">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-3xl font-black text-[#eb8835] mb-4">{service.title}</h3>
              <p className="text-gray-500 font-bold leading-tight max-w-[220px]">
                {service.desc}
              </p>
              
              <div className="absolute bottom-8 right-10 text-[#eb8835] opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <ArrowRight size={28} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Services Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.3, borderRadius: "100px" }}
          whileInView={{ opacity: 1, scale: 1, borderRadius: "56px" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="bg-white p-16 border-2 border-gray-50 shadow-2xl shadow-gray-200/40"
        >
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-black text-gray-900 mb-12 text-center"
          >
            Recharge & Pay Bills
          </motion.h4>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-10"
          >
            {services.map((service, idx) => {
              // Pyramid stagger effect: middle items appear first
              const delay = Math.abs(idx - 3.5) * 0.15;
              
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.5 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1, 
                      transition: { 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        delay: delay
                      } 
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -12 }}
                  className="flex flex-col items-center group cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-brand-orange rounded-3xl p-4 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-20 h-20 rounded-[24px] flex items-center justify-center mb-4 overflow-hidden border-2 border-gray-100 dark:border-gray-800 transition-all duration-300">
                    <img 
                      src={service.img} 
                      alt={service.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <span className="text-sm font-black text-gray-700 dark:text-gray-300 group-hover:text-brand-orange text-center transition-colors px-1 leading-tight">{service.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
