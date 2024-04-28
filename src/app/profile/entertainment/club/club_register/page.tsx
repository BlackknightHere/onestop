import MenuTab from "@/app/components/MenuTab";
import React from "react";

export default function Club_register(){
    return(
        <main>
            <div className="flex ml-5 mt-20">
                <a href="/profile/entertainment">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>ชมรม</h1>
            </div>
            <div className="max-w-3xl mx-auto px-8 ml-2">
                <div role="tablist" aria-label="tabs"
                    className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-6 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -ml-5 ">
                    <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
                    <a href="/profile/entertainment/club">
                    <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                        className="relative block  px-6 tab rounded-xl">
                        <span className="text-gray-800 font-semibold">
                            รายชื่อชมรม
                        </span>
                    </button>
                    </a>
                    <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                        className="relative block px-6 tab rounded-xl">
                        <span className="text-gray-800 font-semibold">
                            ตั้งชมรม
                        </span>
                    </button>
    
                </div>
            </div>
            <div className="bg-gray-200 p-2 mx-5 rounded-2xl mt-6 pb-5">
                <h1 className="font-semibold ml-6">
                    ชมรม
                </h1>
                <input type="text" name="club" id="club" className="ml-5 rounded-xl mt-2 pr-20 pl-4" />
                <h1 className="font-semibold ml-6 mt-4">
                    รายละเอียด
                </h1>
                <input type="text" name="detail" id="detail" className="pr-20 pl-4 ml-5 rounded-xl mt-2 pb-10" />
            </div>
            <div className="flex justify-center items-center">
                <input type="submit" value="ยืนยัน" className="p-1 bg-gray-300 px-10 mt-6"/>
            </div>
            //ไม่ได้ทำ form action ไว้เลยกดยืนยันแล้วไม่ขยับ

        </main>
    );
}