'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Zap, Clock, Share2, MoreVertical } from 'lucide-react';
import AvatarSprite from '../world/AvatarSprite';
import { ROOM_TYPE_CONFIG } from '../world/RoomCard';

export default function RoomHeader({ room, visitors = [], onBack }) {
  const config = ROOM_TYPE_CONFIG[room?.type] || ROOM_TYPE_CONFIG.standard;
  const Icon = config.icon;

  return (
    <motion.div className={`bg-gradient-to-r ${config.color} p-4 rounded-b-3xl`}>
      <div className="flex items-center justify-between mb-3">
        <button onClick={onBack} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <ArrowLeft className="text-white" />
        </button>

        <div className="flex gap-2">
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Share2 className="text-white" />
          </button>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MoreVertical className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Icon className="text-white" />
        </div>

        <div className="flex-1">
          <h1 className="text-white font-bold text-xl">{room?.title}</h1>
          {room?.description && <p className="text-white/70 text-sm">{room.description}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/20">
        <Users className="text-white/70" />
        <span className="text-white text-sm">{visitors.length || room?.current_visitors || 0} inside</span>

        <div className="flex -space-x-2 ml-2">
          {visitors.slice(0, 5).map((v, i) => (
            <AvatarSprite key={i} avatarId={v.avatar_id} size="sm" />
          ))}
        </div>

        {room?.expires_at && (
          <div className="ml-auto flex items-center gap-1 text-white/70 text-sm">
            <Clock />
            Expires soon
          </div>
        )}
      </div>
    </motion.div>
  );
}
