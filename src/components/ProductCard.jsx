


"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
    >
      {/* Image */}
      <div className="h-48 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-green-600 font-bold text-xl mb-3">
        ${product.price}
      </p>

      {/* Button */}
      <Link href={`/products/${product.id}`}>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
          View Details
        </button>
      </Link>
    </motion.div>
  );
}