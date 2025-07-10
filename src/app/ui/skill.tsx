'use client'
import { montserrat } from "../component/font";
import clsx from "clsx";

export default function Skill() {
    return(
        <main className=" py-20 bg-white/90 text-black" id="Myskill">
            <div className="flex flex-col gap-y-10 w-[1400px] max-2xl:w-[1200px] max-xl:w-[1000px] max-lg:w-[800px] m-auto">
                <div className="flex flex-col gap-y-3 w-[600px]">
                    <h1 className={clsx('text-5xl', montserrat.className)}>MySkill</h1>
                    <p className="">Disini adalah informasi tentang skill yang bisa saya kuasai untuk saat ini.</p>
                </div>
                <section className="flex flex-wrap max-2xl:justify-between max-lg:justify-around gap-5 ">
                    <div
                    data-aos="flip-left"
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>PHP Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="60" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 60% di bahasa pemrograman php dikarenakan saya sudah jarang memakai php native.</p>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="100" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Laravel</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="70" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 70% di Framework Laravel karena saya sudah terbiasa mengembangkan sistem menggunakan laravel.</p>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="200" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Javascript Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="60" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 60% di bahasa pemrograman Javascript karena saya masih tahap dasar untuk memahami javascript.</p>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="300" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Typescript Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="30" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 30% di bahasa pemrograman Typescript karena saya baru saja mempelajarinya.</p>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="400" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Next.Js</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="65" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 65% di Framework Next.Js karena saat ini saya sudah menerapkan konsep next.js pada front-end, walaupun baru-baru ini.</p>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="500" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Library Tailwindcss</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="90" low={30} high={75} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 80% di Library Tailwind karena project saya sebelumnya sudah menerapkan fungsi library tailwind dan saya cukup mahir untuk menggunakannya.</p>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="600" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Dart Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="30" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 30% di bahasa pemrograman php dikarenakan saya sudah jarang memakai php native.</p>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="700" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Flutter</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="50" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 60% di bahasa pemrograman php dikarenakan saya sudah jarang memakai php native.</p>
                    </div>
                    <div
                    data-aos="flip-left"
                    data-aos-delay="800" 
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] max-xl:w-[300px] flex flex-col gap-y-3 bg-black text-white hover:scale-110"
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Phyton Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="50" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 60% di bahasa pemrograman php dikarenakan saya sudah jarang memakai php native.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}