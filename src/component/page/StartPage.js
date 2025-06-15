'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';

export default function StartPage({nextStep}) {

  return (
      <MobileFrame>
      <main className="relative min-h-screen w-screen overflow-hidden"> 
        <Image
          src="/bg/11bg.png"
          alt="背景"
          fill
          className="absolute inset-0 object-cover z-0"  
        />
        <div className="relative z-20 flex flex-col items-start justify-start px-6 pt-45 text-left max-w-xs mx-auto">
          <h1 className="text-3xl font-black leading-relaxed mb-4">
            你是哪種<br />大學期末生？
          </h1>
          <p className="text-base leading-relaxed text-black mb-6">
            期末週是人生修羅場，<br />
            有人提早三週排進度，<br />
            有人考前兩小時才翻第一頁，<br />
            有人焦慮到做夢都在背書，<br />
            也有人從頭到尾都靠朋友活下來。<br /><br />
            每個人都有自己獨特的期末生存方式。<br />
            現在，讓潛意識說話，<br />
            看看你內心到底住著哪一種期末人格。
          </p>

        <button
          onClick={nextStep}
          className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 mt-4 self-center"
        >
          START
        </button>
        </div>
        </main>
      </MobileFrame>
  );
}