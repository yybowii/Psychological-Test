import React from 'react';
import MobileFrame from '../MobileFrame';

const StartPage = ({ onStart }) => {
  return (
    <MobileFrame>
      <div className="min-h-full flex flex-col items-center justify-center bg-white p-4">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🌸 你的性格像哪一朵花？
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            透過7個問題，找出最適合你的花朵性格
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="text-center space-y-2">
              <span className="text-3xl">🌸</span>
              <p className="text-gray-700">櫻花</p>
            </div>
            <div className="text-center space-y-2">
              <span className="text-3xl">🌻</span>
              <p className="text-gray-700">向日葵</p>
            </div>
            <div className="text-center space-y-2">
              <span className="text-3xl">💜</span>
              <p className="text-gray-700">薰衣草</p>
            </div>
            <div className="text-center space-y-2">
              <span className="text-3xl">🌺</span>
              <p className="text-gray-700">山茶花</p>
            </div>
            <div className="text-center space-y-2">
              <span className="text-3xl">🌷</span>
              <p className="text-gray-700">鬱金香</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              測驗說明
            </h2>
            <ul className="text-left text-blue-800 space-y-2">
              <li>• 所需時間：約3分鐘</li>
              <li>• 問題數量：7題</li>
              <li>• 這是一個沒有標準答案的性格測驗</li>
              <li>• 請選擇最符合你直覺的答案</li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg
                     hover:bg-blue-700 transition-colors duration-150
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            開始測驗
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};

export default StartPage; 