'use client';

import MobileFrame from '@/components/layout/MobileFrame';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingPage() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <MobileFrame>
      <div className="h-full w-full bg-gradient-to-b from-[#FFF8F2] to-[#FADADD] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/petals.png')] bg-cover opacity-10 z-0 animate-pulse" />

        <motion.div
          className="text-[#F080A0] text-2xl font-semibold z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          正在綻放你的花朵{dots}
        </motion.div>

        <motion.div
          className="absolute w-72 h-72 rounded-full bg-white blur-3xl opacity-20 top-20 left-1/2 -translate-x-1/2 z-0"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>
    </MobileFrame>
  );
}
