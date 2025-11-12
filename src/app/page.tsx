"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity } from "lucide-react";
import Link from "next/link";
import StreamCard from "@/components/StreamCard";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
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
            Two streams. One goal — $6,000/month of freedom.
          </p>
        </motion.div>

        {/* Two Stream Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          <StreamCard
            icon={Dumbbell}
            title="Coaching"
            description={`Build local training pods and youth camps with Cordone Fit.\n\nEach pod: 10 athletes × $250 = $2,500 gross → 50/50 split = $1,250 net.`}
            ctaText="See Coaching Breakdown"
            ctaLink="/projections#coaching"
            iconColor="text-purple-500"
            delay={0.3}
          />
          <StreamCard
            icon={Activity}
            title="GoFast"
            description={`Free app community + 2% conversion commerce layer.\n\nAvg order $50 → 2% of visitors purchase → drives scalable revenue.`}
            ctaText="See GoFast Breakdown"
            ctaLink="/projections#gofast"
            iconColor="text-blue-500"
            delay={0.4}
          />
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/projections"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-4 px-10 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            See How It Adds Up
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
