'use client'
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "../component/font";
import clsx from "clsx";

export default function Project() {
    return(
        <div 
        id="project"
        className="bg-black/70">
        <main className="w-[1400px] max-[1540px]:w-[1200px] max-[1300px]:w-[1000px] max-[1060px]:w-[800px] max-[860px]:w-[90%] m-auto py-20 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
                <h1 className={clsx('text-5xl', montserrat.className)}>MyProject</h1>
                <p className={clsx('', montserrat.className)}>Disini adalah project yang <br /> sudah saya kerjakan selama saya kuliah</p>
            </div>
            <div className="flex flex-col border-t-2 border-l-2 border-white p-8 max-[1060px]:p-5 max-[630px]:gap-y-5">
                <h1 className={clsx('text-5xl max-[1060px]:text-4xl border-r-2 border-b-2 border-white w-52 max-[1060px]:w-40 pb-3', montserrat.className)}>Website</h1>
                <div className="flex flex-col gap-y-10">
                    <div className="self-center text-center flex flex-col gap-y-3">
                        <h1 className={clsx('text-4xl', montserrat.className)}>Faza Citra Production</h1>
                        <p className="text-sm">Website ini saya kembangkan untuk <br /> umkm yang ingin menjual buku novelnya secara online.</p>
                    </div>
                    <div className="flex flex-wrap gap-10 justify-center">
                        <Link
                        data-aos="fade-down" 
                        id=""
                        target="_blank"
                        href={'/web_faza/Dashboard Page.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_faza/Dashboard Page.png'}
                            width={300}
                            height={100}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={"/web_faza/Book's Page.png"}
                        >
                            <Image
                            alt="dashboard"
                            src={"/web_faza/Book's Page.png"}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={"/web_faza/Store Page.png"}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_faza/Store Page.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_faza/Coming Soon Page.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_faza/Coming Soon Page.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_faza/Detail Books.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_faza/Detail Books.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_faza/Layanan.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_faza/Layanan.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_faza/About Us - Page.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_faza/About Us - Page.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-t-2 border-l-2 border-white p-8 max-[1060px]:p-5 max-[630px]:gap-y-5 mt-20">
                <h1 className={clsx('text-5xl max-[1060px]:text-4xl border-r-2 border-b-2 border-white w-52 max-[1060px]:w-40 pb-3', montserrat.className)}>Website</h1>
                <div className="flex flex-col gap-y-10">
                    <div className="self-center text-center flex flex-col gap-y-3">
                        <h1 className={clsx('text-4xl', montserrat.className)}>Goa Sunyaragi</h1>
                        <p className="text-sm">Website ini saya kembangkan agar orang yang mau berkunjung <br /> bisa memesan tiket dari online dan menjadwalkan tiketnya datang tanggal berapa.</p>
                    </div>
                    <div className="flex flex-wrap gap-8 justify-center">
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_goa_sunyaragi/image 25.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_goa_sunyaragi/image 25.png'}
                            width={300}
                            height={100}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={"/web_goa_sunyaragi/image 26.png"}
                        >
                            <Image
                            alt="dashboard"
                            src={"/web_goa_sunyaragi/image 26.png"}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={"/web_goa_sunyaragi/image 27.png"}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_goa_sunyaragi/image 27.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_goa_sunyaragi/image 28.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_goa_sunyaragi/image 28.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_goa_sunyaragi/image 29.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_goa_sunyaragi/image 29.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_goa_sunyaragi/image 30.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_goa_sunyaragi/image 30.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_goa_sunyaragi/image 31.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_goa_sunyaragi/image 31.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_goa_sunyaragi/image 32.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_goa_sunyaragi/image 32.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/web_goa_sunyaragi/image 33.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/web_goa_sunyaragi/image 33.png'}
                            width={300}
                            height={500}
                            ></Image>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-t-2 border-l-2 border-white p-8 max-[1060px]:p-5 max-[630px]:gap-y-5 mt-20">
                <h1 className={clsx('text-5xl max-[1060px]:text-4xl border-r-2 border-b-2 border-white w-52 max-[1060px]:w-40 pb-3', montserrat.className)}>Mobile Apps</h1>
                <div className="flex flex-col gap-y-10">
                    <div className="self-center text-center flex flex-col gap-y-3">
                        <h1 className={clsx('text-4xl', montserrat.className)}>Graha Store</h1>
                        <p className="text-sm">Mobile Apps ini saya kembangkan agar umkm bisa berdagang lebih luas lagi dalam penjualan sepatu mereka.<br /> customer bisa memesan sepatu itu secara online.</p>
                    </div>
                    <div className="flex flex-wrap gap-8 justify-center">
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/graha_store/mobile_1.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/graha_store/mobile_1.png'}
                            width={400}
                            height={100}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/graha_store/mobile_2.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/graha_store/mobile_2.png'}
                            width={400}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/graha_store/mobile_3.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/graha_store/mobile_3.png'}
                            width={400}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/graha_store/mobile_4.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/graha_store/mobile_4.png'}
                            width={400}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/graha_store/mobile_5.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/graha_store/mobile_5.png'}
                            width={400}
                            height={500}
                            ></Image>
                        </Link>
                        <Link
                        data-aos="fade-down"
                        id=""
                        target="_blank"
                        href={'/graha_store/mobile_6.png'}
                        >
                            <Image
                            alt="dashboard"
                            src={'/graha_store/mobile_6.png'}
                            width={400}
                            height={500}
                            ></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
}