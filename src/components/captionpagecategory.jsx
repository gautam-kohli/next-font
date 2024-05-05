"use client"

import { CaptionProvider } from '@/Context/CaptionContext'
import { Caption } from '@/Context/CaptionContext'
import Link from "next/link"
import { useContext, useState } from 'react';

export async function generateMetadata({ params }) {
    return {
      title: 'Caption Category',
      description:"All Caption Category"
    }
  }


function Captionhomepage() {
    const { data } = useContext(Caption);
    const [dropmenu, setdropMenu] = useState()

    function openn(e) {

        setdropMenu((prev) => { return prev === e ? false : e })
    }
    return (

        <div className='flex'>
            <div className='text-center m-auto  w-full dark:text-white min-h-screen  '>

                <h1 className='font-semibold text-4xl '>Captions Category</h1>

                <div className=' w-11/12 border m-auto sm:grid grid-cols-3 my-4 '>
                    {data.map((title, index) => {
                        return (
                            <div className=' text-center w-60 m-auto my-3 h-fit bg-green-400 rounded-md' key={index}>

                                <h2 className=' py-1  text-center text-3xl bg-green-600 text-white rounded-md' onClick={() => { openn(index) }}>{title.title}</h2>

                                {title.subTitle.map((ss, ii) => { return <Link key={ii} href={`/captions/${title.title}-${ss}`} className={` ${dropmenu === index ? "block" : "hidden"} text-xl  text-white font-medium `} >{ss}</Link> })}
                            </div>)
                    })}
                </div>
            </div>
        </div>

    )
}

export default Captionhomepage

