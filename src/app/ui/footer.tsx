import { montserrat } from "../component/font";
import clsx from "clsx";

export default function Footer() {

    return(
        
        <main className="bg-black/70 text-black">
            <section className="w-[90%] m-auto flex flex-col gap-y-5 pb-8">
                <div className="bg-[#DC143C] w-full pt-14 max-[1300px]:pt-10 pb-2 rounded-4xl flex flex-col items-center gap-y-16 max-[1300px]:gap-y-11 max-[860px]:gap-y-8">
                    <div className="flex max-[630px]:flex-col justify-center gap-x-28 max-[860px]:gap-x-10 max-[630px]:gap-y-5">
                        <div className={clsx('flex max-[630px]:justify-between gap-x-5 max-[860px]:gap-x-2 max-[630px]:gap-x-7 border-t-2 pr-5', montserrat.className)}>
                            <div className="border-2 h-fit rounded-full py-1 px-2 mt-[-2px] ml-[-15px]">
                                <p className="text-md max-[1300px]:text-sm max-[1060px]:text-xs font-semibold">YEAR FOUNDED</p>
                            </div>
                            <h1 className="text-6xl max-[1300px]:text-5xl max-[1060px]:text-3xl max-[630px]:text-2xl mt-5 max-[1060px]:mt-2">2025</h1>
                        </div>
                        <div className={clsx('flex max-[630px]:justify-between gap-x-5 max-[860px]:gap-x-2 max-[630px]:gap-x-7 border-t-2 pr-5', montserrat.className)}>
                            <div className="border-2 h-fit rounded-full py-1 px-2 mt-[-2px] ml-[-15px]">
                                <p className="text-md max-[1300px]:text-sm max-[1060px]:text-xs font-semibold">FOUNDER'S NAME</p>
                            </div>
                            <h1 className="text-6xl max-[1300px]:text-5xl max-[1060px]:text-3xl max-[630px]:text-2xl mt-5 max-[1060px]:mt-2">Miftahul Huda</h1>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <p className={clsx('font-semibold max-[1060px]:text-xs', montserrat.className)}>© 2025 All rights reserved.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}