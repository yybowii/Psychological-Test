'use client';

import MobileFrame from '@/components/layout/MobileFrame';
import { motion } from 'framer-motion';

const questions = [
  {
    question: '當你感到壓力時，你最想做的是？',
    options: [
      { text: '沉浸在春日花海裡，感受微風輕拂', flower: 'sakura' },
      { text: '曬著陽光，做些輕鬆運動', flower: 'sunflower' },
      { text: '靜坐冥想，聽著舒服的音樂', flower: 'lavender' },
      { text: '找一個安靜的地方，享受獨處時光', flower: 'camellia' }
    ],
  },
  {
    question: '你最喜歡哪種天氣？',
    options: [
      { text: '陽光明媚的晴天', flower: 'sunflower' },
      { text: '柔和微風的春日午後', flower: 'sakura' },
      { text: '陣雨過後的清新空氣', flower: 'lavender' },
      { text: '晴朗但帶點涼意的秋天', flower: 'tulip' }
    ],
  },
  {
    question: '朋友怎麼形容你的個性？',
    options: [
      { text: '熱情開朗，總是帶給大家歡樂', flower: 'sunflower' },
      { text: '溫柔浪漫，總有細膩感受', flower: 'sakura' },
      { text: '冷靜沉穩，給人安心感', flower: 'lavender' },
      { text: '堅毅獨立，有自己的原則', flower: 'camellia' }
    ],
  },
  {
    question: '假如你收到一份禮物，你希望是？',
    options: [
      { text: '色彩繽紛的花束', flower: 'sunflower' },
      { text: '手寫詩集', flower: 'sakura' },
      { text: '香薰蠟燭', flower: 'lavender' },
      { text: '精緻的飾品', flower: 'tulip' }
    ],
  },
  {
    question: '你在聚會中通常是？',
    options: [
      { text: '活躍帶動氣氛的人', flower: 'sunflower' },
      { text: '靜靜聆聽的觀察者', flower: 'lavender' },
      { text: '跟幾個親密朋友聊得開心', flower: 'sakura' },
      { text: '保持適度距離，偶爾發言', flower: 'camellia' }
    ],
  },
  {
    question: '你認為理想的約會地點是？',
    options: [
      { text: '充滿陽光的戶外咖啡廳', flower: 'sunflower' },
      { text: '靜謐的藝術畫廊', flower: 'lavender' },
      { text: '盛開櫻花的小公園', flower: 'sakura' },
      { text: '有氣質的高級餐廳', flower: 'tulip' }
    ],
  },
  {
    question: '面對人生挑戰，你會？',
    options: [
      { text: '用樂觀積極的態度迎接', flower: 'sunflower' },
      { text: '以柔軟包容的心態調適', flower: 'sakura' },
      { text: '冷靜分析，謹慎行動', flower: 'lavender' },
      { text: '堅持信念，勇敢面對', flower: 'camellia' }
    ],
  }
];

export default function QuestionPage({ questionIndex, onAnswer }) {
  const question = questions[questionIndex];
  const total = questions.length;

  return (
    <MobileFrame>
      <div className="h-full w-full bg-[#FFF8F2] rounded-2xl px-4 py-6 relative overflow-hidden">
        {/* 進度條 */}
        <div className="flex justify-center mb-6 relative">
          <div className="flex gap-1">
            {Array.from({ length: total }).map((_, idx) => (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  idx <= questionIndex ? 'bg-[#FADADD]' : 'bg-[#E6E1EC]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 問題文字 */}
        <h2 className="text-xl font-semibold text-center text-[#F080A0] mb-8">{question.question}</h2>

        {/* 選項卡片 */}
        <div className="flex flex-col gap-4">
          {question.options.map((option, idx) => (
            <motion.button
              key={idx}
              onClick={() => onAnswer(option.flower)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#A8D5BA] border border-[#E6E1EC] rounded-xl p-4 shadow hover:shadow-lg transition text-left"
            >
              {option.text}
            </motion.button>
          ))}
        </div>

        {/* 飄落背景 */}
        <div className="absolute inset-0 pointer-events-none z-0 animate-pulse opacity-10">
          <div className="w-full h-full bg-[url('/petals.png')] bg-contain bg-repeat opacity-10"></div>
        </div>
      </div>
    </MobileFrame>
  );
}
