'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import { usePsyStore, useQuestionStore } from '@/app/store/store';

export default function QuestionPage({ questionIndex, nextStep }) {
  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  // 👉 背景圖陣列直接寫這裡
  const bgImages = [
    "/bg/qbg1.png",
    "/bg/qbg2.png",
    "/bg/qbg3.png",
    "/bg/qbg4.png",
    "/bg/qbg5.png",
    "/bg/qbg6.png"
  ];

  const bgImage = bgImages[questionIndex] || "/bg/qbg.png"; // fallback 預設背景

  const clickAnswer = (option) => {
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
    nextStep();
  };

  return (
    <MobileFrame>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center px-4 py-10 gap-6">
        <div className="text-black font-semibold text-sm border border-black rounded-full w-[48px] h-[48px] flex items-center justify-center">
          Q{questionIndex + 1}
        </div>

        <h2 className="text-black font-bold text-xl text-center leading-relaxed whitespace-pre-wrap">
          {questionData.questions[questionIndex].title}
        </h2>

        <div className="w-full flex flex-col gap-4 mt-6">
          {questionData.questions[questionIndex].options.map((option) => (
            <div
              key={option.title}
              onClick={() => clickAnswer(option)}
              className="w-full rounded-full bg-teal-500 text-white text-sm py-3 text-center cursor-pointer font-medium hover:scale-105 active:scale-95 transition-transform"
            >
              {option.title}
            </div>
          ))}
        </div>
      </div>
    </MobileFrame>
  );
}
