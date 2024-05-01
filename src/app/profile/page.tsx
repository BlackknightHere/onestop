import React, { useState } from 'react'
import MenuTab from '../components/MenuTab'
import MenuSection from '../components/Menusection'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const page = async () => {
    const docRef = doc(db, "student", "6512345678");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // const data = docSnap.data();
        // console.log("Document data:", docSnap.data());

    } else {
        console.log("No Such Document!");
    }

    // const student = docSnap.data();
    // try {
    //     const sid = student.id;
    //     const name = student.name;
    //     const major = student.major;
    //     // ใช้ sid, name, major ต่อไป
    // } catch {
    //     console.log("Data is undefined");
    // }

    let sid: string | undefined;
    let name: string | undefined;
    let major: string | undefined;

    const student = docSnap.data();
    if (student) {
        sid = student.id;
        name = student.name;
        major = student.major;
        // You can use sid, name, major here
    } else {
        console.log("Data is undefined");
    }

    return (
        <div>
            <a href="/profile/profile_detail">
                <div className="bg-yellow-400 py-3 mx-2 mt-20 rounded-xl flex items-center">
                    <img src="profile.png" className="ml-2 mt-1 mr-4" alt="Profile Picture" />
                    <div className="flex-grow">
                        <h3 className="font-inter text-black text-xl ">{name}</h3>
                        <p className="font-inter text-black text-sm">{sid}</p>
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
    )
}

export default page