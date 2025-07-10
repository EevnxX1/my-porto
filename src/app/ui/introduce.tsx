import Image from "next/image";
import { montserrat } from "../component/font";
import clsx from "clsx";
import { poppins } from "../component/font";

export default function Introduce() {
    return(
        <div className="bg-black/70">
        <main className="w-[1400px] max-2xl:w-[1200px] max-xl:w-[1000px] max-lg:w-[800px] max-md:w-full m-auto h-[88vh] flex max-[860px]:flex-col justify-between">
            <section className="max-[860px]:absolute max-[860px]:bottom-[400px] max-[860px]:order-2 flex flex-col gap-y-10 max-2xl:gap-y-8 max-lg:gap-y-6 max-2xl:mt-20 mt-24 max-lg:mt-24 max-[860px]:w-full">
                <div className="relative h-[220px] max-2xl:h-[180px] max-xl:h-[150px] max-lg:h-[120px]">
                    <div 
                    // data-aos="fade-right" 
                    className={clsx('text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-6xl font-semibold absolute max-2xl:w-[850px] w-[1000px] z-10', montserrat.className)}>
                        I'm Miftahul Huda <br />
                        <p className="text-[#DC143C]">A Information Technology</p>
                        In University CIC
                    </div>
                </div>
                <h1 
                // data-aos="fade-right" 
                // data-aos-delay="200" 
                className={clsx('text-2xl max-lg:text-xl', poppins.className)}>
                    Fullstack Developer<br />(Front End & Back End Developer)
                </h1>
                <div data-aos="fade-right" data-aos-delay="400" className="w-[500px] text-lg max-lg:text-sm">
                    Halo, nama saya Miftahul Huda. Saya adalah mahasiswa Universitas Catur Insan Cendekia CIC yang mempunyai skill di bidang Pemrograman
                </div>
                <div data-aos="fade-right" data-aos-delay="600" className="flex gap-x-20">
                    <div className="flex flex-col items-center gap-y-1">
                        <h1 data-aos="fade-down" data-aos-delay="800" className={clsx('text-5xl max-lg:text-4xl', montserrat.className)}>6</h1>
                        <p className="text-sm">Semester</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-1">
                        <h1 data-aos="fade-down" data-aos-delay="1000" className={clsx('text-5xl max-lg:text-4xl', montserrat.className)}>3</h1>
                        <p className="text-sm">Project Website</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-1">
                        <h1 data-aos="fade-down" data-aos-delay="1200" className={clsx('text-5xl max-lg:text-4xl', montserrat.className)}>2</h1>
                        <p className="text-sm">Project Mobile Apps</p>
                    </div>
                </div>
            </section>
            <div 
            className="max-[860px]:self-end max-[860px]:order-1 border-t-2 border-r-2 border-white p-3 h-[400px] mt-20 max-lg:mt-16 max-2xl:mt-9">
                <Image
                // data-aos="flip-left"
                // data-aos-delay="1400"
                className="max-[860px]:w-[400px]"
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