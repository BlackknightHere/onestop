import MenuTab from "@/app/components/MenuTab";

export default function Blog1(){
    return(
        <main>
            <div className="flex ml-5 mt-20">
                <a href="/profile/entertainment/tu_blog">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>TU Blog</h1>
            </div>
            <div className="bg-gray-200 p-2 mx-8 mt-8 rounded-xl pb-5">
                <h1 className="text-md font-bold mx-4 mt-2">
                    แนะเลี่ยงการจราจรโดยรอบ มธ.ศูนยรังสิต 29-30 พ.ย มีพิธีรับปริญญา
                </h1>
                <div className="flex justify-center mt-4">
                <img src="/traffic.png" alt="traffic" />
                </div>
                <p className="text-sm font-light mx-6 mt-6">
                เพจองค์การนักศึกษามหาวิทยาลัยธรรมศาสตร์ โพสต์ระบุว่า แจ้งหลีกเลี่ยงการจราจรบริเวณถนนโดยรอบมหาวิทยาลัยธรรม
ศาสตร์ศูนย์รังสิตเนื่องจากมีพิธีพระราชทานปริญญาบัตรแก่ผู้
สำเร็จการศึกษาจากมหาวิทยาลัยธรรมศาสตร์ ประจำปีการศึกษา 2564 ณ อาคารกิติยาคาร มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต
                </p >
                <p className="text-sm font-light mx-6 mt-6">วันที่ 25 พฤศจิกายน 2566 (วันซ้อมใหญ่)วันที่ 29-30 พฤศจิกายน 2566 (วันพิธีพระราชทานปริญญาบัตร)</p>
            </div>
            <MenuTab></MenuTab>
        </main>
    );
}