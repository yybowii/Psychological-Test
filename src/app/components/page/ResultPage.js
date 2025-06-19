import React from 'react';
import MobileFrame from '../MobileFrame';

const flowerMeanings = {
  sakura: {
    name: "櫻花",
    title: "細膩純真的靈魂",
    description: "你是一個擁有細膩純真心靈的人。性格優雅安靜，能為周圍的人帶來平和的能量。具有深度的思考能力和溫暖的感性，藝術感知力特別出眾。",
    traits: ["細膩", "純真", "優雅", "藝術", "感性"]
  },
  sunflower: {
    name: "向日葵",
    title: "充滿活力的陽光",
    description: "你就像太陽一樣，擁有明亮積極的能量。性格開朗活潑，能為周圍的人帶來歡樂與活力。具有領導才能，不斷朝著目標成長的特質。",
    traits: ["積極", "活潑", "群性", "領導", "熱情"]
  },
  lavender: {
    name: "薰衣草",
    title: "沉穩智慧的思考者",
    description: "你是一個擁有沉穩深邃思維的人。珍惜獨處時光，用深刻的洞察力解決問題。性格穩重可靠，常常扮演值得信賴的諮詢者角色。",
    traits: ["沉穩", "智慧", "謹慎", "洞察", "穩重"]
  },
  camellia: {
    name: "山茶花",
    title: "堅強獨特的個性",
    description: "你擁有堅強的內在和獨特的個性。堅持自己的方式，具有創意和創新的思維。即使在逆境中也能堅定地走自己的路。",
    traits: ["獨創", "堅強", "創意", "意志", "個性"]
  },
  tulip: {
    name: "鬱金香",
    title: "實用且平衡的性格",
    description: "你是一個具有實用且平衡思維的人。性格系統化且邏輯性強，擅長有效率地解決問題。追求穩定與成長的平衡視角。",
    traits: ["實用", "平衡", "系統", "邏輯", "效率"]
  }
};

const ResultPage = ({ score, onRestart }) => {
  // Find the flower with the highest score
  const dominantFlower = Object.entries(score).reduce((a, b) => 
    score[a] > score[b[0]] ? a : b[0]
  );

  const result = flowerMeanings[dominantFlower];

  return (
    <MobileFrame>
      <div className="min-h-full flex flex-col items-center justify-center bg-white p-4">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            你的花朵是{result.name}
          </h1>
          
          <h2 className="text-xl font-semibold text-blue-600 mb-6">
            {result.title}
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {result.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {result.traits.map((trait, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full"
              >
                {trait}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={onRestart}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-colors duration-150
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              重新測驗
            </button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
};

export default ResultPage; 