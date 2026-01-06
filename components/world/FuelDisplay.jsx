'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function FuelDisplay({ amount = 50 }) {
  return (
    <motion.div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30">
      <Zap className="text-yellow-400 fill-yellow-400" size={16} />
      <span className="text-yellow-400 font-bold">{amount}</span>
    </motion.div>
  );
}
