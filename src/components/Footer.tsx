"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Send, Camera, Briefcase, Play } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "General",
      links: ["About Us", "Careers", "Contact Us", "Press", "Ethics", "Blog"],
    },
    {
      title: "Business",
      links: ["Merchant Partners", "Payment Gateway", "QR Code", "Ads", "VPay for Business"],
    },
    {
      title: "Legal",
      links: ["Terms & Conditions", "Privacy Policy", "Grievance Redressal", "Fraud & Security"],
    },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-900 text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo and Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="VPay Logo"
                width={280}
                height={90}
                className="h-24 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              VPay is India's leading fintech platform, helping millions of users make seamless payments and smart investments every day.
            </p>
            <div className="flex space-x-4">
              {[MessageCircle, Send, Camera, Briefcase, Play].map((Icon, idx) => (
                <Link 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link: string, lIdx: number) => (
                  <li key={lIdx}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 VPay Private Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Sitemap</Link>
            <Link href="#" className="hover:text-white">Security</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
