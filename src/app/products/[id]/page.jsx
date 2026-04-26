

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSingleProduct } from "@/services/productService";
import { motion } from "framer-motion";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  }, [id]);

  // 🔄 Loading
  if (!product) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain bg-white p-4 rounded-xl shadow"
          />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-green-600 mb-6">
            ${product.price}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
              Add to Cart 🛒
            </button>

            <button className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg transition">
              Buy Now
            </button>
          </div>
        </motion.div>

      </div>

    </div>
  );
}