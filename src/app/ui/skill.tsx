'use client'
import { montserrat } from "../component/font";
import clsx from "clsx";

export default function Skill() {
    return(
        <main className=" py-20 bg-white/90 text-black" id="Myskill">
            <div 
            id="skill"
            className="flex flex-col gap-y-10 w-[1400px] max-[1540px]:w-[1200px] max-[1300px]:w-[1000px] max-[1060px]:w-[800px] max-[860px]:w-[90%] m-auto">
                <div className="flex flex-col gap-y-3 w-[600px] max-[630px]:w-[300px]">
                    <h1 className={clsx('text-5xl', montserrat.className)}>MySkill</h1>
                    <p className="">Disini adalah informasi tentang skill yang bisa saya kuasai untuk saat ini.</p>
                </div>
                <section className="flex flex-wrap max-[1540px]:justify-between max-[1060px]:justify-around gap-5 ">
                    <div
                    data-aos="flip-left"
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-[1300px]:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>PHP Language</h1>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="100" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-[1300px]:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Laravel</h1>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="200" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-[1300px]:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Javascript Language</h1>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="300" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-[1300px]:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Typescript Language</h1>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="400" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-[1300px]:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Next.Js</h1>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="500" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-[1300px]:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Library Tailwindcss</h1>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="600" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-[1300px]:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Dart Language</h1>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="700" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-[1300px]:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Flutter</h1>
                    </div>
                </section>
            </div>
        </main>
    );
}