'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function RoomCard({ room }) {
  return (
    <motion.div
      className="p-4 rounded-2xl bg-gray-900 text-white cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="font-bold">{room.title}</h3>
      <p className="text-sm text-gray-400">{room.current_visitors} inside</p>
    </motion.div>
  );
}
