import MenuTab from "@/app/components/MenuTab";

export default function Subject_submit(){
return(
<main>
    <div className='flex ml-5 mt-20'>
        <a href="/profile/education/register">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>ลงทะเบียนเรียน</h1>
    </div>
    <div className="flex justify-center items-center">
        <input type="search" name="text" id="text" placeholder="ค้นหารายวิชา"className="bg-gray-200 pl-32 pr-5 -ml-1 rounded-xl mt-4 " />
    </div>
    <div className="max-w-3xl mx-auto px-8">
        <div role="tablist" aria-label="tabs"
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-2 -ml-3 mt-5 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-200 -mx-1">
            <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                className="relative block  px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    ภาคเรียน
                </span>
            </button>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                className="relative block -ml-1 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    รายวิชาที่สามารถลงได้
                </span>
            </button>
        </div>
    </div>
    <h1 className='font-semibold text-sm mx-8 mt-4 text-gray-400'>ภาคเรียน 1/2567 </h1>
    <div className="bg-gray-200  rounded-2xl mx-5">
        <div role="tab-panel " id="panel-1" className="p-5 mt-5 ">
            <h1 className="font-semibold -mt-2 ">
            SF330 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
            การกำหนดความต้องการทางซอฟต์แวร์
            </p>


        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-5 ">
            SF311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
            สถาปัตยกรรมและการออกแบบซอฟต์แวร์
            </p>
            


        </div>
        <div role="tab-panel " id="panel-1" className="p-5  ">
            <h1 className="font-semibold -mt-5 ">
            SF341 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
            การสร้างซอฟต์แวร์ 1
            </p>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-5 ">
            CN230 3 หน่วยกิต            </h1>
            <p className="text-xs mt-2">
            ระบบฐานข้อมูล
            </p>
            


        </div>
        <div role="tab-panel " id="panel-1" className="p-5  ">
            <h1 className="font-semibold -mt-5 ">
            วิชาเลือกเสรี 3 หน่วยกิต            </h1>
            <p className="text-xs mt-2">
            วิชาลือกเสรี
            </p>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5  ">
            <h1 className="font-semibold -mt-5 ">
            วิชาเลือกเสรี 3 หน่วยกิต            </h1>
            <p className="text-xs mt-2">
            วิชาลือกเสรี
            </p>
        </div>
    </div>
    <h1 className='font-semibold text-sm mx-8 mt-4 text-gray-400'>ภาคเรียน 2/2567 </h1>
    <div className="bg-gray-200  rounded-2xl mx-5">
        <div role="tab-panel " id="panel-1" className="p-5 mt-5 ">
            <h1 className="font-semibold -mt-2 ">
            SF330 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
            การกำหนดความต้องการทางซอฟต์แวร์
            </p>


        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-5 ">
            SF311 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
            สถาปัตยกรรมและการออกแบบซอฟต์แวร์
            </p>
            


        </div>
        <div role="tab-panel " id="panel-1" className="p-5  ">
            <h1 className="font-semibold -mt-5 ">
            SF341 3 หน่วยกิต
            </h1>
            <p className="text-xs mt-2">
            การสร้างซอฟต์แวร์ 1
            </p>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5 ">
            <h1 className="font-semibold -mt-5 ">
            CN230 3 หน่วยกิต            </h1>
            <p className="text-xs mt-2">
            ระบบฐานข้อมูล
            </p>
            


        </div>
        <div role="tab-panel " id="panel-1" className="p-5  ">
            <h1 className="font-semibold -mt-5 ">
            วิชาเลือกเสรี 3 หน่วยกิต            </h1>
            <p className="text-xs mt-2">
            วิชาลือกเสรี
            </p>
        </div>
        <div role="tab-panel " id="panel-1" className="p-5  ">
            <h1 className="font-semibold -mt-5 ">
            วิชาเลือกเสรี 3 หน่วยกิต            </h1>
            <p className="text-xs mt-2">
            วิชาลือกเสรี
            </p>
        </div>
    </div>
    <div className="py-12">

    </div>
    
    <MenuTab></MenuTab>
</main>
);
}