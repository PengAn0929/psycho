'use client';

import Image from 'next/image';

export default function MobileFrame({ children }) {
  return (
    <div className="min-h-screen w-screen bg-gray-200 flex justify-center items-center">
      {/* 卡片容器（背景圖 + 白色覆蓋） */}
      <div className="relative w-[33%] min-w-[380px] max-w-[420px] h-[720px] bg-white rounded-2xl flex justify-center items-center overflow-hidden">
        {/* 卡片內背景格線圖 */}
        <Image
          src="/bg/bg.png"
          alt="背景"
          fill
          className="absolute inset-0 object-cover z-0"
        />
        <div className="relative z-10 w-full h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}