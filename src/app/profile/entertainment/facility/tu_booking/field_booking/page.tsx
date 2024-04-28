import MenuTab from "@/app/components/MenuTab";

export default function Field(){
return(
<main>
    <div className='flex ml-5 mt-20'>
        <a href="/profile/entertainment/facility">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>TU Booking</h1>
    </div>
    <div className="max-w-3xl mx-auto px-8">
        <div role="tablist" aria-label="tabs"
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center  px-10 -ml-3 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 ">
            <div className="absolute indicator my-auto top-0 bottom-5 w-44 h-6 ml-40 items-end  mt-1 rounded-xl bg-white  "></div>
            <a href="/profile/entertainment/facility/tu_booking">
                <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                    className="relative block px-6 tab rounded-xl">
                    <span className="text-gray-800 font-semibold">
                        จองสนาม
                    </span>
                </button>
            </a>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                className="relative block  px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    จองห้อง
                </span>
            </button>
        </div>
    </div>
    <div className="grid grid-rows-2 grid-flow-col gap-4 ml-5 mt-5">
        <div className="">
            <img src="/fc1.png" alt="fc1" />
            <h1 className="text-xs mt-2 font-bold">Badminton Court Gym 4</h1>
            <div className="flex ">
                <h1 className="text-xs font-light text-gray-800 ">Total Court</h1>
                <h1 className="text-xs font-light text-gray-800 ml-28 absolute">13 Court</h1>
            </div>

        </div>
        <div>
            <img src="/fc2.png" alt="fc2" />

            <h1 className="text-xs mt-2 font-bold">Squash Court</h1>
            <div className="flex ">
                <h1 className="text-xs font-light text-gray-800 ">Total Court</h1>
                <h1 className="text-xs font-light text-gray-800 ml-28 absolute">13 Court</h1>
            </div>
        </div>
        <div>
            <img src="/fc3.png" alt="fc3" />

            <h1 className="text-xs mt-2 font-bold">Badminton Court Interzone</h1>
            <div className="flex ">
                <h1 className="text-xs font-light text-gray-800 ">Total Court</h1>
                <h1 className="text-xs font-light text-gray-800 ml-28 absolute">13 Court</h1>
            </div>
        </div>
        <div>
            <img src="/fc4.png" alt="fc4" />

            <h1 className="text-xs mt-2 font-bold">Tennis Court</h1>
            <div className="flex ">
                <h1 className="text-xs font-light text-gray-800 ">Total Court</h1>
                <h1 className="text-xs font-light text-gray-800 ml-28 absolute">10 Court</h1>
            </div>
        </div>
    </div>
</main>
)
}