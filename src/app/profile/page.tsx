import React, { useState } from 'react';
import MenuTab from '../components/MenuTab';
import MenuSection from '../components/Menusection';

interface Props {
    // Define props interface here if needed
}

const Home: React.FC<Props> = () => {
    // Component logic here
    const name = "Sabig Benmumin";
    const STID = "6522222222"
    const major = "KFC";

    return (
        <div>
            <a href="/profile/profile_detail">
                <div className="bg-yellow-400 py-3 mx-2 mt-20 rounded-xl flex items-center">
                    <img src="profile.png" className="ml-2 mt-1 mr-4" alt="Profile Picture" />
                    <div className="flex-grow">
                        <h3 className="font-inter text-black text-xl ">{name}</h3>
                        <p className="font-inter text-black text-sm">{STID}</p>
                        <p className="text-black text-sm font-inter">{major}</p>
                    </div>
                </div>
            </a>
            <div className='mt-4'>
                <h1 className="text-xl font-bold ml-2">Main Menu</h1>
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="การศึกษา" icon="education.png" link='/profile/education' /> {/* Using a reusable MenuSection component */}
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="คณะ" icon="faculty.png" link='' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="สถิติ" icon="statistic.png" link='' />
                <hr className="h-4 font-bold mt-2" />
            </div>
            <div className='mt-1'>
                <h1 className="text-xl font-bold ml-2">Favourite</h1>
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="ชมรม" icon="" link='' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Tu Blog" icon="" link='/profile/entertainment/tu_blog' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Entertainment" icon="" link='/profile/entertainment' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Tu Blog" icon="" link='/profile/entertainment/tu_blog' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Tu Blog" icon="" link='' />
                <hr className="h-4 font-bold mt-2" />
            </div>
            <div className='mt-1'>
                <h1 className="text-xl font-bold ml-2">Popular</h1>
                <div className='mt-5 flex flex-wrap'>
                    <p className='bg-gray-100 w-72 h-72 ml-5 '></p>
                    <p className='bg-gray-100 w-72 h-72 ml-5 '></p>
                    <p className='bg-gray-100 w-72 h-72 ml-5 '></p>
                    <p className='bg-gray-100 w-72 h-72 ml-5 '></p>
                </div>
            </div>
            {/*เดี๋ยวมาดูต่อว่าต้องใช้ flexไหน*/}

            <div className=''>
                <MenuTab />

            </div>
        </div>
    );
};

export default Home;
