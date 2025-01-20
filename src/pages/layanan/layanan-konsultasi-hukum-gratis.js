// src/pages/struktur-organisasi.js
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Navbar } from "@/components/Layout/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function LayananKonsultasiHukumGratis() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="py-28 bg-gradient-to-t from-white to-[#5493ff]">
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col  md:h-max text-black">
          <h1 className="text-center font-poppins-bold text-3xl md:text-4xl mb-4 uppercase">
            KONSULTASI HUKUM GRATIS
          </h1>

          <div className="px-10 my-4">
            <div className="py-6 flex justify-center">
              <Image
                src="/assets/img/layanan/layanan-2/konsul_hukum.jpeg"
                width={1000}
                height={500}
                alt="Layanan Antar Barang Bukti"
              />
            </div>
          </div>
          <h1 className="text-center font-poppins-bold text-3xl md:text-4xl mt-10 mb-4 uppercase">
            LAPORAN SKM LAYANAN KONSULTASI HUKUM GRATIS
          </h1>

          <div className="px-10 my-4">
            <div className="py-6 flex justify-center">
              <Image
                src="/assets/img/layanan/layanan-2/SKM_KONSULTASI_HUKUM.jpg"
                width={1000}
                height={500}
                alt="Layanan Antar Barang Bukti"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
