"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Shield } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16 relative z-10">
        {/* Left Side: Branding/Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex flex-col flex-1"
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="VPay Logo"
              width={320}
              height={110}
              className="h-36 w-auto object-contain mb-12"
            />
          </Link>
          <h1 className="text-6xl font-black text-gray-900 leading-tight mb-8">
            The future of <br />
            banking is <br />
            <span className="text-brand-orange">Social.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-md leading-relaxed">
            Create an account in less than 2 minutes and start managing your finances like a pro.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                <Shield size={24} />
              </div>
              <p className="font-bold text-gray-900 text-lg">Safe & Secure</p>
              <p className="text-gray-500 text-sm">Bank-grade encryption for all your transactions.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-2xl flex items-center justify-center">
                <ArrowRight size={24} />
              </div>
              <p className="font-bold text-gray-900 text-lg">Instant Transfers</p>
              <p className="text-gray-500 text-sm">Send money to anyone, anywhere, instantly.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Signup Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[500px] bg-white rounded-[48px] p-8 sm:p-12 border border-gray-100 shadow-2xl shadow-brand-orange/5"
        >
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-500 font-medium">Join us today and start your journey.</p>
          </div>

          <form action={async (formData) => {
            setIsLoading(true);
            const res = await registerUser(formData);
            if (res?.error) {
              alert(res.error);
              setIsLoading(false);
            }
          }} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-orange transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-orange transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-orange transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-brand-orange transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-orange text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 shadow-xl shadow-brand-orange/20 hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group mt-4"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Get Started</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-600 font-medium">
              Already have an account?{" "}
              <Link href="/login" className="text-brand-orange font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
