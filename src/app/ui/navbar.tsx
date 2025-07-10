'use client';
import { montserrat } from "../component/font";
import { roboto } from "../component/font";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export default function Navbar() {

    const [hoverNav, setHoverNav] = useState(false);
    const [hoverNav2, setHoverNav2] = useState(false);
    const [hoverNav3, setHoverNav3] = useState(false);
    const [hoverNav4, setHoverNav4] = useState(false);
    const [hoverNav5, setHoverNav5] = useState(false);

    return (
        <div className="bg-black/70">
        {/* navbar mobile */}
        <div 
        id="nav-mobile"
        className="fixed opacity-0 pointer-events-none w-full h-[100vh] bg-white z-50 target:opacity-100 target:pointer-events-auto">
            <div className="flex gap-x-3 w-[90%] m-auto pl-4 py-3">
                <span className="w-4 h-4 bg-red-600 rounded-full"></span>
                <span className="w-4 h-4 bg-yellow-600 rounded-full"></span>
                <span className="w-4 h-4 bg-green-600 rounded-full"></span>
            </div>
            <div className="w-[90%] h-[95%] max-[860px]:h-[92%] m-auto bg-black flex flex-col gap-y-40 max-[860px]:gap-y-20 max-[500px]:gap-y-14 rounded-3xl">
                <div className="flex justify-between items-center p-10">
                    <h1 className={clsx('text-4xl max-[500px]:text-2xl font-semibold', montserrat.className)}>MyNavbar</h1>
                    <a
                    href='#'
                    className="text-5xl max-[500px]:text-4xl"
                    >X</a>
                </div>
                <section className="text-3xl max-[860px]:text-2xl flex flex-col">
                    <a
                    href=''
                    className="p-10 focus:bg-[#DC143C] max-[860px]:border max-[500px]:text-lg"
                    >
                        <p>MyHome</p>
                    </a>
                    <a
                    href=''
                    className="p-10 focus:bg-[#DC143C] max-[860px]:border max-[500px]:text-lg"
                    >
                        <p>MySkill</p>
                    </a>
                    <a
                    href=''
                    className="p-10 focus:bg-[#DC143C] max-[860px]:border max-[500px]:text-lg"
                    >
                        <p>MyProject</p>
                    </a>
                    <a
                    href=''
                    className="p-10 focus:bg-[#DC143C] max-[860px]:border max-[500px]:text-lg"
                    >
                        <p>MyExperience</p>
                    </a>
                    <a
                    href=''
                    className="p-10 focus:bg-[#DC143C] max-[860px]:border max-[500px]:text-lg"
                    >
                        <p>MyContact</p>
                    </a>
                </section>
            </div>        
        </div>
        {/* navbar mobile */}
        <div className="flex justify-between items-center text-white w-[1400px] max-[1540px]:w-[1200px] max-[1300px]:w-[1000px] max-[1060px]:w-[800px] max-[860px]:w-[90%] m-auto h-[12vh]">
            {/* position white */}
            <div className="absolute z-[-2] right-0 w-[200px] h-[200px] rounded-full blur-3xl bg-white"></div>
            <div className="absolute z-[-2] left-0 top-72 w-[200px] h-[200px] rounded-full blur-3xl bg-white"></div>
            {/* position white */}
            <div>
                <h1 className={clsx(montserrat.className, 'text-3xl max-[1300px]:text-2xl max-[1060px]:text-xl max-[860px]:text-3xl max-[500px]:text-2xl font-medium')}>Miftahul Huda</h1>
            </div>
            <a
            href={'#nav-mobile'}
            >
                <div className="flex flex-col gap-y-3 w-[50px] max-[500px]:w-[45px] min-[860px]:hidden">
                    <span className="w-full border border-white"></span>
                    <span className="w-full border border-white"></span>
                    <span className="w-full border border-white"></span>
                </div>
            </a>
            <nav className={clsx('flex gap-x-8 max-[860px]:hidden',roboto.className )}>
                <Link
                onMouseEnter={() => setHoverNav(true)}
                onMouseLeave={() => setHoverNav(false)}
                className="link-hover text-xl max-[1540px]:text-lg max-[1060px]:text-[16px]"
                id=""
                href={''}
                >MyHome
                <span className={clsx("border-b w-full flex span-b", 
                    hoverNav ? "hover-navbar" : "scale-0"
                )}></span>
                </Link>
                <Link
                onMouseEnter={() => setHoverNav2(true)}
                onMouseLeave={() => setHoverNav2(false)}
                className="link-hover text-xl max-[1540px]:text-lg max-[1060px]:text-[16px]"
                id=""
                href={'#Myskill'}
                >MySkill
                <span className={clsx("border-b w-full flex span-b", 
                    hoverNav2 ? "hover-navbar" : "scale-0"
                )}></span>
                </Link>
                <Link
                onMouseEnter={() => setHoverNav3(true)}
                onMouseLeave={() => setHoverNav3(false)}
                className="link-hover text-xl max-[1540px]:text-lg max-[1060px]:text-[16px]"
                id=""
                href={''}
                >MyExperience
                <span className={clsx("border-b w-full flex span-b", 
                    hoverNav3 ? "hover-navbar" : "scale-0"
                )}></span>
                </Link>
                <Link
                onMouseEnter={() => setHoverNav4(true)}
                onMouseLeave={() => setHoverNav4(false)}
                className="link-hover text-xl max-[1540px]:text-lg max-[1060px]:text-[16px]"
                id=""
                href={''}
                >MyProject
                <span className={clsx("border-b w-full flex span-b", 
                    hoverNav4 ? "hover-navbar" : "scale-0"
                )}></span>
                </Link>
                <Link
                onMouseEnter={() => setHoverNav5(true)}
                onMouseLeave={() => setHoverNav5(false)}
                className="link-hover text-xl max-[1540px]:text-lg max-[1060px]:text-[16px]"
                id=""
                href={''}
                >MyMessage
                <span className={clsx("border-b w-full flex span-b", 
                    hoverNav5 ? "hover-navbar" : "scale-0"
                )}></span>
                </Link>
            </nav>
        </div>
        </div>
    )
}
