'use client';

import MobileFrame from '@/components/layout/MobileFrame';
import { useMemo } from 'react';

const flowerData = {
  sakura: {
    name: '櫻花',
    color: '#FADADD',
    keywords: ['敏感', '浪漫', '溫柔'],
    language: '生命的短暫與美麗',
    quote: '你是春天的詩行，柔軟而悸動。',
    image: '/results/sakura.png'
  },
  sunflower: {
    name: '向日葵',
    color: '#FFE87C',
    keywords: ['樂觀', '陽光', '活力'],
    language: '忠誠與熱情',
    quote: '你像陽光般照亮周圍的一切。',
    image: '/results/sunflower.png'
  },
  lavender: {
    name: '薰衣草',
    color: '#E6E1EC',
    keywords: ['寧靜', '療癒', '細膩'],
    language: '等待與安詳',
    quote: '你的心靈是一方寧靜的花園。',
    image: '/results/lavender.png'
  },
  camellia: {
    name: '山茶花',
    color: '#FFACC0',
    keywords: ['堅毅', '優雅', '孤傲'],
    language: '完美的愛與守護',
    quote: '你在風雨中依然綻放光芒。',
    image: '/results/camellia.png'
  },
  tulip: {
    name: '鬱金香',
    color: '#FFC0CB',
    keywords: ['高貴', '理性', '柔美'],
    language: '愛與尊敬',
    quote: '你的內心深藏一片高潔的花海。',
    image: '/results/tulip.png'
  }
};

export default function ResultPage({ score, onRestart }) {
  const flower = useMemo(() => {
    const entries = Object.entries(score);
    const max = Math.max(...entries.map(([_, val]) => val));
    const top = entries.filter(([_, val]) => val === max);
    const picked = top[Math.floor(Math.random() * top.length)][0];
    return flowerData[picked];
  }, [score]);

  return (
    <MobileFrame>
      <div className="h-full w-full bg-[#FFF8F2] flex flex-col items-start justify-center px-6 relative">
        <img
          src={flower.image}
          alt={flower.name}
          className="w-32 h-32 object-contain absolute top-6 left-6 z-10"
        />
        <div className="flex flex-col w-full items-center text-center mt-32">
          <h2 className="text-2xl font-bold text-[#F080A0] mb-2">{flower.name}</h2>
          <p className="text-[#A8D5BA] text-sm mb-2">花語：{flower.language}</p>
          <div className="text-[#BEE3D9] text-xs mb-4">
            {flower.keywords.join(' / ')}
          </div>
          <p className="text-center text-[#E6E1EC] italic mb-6 px-4">{flower.quote}</p>

          <button
            onClick={onRestart}
            className="bg-[#FADADD] text-white px-6 py-2 rounded-full shadow hover:bg-[#f8c2d5] transition"
          >
            再測一次
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}