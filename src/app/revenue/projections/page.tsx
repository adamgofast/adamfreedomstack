"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import ProjectionChart from "@/components/ProjectionChart";

const coachingItems = [
  {
    label: "Winter Pod",
    calculation: "10 athletes × $250 × 50% = $1,250",
    amount: 1250,
    emoji: "💪",
  },
  {
    label: "Pre-Spring Pod",
    calculation: "10 athletes × $250 × 50% = $1,250",
    amount: 1250,
    emoji: "🏃",
  },
  {
    label: "Extra School",
    calculation: "10 athletes × $250 × 50% = $1,250",
    amount: 1250,
    emoji: "🏫",
  },
];

const coachingTotal = coachingItems.reduce((sum, item) => sum + item.amount, 0);

const goFastItems = [
  {
    label: "Monthly Visitors",
    calculation: "10,000 active users",
    amount: 0,
    emoji: "👥",
  },
  {
    label: "Conversion Rate",
    calculation: "2% of visitors purchase",
    amount: 0,
    emoji: "📊",
  },
  {
    label: "Average Order Value",
    calculation: "$50 per purchase",
    amount: 0,
    emoji: "💰",
  },
  {
    label: "Monthly Revenue",
    calculation: "10,000 × 2% × $50 = $10,000",
    amount: 10000,
    emoji: "🚀",
  },
];

const goFastTotal = goFastItems[goFastItems.length - 1].amount;

const combinedTotal = coachingTotal + goFastTotal;
const goalAmount = 6000;
const progressPercentage = Math.min((combinedTotal / goalAmount) * 100, 100);

export default function Projections() {
  useEffect(() => {
    // Handle hash scrolling after component mounts
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

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
            Financial Projections
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Target: $6,000 per month
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-gray-200 rounded-full h-8 overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ delay: 0.6, duration: 1 }}
              className="bg-gradient-to-r from-sky-500 to-cyan-600 h-full rounded-full flex items-center justify-center"
            >
              <span className="text-white text-sm font-semibold">
                {progressPercentage.toFixed(0)}%
              </span>
            </motion.div>
          </div>
          <p className="text-center text-gray-600 mt-2">
            Combined streams: ${combinedTotal.toLocaleString()}/month
          </p>
        </motion.div>

        {/* Coaching Stream */}
        <div id="coaching" className="scroll-mt-20">
          <ProjectionChart
            title="A. Coaching Stream"
            items={coachingItems}
            total={coachingTotal}
            delay={0.5}
          />
        </div>

        {/* GoFast Stream */}
        <div id="gofast" className="scroll-mt-20">
          <ProjectionChart
            title="B. GoFast Stream"
            items={goFastItems}
            total={goFastTotal}
            delay={0.7}
          />
        </div>

        {/* Combined Total */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-lg shadow-xl p-8 text-white max-w-2xl mx-auto mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Combined Monthly Total</h3>
            <div className="text-5xl font-bold mb-2">
              ${combinedTotal.toLocaleString()}
            </div>
            <p className="text-sky-100">
              {combinedTotal >= goalAmount
                ? "✅ Goal achieved! Freedom unlocked."
                : `$${(goalAmount - combinedTotal).toLocaleString()} away from goal`}
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-lg mb-6">
            Built with ❤️ by Adam — Freedom starts with belief.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/revenue"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              ← Back to Revenue Streams
            </Link>
            <Link
              href="/"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

