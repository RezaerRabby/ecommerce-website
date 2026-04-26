

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 px-4">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Shop Smart, Shop Easy 🛒
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg mb-6"
          >
            Discover amazing products with the best prices and fast delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <Link href="/products">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
                Shop Now 
              </button>
            </Link>

            <button className="bg-white border px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="E-commerce"
            className="w-[300px] md:w-[400px] drop-shadow-xl"
          />
        </motion.div>

      </div>

    </div>
  );
}




