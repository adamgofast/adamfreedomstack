"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import StreamCard from "@/components/StreamCard";

export default function Revenue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-100"
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
            Revenue Streams
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Here&apos;s what these are — here&apos;s what they mean in $$$
          </p>
        </motion.div>

        {/* Two Stream Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          <StreamCard
            icon={Dumbbell}
            title="Coaching"
            description={`Build local training pods and youth camps with Cordone Fit.\n\nEach pod: 10 athletes × $250 = $2,500 gross → 50/50 split = $1,250 net.\n\nPotential: $2,500 - $3,750/month`}
            ctaText="See Projections"
            ctaLink="/revenue/projections#coaching"
            iconColor="text-sky-600"
            delay={0.3}
          />
          <StreamCard
            icon={Activity}
            title="GoFast"
            description={`Free app community + 2% conversion commerce layer.\n\nAvg order $50 → 2% of visitors purchase → drives scalable revenue.\n\nPotential: $10,000/month at scale`}
            ctaText="See Projections"
            ctaLink="/revenue/projections#gofast"
            iconColor="text-cyan-600"
            delay={0.4}
          />
        </div>

        {/* Combined Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto mb-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Combined Potential
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              These two streams combine to exceed the $6,000/month goal
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-sky-600 mb-6">
              <span>$13,750</span>
              <span className="text-gray-400">/month</span>
            </div>
            <Link
              href="/revenue/projections"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg py-4 px-10 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              See Full Projections Outlook
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/"
            className="text-sky-600 hover:text-sky-700 font-semibold inline-block"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
