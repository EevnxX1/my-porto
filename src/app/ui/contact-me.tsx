'use client'
import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../component/font";
import clsx from "clsx";

export default function Contact() {
    return(
        <main className="py-20 bg-black/70">
            <div className="flex flex-col gap-y-20 w-[1400px] m-auto">
                <div className="flex flex-col gap-y-2">
                    <h1 className={clsx('text-5xl', montserrat.className)}>MyContact</h1>
                    <p className={clsx(montserrat.className)}>Disini adalah tempat informasi alamat kontak saya, dan tempat <br /> mengirimkan pesan jika anda berminat untuk saya magang di tempat anda.</p>
                </div>
                <section className="flex justify-between">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <Image
                            className=""
                            src={'/ic_outline-email.png'}
                            alt="Email.png"
                            width={50}
                            height={50}
                            ></Image>
                            <h1 className={clsx('text-3xl font-semibold', montserrat.className)}>Address</h1>
                        </div>
                        <ul className="flex flex-col gap-y-3 ml-14">
                            <li>Jl. Pancuran No.19, Kota Cirebon, Jawa barat, Indonesia.</li>
                            <li>miftamartin1@gmail.com</li>
                            <li>miftahul.huda.ti.22@cic.ac.id</li>
                            <li>+62 857-9712-7694</li>
                            <li>
                                <Link
                                href={'https://github.com/EevnxX1'}
                                target="_blank"
                                className="hover:underline"
                                >
                                    https://github.com/EevnxX1
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-t border-l border-white p-4 flex flex-col gap-y-14">
                        <div className="border-r border-b border-white w-[190px] pb-3">
                            <h1 className={clsx('text-3xl', montserrat.className)}>Contact Me</h1>
                        </div>
                        <form action="" className="flex flex-col w-[800px] gap-y-5">
                            <input type="text" 
                            placeholder="Name" 
                            className="h-[50px] ml-10 bg-[#1D1D1D] px-5"/>
                            <input type="email" 
                            placeholder="Email" 
                            className="h-[50px] ml-10 bg-[#1D1D1D] px-5"/>
                            <textarea 
                             id=""
                             rows={8}
                             placeholder="Message"
                             className="resize-none ml-10 bg-[#1D1D1D] px-5 py-2"
                             ></textarea>
                             <button
                             type="submit"
                             className="bg-[#DC143C] ml-10 w-[130px] h-[50px] text-xl cursor-pointer"
                             >Send</button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}