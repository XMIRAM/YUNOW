'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Skull, Heart, Zap } from 'lucide-react';
import AvatarSprite from '../world/AvatarSprite';

const REACTIONS = [
  { key: 'fire', icon: Flame },
  { key: 'spark', icon: Sparkles },
  { key: 'skull', icon: Skull },
  { key: 'heart', icon: Heart },
];

export default function MessageBubble({ message, isOwn = false, onReact, onFuel }) {
  const [hover, setHover] = useState(false);
  const reactions = message.reactions || {};

  return (
    <motion.div
      className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : ''}`}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <AvatarSprite avatarId={message.author_avatar || 'avatar_1'} />

      <div className="flex-1 max-w-[75%]">
        <div className="bg-gray-800 p-4 rounded-2xl">
          <p className="text-white">{message.content}</p>

          {hover && (
            <div className="flex gap-1 mt-2">
              {REACTIONS.map(({ key, icon: Icon }) => (
                <button key={key} onClick={() => onReact?.(message.id, key)}>
                  <Icon className="text-white/70" />
                </button>
              ))}
              <button onClick={() => onFuel?.(message.id)}>
                <Zap className="text-yellow-400" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
