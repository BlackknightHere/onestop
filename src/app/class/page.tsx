import React from 'react';

import MenuTab from '../components/MenuTab';

export default function Class(){
    return(
        <div>
            <div className='search-nav mt-20 relative '>
            <img src="search.png" alt="search" className='ml-10 absolute mt-1'/>
            <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder='Search' 
            className='ml-8 pl-10 pr-24 py-1 placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-700 focus:ring-2' />
            </div>
            <div className='expand_class flex flex-row mt-8 ml-10'>
                <img src="expand_more.png" alt="expand_more" className=''/>
                <h1 className='ml-1 font-semibold'>Class</h1>
            </div>
            {/* <div className='flex '>
                <div className="rounded-2xl ring-gray-400 ring-1 py-14 px-14 mt-5 ml-6 mr-1 flex justify-center items-center">
                    <h1 className="text-center">SF221</h1>
                </div>
                <div className="rounded-2xl ring-gray-400 ring-1 py-14 px-14 mt-5 ml-6 flex justify-center items-center">
                    <h1 className="text-center">SF221</h1>
                </div>
            </div>
            <div className='flex '>
                <div className="rounded-2xl ring-gray-400 ring-1 py-14 px-14 mt-5 ml-6 mr-1 flex justify-center items-center">
                    <h1 className="text-center">SF221</h1>
                </div>
                <div className="rounded-2xl ring-gray-400 ring-1 py-14 px-14 mt-5 ml-6 flex justify-center items-center">
                    <h1 className="text-center">SF221</h1>
                </div>
            </div> */}
            <div className='grid grid-rows-2 grid-flow-col  gap-4 mx-5 mt-5 	'>
                <div className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11  shadow-gray-200 shadow-lg  " >
                    <div className=' bg-green-700 py-10 px-0.5 -ml-8 mr-5 -mt-5 rounded-xl'></div>
                    <div className='flex flex-row '>
                        <p className=' font-semibold text-xs '>
                            <span className='font-bold text-2xl'>SF221</span><br /> {/* Remove the inner p and render SF221 directly here */}
                            Aniasf Basf <br />
                            760001
                        </p>
                    </div>
                    <img src="profile3.png" alt="" className='ml-2 mr-32 absolute mt-28 mb-0.5' width={15}/>
                    <p className='absolute mt-28 font-semibold text-xs mr-20'>25</p> 
                    <img src="teacher.png" alt=""  width={15}className='absolute mt-28  ml-2 mr-15'/>
                    <p className='absolute mt-28 ml-24 mr-2 font-semibold'style={{ fontSize: '0.65rem' }}>Doraemon</p> 
                </div>
                <div className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">
                    <div className=' bg-blue-700 py-10 px-0.5 -ml-8 mr-5 -mt-5 rounded-xl'></div>
                    <div className='flex flex-row '>
                        <p className=' font-semibold text-xs '>
                            <span className='font-bold text-2xl'>SF221</span> <br />{/* Remove the inner p and render SF221 directly here */}
                            Aniasf Basf <br />
                            760001
                        </p>
                    </div>
                    <img src="profile3.png" alt="" className='ml-2 mr-32 absolute mt-28 mb-0.5' width={15}/>
                    <p className='absolute mt-28 font-semibold text-xs mr-20'>25</p> 
                    <img src="teacher.png" alt=""  width={15}className='absolute mt-28  ml-2 mr-15'/>
                    <p className='absolute mt-28 ml-24 mr-2 font-semibold'style={{ fontSize: '0.65rem' }}>Doraemon</p> 
                </div>
                <div className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">
                    <div className=' bg-purple-700 py-10 px-0.5 -ml-8 mr-5 -mt-5 rounded-xl'></div>
                    <div className='flex flex-row '>
                        <p className=' font-semibold text-xs '>
                            <span className='font-bold text-2xl'>SF221</span> <br />{/* Remove the inner p and render SF221 directly here */}
                            Aniasf Basf <br />
                            760001
                        </p>
                    </div>
                    <img src="profile3.png" alt="" className='ml-2 mr-32 absolute mt-28 mb-0.5' width={15}/>
                    <p className='absolute mt-28 font-semibold text-xs mr-20'>25</p> 
                    <img src="teacher.png" alt=""  width={15}className='absolute mt-28  ml-2 mr-15'/>
                    <p className='absolute mt-28 ml-24 mr-2 font-semibold'style={{ fontSize: '0.65rem' }}>Doraemon</p> 
                </div>
                <div className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">
                    <div className=' bg-red-700 py-10 px-0.5 -ml-8 mr-5 -mt-5 rounded-xl'></div>
                    <div className='flex flex-row '>
                        <p className=' font-semibold text-xs '>
                            <span className='font-bold text-2xl'>SF221</span> <br />{/* Remove the inner p and render SF221 directly here */}
                            Aniasf Basf <br />
                            760001
                        </p>
                    </div>
                    <img src="profile3.png" alt="" className='ml-2 mr-32 absolute mt-28 mb-0.5' width={15}/>
                    <p className='absolute mt-28 font-semibold text-xs mr-20'>25</p> 
                    <img src="teacher.png" alt=""  width={15}className='absolute mt-28  ml-2 mr-15'/>
                    <p className='absolute mt-28 ml-24 mr-2 font-semibold'style={{ fontSize: '0.65rem' }}>Doraemon</p> 
                </div>
            </div>
            <div className='expand_class flex flex-row mt-8 ml-10'>
                <img src="expand_more.png" alt="expand_more" className=''/>
                <h1 className='ml-1 font-semibold'>Apps</h1>
            </div>
            <div className='flex flex-row justify-around -gap-6'>
                <div className=' bg-neutral-300 px-14 py-20 rounded-3xl mt-5 ml-2  '>
                    <img src="assignment.png" alt="assignment" className='absolute -ml-10 -mt-14'  width={90}/>
                    <p className='absolute -ml-11 mt-9 font-semibold'>Assingment</p>
                </div>
                <div className=' bg-neutral-300 px-14 py-20 rounded-3xl mt-5  '>
                    <img src="calendar.png" alt="calendar" className='absolute -ml-11 -mt-14'  width={90}/>
                    <p className='absolute -ml-8 mt-9 font-semibold'>Calendar</p>
                </div>
                <div className=' bg-neutral-300 px-14 py-20 rounded-3xl mt-5 mr-2 '>
                    <img src="assessment.png" alt="assessment" className='absolute -ml-11 -mt-14'  width={90}/>
                    <p className='absolute -ml-12 mt-9 font-semibold'>Assessment</p>
                </div>

            </div>
            <MenuTab/>
        </div>
    );
}


