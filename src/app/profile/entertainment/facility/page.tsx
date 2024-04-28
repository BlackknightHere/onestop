import MenuTab from "@/app/components/MenuTab";
import MenuSection from "@/app/components/Menusection";


export default function Facility(){
    return(
        <main>
            <div className="flex ml-5 mt-20">
                <a href="/profile">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>สิ่งอำนวยความสะดวก</h1>
            </div>
            <div className='mt-6'>
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Lost and Found" icon="/education.png" link='/profile/entertainment/facility/lostandfound' /> {/* Using a reusable MenuSection component */}
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="TU Booking" icon="/faculty.png" link='/profile/entertainment/facility/tu_booking'/>
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Anywheel" icon="/statistic.png" link='/profile/entertainment/club' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="TU Blog" icon="/statistic.png" link='/profile/entertainment/tu_blog' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Baan TU" icon="/statistic.png" link='' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="GOGO" icon="/statistic.png" link='' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Uber TU" icon="/statistic.png" link='/profile/entertainment/facility/uber' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="ระบบขนส่ง" icon="/statistic.png" link='' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Libary" icon="/statistic.png" link='' />
                <hr className="h-4 font-bold mt-2" />
                <MenuTab></MenuTab>
            </div>
        </main>
    )
}