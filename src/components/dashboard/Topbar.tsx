"use client";

import React from "react";
import { Bell, Search, Menu } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="h-24 bg-white/80 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30">
      {/* Left side / Mobile Menu Toggle */}
      <div className="flex items-center">
        <button className="lg:hidden p-2 -ml-2 mr-4 text-gray-500 hover:text-brand-orange rounded-lg hover:bg-brand-orange/5 transition-colors">
          <Menu size={24} />
        </button>
        <div className="hidden md:flex items-center bg-gray-50 rounded-2xl px-4 py-3 w-96 border border-gray-100 focus-within:border-brand-orange focus-within:bg-white transition-all group">
          <Search size={20} className="text-gray-400 group-focus-within:text-brand-orange" />
          <input 
            type="text" 
            placeholder="Search transactions, bills, or contacts..." 
            className="bg-transparent border-none outline-none ml-3 w-full text-sm font-medium text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right side Profile & Notifications */}
      <div className="flex items-center space-x-6">
        <button className="relative p-2 text-gray-400 hover:text-brand-orange transition-colors">
          <Bell size={24} />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center space-x-3 pl-6 border-l border-gray-100 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 group-hover:text-brand-orange transition-colors">John Doe</p>
            <p className="text-xs font-medium text-gray-500">Premium User</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-brand-orange/10 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
            <Image src="https://i.pravatar.cc/150?img=32" alt="Profile" width={48} height={48} />
          </div>
        </div>
      </div>
    </header>
  );
}
