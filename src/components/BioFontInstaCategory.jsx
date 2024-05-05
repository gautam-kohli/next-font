

import { React, useContext, useState } from 'react'
import { Caption } from '@/Context/CaptionContext'
import  Link  from 'next/link';

function BioFontInstaCategory() {
  const { fetchdatabio } = useContext(Caption);
  const [submenu, setsubMenu] = useState()
  
  function menuShow(e) {
    setsubMenu((prev, index) => { return prev === e ? false : e })
  }

  return (
    <div className={`${"wad" === false ? "hidden" : "block"} h-screen  min-h-96 dark:border border-t  rounded-lg  w-full sticky top-0 bg-gray-100   sm:w-full text-center text-black  dark:text-white dark:bg-black`}>
      <h2 className='font-bold text-xl lg:text-4xl p-2 text-left lg:text-center '>Bio Instagram</h2>
      <div className='pb-3 '>
        <ul>
          {fetchdatabio.map((biodata, index) => {
            return (
              <div className='my-2  sm:w-full w-80 rounded-xl m-auto p-2  sm:p-0 ' key={index} >
                <div className='flex justify-between  items-center border rounded-md'>
                  <h1 className='cursor-pointer  font-semibold text-2xl  w-full  ' onClick={() => { menuShow(index) }}>{biodata.title}
                  </h1>
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="h-3 w-3 dark:fill-white"
                  version="1.1"
                  id="Layer_1"
                  xmlnsXlink="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
                     c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0001,21.213 
                     C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 
                     C255,161.018,253.42,157.202,250.606,154.389z"
                  />
                </svg>
                </div>
                <div>
                  <ul className={`${submenu === index ? 'visible' : 'hidden'}`}>
                    {biodata.subTitle.map((subhead, ind) => { return <Link key={ind} href={`/bio/${biodata.title}-${subhead}`} className='py-2  text-xl font-normal  block' >{subhead}</Link> })}

                  </ul>
                </div>
              </div>
            )
          })}

        </ul>

      </div>

    </div>
  )
}

export default BioFontInstaCategory