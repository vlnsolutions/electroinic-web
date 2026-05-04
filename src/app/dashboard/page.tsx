"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  MoreHorizontal,
  CreditCard,
  Send,
  Building,
  Smartphone as PhoneIcon,
  Tv,
  Zap,
  Droplets,
  Car,
  HeartPulse,
  Home,
  Plane
} from "lucide-react";
import Image from "next/image";

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

const recentTransactions = [
  { id: 1, name: "Amazon", type: "Shopping", amount: -120.50, date: "Today, 10:30 AM", status: "Completed", icon: "🛒" },
  { id: 2, name: "Salary", type: "Income", amount: 4500.00, date: "Yesterday, 09:00 AM", status: "Completed", icon: "💼" },
  { id: 3, name: "Uber", type: "Transport", amount: -15.20, date: "Apr 28, 08:15 PM", status: "Completed", icon: "🚗" },
  { id: 4, name: "Starbucks", type: "Food & Drink", amount: -5.50, date: "Apr 28, 08:30 AM", status: "Completed", icon: "☕" },
  { id: 5, name: "John Smith", type: "Transfer", amount: -50.00, date: "Apr 27, 02:45 PM", status: "Pending", icon: "👤" },
];

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Dashboard</h1>
          <p className="text-gray-500 font-medium mt-1">Here's an overview of your finances today.</p>
        </div>
        <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
          Download Statement
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Wallet Card & Quick Actions */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Wallet Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-brand-blue rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-brand-blue/30"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end">
              <div>
                <p className="text-blue-100 font-medium mb-2 opacity-80 uppercase tracking-wider text-sm">Total Balance</p>
                <h2 className="text-5xl sm:text-6xl font-black tracking-tight">$12,450.00</h2>
              </div>
              <div className="flex space-x-3 mt-8 md:mt-0">
                <button className="bg-white text-brand-blue px-6 py-3 rounded-2xl font-bold flex items-center space-x-2 hover:bg-gray-50 transition-colors">
                  <Plus size={20} />
                  <span>Add Money</span>
                </button>
                <button className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-bold flex items-center space-x-2 hover:bg-white/30 transition-colors border border-white/10">
                  <Send size={20} />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: ArrowUpRight, name: "Transfer", color: "bg-blue-50 text-brand-blue" },
              { icon: ArrowDownLeft, name: "Request", color: "bg-green-50 text-green-600" },
              { icon: Building, name: "Bank", color: "bg-orange-50 text-brand-orange" },
              { icon: CreditCard, name: "Cards", color: "bg-blue-50 text-brand-blue" },
            ].map((action, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center cursor-pointer hover:shadow-md hover:border-brand-blue/20 transition-all group">
                <div className={`w-14 h-14 ${action.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon size={24} />
                </div>
                <span className="font-bold text-gray-700 text-sm">{action.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Recharge & Pay Bills */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.3, borderRadius: "100px" }}
            animate={{ opacity: 1, scale: 1, borderRadius: "40px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4
            }}
            className="bg-white p-8 border border-gray-100 shadow-sm"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-2xl font-black text-gray-900 mb-8 text-center"
            >
              Recharge & Pay Bills
            </motion.h3>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.8 } }
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {services.map((service, idx) => {
                const delay = Math.abs(idx - 3.5) * 0.15;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5, y: 30 },
                      visible: { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0, 
                        transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.8 + delay } 
                      }
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white hover:bg-gray-50 p-4 rounded-3xl border border-gray-200 hover:border-brand-orange flex flex-col items-center group cursor-pointer transition-all shadow-sm hover:shadow-xl"
                  >
                    <div className="w-16 h-16 rounded-[20px] overflow-hidden flex items-center justify-center mb-3 border-2 border-gray-100 group-hover:border-brand-orange transition-all duration-300">
                      <img 
                        src={service.img} 
                        alt={service.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-700 group-hover:text-brand-orange text-center transition-colors px-1">{service.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Recent Transactions List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-gray-900">Recent Transactions</h3>
              <button className="text-brand-orange font-bold text-sm hover:underline">View All</button>
            </div>
            
            <div className="space-y-6">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      {tx.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{tx.name}</p>
                      <p className="text-sm font-medium text-gray-500">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-black text-lg ${tx.amount > 0 ? "text-green-600" : "text-gray-900"}`}>
                      {tx.amount > 0 ? "+" : ""}{tx.amount.toFixed(2)}
                    </p>
                    <p className={`text-xs font-bold px-2 py-1 rounded-md inline-block mt-1 ${
                      tx.status === "Completed" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"
                    }`}>
                      {tx.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Stats & Cards */}
        <div className="space-y-8">
          
          {/* Linked Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-gray-900">My Cards</h3>
              <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-orange hover:text-white transition-colors">
                <Plus size={18} />
              </button>
            </div>
            
            {/* Credit Card Graphic */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
              <div className="flex justify-between items-center mb-8 relative z-10">
                <span className="font-bold tracking-widest text-gray-300">VPay Classic</span>
                <Image src="/illustrations/payments.png" alt="Visa" width={40} height={25} className="opacity-80" />
              </div>
              <div className="space-y-1 relative z-10">
                <p className="text-gray-400 text-xs uppercase tracking-wider font-bold">Balance</p>
                <p className="text-3xl font-black">$4,250.00</p>
              </div>
              <div className="mt-8 flex justify-between items-end relative z-10">
                <p className="font-medium tracking-widest opacity-80">**** 4582</p>
                <p className="text-sm font-bold opacity-80">12/28</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Transfer */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-black text-gray-900 mb-6">Quick Transfer</h3>
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex-shrink-0 flex flex-col items-center space-y-2 cursor-pointer group">
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-brand-orange group-hover:text-brand-orange transition-colors">
                  <Plus size={24} />
                </div>
                <span className="text-xs font-bold text-gray-500">Add</span>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-shrink-0 flex flex-col items-center space-y-2 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full border-2 border-transparent group-hover:border-brand-orange transition-all p-0.5 overflow-hidden">
                    <Image src={`https://i.pravatar.cc/150?img=${i+20}`} alt="User" width={56} height={56} className="rounded-full" />
                  </div>
                  <span className="text-xs font-bold text-gray-700">User {i}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                <input type="number" placeholder="0.00" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-8 pr-4 font-black text-gray-900 outline-none focus:border-brand-orange focus:bg-white transition-colors" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-orange text-white p-2 rounded-xl hover:scale-105 transition-transform shadow-md shadow-brand-orange/20">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
