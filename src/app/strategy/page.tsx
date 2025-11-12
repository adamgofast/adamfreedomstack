"use client";

import { motion } from "framer-motion";
import { Briefcase, Handshake, Zap } from "lucide-react";
import Link from "next/link";

export default function Strategy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100"
    >
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My Strategy
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Three pillars fuel this freedom journey.
          </p>
        </motion.div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Briefcase className="w-16 h-16 text-purple-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
              Coaching Biz
            </h2>
            <p className="text-gray-600 text-center">
              Build micro training pods and local youth camps.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Handshake className="w-16 h-16 text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
              Partnerships
            </h2>
            <p className="text-gray-600 text-center">
              Collaborate with fitness and wellness orgs like Cordone Fit.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Zap className="w-16 h-16 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
              Fitness Community App (GoFast)
            </h2>
            <p className="text-gray-600 text-center">
              Grow digital tribe through Garmin-linked run crews.
            </p>
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

