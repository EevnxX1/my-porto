'use client';
import { montserrat } from "../component/font";
import { roboto } from "../component/font";
import Link from "next/link";
import clsx from "clsx";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [hoverNav, setHoverNav] = useState(false);
    const [hoverNav2, setHoverNav2] = useState(false);
    const [hoverNav3, setHoverNav3] = useState(false);
    const [hoverNav4, setHoverNav4] = useState(false);
    const [hoverNav5, setHoverNav5] = useState(false);

    return (
        <div className="bg-black/70">
        <div className="flex justify-between items-center text-white w-[1400px] m-auto h-[12vh]">
            {/* position white */}
            <div className="absolute z-[-2] right-0 w-[200px] h-[200px] rounded-full blur-3xl bg-white"></div>
            <div className="absolute z-[-2] left-0 top-72 w-[200px] h-[200px] rounded-full blur-3xl bg-white"></div>
            {/* position white */}
            <Head>
                <style type="text/tailwindcss">
                
                </style>
            </Head>
            <div>
                <h1 className={clsx(montserrat.className, 'text-3xl font-medium')}>Miftahul Huda</h1>
            </div>
            <nav className={clsx('flex gap-x-8',roboto.className )}>
                <Link
                onMouseEnter={() => setHoverNav(true)}
                onMouseLeave={() => setHoverNav(false)}
                className="link-hover text-xl"
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
                className="link-hover text-xl"
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
                className="link-hover text-xl"
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
                className="link-hover text-xl"
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
                className="link-hover text-xl"
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
