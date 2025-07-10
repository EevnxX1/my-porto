import { montserrat } from "../component/font";
import clsx from "clsx";

export default function Footer() {

    return(
        
        <main className="bg-black/70 text-black">
            <section className="w-[90%] m-auto flex flex-col gap-y-5 pb-8">
                <div className="bg-[#DC143C] w-full pt-14 max-xl:pt-10 pb-2 rounded-4xl flex flex-col items-center gap-y-16 max-xl:gap-y-11">
                    <div className="flex justify-center gap-x-28">
                        <div className={clsx('flex gap-x-5 border-t-2 pr-5', montserrat.className)}>
                            <div className="border-2 h-fit rounded-full py-1 px-2 mt-[-2px] ml-[-15px]">
                                <p className="text-md max-xl:text-sm max-lg:text-xs font-semibold">YEAR FOUNDED</p>
                            </div>
                            <h1 className="text-6xl max-xl:text-5xl max-lg:text-3xl mt-5 max-lg:mt-2">2025</h1>
                        </div>
                        <div className={clsx('flex gap-x-5 border-t-2 pr-5', montserrat.className)}>
                            <div className="border-2 h-fit rounded-full py-1 px-2 mt-[-2px] ml-[-15px]">
                                <p className="text-md max-xl:text-sm max-lg:text-xs font-semibold">FOUNDER'S NAME</p>
                            </div>
                            <h1 className="text-6xl max-xl:text-5xl max-lg:text-3xl mt-5 max-lg:mt-2">Miftahul Huda</h1>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <p className={clsx('font-semibold max-lg:text-xs', montserrat.className)}>© 2025 All rights reserved.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}