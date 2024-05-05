"use client"

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Sidebar from "./sideBar";
import { usePathname } from 'next/navigation'
import { Caption } from "@/Context/CaptionContext"
import Icon from "@/assets/FONT.png"
import Image from 'next/image'

function Header() {
  const { sideBar, SetSidebar } = useContext(Caption)
  const [mode, setMode] = useState(true);
  const pathname = usePathname()


  function toggle() {
    document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("dark");
    setMode((prev) => !prev);
  }
  function sendValue() {
    SetSidebar((prev) => !prev)

  }
  return (
    <>
      <header className="shadow shadow-slate-500 relative rounded-b-xl dark:text-white">
        <nav className="flex text-black text-2xl justify-end sm:justify-around items-center py-2 px-2 sm:p-3">
          {/* LOGO START */}
          <Link href="/" className={` text-2xl font-bold  dark:text-white text-left mr-16 sm:mr-0  `}>
            <Image src={Icon} alt="website logo" className="" />
          </Link>
          {/* LOGO START */}
          <div className="hidden sm:flex text-base font-semibold items-center rounded-md dark:text-white">
            <Link
              href="/captions"
              className={`${pathname === `/captions` ? 'bg-blue-400 dark:bg-gray-400 text-white' : ''} rounded-md  p-1`}
            >
              Instagram Captions
            </Link>
            <Link href="/font" className={`${pathname === `/font` ? 'bg-blue-400 dark:bg-gray-400 text-white' : ''} rounded-md  p-1`}>
              Font Generator
            </Link>
            <Link href="/bio" className={`${pathname === `/bio` ? 'bg-blue-400 dark:bg-gray-400 text-white' : ''} rounded-md  p-1`}>
              Instagram bio
            </Link>
          </div>
          <div className="hidden sm:flex text-base font-semibold items-center rounded-md dark:text-white">
            <Link href="/privacypolicy" className={`${pathname === `/privacypolicy` ? 'bg-blue-400 dark:bg-gray-400 text-white' : ''} rounded-md  p-1 `}>
              Privacy Policy
            </Link>
            <Link href="/aboutus" className={`${pathname === `/aboutus` ? 'bg-blue-400 dark:bg-gray-400 text-white' : ''} rounded-md  p-1 `}>
              Aboutus
            </Link>
          </div>
          <button className="dark:text-white" onClick={toggle}>
            {mode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
          <div onClick={sendValue} className="sm:hidden mx-1 dark:bg-white rounded-lg">
            {sideBar === false && (<svg className="w-9 h-9 sm:hidden " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            </svg>)}

            {sideBar === true && (<svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 sm:hidden dark:fill-white" viewBox="0 0 24 24"><path fill="" d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z" /></svg>)}

          </div>
        </nav>
      </header>
      <div className={`${sideBar && "border-t "} sm:hidden `}>
        <Sidebar value={sideBar} />
      </div>
    </>
  );
}

export default Header;