'use client';

export default function StartPage({ onStart }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6">
      {/* 標題 */}
      <div>
        <h1 className="text-3xl font-bold text-[#F080A0] mb-2 text-center">
          🌸 你的性格像哪一朵花？
        </h1>
        <p className="text-[#555] mb-4 text-sm text-center">
          透過 7 個問題，找出最適合你的花朵性格
        </p>

        {/* 花朵列表 */}
        <div className="grid grid-cols-5 gap-2 text-sm mt-4 text-center">
          {[
            ['🌸', '櫻花'],
            ['🌻', '向日葵'],
            ['💜', '薰衣草'],
            ['🌺', '山茶花'],
            ['🌷', '鬱金香']
          ].map(([icon, name]) => (
            <div key={name} className="flex flex-col items-center justify-center">
              <div className="text-xl">{icon}</div>
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 說明 */}
      <div className="bg-[#E6F0FF] text-[#333] rounded-lg p-4 text-sm leading-relaxed mt-6">
        <p className="font-bold text-[#1E3A8A] mb-2">測驗說明</p>
        <ul className="list-disc list-inside space-y-1">
          <li>所需時間：約 3 分鐘</li>
          <li>問題數量：7 題</li>
          <li>這是一個沒有標準答案的性格測驗</li>
          <li>請選擇最符合你直覺的答案</li>
        </ul>
      </div>

      {/* 按鈕 */}
      <div className="w-full text-center mt-6">
        <button
          onClick={onStart}
          className="w-full bg-[#F080A0] text-white font-semibold py-3 rounded-full hover:bg-[#e66890] transition shadow"
        >
          開始測驗
        </button>
      </div>
    </div>
  );
}
