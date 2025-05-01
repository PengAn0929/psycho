'use client';

import { DatePicker } from 'antd';


export default function CalenderPage({year, month, day, day2}) {

  return (
     
    <div className='relative bg-white rounded-2xl flex items-center justify-center flex-col text-[#4c37AC] p-6'>
        <div className='flex justify-between'> 2025 </div>
        <div className='absolute top-4 right-4'> 五月 </div>
        <div className='text-[240px]'> 01 </div>
        <div className='text-[60px]'> 星期四 </div>
    </div>

  );
}