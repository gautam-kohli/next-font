"use client"
import React, { useContext,useState  } from 'react'
import Link from 'next/link'
import { Caption } from '@/Context/CaptionContext'

function page() {
    
    const { fetchdatabio } = useContext(Caption);
    const [dropmenu, setdropMenu] = useState()
    function openn(e) {
  
        setdropMenu((prev) => { return prev === e ? false : e })
      }
    return (
        <div className='flex'>
            <div className='text-center m-auto  w-full dark:text-white min-h-lvh'>

                <h1 className='font-semibold text-4xl '>Instagram Bio Category</h1>

                <div className=' w-11/12  m-auto grid sm:grid-cols-3 grid-cols-2  my-4 border'>
                    {fetchdatabio.map((title, index) => {
                        return (
                            <div className=' sm:w-60 w-40 m-auto my-3 h-fit bg-green-400 rounded-md' key={index}>
                                <h2 className=' py-1  text-center text-3xl bg-green-600 text-white rounded-md' onClick={() => { openn(index) }}>{title.title}</h2>

                                {title.subTitle.map((ss, ii) => { return <Link key={ii} href={`/bio/${title.title}-${ss}`} className={` ${dropmenu === index ? "block" : "hidden"} text-xl  text-white font-medium `} >{ss}</Link> })}
                            </div>)
                    })}
                </div>
            </div>

        </div>
    )
}

export default page