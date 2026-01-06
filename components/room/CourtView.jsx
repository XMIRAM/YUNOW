'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gavel, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function CourtView({ room, onVerdict }) {
  const [voted, setVoted] = useState(false);

  const vote = (v) => {
    if (voted) return;
    setVoted(true);
    onVerdict?.(v);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center mb-6">
        <Gavel className="text-red-500 w-10 h-10 mb-2" />
        <h2 className="text-white font-bold">Court of the Day</h2>
      </div>

      <p className="text-white mb-6">{room?.court_story}</p>

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => vote('guilty')} className="bg-red-500/20 p-4 rounded-xl text-red-400">
          <ThumbsDown /> Guilty
        </button>
        <button onClick={() => vote('innocent')} className="bg-green-500/20 p-4 rounded-xl text-green-400">
          <ThumbsUp /> Innocent
        </button>
      </div>
    </div>
  );
}
