import MenuTab from "@/app/components/MenuTab";

export default function Plan(){
return(
<main>
    <div className='flex ml-5 mt-20'>
        <a href="/profile/education">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>เขียนคำร้อง</h1>
    </div>
    <div className='flex'>
        <h1 className='text-sm mt-4 ml-16'>รับเรื่องร้องเรียน</h1>
        <img src="/add_circle.png" alt="add_circle" width={30} className='ml-40 mt-2' />
    </div>
</main>
);
}