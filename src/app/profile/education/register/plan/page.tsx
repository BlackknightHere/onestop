import React from 'react';

import MenuTab from '@/app/components/MenuTab';

export default function Plan(){
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
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-6 -ml-3 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-200 -mx-1">
            <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                className="relative block  px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    ตารางที่ชอบ
                </span>
            </button>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                className="relative block px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    แผนร่าง
                </span>
            </button>
        </div>
    </div>
    <div className="mx-6 ">
        <div role="tab-panel " id="panel-1" className="p-5 mt-5 bg-gray-100  rounded-2xl">
            <h1 className="font-semibold -mt-2 ">
                CN311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <div className=' flex justify-end -mt-5 font-bold  ml-20'>
                <img src="/delete.png" alt="delete" />
            </div>
            <h1 className='mt-2 text-xs font-semibold text-yellow-400'>
                1/1 SECTION SELECTED
            </h1>

        </div>
        <div role="tab-panel " id="panel-1" className="p-5 mt-3 bg-gray-100  rounded-2xl">
            <h1 className="font-semibold -mt-2 ">
                CN311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <div className=' flex justify-end -mt-5 font-bold  ml-20'>
                <img src="/delete.png" alt="delete" />
            </div>
            <h1 className='mt-2 text-xs font-semibold text-yellow-400'>
                1/1 SECTION SELECTED
            </h1>

        </div>
        <div role="tab-panel " id="panel-1" className="p-5 mt-3 bg-gray-100  rounded-2xl">
            <h1 className="font-semibold -mt-2 ">
                CN311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <div className=' flex justify-end -mt-5 font-bold  ml-20'>
                <img src="/delete.png" alt="delete" />
            </div>
            <h1 className='mt-2 text-xs font-semibold text-yellow-400'>
                1/1 SECTION SELECTED
            </h1>

        </div>
        <div role="tab-panel " id="panel-1" className="p-5 mt-3 bg-gray-100  rounded-2xl">
            <h1 className="font-semibold -mt-2 ">
                CN311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <div className=' flex justify-end -mt-5 font-bold  ml-20'>
                <img src="/delete.png" alt="delete" />
            </div>
            <h1 className='mt-2 text-xs font-semibold text-yellow-400'>
                1/1 SECTION SELECTED
            </h1>

        </div>
        <div role="tab-panel " id="panel-1" className="p-5 mt-3 bg-gray-100  rounded-2xl">
            <h1 className="font-semibold -mt-2 ">
                CN311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <div className=' flex justify-end -mt-5 font-bold  ml-20'>
                <img src="/delete.png" alt="delete" />
            </div>
            <h1 className='mt-2 text-xs font-semibold text-yellow-400'>
                1/1 SECTION SELECTED
            </h1>

        </div>
    </div>
    <MenuTab></MenuTab>

</main>
);
}