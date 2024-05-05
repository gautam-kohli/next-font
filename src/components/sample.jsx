import React from 'react'
import Fontstep2 from "@/assets/fontStep1.png"
import Fontstep3 from "@/assets/fontstep2.png"
import Fontstep1 from "@/assets/fontstep3.png"

import Image from 'next/image'

function sample() {
  return (
    <>
      <div className="bg-white p-8 dark:text-white dark:bg-[#212121]">
        <h1 className="text-5xl font-bold text-center">How to use Instabiofonts font generator?</h1>

        <p className="mt-4 text-lg text-center w-7/12 m-auto ">

          Elevate your social media presence with our effortless text font generator tool. In three simple steps, unlock
          the power to create captivating and trendy copy and paste fonts.
        </p>

        <div className='container lg:flex justify-evenly '>

          <section className='sec1 border rounded-md  p-2  bg-red-100 shadow-2xl  dark:bg-[#212121]   m-auto w-fit lg:m-0'>
            <p className='bg-gray-400 w-fit p-1 rounded-md my-2 text-white '>Step 1</p>
            <div className='w-72 object-contain m-auto '><Image src={Fontstep1} alt="" className='h-72 object-contain ' />
            <h2 className='mt-2 font-bold'>Type Text here </h2>
            <p className='mt-2 text-gray-600 font-semibold'>First you need to write the text in type section for stylish text. Wherever it is marked on the photo</p>

            </div>

          </section>

          <section className='sec1 border rounded-md  p-2 bg-orange-100 dark:bg-[#212121]  shadow-2xl m-auto w-fit lg:m-0 my-4' >
            <p className='bg-gray-400 w-fit p-1 rounded-md my-2 text-white'>Step 2</p>
            <div className='w-72  '><Image src={Fontstep2} alt="" className=' size-72 object-contain' />
            <h2 className='mt-2 font-bold'>Select the Category</h2>
            <p className='mt-2 text-gray-600 font-semibold'>Second, you'll need to select the category that seems right to you according to it.</p>
            </div>
          </section>

          <section className='sec1 border rounded-md  p-2 bg-green-100 shadow-2xl dark:bg-[#212121]  m-auto w-fit lg:m-0'>
            <p className='bg-gray-400 w-fit p-1 rounded-md my-2 text-white'>Step 3</p>
            <div className='w-72  object-contain'><Image src={Fontstep3} alt="" className='' />
            <h2 className='mt-2 font-bold'>Select the Font Style </h2>
            <p className='mt-2 text-gray-600 font-semibold'>Third, you have to select the font style that you like, and then you can check it in the preview.</p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default sample