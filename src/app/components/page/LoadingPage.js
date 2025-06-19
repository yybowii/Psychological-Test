import React from 'react';
import MobileFrame from '../MobileFrame';

const LoadingPage = () => {
  return (
    <MobileFrame>
      <div className="min-h-full flex flex-col items-center justify-center bg-white">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <p className="mt-4 text-xl text-gray-600">分析中...</p>
      </div>
    </MobileFrame>
  );
};

export default LoadingPage; 