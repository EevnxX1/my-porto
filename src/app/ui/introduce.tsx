import Image from "next/image";
import { montserrat } from "../component/font";
import clsx from "clsx";
import { poppins } from "../component/font";

export default function Introduce() {
    return(
        <div 
        id="home"
        className="bg-black/70">
        <main className="w-[1400px] max-[1540px]:w-[1200px] max-[1300px]:w-[1000px] max-[1060px]:w-[800px] max-[860px]:w-[90%] max-md:w-full m-auto h-[88vh] flex max-[860px]:flex-col justify-between">
            <section className="max-[860px]:absolute max-[860px]:z-20 max-[860px]:bottom-[50px] max-[630px]:bottom-[120px] max-[500px]:bottom-[90px] max-[860px]:order-2 flex flex-col gap-y-10 max-[1540px]:gap-y-8 max-[1060px]:gap-y-6 max-[860px]:gap-y-7 max-[630px]:gap-y-8 max-[1540px]:mt-20 mt-24 max-[1060px]:mt-24 max-[860px]:w-full">
                <div className="relative h-[220px] max-[1540px]:h-[180px] max-[1300px]:h-[150px] max-[1060px]:h-[120px] max-[860px]:h-[180px] max-[800px]:h-[150px] max-[500px]:h-[100px] max-[450px]:h-[90px]">
                    <div 
                    data-aos="fade-right" 
                    className={clsx('text-7xl max-[1540px]:text-6xl max-[1300px]:text-5xl max-[1060px]:text-4xl max-[860px]:text-5xl max-[500px]:text-3xl max-[800px]:text-4xl max-[460px]:text-2xl max-[371px]:text-xl font-semibold absolute max-[1540px]:w-[850px] max-[500px]:w-[90%] w-[1000px] max-[630px]:pl-3 z-10', montserrat.className)}>
                        I&#39;m Miftahul Huda <br />
                        <p className="text-[#DC143C]">A Information Technology</p>
                        In University CIC
                    </div>
                </div>
                <h1 
                data-aos="fade-right" 
                data-aos-delay="200" 
                className={clsx('text-2xl max-[1060px]:text-xl max-[860px]:text-3xl max-[630px]:text-2xl max-[500px]:text-xl max-[860px]:text-center', poppins.className)}>
                    Fullstack Developer<br />(Front End & Back End Developer)
                </h1>
                <div 
                data-aos="fade-right" 
                data-aos-delay="400" 
                className="max-[860px]:text-center max-[860px]:self-center w-[500px] max-[500px]:w-[300px] text-lg max-[1060px]:text-sm max-[860px]:text-lg max-[630px]:text-sm">
                    Halo, nama saya Miftahul Huda. Saya adalah mahasiswa Universitas Catur Insan Cendekia CIC yang mempunyai skill di bidang Pemrograman
                </div>
                <div 
                data-aos="fade-right" 
                data-aos-delay="600" 
                className="flex gap-x-20 max-[860px]:gap-x-10 max-[630px]:gap-x-6 max-[500px]:gap-x-0 max-[860px]:self-center">
                    <div className="flex flex-col items-center gap-y-1 max-[860px]:gap-y-2 max-[860px]:w-[150px] max-[450px]:w-[120px]">
                        <h1 
                        data-aos="fade-down" 
                        data-aos-delay="800" 
                        className={clsx('text-5xl max-[1060px]:text-4xl max-[860px]:text-5xl max-[500px]:text-3xl', montserrat.className)}>6</h1>
                        <p className="text-sm max-[860px]:text-xl max-[630px]:text-lg max-[500px]:text-sm">Semester</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-1 max-[860px]:gap-y-2 max-[860px]:w-[150px] max-[450px]:w-[120px]">
                        <h1 
                        data-aos="fade-down" 
                        data-aos-delay="1000" 
                        className={clsx('text-5xl max-[1060px]:text-4xl max-[860px]:text-5xl max-[500px]:text-3xl', montserrat.className)}>15</h1>
                        <p className="text-sm max-[860px]:text-xl max-[630px]:text-lg max-[500px]:text-sm">Project Website</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-1 max-[860px]:gap-y-2 max-[860px]:w-[150px] max-[450px]:w-[120px]">
                        <h1 
                        data-aos="fade-down" 
                        data-aos-delay="1200" 
                        className={clsx('text-5xl max-[1060px]:text-4xl max-[860px]:text-5xl max-[500px]:text-3xl', montserrat.className)}>2</h1>
                        <p className="text-sm max-[860px]:text-xl max-[630px]:text-lg max-[500px]:text-sm max-[860px]:text-center">Project Mobile Apps</p>
                    </div>
                </div>
            </section>
            <div 
            className="max-[860px]:self-end max-[860px]:order-1 border-t-2 border-r-2 border-white p-3 h-[400px] mt-20 max-[1060px]:mt-16 max-[1540px]:mt-9 max-[860px]:mt-4 max-[630px]:mt-10">
                <Image
                data-aos="flip-left"
                data-aos-delay="1400"
                className="max-[860px]:w-[350px] max-[630px]:w-[300px]"
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