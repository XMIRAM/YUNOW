'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AVATAR_STYLES = {
  avatar_1: { bg: 'from-violet-500 to-purple-600', emoji: '👤' },
  avatar_2: { bg: 'from-cyan-400 to-blue-500', emoji: '🌊' },
  avatar_3: { bg: 'from-orange-400 to-red-500', emoji: '🔥' },
  avatar_4: { bg: 'from-green-400 to-emerald-500', emoji: '🌿' },
  avatar_5: { bg: 'from-pink-400 to-rose-500', emoji: '💫' },
  avatar_6: { bg: 'from-yellow-400 to-amber-500', emoji: '⚡' },
  avatar_7: { bg: 'from-indigo-400 to-blue-600', emoji: '🌙' },
  avatar_8: { bg: 'from-teal-400 to-cyan-500', emoji: '🌀' },
};

export default function AvatarSprite({
  avatarId = 'avatar_1',
  size = 'md',
  className = '',
}) {
  const avatar = AVATAR_STYLES[avatarId] || AVATAR_STYLES.avatar_1;

  const sizes = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl',
  };

  return (
    <motion.div className={`${sizes[size]} rounded-full bg-gradient-to-br ${avatar.bg} flex items-center justify-center ${className}`}>
      <span>{avatar.emoji}</span>
    </motion.div>
  );
}
