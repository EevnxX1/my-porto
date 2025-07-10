'use client'
import "./globals.css";
import Head from "next/head";
import { inter } from "./component/font";
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <body
        className={`${inter.className} overflow-x-hidden antialiased`}
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
