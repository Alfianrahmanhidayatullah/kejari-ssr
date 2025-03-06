// pages/index.js
import { useState } from "react";
import { FaMoneyBillAlt, FaWhatsapp } from "react-icons/fa";
import Button from "../components/Button/Button";
import Link from "next/link";
import Header from "../components/Layout/Header";
import { Navbar } from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export async function getServerSideProps() {
  try {
    // Fetch data dari backend Laravel
    // "https://kejari-surabaya.my.id/api/berita"

    // const res = await fetch("http://localhost:8000/api/berita");
    // const API_URL =
    //   process.env.NEXT_PUBLIC_API_URL ||
    //   "https://experimental-clarita-alfianrahman-05697585.koyeb.app/api/berita";
    // const res = await fetch(API_URL);

    const res = await fetch("https://kejari-surabaya.my.id/api/berita");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // console.log({ res });
    const result = await res.json();

    // const resService = await fetch("http://localhost:3000/data/services.json");

    // const services = await resService.json();
    return {
      props: { berita: result.data || [] }, // Passing `result.data` sebagai `berita`
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: { berita: [], services: [] }, // Return array kosong jika ada error
    };
  }
}

const Home = ({ berita }) => {
  const [show, setShow] = useState(true);
  const [placement, setPlacement] = useState("right");

  console.log("Data Berita:", berita);
  const [visibleCount, setVisibleCount] = useState(4); // Mulai dengan 4 berita

  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);

    // Lakukan fetch data atau operasi lainnya
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 4); // Tambah 4 berita lagi setiap kali tombol diklik

      setIsLoading(false);
    }, 1000); // Simulasi waktu loading
  };
  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <div className="bg-fixed bg-cover bg-no-repeat xl:h-screen">
        <Carousel>
          {berita.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0 bg-fixed bg-cover bg-no-repeat xl:h-screen"
              style={{
                backgroundImage: `url(https://kejari-surabaya.my.id/img/berita/${item.gambar})`,
              }}
            >
              {/* Overlay Transparan Hitam */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Konten Utama */}
              <div className="relative w-full md:w-11/12 flex flex-col text-white items-start md:py-24 xl:py-40 z-10">
                <h1 className="px-4 py-1 rounded-full font-poppins-medium text-xl bg-[#f9c300]">
                  Berita Terbaru
                </h1>
                <h1 className="w-3/4 font-poppins-bold text-4xl xl:text-5xl md:leading-[50px] xl:leading-[58px] capitalize mt-2">
                  {item.judul}
                </h1>
                <p className="w-4/6 font-poppins-medium text-base mt-4">
                  {item.deskripsi.split(" ").slice(0, 40).join(" ")}...
                </p>
                <Button
                  classname="rounded-lg bg-[#17438E] text-white px-6 py-2 flex gap-2.5 justify-center items-center text-lg font-poppins-bold mt-10 hover:no-underline hover:bg-white hover:text-[#17438E]"
                  name="Baca Selengkapnya"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="bg-gradient-to-t from-white to-[#b5ead1] py-16">
        <div className="px-4 xl:px-8 px flex flex-col items-center md:h-max text-[#118B50]">
          <h1 className="text-center font-poppins-bold text-4xl md:text-[40px] mb-4 uppercase underline">
            Layanan Publik
          </h1>
          {/* <h6 className="text-center font-poppins-regular text-base tracking-widest">
            Here are the services we can provide.
          </h6> */}

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4 sm:w-auto">
            {/* {services.map((service, index) => ( */}
            <a
              href="/layanan/layanan-antar-barang-bukti"
              className="rounded-xl bg-white py-10 px-4 flex gap-2 items-center shadow-xl border border-[#f5f5f5] text-center hover:bg-[#118B50] group duration-200"
            >
              <div className="flex  items-center justify-center w-2/6 mr-2">
                {/* <FaMoneyBillAlt /> */}
                <Image
                  src={"/assets/img/layanan/layanan-1/layanan-1.png"}
                  width={100}
                  height={100}
                  alt="layanan-1"
                  className="rounded-full bg-white border border-[#118B50] p-3 w-24 "
                />
              </div>
              <div className="flex flex-col text-left ">
                <div className="mt-2 font-poppins-bold text-base md:text-lg text-[#118B50] group-hover:text-white">
                  Layanan Antar Barang Bukti
                </div>
                <div className="text-sm text-black group-hover:text-white">
                  Layanan antar barang bukti gratis langsung ke rumah anda
                </div>
              </div>
            </a>
            <a
              href="/layanan/layanan-antar-barang-bukti"
              className="rounded-xl bg-white py-10 px-4 flex gap-2 items-center shadow-xl border border-[#f5f5f5] text-center hover:bg-[#118B50] group duration-200 w-full"
            >
              <div className="flex  items-center justify-center w-20 mr-2">
                {/* <FaMoneyBillAlt /> */}
                <Image
                  src={"/assets/img/layanan/layanan-2/layanan-2.png"}
                  width={100}
                  height={100}
                  alt="layanan-1"
                  className="rounded-full bg-white border border-[#118B50] p-3 w-24 "
                />
              </div>
              <div className="flex flex-col text-left w-auto">
                <div className="mt-2 font-poppins-bold text-base md:text-lg text-[#118B50] group-hover:text-white">
                  Konsultasi Hukum Gratis
                </div>
                <div className="text-sm text-black group-hover:text-white">
                  Layanan konsultasi umum untuk masyarakat
                </div>
              </div>
            </a>
            <a
              href="/layanan/layanan-antar-barang-bukti"
              className="rounded-xl bg-white py-10 px-4 flex gap-2 items-center shadow-xl border border-[#f5f5f5] text-center hover:bg-[#118B50] group duration-200"
            >
              <div className="flex  items-center justify-center mr-2 rounded-full border border-[#118B50] p-4 w-16 h-[8vh] bg-white ">
                {/* <FaMoneyBillAlt /> */}
                <Image
                  src={"/assets/img/layanan/layanan-3/layanan-3.png"}
                  width={100}
                  height={100}
                  alt="layanan-1"
                  className="  "
                />
              </div>
              <div className="flex flex-col text-left ">
                <div className="mt-2 font-poppins-bold text-base md:text-lg text-[#118B50] group-hover:text-white">
                  Informasi Perkara
                </div>
                <div className="text-sm text-black group-hover:text-white">
                  Lihat perkembangan perkara anda disini
                </div>
              </div>
            </a>
            <a
              href="/layanan/layanan-antar-barang-bukti"
              className="rounded-xl bg-white py-10 px-4 flex gap-2 items-center shadow-xl border border-[#f5f5f5] text-center hover:bg-[#118B50] group duration-200"
            >
              <div className="flex  items-center justify-center  mr-2 rounded-full bg-white border border-[#118B50] p-3 w-20 h-[8vh] ">
                {/* <FaMoneyBillAlt /> */}
                <Image
                  src={"/assets/img/layanan/layanan-4/layanan-4.png"}
                  width={100}
                  height={100}
                  alt="layanan-1"
                  className=""
                />
              </div>
              <div className="flex flex-col text-left ">
                <div className="mt-2 font-poppins-bold text-base md:text-lg text-[#118B50] group-hover:text-white">
                  Layanan Antar Barang Bukti Gratis
                </div>
                <div className="text-sm text-black group-hover:text-white">
                  Layanan antar barang bukti gratis Langsung ke rumah anda
                </div>
              </div>
            </a>

            {/* ))} */}
          </div>
        </div>
      </div>

      <div className="min-h-auto bg-[#118B50] flex flex-wrap justify-center items-center gap-6 p-6">
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[45%]">
          <h2 className="text-green-700 font-bold text-lg border-b pb-2">
            Penerimaan SPDP
          </h2>
          <table className="w-full mt-4 text-sm text-left">
            <thead>
              <tr className="text-gray-700">
                <th className="font-medium">No SPDP</th>
                <th className="font-medium">Tanggal SPDP</th>
                <th className="font-medium">Penyidik</th>
                <th className="font-medium">Nama Tersangka</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[45%]">
          <h2 className="text-green-700 font-bold text-lg border-b pb-2">
            Penerimaan Berkas
          </h2>
          <table className="w-full mt-4 text-sm text-left">
            <thead>
              <tr className="text-gray-700">
                <th className="font-medium">No SPDP</th>
                <th className="font-medium">Tanggal SPDP</th>
                <th className="font-medium">Penyidik</th>
                <th className="font-medium">Nama Tersangka</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      {/* Berita Terbaru */}
      <div className="py-16 bg-white">
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col items-center md:h-max ">
          <h1 className="text-center font-poppins-bold text-3xl md:text-[40px] mb-4 uppercase text-[#118B50] underline">
            Berita Terkini
          </h1>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 sm:w-auto ">
            {berita.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-white shadow-xl border border-[#f5f5f5] sm:h-auto sm:max-h-[1200px] md:h-[70vh] flex flex-col w-[20vw]"
              >
                <div
                  className="h-full md:h-[35vh] bg-cover bg-no-repeat "
                  style={{
                    backgroundImage: `url(https://kejari-surabaya.my.id/img/berita/${item.gambar})`,
                  }}
                ></div>
                <div className="px-4 py-3 h-auto">
                  <h4 className="text-[14px] font-bold text-[#118B50]">
                    {item.judul}
                  </h4>
                  {/* Membatasi deskripsi hanya 40 kata */}
                  <p className="text-[12px] mt-2 text-justify text-black">
                    {item.deskripsi.split(" ").slice(0, 25).join(" ")}...
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tampilkan tombol hanya jika masih ada berita yang belum ditampilkan */}
          {visibleCount < berita.length && (
            <div className="flex justify-center">
              <button
                className={`rounded-lg bg-[#118B50] text-white px-6 py-3 flex gap-2.5 justify-center items-center text-lg font-poppins-bold mt-10 hover:no-underline hover:bg-[#2b7853] ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleLoadMore}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span className="ml-2">Loading...</span>
                  </div>
                ) : (
                  <span>Berita Lainnya</span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hotline Section */}
      <div className="min-h-auto bg-[#118B50] px-6 py-10">
        {/* Card Container */}
        <div className="w-full text-center font-poppins-bold text-4xl md:text-[35px] mb-8  uppercase underline">
          <h1>INFORMASI SEPUTAR</h1>
        </div>
        <div className="   bg-cover bg-no-repeat xl:h-[72vh] ">
          <Carousel>
            <div
              className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen"
              // style={{
              //   backgroundImage: `url(/assets/img/informasi/informasi-1.png)`,
              // }}
            >
              <Image
                src={"/assets/img/informasi/informasi-1.webp"}
                width={1000}
                height={1000}
                alt="layanan-1"
                className="w-full"
              />
              {/* Overlay Transparan Hitam */}
            </div>
            <div
              className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen"
              // style={{
              //   backgroundImage: `url(/assets/img/informasi/informasi-1.webp)`,
              // }}
            >
              <Image
                src={"/assets/img/informasi/informasi-2.webp"}
                width={1000}
                height={1000}
                alt="layanan-1"
                className="w-full"
              />
              {/* Overlay Transparan Hitam */}
            </div>
            <div
              className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen"
              // style={{
              //   backgroundImage: `url(/assets/img/informasi/informasi-1.webp)`,
              // }}
            >
              <Image
                src={"/assets/img/informasi/informasi-3.webp"}
                width={1000}
                height={1000}
                alt="layanan-1"
                className="w-full"
              />
              {/* Overlay Transparan Hitam */}
            </div>
            <div
              className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen"
              // style={{
              //   backgroundImage: `url(/assets/img/informasi/informasi-1.webp)`,
              // }}
            >
              <Image
                src={"/assets/img/informasi/informasi-4.webp"}
                width={1000}
                height={1000}
                alt="layanan-1"
                className="w-full"
              />
              {/* Overlay Transparan Hitam */}
            </div>
            <div
              className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen"
              // style={{
              //   backgroundImage: `url(/assets/img/informasi/informasi-1.webp)`,
              // }}
            >
              <Image
                src={"/assets/img/informasi/informasi-5.webp"}
                width={1000}
                height={1000}
                alt="layanan-1"
                className="w-full"
              />
              {/* Overlay Transparan Hitam */}
            </div>
            <div
              className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen"
              // style={{
              //   backgroundImage: `url(/assets/img/informasi/informasi-1.webp)`,
              // }}
            >
              <Image
                src={"/assets/img/informasi/informasi-6.webp"}
                width={1000}
                height={1000}
                alt="layanan-1"
                className="w-full"
              />
              {/* Overlay Transparan Hitam */}
            </div>
          </Carousel>
        </div>
      </div>

      <div className="min-h-auto bg-white px-6 py-10">
        {/* Card Container */}
        {/* Preconnect untuk YouTube */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" />
        <div className="w-full text-center font-poppins-bold text-4xl md:text-[35px] mb-8 text-[#118B50] uppercase underline">
          <h1>INFORMASI PUBLIK</h1>
        </div>
        <div className="w-full flex flex-wrap h-auto p-2 ">
          {/* Bagian Kiri */}
          <div className="w-full md:w-9/12 px-6">
            <div className="w-full">
              <Image
                src="/assets/img/informasi-publik/informasi-publik-banner.webp"
                width={1200}
                height={300}
                alt="Informasi Publik Banner"
                priority
              />
            </div>

            {/* Video Utama */}
            <div className="w-full my-6">
              <iframe
                className="w-full h-56 md:h-96 rounded-lg"
                src="https://www.youtube-nocookie.com/embed/UridEmhSPh0?rel=0"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>

            {/* Thumbnail Video Lainnya */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {["1zmTEYiqDbs", "MuFTGxKLG4g", "7Xn6lXc05co"].map(
                (videoId, index) => (
                  <div key={index} className="w-full">
                    <iframe
                      className="w-full h-32 md:h-48 rounded-lg"
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                      title={`YouTube video ${index + 1}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                )
              )}
            </div>

            <div className="mt-6">
              <h1 className="uppercase text-[#118B50] text-left text-3xl">
                GALERI VIDEO
              </h1>
              <p className="text-black mt-2">
                Dokumentasi video kegiatan, agenda, dan program Yang telah
                dilakukan oleh kejaksaan Negeri Surabaya dalam mendukung Zona
                Integritas menuju Wilayah Birokrasi Bersih dan Melayani (WBBM)
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/12 ">
            <div className="flex justify-center ">
              <Image
                src={"/assets/img/informasi-publik/jam-kerja.webp"}
                width={1000}
                height={100}
                alt="jam-kerja"
              />
            </div>
            <div className="my-2 lg:my-6">
              <h1 className="uppercase text-[#118B50] text-left text-3xl">
                Infografis
              </h1>
              <div className="  bg-cover bg-no-repeat h-[40vh] xl:h-[60vh] ">
                <Carousel>
                  <div className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen">
                    <Image
                      src={"/assets/img/informasi-publik/infografis-1.webp"}
                      width={350}
                      height={1000}
                      alt="layanan-1"
                      className=""
                    />
                  </div>
                  <div className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen">
                    <Image
                      src={"/assets/img/informasi-publik/infografis-2.webp"}
                      width={320}
                      height={1000}
                      alt="layanan-1"
                      className=""
                    />
                  </div>
                </Carousel>
              </div>
            </div>
            <div>
              <h1 className="uppercase text-[#118B50] text-left text-3xl">
                Survey
              </h1>
              <div className="  bg-cover bg-no-repeat h-[40vh] xl:h-[60vh] ">
                <Carousel>
                  <div className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen">
                    <Image
                      src={"/assets/img/informasi-publik/survey-1.webp"}
                      width={350}
                      height={1000}
                      alt="layanan-1"
                      className=""
                    />
                  </div>
                  <div className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0  bg-no-repeat xl:h-screen">
                    <Image
                      src={"/assets/img/informasi-publik/survey-2.webp"}
                      width={320}
                      height={1000}
                      alt="layanan-1"
                      className=""
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
