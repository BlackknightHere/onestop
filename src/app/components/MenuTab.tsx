"use client";

export default function MenuTab() {
  return (
    <div className="fixed bottom-0 w-full bg-yellow-400 pt-3"> {/* Set height to 85px */}
      <div className="flex justify-evenly items-center">
        <MenuSection icon="/class.png" title="Class" link="/class"/>
        <MenuSection icon="/chat.png" title="Chat" link="/chat"/>
        <MenuSection icon="/bank.png" title="Bank" link="/"/>
        <MenuSection icon="/profile2.png" title="Profile" link="/profile"/>
      </div>
    </div>
  );
}


function MenuSection({ icon = null, title = "" ,link=""}: { icon?: any; title: string; link:string}) {
  return (
    <div className="flex flex-col items-center"> {/* Use flexbox for column layout */}
        <a href={link}>
            {icon && <img src={icon} className="" alt={title}/>} {/* Add margin-bottom for spacing */}
        </a>
        <a href={link}>
            <h1 className="-mt-3 mb-1">{title}</h1>  
        </a>
         
    </div>
  );
}



//   "use client";

//   export default function MenuTab(){
//       return (
//           <div className='fixed bottom-0 w-full bg-yellow-400 pt-20'>
//               <div className="flex justify-around">
//                   <MenuSection title='Class' icon='class.png'/>
//                   <MenuSection title='Chat' icon='chat.png'/>
//                   <MenuSection title='Bank' icon='bank.png'/>
//                   <MenuSection title='Profile' icon='profile2.png'/>
  
//               </div>
  
//           </div>
//       );
//   }
  
  
  
//   function MenuSection({ title, icon = null }: { title: any; icon?: any }) {
//       return (
//         <div className="">
//           {icon && <img src={icon} className="" alt={title} />}
//           <h1 className="">{title}</h1>
//         </div>
//       );
//     }