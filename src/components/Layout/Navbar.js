import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State untuk submenu

  const changeNavbarColor = () => {
    if (window.scrollY >= 5) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <nav
      className={`${
        colorChange || showMobileNav
          ? "bg-[#17438E] duration-500"
          : "bg-transparent"
      } p-3 fixed w-full z-20 top-0 left-0 border-b border-gray-200`}
    >
      <div className="w-full lg:container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between">
        <Link href="/" className="flex items-center w-auto text-4xl mr-14">
          {colorChange || showMobileNav ? (
            <Image
              src={"/assets/img/logo-kejari.png"}
              width={60}
              height={60}
              alt="logo"
            />
          ) : (
            <Image
              src={"/assets/img/logo-kejari.png"}
              width={60}
              height={60}
              alt="logo"
            />
          )}
        </Link>
        <button
          type="button"
          className={`ml-3 inline-flex items-center justify-center text-3xl hover:text-gray-900 md:hidden 
            ${colorChange || showMobileNav ? "text-[#fb392f]" : "text-white"}
          `}
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu />
        </button>

        <div
          className={`${
            showMobileNav ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="mt-4 flex flex-col rounded-lg md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium md:dark:bg-transparent md:items-center">
            <li
              className={`hover:border-b-4 hover:duration-200 py-3 ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <Link
                href="/"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Beranda
              </Link>
            </li>

            {/* Menu Profil dengan Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div
                className={`hover:border-b-4 hover:duration-200 py-3 ${
                  colorChange || showMobileNav
                    ? "hover:border-[#fb392f]"
                    : "hover:border-white"
                }`}
              >
                <p
                  href=""
                  className={`block font-poppins-medium text-base md:text-xs lg:text-base md:text-center ${
                    colorChange || showMobileNav
                      ? "text-white hover:text-white"
                      : "text-white hover:text-white"
                  }`}
                >
                  Profil
                </p>
              </div>

              {/* Submenu */}
              {showDropdown && (
                <ul className="absolute left-0 w-48 bg-white shadow-lg text-gray-700">
                  <li className="hover:bg-gray-100">
                    <Link
                      href="/visi-misi"
                      className="block px-4 py-2 hover:text-blue-600"
                    >
                      Visi & Misi
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      href="/struktur-organisasi"
                      className="block px-4 py-2 hover:text-blue-600"
                    >
                      Struktur Organisasi
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className={`hover:border-b-4 hover:duration-200 py-3 ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Informasi Publik
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Galeri
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Kontak
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Informasi Perkara
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Reformasi Birokrasi
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Pelayanan Publik
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
