import React, { memo, useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Caption } from "@/Context/CaptionContext";

function Sidebar() {
  const router = useRouter();
  const { sideBar, SetSidebar,toggleSidebar } = useContext(Caption);
  const sidebarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      toggleSidebar(false);
    }
  };

  const handleLinkClick = () => {
    toggleSidebar(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="z-50" ref={sidebarRef}>
      <div
        className={`h-full z-50 ${sideBar === false ? "hidden translate-x-full" : "block translate-x-12"
          } transition fixed bg-slate-200 border-slate-950 w-[100%] sm:w-full dark:bg-[#212121] p-2 sm:p-0`}
      >
        <h2 className="px-3 text-gray-800 dark:text-[#f1f1f1] rounded-md cursor-pointer font-semibold text-3xl w-full">
          Menu
        </h2>
        <div className="border-t my-3 border-slate-500"></div>
        <div>
          <Link
            href="/"
            onClick={handleLinkClick}
            className={`${router.pathname === "/"
                ? "bg-gray-300 dark:bg-gray-700"
                : ""
              } px-3 text-gray-800 dark:text-[#f1f1f1] rounded-md cursor-pointer font-medium text-xl w-full`}
          >
            Home
          </Link>
        </div>
        <div className=" my-2">
          <Link
            href="/captions"
            onClick={handleLinkClick}
            className={`${router.pathname === "/captions"
                ? "bg-gray-300 dark:bg-gray-700"
                : ""
              } px-3 text-gray-800 dark:text-[#f1f1f1] rounded-md cursor-pointer font-medium text-xl w-full`}
          >
            Captions
          </Link>
        </div>
        <div className=" my-2">
          <Link
            href="/font"
            onClick={handleLinkClick}
            className={`${router.pathname === "/font"
                ? "bg-gray-300 dark:bg-gray-700"
                : ""
              } px-3 text-gray-800 dark:text-[#f1f1f1] rounded-md cursor-pointer font-medium text-xl w-full`}
          >
            Font Generator
          </Link>
        </div>
        <div>
          <Link
            href="/bio"
            onClick={handleLinkClick}
            className={`${router.pathname === "/bio"
                ? "bg-gray-300 dark:bg-gray-700"
                : ""
              } px-3 text-gray-800 dark:text-[#f1f1f1] rounded-md cursor-pointer font-medium text-xl w-full`}
          >
            Instagram bio
          </Link>
        </div>
        <div className="border-t my-3 border-slate-500"></div>
        <div>
          <Link
            href="/Privacy"
            onClick={handleLinkClick}
            className={`${router.pathname === "/Privacy"
                ? "bg-gray-300 dark:bg-gray-700"
                : ""
              } px-3 text-gray-800 dark:text-[#f1f1f1] rounded-md cursor-pointer font-medium text-xl w-full`}
          >
            Privacy Policy
          </Link>
        </div>
        <div className=" my-2">
          <Link
            href="/Privacy"
            onClick={handleLinkClick}
            className={`${router.pathname === "/Privacy"
                ? "bg-gray-300 dark:bg-gray-700"
                : ""
              } px-3 text-gray-800 dark:text-[#f1f1f1] rounded-md cursor-pointer font-medium text-xl w-full`}
          >
            Contactus
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Sidebar);