'use client';
import { montserrat } from "../component/font";
import { roboto } from "../component/font";
import Link from "next/link";
import clsx from "clsx";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Navbar() {

    return (
        <div className="flex justify-between text-white px-28 py-8 bg-black/70">
            <Head>
                <style type="text/tailwindcss">
                
                </style>
            </Head>
            <div>
                <h1 className={clsx(montserrat.className, 'text-2xl font-medium')}>Miftahul Huda</h1>
            </div>
            <nav className={clsx('flex gap-x-5',roboto.className )}>
                <Link
                className="link-hover"
                id=""
                href={''}
                >MyHome
                <span className="border-b w-full flex scale-0 span-b"></span>
                </Link>
                <Link
                className="link-hover"
                id=""
                href={''}
                >MySkill
                <span className="border-b w-full flex scale-0 span-b"></span>
                </Link>
                <Link
                className="link-hover"
                id=""
                href={''}
                >MyExperience
                <span className="border-b w-full flex scale-0 span-b"></span>
                </Link>
                <Link
                className="link-hover"
                id=""
                href={''}
                >MyProject
                <span className="border-b w-full flex scale-0 span-b"></span>
                </Link>
                <Link
                className="link-hover"
                id=""
                href={''}
                >MyMessage
                <span className="border-b w-full flex scale-0 span-b"></span>
                </Link>
            </nav>
        </div>
    )
}
