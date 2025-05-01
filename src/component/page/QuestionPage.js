'use client';

import { DatePicker } from 'antd';
import MobileFrame from '@/component/layout/MobileFrame'

export default function QuestionPage({questionIndex}) {

  return (
    <>
    <MobileFrame>
      QuestionPage: Q{questionIndex}
    </MobileFrame>
    </>

  )
}