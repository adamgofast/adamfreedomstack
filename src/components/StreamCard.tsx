"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface StreamCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  iconColor: string;
  delay?: number;
}

export default function StreamCard({
  icon: Icon,
  title,
  description,
  ctaText,
  ctaLink,
  iconColor,
  delay = 0,
}: StreamCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <div className="flex justify-center mb-6">
        <Icon className={`w-16 h-16 ${iconColor}`} />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
        {description}
      </p>
      <div className="text-center">
        <Link
          href={ctaLink}
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </motion.div>
  );
}
