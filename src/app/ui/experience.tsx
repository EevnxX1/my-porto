import { montserrat } from "../component/font";
import clsx from "clsx";

export default function Experience() {
    return(
        <main className="py-20 bg-white text-black">
            <div 
            id="experience"
            className="flex flex-col gap-y-20 w-[1400px] max-[1300px]:w-[1000px] max-[1540px]:w-[1200px] max-[1060px]:w-[800px] max-[860px]:w-[90%] m-auto">
                <div className="flex flex-col gap-y-2">
                    <h1 className={clsx('text-5xl', montserrat.className)}>MyExperience</h1>
                    <p className={clsx(montserrat.className)}>Disini adalah informasi tentang <br /> pengalaman saya pada saat di kampus</p>
                </div>
                <section className="flex flex-col gap-y-20">
                    <div>
                        <div className="flex justify-between items-end border-b border-black mb-4">
                            <h1 className={clsx('text-4xl', montserrat.className)}>Genius Studio</h1>
                            <p className="font-semibold">2023-2025</p>
                        </div>
                        <div className="flex justify-between mb-20">
                            <h2 className="font-semibold">Deskripsi</h2>
                            <p 
                            className="w-[800px] max-[1300px]:w-[600px] max-[1060px]:w-[400px] max-[630px]:w-[300px] max-[500px]:w-[230px] max-[500px]:text-xs max-[1060px]:text-sm text-justify">Genius Studio ini adalah nama tim kami yang terdiri dari 3 orang, masing-masing memiliki peran penting yaitu UIUX  Designer, Front-End Developer, dan Back-End Developer. kebetulan saya memiliki peran di Front-end developer, walaupun saya juga memiliki basic di back-end developer. Tim ini dibangun karena suatu tugas kuliah yang dimana kita harus membantu umkm untuk menjualkan produknya secara online, lalu tim ini tercipta untuk mencapai tujuan tersebut.</p>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="font-semibold">Peran Saya</h2>
                            <ul className="w-[800px] max-[1300px]:w-[600px] max-[1060px]:w-[400px] max-[630px]:w-[300px] max-[500px]:w-[230px] max-[500px]:text-xs max-[1060px]:text-sm flex flex-col gap-y-5 text-justify">
                                <li 
                                >Mengembangkan antarmuka web dan aplikasi mobile yang interaktif dan responsif menggunakan Next.js, Tailwind CSS, dan Flutter.</li>
                                <li
                                >Menerjemahkan desain UI/UX menjadi tampilan fungsional dengan pengalaman pengguna yang optimal di berbagai perangkat.</li>
                                <li
                                >Mengintegrasikan aplikasi dengan API untuk menampilkan data secara dinamis serta memastikan performa dan kestabilan aplikasi</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-end border-b border-black mb-4">
                            <h1 className={clsx('text-4xl', montserrat.className)}>Himatif</h1>
                            <p className="font-semibold">2024-2025</p>
                        </div>
                        <div className="flex justify-between mb-16">
                            <h2 className="font-semibold">Deskripsi</h2>
                            <p 
                            className="w-[800px] max-[1300px]:w-[600px] max-[1060px]:w-[400px] max-[630px]:w-[300px] max-[500px]:w-[230px] max-[500px]:text-xs max-[1060px]:text-sm text-justify">HIMATIF atau Himpunan Mahasiswa Teknik Informatika adalah organisasi mahasiswa di tingkat program studi yang fokus pada pengembangan potensi dan aspirasi mahasiswa. Saya berperan di Divisi Science and Education yang bertugas menyelenggarakan kegiatan edukatif seperti seminar, pelatihan, dan workshop untuk meningkatkan wawasan serta kemampuan akademik mahasiswa Teknik Informatika.</p>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="font-semibold">Peran Saya</h2>
                            <ul className="w-[800px] max-[1300px]:w-[600px] max-[1060px]:w-[400px] max-[630px]:w-[300px] max-[500px]:w-[230px] max-[500px]:text-xs  max-[1060px]:text-sm flex flex-col gap-y-3 text-justify">
                                <li
                                >Menyusun dan menjalankan program kerja edukatif seperti seminar, pelatihan, dan workshop.</li>
                                <li
                                >Bekerja sama dengan divisi lain untuk mendukung acara organisasi yang bersifat ilmiah dan pengembangan diri.</li>
                                <li
                                >Mengelola konten edukasi yang relevan dan bermanfaat bagi mahasiswa Teknik Informatika.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}