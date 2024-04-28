import MenuTab from "@/app/components/MenuTab";

export default function Uber(){
return(
<main>
    <div className='flex ml-5 mt-20'>
        <a href="/profile/entertainment/facility">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>Uber TU</h1>
    </div>
    <div className='search-nav mt-12 relative '>
        <img src="/search.png" alt="search" className='ml-10 absolute mt-1' />
        <input type="search" name="search" id="search" placeholder='Search'
            className='ml-8 pl-10 pr-24 py-1 placeholder-white-500 text-black rounded-xl border-none ring-2 ring-gray-500 focus:ring-gray-700 focus:ring-2 bg-white' />
    </div>
    <div className=" gap-3 mx-2 grid grid-cols-3 grid-flow-col">
        <div className="p-5 bg-gray-300 px-14 py-8 mt-8 rounded-xl flex justify-center" >
            <img src="/car.png" alt="car" className="absolute -mt-4" />
            <h1 className="mt-16 font-bold text-md">Car</h1>
        </div>
        <div className="p-5 bg-gray-300 px-14 py-8 mt-8 rounded-xl  flex justify-center " >
            <img src="/bike.png" alt="car" className="absolute -mt-4" />
            <h1 className="mt-16 font-bold text-md">Bike</h1>
        </div>
        <div className="p-5 bg-gray-300 px-14 py-8 mt-8 rounded-xl flex justify-center " >
        <img src="/calendar2.png" alt="car" className="absolute -mt-4" />
            <h1 className="mt-16 font-bold text-md">Calendar</h1>
        </div>
    </div>
    <div className="flex justify-center mt-5">
        <img src="/map.png" alt="map" />
    </div>
    <div className="flex justify-center mt-4">
     <input type="submit" value="25 บาททั่วมอ กดเลย!!" id="submit"  className="p-1 px-10 bg-black text-white font-bold rounded-xl"/>
    </div>
    <MenuTab/>
</main>
)
}