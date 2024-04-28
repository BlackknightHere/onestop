import React from 'react';
import MenuTab from '../../components/MenuTab';

export default function UserProfile() { // Using a descriptive tag
  return (
    <main className="flex flex-col ">  {/* Main container as column */}
        <div className='mt-20'>
            <a href="/profile">
                <img src="/left.png" alt="" className='absolute ml-2'/>
            </a>
            <p className="text-2xl font-bold ml-9 -mt-1">ข้อมูลนักศึกษา</p>
            <div className='flex flex-col justify-center items-center'>
                <img src="/card.png" alt="card" className='mt-10 ' width={250}/>
            </div>
            <div className='bg-gray-300 py-3 mx-5 mt-5 rounded-2xl'>
                <div className='text-left ml-4 -mt-1  text-xs'>
                    <p className='font-bold text-lg'>ที่อยู่</p> <br />
                    <p className='-mt-3'>รายละเอียด</p>

                </div>
            </div>
            <div className='bg-gray-300 py-3 mx-5 mt-5 rounded-2xl'>
                <div className='text-left ml-4 -mt-1  text-xs'>
                    <p className='font-bold text-lg'>เบอร์โทร</p> <br />
                    <p className='-mt-3'>0987465123</p>
                </div>
            </div>
            <MenuTab/>
        </div>
    </main>
  );
}


function MenuSection({ title, icon = null }: { title: any; icon?: any }) {
    return (
      <a href="/profile/education">
        <div className="flex -mt-2 items-center">
        {icon && <img src={icon} className="ml-2" alt={title} />}
        <h1 className="ml-3 font-serif text-lg">{title}</h1>
        <img src="/rectangle.png" className="-mt-1 ml-auto mr-4" />
        <hr className="h-4 font-bold mt-6" />
      </div>
      </a>
    );
  }
  


