"use client"
import React, { useState, useEffect } from 'react'
import { MyContext } from '@/Context/context'
import { useContext } from 'react';

import { usePathname } from 'next/navigation'



function Fontstyle() {

    const { storeFonts, setfontIndex, setsearchBarText } = useContext(MyContext);
    const { all, instagram, aesthetic, Twitter, fancy, attitude, stylish, facebook, discord } = storeFonts;
    const [Copied, setCopied] = useState({});
    const parm = usePathname()
    const split = parm.split('/')[2]

    const userId = split || 'all';


    const data = {
        all: all,
        instagram: instagram,
        facebook: facebook,
        stylish: stylish,
        fancy: fancy,
        discord: discord,
        cool: attitude,
        aesthetic: aesthetic,
        twitter: Twitter,
    }

    useEffect(() => {
        scrollToTop();
        setsearchBarText(userId)

    }, [userId]
    )
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    function Copy(element, key) {
        if (element === 'button') {
            navigator.clipboard.writeText(storeFonts[userId][key])
            setCopied(key)

        } else {

            setfontIndex({ key, userId })
        }
    }

    return (
        <div className='text-center rounded-xl   text-black    lg:w-6/12  dark:text-white'>
            <h2 className='p-2 text-lg font-medium bg-[#438df1] rounded-t-lg text-white text-center'>Fonts Style</h2>

            <ul className=' overflow-auto  sm:h-96 '>
                {data[userId].map((tt, index) => {
                    return (
                        <li key={index} className='border dark:border-none border-gray-300 my-2 rounded-lg dark:bg-slate-800 flex justify-between px-1 items-center overflow-hidden hover:bg-[#cccccc] bg-white'>
                            <div className='py-4 text-lg overflow-hidden whitespace-nowrap mr-1  h-full w-96 text-left cursor-pointer' onClick={() => { Copy('div', index) }} >
                                {tt}

                            </div>
                            <button className='bg-[#00A8E8] px-3 py-1 text-slate-100 rounded-lg text-lg mr-1' onClick={() => { Copy('button', index) }}>
                                {Copied === index ? 'copied' : 'copy'}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div >

    )
}

export default Fontstyle