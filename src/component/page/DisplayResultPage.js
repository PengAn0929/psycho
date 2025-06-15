'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';

export default function DisplayResultPage({ nextStep }) {
  return (
    <MobileFrame>
      <main className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/bg/11bg.png"
          alt="背景"
          fill
          className="absolute inset-0 object-cover z-0"
        />

        <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-85 text-center max-w-xs mx-auto">
          <h1 className="text-2xl font-black leading-relaxed mb-6">
            點擊顯示你是哪種<br />大學期末生
          </h1>

          <button
            onClick={nextStep}
            className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 mt-2"
          >
            查看結果
          </button>
        </div>
      </main>
    </MobileFrame>
  );
}
