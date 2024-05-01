import React from 'react';

import MenuTab from '@/app/components/MenuTab';

export default function Register(){
return(
<main>
    <div className='flex ml-5 mt-20'>
        <a href="/profile/education">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>ลงทะเบียนเรียน</h1>
    </div>
        <div className='flex'>
            <h1 className='text-sm mt-4 ml-16'>วางแผน / ลงทะเบียนเรียน</h1>
            <a href="/profile/education/register/subject_submit">
            <img src="/add_circle.png" alt="add_circle" width={30} className='ml-28 mt-2' />
            </a>
        </div>


    <div className="max-w-3xl mx-auto px-8">
        <div role="tablist" aria-label="tabs"
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-6 -ml-3 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
            <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                className="relative block  px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    ตารางที่ชอบ
                </span>
            </button>
            <a href="/profile/education/register/plan">
                <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                className="relative block px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    แผนร่าง
                </span>
            </button></a>
        </div>
    </div>
    <MenuTab></MenuTab>

</main>
);
}