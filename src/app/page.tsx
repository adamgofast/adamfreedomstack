"use client";

import { motion } from "framer-motion";
import { Heart, DollarSign, Users, Dumbbell, Activity } from "lucide-react";
import Link from "next/link";
import StreamCard from "@/components/StreamCard";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-100"
    >
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to the Freedom Stack
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Life's about following passions and building true financial freedom.
          </p>
        </motion.div>

        {/* Three Icon Cards - What This Is About */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Heart className="w-16 h-16 text-pink-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Passion</h2>
            <p className="text-gray-600">Do what you love every day.</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <DollarSign className="w-16 h-16 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Money</h2>
            <p className="text-gray-600">Build sustainable income streams.</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Users className="w-16 h-16 text-sky-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Time with Family</h2>
            <p className="text-gray-600">Design life for those who matter most.</p>
          </motion.div>
        </div>

        {/* Two Stream Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          <StreamCard
            icon={Dumbbell}
            title="Coaching"
            description={`Build local training pods and youth camps with Cordone Fit.\n\nEach pod: 10 athletes × $250 = $2,500 gross → 50/50 split = $1,250 net.`}
            ctaText="See Coaching Breakdown"
            ctaLink="/projections#coaching"
            iconColor="text-sky-600"
            delay={0.6}
          />
          <StreamCard
            icon={Activity}
            title="GoFast"
            description={`Free app community + 2% conversion commerce layer.\n\nAvg order $50 → 2% of visitors purchase → drives scalable revenue.`}
            ctaText="See GoFast Breakdown"
            ctaLink="/projections#gofast"
            iconColor="text-cyan-600"
            delay={0.7}
          />
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <Link
            href="/projections"
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg py-4 px-10 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            See How It Adds Up
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
