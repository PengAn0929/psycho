'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import bgGrid from '@/../public/bg/rbg.png';
import bookIcon from '@/../public/bg/r1.png';
import sofaIcon from '@/../public/bg/r2.png';
import fireIcon from '@/../public/bg/r3.png';
import glassesIcon from '@/../public/bg/r4.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const playAgain = () => {
    window.location.reload();
  };

  const getResultBlock = () => {
    if (psyState.score < 10) {
      return (
        <div className="bg-[#E8F9FF] rounded-3xl p-6 pt-6 w-full text-center text-[#2D2D4F] mt-4">
          <p className="text-sm mb-2">你是自律到連期末都不敢靠近，只敢遠觀的</p>
          <h2 className="text-2xl font-extrabold mb-4">計畫學霸型</h2>
          <Image src={bookIcon} alt='book' className="mx-auto w-40 mb-4" />
          <div className="flex flex-col gap-2 mb-4">
            <div className="bg-[#2B2E65] text-white rounded-full px-4 py-1 text-sm">#時間管理大師</div>
            <div className="bg-[#2B2E65] text-white rounded-full px-4 py-1 text-sm">#筆記超整齊</div>
            <div className="bg-[#2B2E65] text-white rounded-full px-4 py-1 text-sm">#考場冷面殺手</div>
          </div>
          <p className="text-sm leading-relaxed text-left">
            在別人熬夜爆肝時，你早已完成第二輪複習<br />
            你不會臨時抱佛腳，<br />
            因為你連佛在哪都已經查好地圖<br />
            你用穩定的步調走過每一次期末，<br />
            就像走在一條早就熟悉的地圖上<br />
            他人或許覺得你「太拚」，但你知道，<br />
            你只是早點把混亂處理完，才能更自在地睡<br />
          </p>
          <div className="border border-[#2B2E65] text-xs rounded-full px-4 py-2 mt-4 inline-block text-[#2D2D4F]">
            小提醒<br />適時放過自己也沒關係，有時不完美，也是某種自由
          </div>
        </div>
      );
    }

    else if (psyState.score >= 10 && psyState.score < 14) {
      return (
        <div className="bg-[#FFF9DC] rounded-3xl p-6 pt-6 w-full text-center text-[#A08961] mt-4">
          <p className="text-sm mb-2">你是考場裡最雲淡風輕、連緊張都懶得演的</p>
          <h2 className="text-2xl font-extrabold mb-4">佛系放空型</h2>
          <Image src={sofaIcon} alt='book' className="mx-auto w-40 mb-4" />
          <div className="flex flex-col gap-2 mb-4">
            <div className="bg-[#A08961] text-white rounded-full px-4 py-1 text-sm">#能不動就不動</div>
            <div className="bg-[#A08961] text-white rounded-full px-4 py-1 text-sm">#考場一派輕鬆</div>
            <div className="bg-[#A08961] text-white rounded-full px-4 py-1 text-sm">#睡醒再說</div>
          </div>
          <p className="text-sm leading-relaxed text-center">
            你不抗拒期末，但也不特別在意<br />
            你知道人一輩子會考很多次，<br />
            但睡眠只會被剝奪一次<br />
            你信奉「讀不完就不讀，累就睡」，<br />
            有時候你會一邊寫考卷一邊想著吃什麼，<br />
            結果總是會奇蹟般勉強過關，<br />
            堪稱期末界的禪宗代表
          </p>
          <div className="border border-[#A08961] text-xs rounded-full px-4 py-2 mt-4 inline-block text-[#A08961]">
            小提醒<br />有時候放鬆真的很帥，但如果再鬆一點⋯⋯你可能真的會滑出去
          </div>
        </div>
      );
    }

    else if (psyState.score >= 14 && psyState.score < 18)  {
      return (
        <div className="bg-[#FFD8D8] rounded-3xl p-6 pt-4 w-full text-center text-[#D34343] mt-4">
          <p className="text-sm mb-2">你是什麼都準備了，卻總覺得還少了什麼的</p>
          <h2 className="text-2xl font-extrabold mb-4">焦慮燃燒型</h2>
          <Image src={fireIcon} alt='book' className="mx-auto w-25 mb-4" />
          <div className="flex flex-col gap-2 mb-4">
            <div className="bg-[#D34343] text-white rounded-full px-4 py-1 text-sm">#壓力製造者</div>
            <div className="bg-[#D34343] text-white rounded-full px-4 py-1 text-sm">#深夜K書哭泣組</div>
            <div className="bg-[#D34343] text-white rounded-full px-4 py-1 text-sm">#考完還是很焦</div>
          </div>
          <p className="text-sm leading-relaxed text-center">
            你不是不努力，而是太在意<br />
            哪怕已經複習兩輪，總覺得自己準備不夠<br />
            你不相信「剛好」，只相信「還不夠」<br />
            每次考試對你來說都是一場生存遊戲，<br />
            考前焦慮、考中懷疑、考後反覆檢討<br />
            但也因為你的敏感與執著，<br />
            總能在最後一刻逆轉成功
          </p>
          <div className="border border-[#D34343] text-xs rounded-full px-4 py-2 mt-4 inline-block text-[#D34343]">
            小提醒<br />焦慮不能讓你考更高，睡飽可以，再怎樣也別跟壓力談戀愛
          </div>
        </div>
      );
    }

    else if (psyState.score >= 18)  {
      return (
        <div className="bg-[#EDE4FF] rounded-3xl p-6 pt-6 w-full text-center text-[#5D4C86] mt-4">
          <p className="text-sm mb-2">你是不一定最認真，但最知道去哪找答案的</p>
          <h2 className="text-2xl font-extrabold mb-4">暗黑偷渡型</h2>
          <Image src={glassesIcon} alt='book' className="mx-auto w-40 mb-4" />
          <div className="flex flex-col gap-2 mb-4">
            <div className="bg-[#5D4C86] text-white rounded-full px-4 py-1 text-sm">#情報搜集者</div>
            <div className="bg-[#5D4C86] text-white rounded-full px-4 py-1 text-sm">#考古王者</div>
            <div className="bg-[#5D4C86] text-white rounded-full px-4 py-1 text-sm">#筆記交換職人</div>
          </div>
          <p className="text-sm leading-relaxed text-center">
            你深知考試是資訊戰，<br />
            而你，就是資訊中樞<br />
            你不一定會第一個開始讀書，<br />
            但你一定是第一個蒐集老師上課提示的人<br />
            考前你會整合筆記、統合考古、預測題型，<br />
            考場是戰場，你靠「合作式生存」一路通關<br />
            你不是不努力，而是把努力分散給朋友圈<br />
          </p>
          <div className="border border-[#5D4C86] text-xs rounded-full px-4 py-2 mt-4 inline-block text-[#5D4C86]">
            小提醒<br />靠朋友是聰明，靠自己是底氣。萬一朋友都不見了，你還是得獨自出牌
          </div>
        </div>
      );
    }
  };

  return (
    <MobileFrame>
      <main className="relative min-h-screen w-full px-4 pt-14 pb-12 bg-white overflow-hidden">
        <Image
          src={bgGrid}
          alt="背景"
          fill
          className="absolute inset-0 object-cover z-0"
        />

        <div className="relative z-10 w-full max-w-xs mx-auto">
          {getResultBlock()}
          <button
            onClick={playAgain}
            className="mt-6 bg-black text-white font-bold py-3 rounded-full w-full hover:scale-[1.02] transition"
          >
            再玩一次
          </button>
        </div>
      </main>
    </MobileFrame>
  );
}
