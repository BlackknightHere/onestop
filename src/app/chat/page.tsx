import React from "react";

import MenuTab from "../components/MenuTab";

export default function Support(){
    return (
        <main className="">
            <div className="flex ml-5 mt-20">
                <a href="/profile/entertainment">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>ติดต่อซัพพอร์ท (IT.)</h1>
            </div>
            <div className="bg-gray-100 p-2 mx-6 rounded-xl mt-8 pb-3">
                <h1 className="font-bold text-lg ml-4">
                    เบอร์โทรศัพท์
                </h1>
                <h1 className="text-xs ml-4 mt-1">
                    0666666666
                </h1>
            </div>
            <div className="bg-gray-100 p-2 mx-6 rounded-xl mt-5 pb-3">
                <h1 className="font-bold text-lg ml-4">
                    @Line
                </h1>
                <h1 className="text-xs ml-4 mt-1">
                    รายละเอียด
                </h1>
            </div>
            <div className="bg-gray-100 p-2 mx-6 rounded-xl mt-5 pb-3">
                <h1 className="font-bold text-lg ml-4">
                    Facebook
                </h1>
                <h1 className="text-xs ml-4 mt-1">
                    รายละเอียด
                </h1>
            </div>
            <div className="bg-gray-100 p-2 mx-6 rounded-xl mt-5 pb-3">
                <h1 className="font-bold text-lg ml-4">
                    Instgram
                </h1>
                <h1 className="text-xs ml-4 mt-1">
                    รายละเอียด
                </h1>
            </div>
            <div className="bg-gray-100 p-2 mx-6 rounded-xl mt-5 pb-3">
                <h1 className="font-bold text-lg ml-4">
                    Instgram
                </h1>
                <h1 className="text-xs ml-4 mt-1">
                    รายละเอียด
                </h1>
            </div>
            <div className="bg-gray-100 p-2 mx-6 rounded-xl mt-5 pb-3">
                <h1 className="font-bold text-lg ml-4">
                    ส่งข้อความ
                </h1>
                {/* <input type="text" name="text" id="text"value="" /> */}
                <input type="search" name="text" id="text" className="bg-white pr-28 ml-2 rounded-xl mt-2"/>

            </div>
            
        </main>
        
    )
}