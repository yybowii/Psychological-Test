import React from 'react';
import MobileFrame from '../MobileFrame';

const questions = [
  {
    question: "當我感到壓力時，我會...",
    answers: [
      { text: "需要獨處的時間", flower: "lavender" },
      { text: "想和朋友聊天", flower: "sunflower" },
      { text: "安靜地聽音樂", flower: "sakura" },
      { text: "散步整理思緒", flower: "tulip" },
      { text: "專注於喜歡的興趣", flower: "camellia" }
    ]
  },
  {
    question: "週末我通常會...",
    answers: [
      { text: "在家休息", flower: "lavender" },
      { text: "和朋友約會", flower: "sunflower" },
      { text: "在安靜的咖啡廳看書", flower: "sakura" },
      { text: "親近大自然", flower: "tulip" },
      { text: "嘗試新的興趣或活動", flower: "camellia" }
    ]
  },
  {
    question: "我理想的假期是...",
    answers: [
      { text: "在安靜的度假村放鬆", flower: "lavender" },
      { text: "和朋友一起歡樂旅行", flower: "sunflower" },
      { text: "獨自悠閒地探索城市", flower: "sakura" },
      { text: "在大自然中健行或露營", flower: "tulip" },
      { text: "體驗新的文化", flower: "camellia" }
    ]
  },
  {
    question: "遇到困難時，我會...",
    answers: [
      { text: "獨自思考並解決", flower: "lavender" },
      { text: "和周圍的人討論解決", flower: "sunflower" },
      { text: "慢慢地思考後解決", flower: "sakura" },
      { text: "分析問題本質後解決", flower: "tulip" },
      { text: "用新的角度嘗試", flower: "camellia" }
    ]
  },
  {
    question: "我理想的工作環境是...",
    answers: [
      { text: "安靜的個人空間", flower: "lavender" },
      { text: "充滿活力的社交氛圍", flower: "sunflower" },
      { text: "平靜且穩定的環境", flower: "sakura" },
      { text: "有系統且有條理的空間", flower: "tulip" },
      { text: "創意且自由的氛圍", flower: "camellia" }
    ]
  },
  {
    question: "最能代表我的是...",
    answers: [
      { text: "平靜的海洋", flower: "lavender" },
      { text: "熱鬧的城市", flower: "sunflower" },
      { text: "寧靜的黎明", flower: "sakura" },
      { text: "雄偉的山脈", flower: "tulip" },
      { text: "絢麗的彩虹", flower: "camellia" }
    ]
  },
  {
    question: "我的決策風格是...",
    answers: [
      { text: "謹慎地獨自決定", flower: "lavender" },
      { text: "聽取他人的意見", flower: "sunflower" },
      { text: "慢慢地思考後決定", flower: "sakura" },
      { text: "邏輯分析後決定", flower: "tulip" },
      { text: "憑直覺決定", flower: "camellia" }
    ]
  }
];

const QuestionPage = ({ questionIndex, onAnswer }) => {
  const currentQuestion = questions[questionIndex];

  return (
    <MobileFrame>
      <div className="min-h-full flex flex-col items-center justify-center bg-white p-4">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              {questionIndex + 1} / {questions.length}
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              {currentQuestion.question}
            </h2>
          </div>
          
          <div className="space-y-4">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => onAnswer(answer.flower)}
                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 
                         transition-colors duration-150 focus:outline-none 
                         focus:ring-2 focus:ring-blue-500"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileFrame>
  );
};

export default QuestionPage; 