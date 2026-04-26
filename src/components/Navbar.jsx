

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50"
    >
      {/* Logo */}
      <motion.h1
        whileHover={{ scale: 1.05 }}
        className="text-2xl md:text-3xl font-bold text-gray-800"
      >
        E-commerce 🛒
      </motion.h1>

      {/* Menu */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/cart" className="hover:text-blue-600 transition">
            Cart
          </Link>
        </motion.li>

      </ul>
    </motion.nav>
  );
}

