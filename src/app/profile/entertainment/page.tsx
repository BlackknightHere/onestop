import MenuTab from "@/app/components/MenuTab";

export default function Entertainment(){
    return(
        <main>
            <div className="flex ml-5 mt-20">
                <a href="/profile">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>Entertainment</h1>
            </div>
            <div className='mt-6'>
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="ประชาสัมพันธ์" icon="/education.png" link='/profile/education' /> {/* Using a reusable MenuSection component */}
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="TU radio" icon="/faculty.png" link='/profile/entertainment/tu_radio'/>
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="ชมรม" icon="/statistic.png" link='/profile/entertainment/club' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="TU Blog" icon="/statistic.png" link='/profile/entertainment/tu_blog' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="สิ่งอำนวยความสะดวก" icon="/statistic.png" link='/profile/entertainment/facility' />
                <hr className="h-4 font-bold mt-2" />
                <MenuTab></MenuTab>
            </div>

        </main>
    );
}






function MenuSection({ title = '', icon = null , link = ''}: { title: any; icon?: any; link:any }) {
    // MenuSection({ icon = null, title = "" ,link=""}: { icon?: any; title: string; link:string})
      return (
        <a href={link}>
          <div className="flex -mt-2 items-center">
          {icon && <img src={icon} className="ml-2" alt={title} />}
          <h1 className="ml-3 font-serif text-lg">{title}</h1>
          <img src="/rectangle.png" className="-mt-1 ml-auto mr-4" />
          <hr className="h-4 font-bold mt-6" />
        </div>
        </a>
      );
    }
    