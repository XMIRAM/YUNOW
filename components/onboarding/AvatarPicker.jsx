'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AvatarSprite, { AVATAR_STYLES } from '../world/AvatarSprite';

export default function AvatarPicker({ onComplete }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    if (step === 1 && selectedAvatar) {
      setStep(2);
    } else if (step === 2 && name.trim()) {
      onComplete({
        avatarId: selectedAvatar,
        displayName: name.trim(),
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-black flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Title */}
      <motion.div
        className="mb-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          YUNOW
        </h1>
        <p className="text-gray-400 text-sm">Welcome to the city</p>
      </motion.div>

      {step === 1 ? (
        /* STEP 1 — Avatar */
        <motion.div
          key="avatar-step"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-sm"
        >
          <h2 className="text-white text-xl font-bold text-center mb-6">
            Choose your avatar
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {Object.keys(AVATAR_STYLES).map((avatarId) => (
              <motion.div
                key={avatarId}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AvatarSprite
                  avatarId={avatarId}
                  size="lg"
                  isActive={selectedAvatar === avatarId}
                  frame={selectedAvatar === avatarId ? 'neon' : 'none'}
                  onClick={() => setSelectedAvatar(avatarId)}
                  className="cursor-pointer"
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2
              ${
                selectedAvatar
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            whileHover={selectedAvatar ? { scale: 1.02 } : {}}
            whileTap={selectedAvatar ? { scale: 0.98 } : {}}
            onClick={handleContinue}
            disabled={!selectedAvatar}
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      ) : (
        /* STEP 2 — Name */
        <motion.div
          key="name-step"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-sm"
        >
          <div className="flex justify-center mb-6">
            <AvatarSprite
              avatarId={selectedAvatar}
              size="xl"
              frame="neon"
              aura="glow"
            />
          </div>

          <h2 className="text-white text-xl font-bold text-center mb-6">
            What should we call you?
          </h2>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a nickname..."
            maxLength={20}
            className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4
                       text-white text-lg placeholder-gray-500 focus:outline-none
                       focus:border-violet-500 transition-colors mb-6"
          />

          <motion.button
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2
              ${
                name.trim()
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            whileHover={name.trim() ? { scale: 1.02 } : {}}
            whileTap={name.trim() ? { scale: 0.98 } : {}}
            onClick={handleContinue}
            disabled={!name.trim()}
          >
            Enter the City
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <p className="text-gray-500 text-xs text-center mt-4">
            You're entering as a guest. No account needed.
          </p>
        </motion.div>
      )}

      {/* Progress */}
      <div className="flex gap-2 mt-8">
        <div className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-violet-500' : 'bg-gray-700'}`} />
        <div className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-violet-500' : 'bg-gray-700'}`} />
      </div>
    </motion.div>
  );
}
