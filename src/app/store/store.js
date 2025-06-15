import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 6,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: [
    {
      title: "你站在期末週的大門前，眼前有四條路，你走進哪一條？",
      options: [
        { title: "平滑的柏油路，兩側有指示牌", value: 1 },
        { title: "鋪著落葉的小徑，聽得到鳥叫聲" , value: 2},
        { title: "下著雨的石階，有點滑" , value: 3},
        { title: "人很多的捷徑，看起來有人在發傳單" , value: 4},
      ],
    },
    {
      title: "路邊有一張長椅，上面擺著一樣東西，你靠近一看，是？",
      options: [
        { title: "一疊已標好色的筆記紙", value: 1 },
        { title: "一本厚書，中間夾著餅乾", value: 2 },
        { title: "一本解不開的題目本，頁面泛黃", value: 3 },
        { title: "幾張寫了「考古題關鍵」的便條紙" , value: 4},
      ],
    },
    {
      title: "你在樹下坐著，天空突然飄下紙條，上面寫了一句話，你抽到哪一張？",
      options: [
        { title: "「按照計畫，一切如常」", value: 1 },
        { title: "「走到哪算到哪吧～」" , value: 2},
        { title: "「你忘了東西，快回去找」", value: 3},
        { title: "「有人知道這題怎麼寫」" , value: 4},
      ],
    },
    {
      title: "路的盡頭有一扇門，你打開後發現是一間考場。你進去後？",
      options: [
        { title: "找到座位，開始檢查文具" , value: 1},
        { title: "坐下來，盯著天花板想人生", value: 2},
        { title: "緊抓桌邊深呼吸，發現汗手心" , value: 3},
        { title: "左顧右盼，看有沒有人在看筆記" , value: 4},
      ],
    },
    {
      title: "考完後你走進一間空教室，黑板上留下上一位同學寫的一句話，那句話是？",
      options: [
        { title: "「複習使人自由」" , value: 1},
        { title: "「考完了就是假期」" , value: 2},
        { title: "「還有一科⋯⋯」" , value: 3},
        { title: "「下學期再戰」" , value: 4},
      ],
    },
    {
      title: "你坐在草地上，陽光灑落。你閉上眼，期末的你變成了一種聲音，你聽到⋯⋯",
      options: [
        { title: "筆劃過紙張的沙沙聲" , value: 1},
        { title: "咕嚕的吞嚥聲與打呵欠" , value: 2},
        { title: "心跳與鐘聲混合" , value: 3},
        { title: "鍵盤、通知、LINE提示音" , value: 4},
      ],
    },
  ],
}))




export { usePsyStore, useQuestionStore }