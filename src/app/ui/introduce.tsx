import Image from "next/image";
import { montserrat } from "../component/font";
import clsx from "clsx";
import { poppins } from "../component/font";

export default function Introduce() {
    return(
        <div className="bg-black/70">
        <main className="w-[1400px] m-auto h-[88vh] flex justify-between">
            <section className="flex flex-col gap-y-10 mt-24">
                <div className="relative h-[220px]">
                    <div className={clsx('text-7xl font-semibold absolute w-[1000px] z-10', montserrat.className)}>
                        I'm Miftahul Huda <br />
                        <p className="text-[#DC143C]">A Information Technology</p>
                        In University CIC
                    </div>
                </div>
                <h1 className={clsx('text-2xl', poppins.className)}>
                    Fullstack Developer<br />(Front End & Back End Developer)
                </h1>
                <div className="w-[500px] text-lg">
                    Halo, nama saya Miftahul Huda. Saya adalah mahasiswa Universitas Catur Insan Cendekia CIC yang mempunyai skill di bidang Pemrograman
                </div>
                <div className="flex gap-x-20">
                    <div className="flex flex-col items-center gap-y-1">
                        <h1 className={clsx('text-5xl', montserrat.className)}>6</h1>
                        <p className="text-sm">Semester</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-1">
                        <h1 className={clsx('text-5xl', montserrat.className)}>3</h1>
                        <p className="text-sm">Project Website</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-1">
                        <h1 className={clsx('text-5xl', montserrat.className)}>2</h1>
                        <p className="text-sm">Project Mobile Apps</p>
                    </div>
                </div>
            </section>
            <div className="border-t-2 border-r-2 border-white p-3 h-[400px] mt-20">
                <Image
                className=""
                src={'/mifta.png'}
                width={400}
                height={200}
                alt="My-Picture"
                />
            </div>
        </main>
        </div>
    );
}