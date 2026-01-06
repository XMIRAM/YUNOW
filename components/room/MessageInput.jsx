'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Zap } from 'lucide-react';

export default function MessageInput({ onSend, fuel = 50, placeholder = 'Say something…' }) {
  const [text, setText] = useState('');

  const send = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <div className="p-4 bg-gray-900 border-t border-gray-800 flex gap-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-gray-800 text-white rounded-xl p-3 resize-none"
      />

      <motion.button
        onClick={send}
        disabled={!text.trim()}
        className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
      >
        <Send className="text-white" />
      </motion.button>
    </div>
  );
}
