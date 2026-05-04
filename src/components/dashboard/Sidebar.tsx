"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowLeftRight, 
  PieChart, 
  Settings, 
  LogOut,
  Shield
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Wallet", href: "/dashboard/wallet", icon: Wallet },
  { name: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight },
  { name: "Investments", href: "/dashboard/investments", icon: PieChart },
  { name: "Insurance", href: "/dashboard/insurance", icon: Shield },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 bg-white w-64 border-r border-gray-100 flex flex-col z-40 hidden lg:flex">
      {/* Logo */}
      <div className="flex items-center justify-center h-28 border-b border-gray-50">
        <Link href="/">
          <span className="text-4xl font-black text-brand-orange tracking-tighter">VPay</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-8 px-4 overflow-y-auto space-y-2">
        <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Main Menu</p>
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`relative flex items-center px-4 py-3 rounded-2xl transition-all duration-300 group cursor-pointer ${
                  isActive ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20" : "text-gray-600 hover:bg-brand-orange/5 hover:text-brand-orange"
                }`}
              >
                <item.icon size={22} className={isActive ? "text-white" : "text-gray-500 group-hover:text-brand-orange"} />
                <span className={`ml-4 font-bold text-sm ${isActive ? "text-white" : ""}`}>{item.name}</span>
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active"
                    className="absolute left-0 w-1 h-8 bg-white rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-50 space-y-2">
        <Link href="/dashboard/settings">
          <div className="flex items-center px-4 py-3 text-gray-600 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group">
            <Settings size={22} className="text-gray-500 group-hover:text-gray-900" />
            <span className="ml-4 font-bold text-sm">Settings</span>
          </div>
        </Link>
        <button className="w-full flex items-center px-4 py-3 text-red-500 rounded-2xl hover:bg-red-50 transition-colors cursor-pointer group">
          <LogOut size={22} className="text-red-400 group-hover:text-red-500" />
          <span className="ml-4 font-bold text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
