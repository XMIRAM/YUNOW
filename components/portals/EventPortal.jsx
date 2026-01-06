'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EventPortal({ title, subtitle, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="p-5 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white cursor-pointer"
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm opacity-80">{subtitle}</p>
    </motion.div>
  );
}
