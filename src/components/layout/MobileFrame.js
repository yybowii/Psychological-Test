'use client';

export default function MobileFrame({ children }) {
  return (
    <div className="w-[390px] max-h-[90vh] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <div className="w-full h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
