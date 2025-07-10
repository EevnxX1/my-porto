'use client'
import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../component/font";
import clsx from "clsx";
import { useState } from 'react'
import { toast } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const toastId = toast.loading("Mengirim pesan...");

    try {
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const result = await res.json()
      console.log(result);
      if (result.result === 'Success') {
        toast.success('Pesan berhasil dikirim!', { id: toastId })
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error('Gagal mengirim pesan.', { id: toastId })
      }
    } catch (_err: any) {
        void _err;
        toast.error('Terjadi kesalahan!', { id: toastId })
    }
  }
    return(
        <main className="py-20 bg-black/70">
            <div className="flex flex-col gap-y-20 w-[1400px] max-[1540px]:w-[1200px] max-[1300px]:w-[1000px] max-[1060px]:w-[800px] max-[860px]:w-[90%] m-auto">
                <div className="flex flex-col gap-y-2">
                    <h1 className={clsx('text-5xl', montserrat.className)}>MyContact</h1>
                    <p className={clsx(montserrat.className)}>Disini adalah tempat informasi alamat kontak saya, dan tempat <br /> mengirimkan pesan jika anda berminat untuk saya magang di tempat anda.</p>
                </div>
                <section className="flex max-[630px]:flex-col justify-between max-[630px]:gap-y-10">
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
                        <ul className="flex flex-col gap-y-3 ml-14 max-[1540px]:text-xs">
                            <li
                            >Jl. Pancuran No.19, Kota Cirebon, Jawa barat, Indonesia.</li>
                            <li
                            >miftamartin1@gmail.com</li>
                            <li
                            >miftahul.huda.ti.22@cic.ac.id</li>
                            <li
                            >+62 857-9712-7694</li>
                            <li
                            >
                                <Link
                                href={'https://github.com/EevnxX1'}
                                target="_blank"
                                className="hover:underline"
                                >
                                    https://github.com/EevnxX1
                                </Link>
                            </li>
                            <li
                            >
                                <Link
                                href={'https://www.instagram.com/evnx_mifta/'}
                                target="_blank"
                                className="hover:underline"
                                >
                                    https://www.instagram.com/evnx_mifta/
                                </Link>
                            </li>
                            <li
                            >
                                <Link
                                href={'https://www.instagram.com/geniusstudioo_/'}
                                target="_blank"
                                className="hover:underline"
                                >
                                    https://www.instagram.com/geniusstudioo_/
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-t border-l border-white p-4 flex flex-col gap-y-14">
                        <div className="border-r border-b border-white w-[190px] pb-3">
                            <h1 className={clsx('text-3xl', montserrat.className)}>Contact Me</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col w-[800px] max-[1300px]:w-[600px] max-[1060px]:w-[420px] max-[860px]:w-[300px] max-[630px]:w-full gap-y-5">
                            <input type="text" 
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Name" 
                            className="h-[50px] ml-10 bg-[#1D1D1D] px-5"/>
                            <input type="email" 
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Email" 
                            className="h-[50px] ml-10 bg-[#1D1D1D] px-5"/>
                            <textarea 
                             id=""
                             value={form.message}
                             onChange={(e) => setForm({ ...form, message: e.target.value })}
                             rows={8}
                             placeholder="Message"
                             className="resize-none ml-10 bg-[#1D1D1D] px-5 py-2"
                             ></textarea>
                             <button
                             type="submit"
                             className="bg-[#DC143C] ml-10 w-[130px] max-[860px]:w-[100px] h-[50px] max-[860px]:h-[45px] text-xl cursor-pointer"
                             >Send</button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}