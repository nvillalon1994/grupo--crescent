"use client";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./HeaderMain.data";
import { useInsertionEffect, useState } from "react";

export function HeaderMain() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [header, setHeader] = useState(true);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useInsertionEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
      className={`
        
         fixed w-[100%] top-0 z-50  ${
           header ? " bg-white " : "bg-white"
         } transition-all duration-1000  `}
    >
      <nav className="flex flex-wrap items-center justify-between max-w-full px-4  md:py-3">
        <Link href="/" className="flex items-center md:px-10 ">
          <img
            src="/assets/logo.jpg"
            className="md:w-32 w-20 py-2 md:py-0  filter "
            alt="Artelligence"
          />
        </Link>
        <RiMenu3Line
          className="block text-3xl lg:hidden cursor-pointer text-[#1E1E1E]"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        ></RiMenu3Line>
        {openMobileMenu&&<div className='w-full border border-transparent border-b-black absolute top-12 h-fit pb-4 left-0 bg-white lg:hidden '>
          <div className="flex flex-col p-4 mt-4 md:p-5   h-full gap-3 text-center ">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 transition-all duration-500 ease-in-out"
                onClick={()=>{setOpenMobileMenu(false)}}
              >
                <Link
                  href={idLink}
                  className=" tracking-wide text-xl text-[#1E1E1E] hover:text-[#6EB7CD]"
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>}
        <div
          className={`hidden lg:block`}
        >
          <div className="flex flex-col p-4 mt-4 md:p-5 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 transition-all duration-500 ease-in-out"
              >
                <Link
                  href={idLink}
                  className=" tracking-wide text-base text-[#1E1E1E] hover:text-[#6EB7CD]"
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
