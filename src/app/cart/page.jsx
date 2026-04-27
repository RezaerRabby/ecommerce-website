// export default function CartPage() {
//   return (
//     <div>
//       <h1 className="bg-amber-400">Cart Page 🛒</h1>
//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";

export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Your Cart 🛒
      </motion.h1>

      {/* Empty Cart UI */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white shadow-lg rounded-2xl p-10 text-center"
      >
        <h2 className="text-xl font-semibold mb-4">
          Your cart is empty 
        </h2>

        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything yet.
        </p>

        <a
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Go to Products
        </a>
      </motion.div>

    </div>
  );
}
