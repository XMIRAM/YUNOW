'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function DistrictPortal({ name = 'District', onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center"
      whileHover={{ scale: 1.05 }}
    >
      <Star className="mx-auto mb-2" />
      <div className="font-bold">{name}</div>
    </motion.div>
  );
}
