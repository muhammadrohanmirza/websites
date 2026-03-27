"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center"
          >
            <span className="text-white font-bold text-3xl">R</span>
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-amber-200 border-t-amber-500 rounded-2xl"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
