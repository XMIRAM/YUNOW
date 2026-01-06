'use client';

import { useSearchParams } from 'next/navigation';
import Home from '@/Pages/Home';
import CentralSquare from '@/Pages/CentralSquare';
import District from '@/Pages/District';
import Room from '@/Pages/Room';

export default function Page() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 'home';

  if (page === 'central') return <CentralSquare />;
  if (page === 'district') return <District />;
  if (page === 'room') return <Room />;

  return <Home />;
}
