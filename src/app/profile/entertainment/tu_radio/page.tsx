import MenuTab from "@/app/components/MenuTab";


export default function Radio(){
    return(
        <main>
            <div className="flex ml-5 mt-20">
                <a href="/profile/entertainment">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>TU radio</h1>
            </div>
            <div className="max-w-3xl mx-auto px-8 ml-2">
                <div role="tablist" aria-label="tabs"
                    className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-6 -ml-3 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
                    <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
                    <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                        className="relative block  px-6 tab rounded-xl">
                        <span className="text-gray-800 font-semibold">
                            ผังรายการ
                        </span>
                    </button>
                    <a href="/profile/entertainment/tu_radio/radio_replay">
                    <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                        className="relative block px-6 tab rounded-xl">
                        <span className="text-gray-800 font-semibold">
                            ฟังย้อนหลัง
                        </span>
                    </button>
                    </a>
                </div>
            </div>
            <img src="/radio.png" alt="radio"  className="mx-auto mt-20"/>
        </main>
    );
}