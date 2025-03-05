import React from "react";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#118B50]">
      <div className="container mx-auto py-6 lg:pt-16 lg:pb-8 text-white">
        <div className="mt-6 grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 w-full px-6 md:px-10">
          <div className="mr-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins-regular text-base md:text-xl mt-4 font-bold">
                MEDIA SOSIAL
              </h2>
              <ul className="text-base uppercase">
                <li className="pt-2 flex items-center">
                  <FaFacebook className="mr-2 text-xl" />
                  Facebook
                </li>
                <li className="pt-2 flex items-center">
                  <FaTwitter className="mr-2 text-xl" />
                  Twitter
                </li>
                <li className="pt-2 flex items-center">
                  <FaInstagram className="mr-2 text-xl" />
                  Instagram
                </li>
                <li className="pt-2 flex items-center">
                  <FaYoutube className="mr-2 text-xl" />
                  Youtube
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins-regular text-base md:text-xl mt-4 font-bold">
                LINK TERKAIT
              </h2>
              <ul className="text-base">
                <li className="pt-2">- Kejaksaan Agung RI </li>
                <li className="pt-2">- Kejaksaan Tinggi Jawa Timur</li>
              </ul>
            </div>
          </div>

          <div className="">
            <h2 className="font-poppins-regular text-sm md:text-xl mt-4 font-bold">
              KEJAKSAAN NEGERI SURABAYA
            </h2>
            <a
              href="https://wa.me/62811333525"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-base items-center">
                <div className="text-xl pr-2">
                  <FaWhatsapp />
                </div>
                <div>+031 7382297</div>
              </div>
            </a>
            <a href="" className="text-white" target="__blank">
              <div className="mt-2 flex font-poppins-medium text-base ">
                <div className="text-xl pr-2 pt-1">
                  <FaLocationDot />
                </div>
                <div>
                  <p>
                    Jalan Raya Sukomanunggal Jaya No.1, Sukomanunggal, Kota
                    Surabaya, Jawa Timur 60188
                  </p>
                </div>
              </div>
            </a>
            <a
              href="mailto:febri@arkanatechnology.com"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-base items-center">
                <div className="text-xl pr-2">
                  <FiMail />
                </div>
                <div>
                  <p>kejaksaan.surabaya@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="https://kejari-surabaya.kejaksaan.go.id"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-base items-center">
                <div className="text-xl pr-2">
                  <FaGlobe />
                </div>
                <div>https://kejari-surabaya.kejaksaan.go.id</div>
              </div>
            </a>
          </div>
        </div>
        <hr className="mt-20 mb-8 border-[#E0E0E0]" />
        <span className="block text-center font-poppins-medium text-sm px-6">
          Copyright © 2024 - All Rights Reserved by Kejaksaan Negeri Surabaya
        </span>
      </div>
    </footer>
  );
};

export default Footer;
