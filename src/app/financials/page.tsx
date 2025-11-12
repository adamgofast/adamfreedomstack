"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const financialData = [
  { month: "Nov", coaching: 500, igniteStack: 500, goFast: 0, total: 1000 },
  { month: "Dec", coaching: 1250, igniteStack: 1500, goFast: 0, total: 2750 },
  { month: "Jan", coaching: 1250, igniteStack: 2500, goFast: 0, total: 3750 },
  { month: "Feb", coaching: 2500, igniteStack: 3500, goFast: 0, total: 6000 },
  { month: "Mar", coaching: 3000, igniteStack: 4000, goFast: 0, total: 7000 },
];

const goalAmount = 6000;

export default function Financials() {
  const currentProgress = Math.min(
    (financialData[financialData.length - 1].total / goalAmount) * 100,
    100
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100"
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
            Financial Outlook
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-2">
            Goal: Make $6,000/monthly to cover current salary.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${currentProgress}%` }}
              transition={{ delay: 0.6, duration: 1 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full flex items-center justify-center"
            >
              <span className="text-white text-sm font-semibold">
                {currentProgress.toFixed(0)}%
              </span>
            </motion.div>
          </div>
          <p className="text-center text-gray-600 mt-2">
            Progress toward $6,000/month goal
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Month</th>
                    <th className="px-6 py-4 text-right font-semibold">Coaching</th>
                    <th className="px-6 py-4 text-right font-semibold">Ignite Stack</th>
                    <th className="px-6 py-4 text-right font-semibold">GoFast</th>
                    <th className="px-6 py-4 text-right font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {financialData.map((row, index) => {
                    const isGoalAchieved = row.total >= goalAmount;
                    return (
                      <motion.tr
                        key={row.month}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className={isGoalAchieved ? "bg-green-100 font-semibold" : ""}
                      >
                        <td className="px-6 py-4 text-gray-900">{row.month}</td>
                        <td className="px-6 py-4 text-right text-gray-700">
                          ${row.coaching.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right text-gray-700">
                          ${row.igniteStack.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right text-gray-700">
                          ${row.goFast.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right text-gray-900 font-semibold">
                          ${row.total.toLocaleString()}
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-lg">
            Built with ❤️ by Adam — Freedom starts with belief.
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
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

