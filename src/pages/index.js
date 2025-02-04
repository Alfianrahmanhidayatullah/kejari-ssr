// pages/index.js
import { useState } from "react";
import { FaMoneyBillAlt, FaWhatsapp } from "react-icons/fa";
import Button from "../components/Button/Button";
import Link from "next/link";
import Header from "../components/Layout/Header";
import { Navbar } from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Carousel } from "flowbite-react";

export async function getServerSideProps() {
  try {
    // Fetch data dari backend Laravel
    // "https://experimental-clarita-alfianrahman-05697585.koyeb.app/api/berita"

    // const res = await fetch("http://localhost:8000/api/berita");
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/berita";
    const res = await fetch(API_URL);

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
          {berita.map((item) => (
            <div
              key={item.id}
              className=" container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0 bg-fixed bg-cover bg-no-repeat xl:h-screen"
              style={{
                backgroundImage: `url(http://127.0.0.1:8000/img/berita/${item.gambar})`,
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

          {/* <div className="container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0">
            <div className="w-full md:w-11/12 flex flex-col text-white items-start md:py-24 xl:py-40 ">
              <h1 className="w-3/4 font-poppins-medium text-xl">
                We Might be Your Solution
              </h1>
              <h1 className="w-3/4 font-poppins-bold text-4xl xl:text-5xl md:leading-[50px] xl:leading-[58px]">
                We Help Create Your Mobile Apps
              </h1>
              <p className="font-poppins-medium text-base mt-4">
                With our experience working on various kinds of applications, we
                should be able to help you provide solutions to your problems.
              </p>
              <Button
                classname="rounded-lg bg-[#f9c300] text-white px-6 py-3 flex gap-2.5 justify-center items-center text-lg font-poppins-bold mt-10 hover:no-underline hover:bg-[#e8bd22]"
                name="GET STARTED"
              />
            </div>
          </div> */}
        </Carousel>
      </div>

      <div className="bg-gradient-to-t from-white to-[#bbd4fe] py-16">
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col items-center md:h-max text-[#153164]">
          <h1 className="text-center font-poppins-bold text-4xl md:text-5xl mb-4">
            Bagaimana kami dapat membantu Anda?
          </h1>
          {/* <h6 className="text-center font-poppins-regular text-base tracking-widest">
            Here are the services we can provide.
          </h6> */}

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4 sm:w-auto">
            {/* {services.map((service, index) => ( */}
            <a
              href="/layanan/layanan-antar-barang-bukti"
              className="rounded-xl bg-white p-10 flex flex-col gap-2 items-center shadow-xl border border-[#f5f5f5] text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#17438E] text-[32px] text-white">
                <FaMoneyBillAlt />
              </div>
              <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-[#17438E] text-center">
                Layanan Antar Barang Bukti
              </div>
            </a>
            <a
              href="/layanan/layanan-konsultasi-hukum-gratis"
              className="rounded-xl bg-white p-10 flex flex-col gap-2 items-center shadow-xl border border-[#f5f5f5] text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#17438E] text-[32px] text-white">
                <FaMoneyBillAlt />
              </div>
              <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-[#17438E] text-center">
                Layanan Konsultasi Hukum Gratis
              </div>
            </a>
            <a
              href="/layanan/layanan-tilang-drive-thru"
              className="rounded-xl bg-white p-10 flex flex-col gap-2 items-center shadow-xl border border-[#f5f5f5] text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#17438E] text-[32px] text-white">
                <FaMoneyBillAlt />
              </div>
              <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-[#17438E] text-center">
                Layanan Tilang Drive Thru
              </div>
            </a>
            <a
              href="/layanan/layanan-tilang-delivery"
              className="rounded-xl bg-white p-10 flex flex-col gap-2 items-center shadow-xl border border-[#f5f5f5] text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#17438E] text-[32px] text-white">
                <FaMoneyBillAlt />
              </div>
              <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-[#17438E] text-center">
                Layanan Tilang Delivery
              </div>
            </a>
            {/* ))} */}
          </div>
        </div>
      </div>
      {/* Berita Terbaru */}
      <div className="py-16 bg-white">
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col items-center md:h-max text-black">
          <h1 className="text-center font-poppins-bold text-4xl md:text-5xl mb-4">
            Berita Terbaru
          </h1>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 sm:w-auto">
            {berita.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-white shadow-xl border border-[#f5f5f5] sm:h-auto sm:max-h-[1200px] md:h-[70vh] flex flex-col w-[20vw]"
              >
                <div
                  className="h-full md:h-3/6 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(http://127.0.0.1:8000/img/berita/${item.gambar})`,
                  }}
                ></div>
                <div className="px-4 py-3 h-auto">
                  <h4 className="text-base font-bold">{item.judul}</h4>
                  {/* Membatasi deskripsi hanya 40 kata */}
                  <p className="text-sm mt-2 text-justify">
                    {item.deskripsi.split(" ").slice(0, 40).join(" ")}...
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tampilkan tombol hanya jika masih ada berita yang belum ditampilkan */}
          {visibleCount < berita.length && (
            <div className="flex justify-center">
              <button
                className={`rounded-lg bg-[#153164] text-white px-6 py-3 flex gap-2.5 justify-center items-center text-lg font-poppins-bold mt-10 hover:no-underline hover:bg-[#17438E] ${
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
      <div className="pb-10 md:pb-16 px-4 lg:px-20 bg-gradient-to-b from-white to-[#bbd4fe]">
        <div className="sm:container sm:mx-auto bg-white flex flex-col md:flex-row justify-around rounded-xl shadow-xl z-10 w-full p-10">
          <div className="text-black">
            <h1 className="text-2xl sm:text-3xl tracking-wide">
              Hotline Tanya Jawab
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-end md:w-4/12 mt-8 md:mt-0">
            <Link
              href="https://wa.me/6281231365118"
              className="rounded-lg bg-[#17438E] text-white px-6 py-3 flex gap-2.5 justify-center items-center text-lg font-poppins-medium w-full md:w-auto hover:no-underline hover:text-[#17438E] hover:bg-white hover:border hover:border-[#17438E] duration-150"
            >
              <FaWhatsapp />
              <span>+6281231365118</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
