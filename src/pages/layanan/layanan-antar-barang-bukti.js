// src/pages/struktur-organisasi.js
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Navbar } from "@/components/Layout/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function LayananAntarBarangBukti() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="py-28 bg-gradient-to-t from-white to-[#5493ff]">
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col  md:h-max text-black">
          <h1 className="text-center font-poppins-bold text-3xl md:text-4xl mb-4 uppercase">
            LAYANAN ANTAR BARANG BUKTI
          </h1>

          <div className="px-10 my-4">
            <div className="py-6 flex justify-center">
              <Image
                src="/assets/img/layanan/layanan-1/bb_alur.jpeg"
                width={1000}
                height={500}
                alt="Layanan Antar Barang Bukti"
              />
            </div>
          </div>
          <h1 className="text-center font-poppins-bold text-3xl md:text-4xl mt-10 mb-4 uppercase">
            LAPORAN SKM LAYANAN ANTAR BARANG BUKTI
          </h1>

          <div className="px-10 my-4">
            <div className="py-6 flex justify-center">
              <Image
                src="/assets/img/layanan/layanan-1/SKM_ANTAR_BB.jpg"
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
