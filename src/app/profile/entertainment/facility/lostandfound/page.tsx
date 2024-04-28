import MenuTab from "@/app/components/MenuTab";

export default function LostAndFound(){
    return(
        <main>
            <div className="flex ml-5 mt-20">
                <a href="/profile/entertainment/facility">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>Lost and Found</h1>
            </div>
        </main>
    );
}