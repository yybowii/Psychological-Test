'use client';

import React from 'react';

const MobileFrame = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md h-[800px] bg-white rounded-3xl shadow-lg overflow-hidden relative">
        {/* Status Bar */}
        <div className="h-6 bg-white flex items-center justify-between px-6 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl"></div>
        </div>
        
        {/* Content */}
        <div className="h-[calc(100%-1.5rem)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame; 