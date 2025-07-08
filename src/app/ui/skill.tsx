'use client'
import { montserrat } from "../component/font";
import { poppins } from "../component/font";
import clsx from "clsx";
import { useState } from "react";

export default function Skill() {
    const [hoverBig1, setHoverBig1] = useState(false);
    const [hoverBig2, setHoverBig2] = useState(false);
    const [hoverBig3, setHoverBig3] = useState(false);
    const [hoverBig4, setHoverBig4] = useState(false);
    const [hoverBig5, setHoverBig5] = useState(false);
    const [hoverBig6, setHoverBig6] = useState(false);
    const [hoverBig7, setHoverBig7] = useState(false);
    const [hoverBig8, setHoverBig8] = useState(false);
    const [hoverBig9, setHoverBig9] = useState(false);
    return(
        <main className=" py-20 bg-white/90 text-black" id="Myskill">
            <div className="flex flex-col gap-y-10 w-[1400px] m-auto">
                <div className="flex flex-col gap-y-3 w-[600px]">
                    <h1 className={clsx('text-5xl', montserrat.className)}>MySkill</h1>
                    <p className="">Disini adalah informasi tentang skill yang bisa saya kuasai untuk saat ini.</p>
                </div>
                <section className="flex flex-wrap gap-5">
                    <div 
                    onMouseEnter={() => setHoverBig1(true)}
                    onMouseLeave={() => setHoverBig1(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig1 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>PHP Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="60" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 60% di bahasa pemrograman php dikarenakan saya sudah jarang memakai php native.</p>
                    </div>
                    <div 
                    onMouseEnter={() => setHoverBig2(true)}
                    onMouseLeave={() => setHoverBig2(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig2 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Laravel</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="70" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 70% di Framework Laravel karena saya sudah terbiasa mengembangkan sistem menggunakan laravel.</p>
                    </div>
                    <div 
                    onMouseEnter={() => setHoverBig3(true)}
                    onMouseLeave={() => setHoverBig3(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig3 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Javascript Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="60" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 60% di bahasa pemrograman Javascript karena saya masih tahap dasar untuk memahami javascript.</p>
                    </div>
                    <div 
                    onMouseEnter={() => setHoverBig4(true)}
                    onMouseLeave={() => setHoverBig4(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig4 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Typescript Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="30" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 30% di bahasa pemrograman Typescript karena saya baru saja mempelajarinya.</p>
                    </div>
                    <div 
                    onMouseEnter={() => setHoverBig5(true)}
                    onMouseLeave={() => setHoverBig5(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig5 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Next.Js</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="65" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 65% di Framework Next.Js karena saat ini saya sudah menerapkan konsep next.js pada front-end, walaupun baru-baru ini.</p>
                    </div>
                    <div 
                    onMouseEnter={() => setHoverBig6(true)}
                    onMouseLeave={() => setHoverBig6(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig6 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Library Tailwindcss</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="90" low={30} high={75} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 80% di Library Tailwind karena project saya sebelumnya sudah menerapkan fungsi library tailwind dan saya cukup mahir untuk menggunakannya.</p>
                    </div>
                    <div 
                    onMouseEnter={() => setHoverBig7(true)}
                    onMouseLeave={() => setHoverBig7(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig7 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Dart Language</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="30" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 30% di bahasa pemrograman php dikarenakan saya sudah jarang memakai php native.</p>
                    </div>
                    <div 
                    onMouseEnter={() => setHoverBig8(true)}
                    onMouseLeave={() => setHoverBig8(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig8 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
                    )}>
                        <h1 className={clsx("text-4xl font-semibold", montserrat.className)}>Framework Flutter</h1>
                        <meter className="w-[100%] h-[30px] meter-style" value="50" low={30} high={70} optimum={90} min={0} max={100}></meter>
                        <p>Disini saya memberi nilai kemampuan saya 60% di bahasa pemrograman php dikarenakan saya sudah jarang memakai php native.</p>
                    </div>
                    <div 
                    onMouseEnter={() => setHoverBig9(true)}
                    onMouseLeave={() => setHoverBig9(false)}
                    className={clsx("py-10 cursor-pointer px-12 w-[330px] flex flex-col gap-y-3",
                        hoverBig9 ? 'hover-bigger' : 'scale-100 bg-zinc-300'
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