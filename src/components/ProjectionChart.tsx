"use client";

import { motion } from "framer-motion";

interface ProjectionItem {
  label: string;
  calculation: string;
  amount: number;
  emoji?: string;
}

interface ProjectionChartProps {
  title: string;
  items: ProjectionItem[];
  total: number;
  delay?: number;
}

export default function ProjectionChart({
  title,
  items,
  total,
  delay = 0,
}: ProjectionChartProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      className="bg-white rounded-lg shadow-lg p-8 mb-8"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: delay + index * 0.1 }}
            className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
          >
            <div className="flex items-center gap-3">
              {item.emoji && <span className="text-2xl">{item.emoji}</span>}
              <div>
                <div className="font-medium text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-500">{item.calculation}</div>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              ${item.amount.toLocaleString()}
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: delay + items.length * 0.1 }}
          className="flex items-center justify-between pt-4 mt-4 border-t-2 border-gray-300"
        >
          <div className="text-xl font-bold text-gray-900">Subtotal</div>
          <div className="text-2xl font-bold text-indigo-600">
            ${total.toLocaleString()}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

