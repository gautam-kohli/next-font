"use client"
import { React, useContext } from 'react'
import { MyContext } from '@/Context/context'


function InstagramProfile() {

    const { storeFonts, fontIndex } = useContext(MyContext);
    const { key = 0, userId } = fontIndex;
    const { all, instagram, aesthetic, Twitter, fancy, attitude, stylish, facebook, discord } = storeFonts;
    const data = {
        all: all,
        instagram: instagram,
        facebook: facebook,
        stylish: stylish,
        fancy: fancy,
        discord: discord,
        attitude: attitude,
        aesthetic: aesthetic,
        twitter: Twitter,
    }

    return (

        <div className='my-2 w-fit lg:w-full border  border-black dark:bg-black dark:text-white lg:m-0 bg-slate-100 m-auto lg:block  h-full rounded-2xl shadow-2xl sticky -top-14 sm:static '>
            <div className="flex items-center p-4">
                <h1 className="mr-2 text-xl font-bold">font classic</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-6 h-8'><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884" /><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926" /></svg>

            </div>
            <div className="flex justify-around py-4 border-t pb-1">
                <span className='bg-gradient-to-r from-yellow-500  to-pink-600 rounded-full px-0.5 py-0.5'>
                    <div className=" h-16 w-16  overflow-hidden rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884" /><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926" /></svg>
                    </div>
                </span>
                <div className="text-center">
                    <div className="font-bold">2,921</div>
                    <div className="text-sm text-gray-400">posts</div>
                </div>
                <div className="text-center">
                    <div className="font-bold">11.1M</div>
                    <div className="text-sm text-gray-400">followers</div>
                </div>
                <div className="text-center">
                    <div className="font-bold">796</div>
                    <div className="text-sm text-gray-400">following</div>
                </div>
            </div>
            <div className="px-1.5 py-2 break-words">
                <div className="font-medium ">font classic</div>
                <div className="text-zinc-950 font-normal text-sm px-0 py-1 w-60 h-28 lg:size-full dark:text-white">{data[userId][key]}</div>
                <div className="flex mt-4">
                    <button className=" rounded-lg text-sm font-medium h-10 px-4 py-2 flex-1 bg-blue-500 text-white mr-2">Follow</button>
                    <button className=" rounded-lg text-sm font-medium h-10 px-4 py-2 flex-1 border bg-[#efefef]  text-black">Message</button>

                </div>
            </div>


        </div>



    )
}

export default InstagramProfile;
