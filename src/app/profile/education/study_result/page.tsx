import React from 'react';

import MenuTab from '@/app/components/MenuTab';

export default function study_result(){
return(
<main className="">
    <div className='flex ml-5 mt-20'>
        <a href="/profile/education">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>ผลการศึกษา</h1>
    </div>
    <div className="max-w-3xl mx-auto px-8">
        <div role="tablist" aria-label="tabs"
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-10 mt-5 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
            <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                className="relative block  px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    ภาคเรียน
                </span>
            </button>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                className="absolute block px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold ml-48">
                    รายวิชาที่ลงได้
                </span>
            </button>
        </div>
    </div>
    <h1 className='font-semibold text-sm mx-8 mt-4 text-gray-400'>ภาคเรียน 1/2566 </h1>
    <div className="bg-gray-200  rounded-2xl mx-8">
        <div role="tab-panel " id="panel-1" className="p-5 mt-5 ">
            <h1 className="font-semibold -mt-2 ">
                CN311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>

        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                CN321 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                CN200 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF210 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF221 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF222 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF231 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                JC260 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF220 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                TU109 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>

        <div role="tab-panel " id="panel-2"
            className="absolute top-0 invisible tab-panel p-5 mt-10 transition duration-300">
            <h1 className="font-semibold -mt-2 ">
                โปรแกรมจ้า
            </h1>
            <p className="text-xs mt-2">
                รายละเอียด
            </p>
        </div>
    </div>
    <h1 className='font-semibold text-sm mx-8 mt-4 text-gray-400'>ภาคเรียน 2/2566 </h1>
    <div className="bg-gray-200  rounded-2xl mx-8">
        <div role="tab-panel " id="panel-1" className="p-5 mt-5 ">
            <h1 className="font-semibold -mt-2 ">
                CN311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>

        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                CN321 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                CN200 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF210 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF221 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF222 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF231 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                JC260 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                SF220 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-2 ">
                TU109 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
                ระบบปฏิบัติการ
            </p>
            <h1 className=' flex justify-end -mt-8 font-bold text-xl text-blue-300 ml-20'>
                A
            </h1>
        </div>

        <div role="tab-panel " id="panel-2"
            className="absolute top-0 invisible tab-panel p-5 mt-10 transition duration-300">
            <h1 className="font-semibold -mt-2 ">
                โปรแกรมจ้า
            </h1>
            <p className="text-xs mt-2">
                รายละเอียด
            </p>
        </div>
    </div>
    <MenuTab />
    <script src="main.js"></script>
</main>
);
}