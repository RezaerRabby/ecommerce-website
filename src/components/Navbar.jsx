

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50"
//     >
//       {/* Logo */}
//       <motion.h1
//         whileHover={{ scale: 1.05 }}
//         className="text-2xl md:text-3xl font-bold text-gray-800"
//       >
//         E-commerce 🛒
//       </motion.h1>

//       {/* Menu */}
//       <ul className="flex gap-6 text-gray-700 font-medium">
        
//         <motion.li whileHover={{ scale: 1.1 }}>
//           <Link href="/" className="hover:text-blue-600 transition">
//             Home
//           </Link>
//         </motion.li>

//         <motion.li whileHover={{ scale: 1.1 }}>
//           <Link href="/products" className="hover:text-blue-600 transition">
//             Products
//           </Link>
//         </motion.li>

//         <motion.li whileHover={{ scale: 1.1 }}>
//           <Link href="/cart" className="hover:text-blue-600 transition">
//             Cart
//           </Link>
//         </motion.li>

//       </ul>
//     </motion.nav>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-6 md:px-8 py-4 bg-white shadow-md sticky top-0 z-50"
    >
      {/* Logo */}
      <h1 className="text-xl md:text-3xl font-bold text-gray-800">
        E-commerce 🛒
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li>
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
        </li>
        <li>
          <Link href="/cart" className="hover:text-blue-600 transition">
            Cart
          </Link>
        </li>
      </ul>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden"
        >
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" onClick={() => setOpen(false)}>
                Cart
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}


