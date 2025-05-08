'use client';

import { DatePicker } from 'antd';


export default function MobileFrame({children}) {

  return (
    <>
        <div className="w-[33%] min-w-[380px] max-w-[420px] h-[852px] bg-white rounded-2xl flex justify-center items-center p-[52px] relative overflow-hidden">
        {children}
        </div>
    </>

  )
}