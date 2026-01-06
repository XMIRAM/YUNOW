'use client';

import React, { useState } from 'react';

import AvatarPicker from '../components/onboarding/AvatarPicker';
import SubscriptionModal from '../components/subscription/SubscriptionModal';
import CosmeticsPanel from '../components/cosmetics/CosmeticsPanel';
import DistrictPortal from '../components/world/DistrictPortal';

export default function Page() {
  const [user, setUser] = useState(null);
  const [showSub, setShowSub] = useState(false);
  const [showCosmetics, setShowCosmetics] = useState(false);

  if (!user) {
    return <AvatarPicker onComplete={setUser} />;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user.displayName}
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <DistrictPortal district="central" />
        <DistrictPortal district="cafe" />
        <DistrictPortal district="court" />
        <DistrictPortal district="market" />
      </div>

      <div className="flex gap-3 mt-8">
        <button
          className="px-4 py-2 bg-violet-600 rounded-xl"
          onClick={() => setShowSub(true)}
        >
          Upgrade
        </button>

        <button
          className="px-4 py-2 bg-gray-700 rounded-xl"
          onClick={() => setShowCosmetics(true)}
        >
          Cosmetics
        </button>
      </div>

      <SubscriptionModal
        isOpen={showSub}
        onClose={() => setShowSub(false)}
      />

      <CosmeticsPanel
        isOpen={showCosmetics}
        onClose={() => setShowCosmetics(false)}
        avatarId={user.avatarId}
        onSave={(v) => console.log(v)}
      />
    </div>
  );
}
