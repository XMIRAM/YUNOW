'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Crown, Flame, Star, MapPin, ArrowLeft, Users, Plus } from 'lucide-react';

// ====== HELPERS ======
function getParam(name, fallback = null) {
  if (typeof window === 'undefined') return fallback;
  return new URLSearchParams(window.location.search).get(name) || fallback;
}

function go(url) {
  window.location.href = url;
}

// ====== HOME ======
function Home() {
  const [loading, setLoading] = useState(true);
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const profile = localStorage.getItem('yunow_profile');
    if (profile) {
      setHasProfile(true);
      go('/?page=central');
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          className="text-4xl font-black text-white"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          YUNOW
        </motion.div>
      </div>
    );
  }

  if (!hasProfile) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-black">Welcome to YUNOW</h1>
        <button
          onClick={() => {
            localStorage.setItem(
              'yunow_profile',
              JSON.stringify({
                display_name: 'Guest',
                avatar_id: 'avatar_1',
                fuel: 50,
                reputation: 0,
              })
            );
            go('/?page=central');
          }}
          className="px-6 py-3 bg-white text-black rounded-xl font-bold"
        >
          Enter as Guest
        </button>
      </div>
    );
  }

  return null;
}

// ====== CENTRAL SQUARE ======
function CentralSquare() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-black mb-6 flex items-center gap-2">
        <MapPin className="text-violet-400" /> Central Square
      </h1>

      <div className="space-y-4">
        <button onClick={() => go('/?page=room&id=1')} className="w-full bg-gray-900 p-4 rounded-xl">
          🔥 Trending Room
        </button>
        <button onClick={() => go('/?page=district&area=cafe')} className="w-full bg-gray-900 p-4 rounded-xl">
          ☕ Cafe District
        </button>
        <button onClick={() => go('/?page=district&area=meme')} className="w-full bg-gray-900 p-4 rounded-xl">
          😂 Meme District
        </button>
      </div>
    </div>
  );
}

// ====== DISTRICT ======
function District() {
  const area = getParam('area', 'cafe');

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <button onClick={() => history.back()} className="mb-4 flex items-center gap-2 text-gray-400">
        <ArrowLeft /> Back
      </button>

      <h1 className="text-3xl font-black mb-6 capitalize">{area} District</h1>

      <div className="space-y-4">
        <button onClick={() => go('/?page=room&id=c1')} className="w-full bg-gray-900 p-4 rounded-xl">
          Enter Room
        </button>
      </div>
    </div>
  );
}

// ====== ROOM ======
function Room() {
  const roomId = getParam('id', '1');
  const [messages, setMessages] = useState([
    { id: 1, author: 'User', text: 'Hello YUNOW' },
  ]);
  const inputRef = useRef();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="p-4 border-b border-gray-800 flex items-center gap-2">
        <button onClick={() => history.back()}>
          <ArrowLeft />
        </button>
        <h1 className="font-bold">Room {roomId}</h1>
      </div>

      <div className="flex-1 p-4 space-y-2">
        {messages.map(m => (
          <div key={m.id} className="bg-gray-900 p-3 rounded-xl">
            <b>{m.author}:</b> {m.text}
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2 border-t border-gray-800">
        <input
          ref={inputRef}
          className="flex-1 bg-gray-900 rounded-xl px-3"
          placeholder="Say something..."
        />
        <button
          onClick={() => {
            setMessages([
              ...messages,
              { id: Date.now(), author: 'You', text: inputRef.current.value },
            ]);
            inputRef.current.value = '';
          }}
          className="px-4 bg-white text-black rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

// ====== ROOT ======
export default function Page() {
  const page = getParam('page', 'home');

  if (page === 'central') return <CentralSquare />;
  if (page === 'district') return <District />;
  if (page === 'room') return <Room />;

  return <Home />;
}
