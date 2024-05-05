import React from 'react'
import { MyProvider } from '@/Context/context';
import SearchBar from '@/components/SearchBar';
import InstagramProfile from '@/components/InstagramProfile';
import FontSider from '@/components/Categories';
import Fontstyle from '@/components/FontStyle';
import Previewstylefont from '@/components/Previewstylefont';
import Sample from '@/components/sample';
export async function generateMetadata({ params }) {
  return {
    title: 'Font Generator - (ϝσɳƚʂ ƈσρყ αɳԃ ραʂƚҽ)',
    description:"Transform your text for social media bios! Explore free Twitter, Facebook, Instagram, and more fonts with our user-friendly font generator. Elevate your online style effortlessly. Get started now!"
  }
}

function fontHomepage() {


  return (
    <MyProvider>

      <div>
        <SearchBar />
        <div className='  rounded-md m-auto w-11/12 my-1  lg:flex  md:my-5 lg:w-full lg:px-5  md:justify-between border-b pb-2 '>
          <FontSider />
          <Fontstyle />
          <div className='w-3/12 h-fit sm:m-auto md:m-0 hidden lg:block'><InstagramProfile /></div>

        </div>

        <Previewstylefont />
      </div>
      <div className=' text-center p-16'>
        <h2 className='text-4xl font-semibold my-2 dark:text-white'>MyInstaBioFonts</h2>
        <p className='w-5/6 m-auto text-gray-500 font-semibold'>
        Welcome to our Font Generator Tool! Type your text and explore various font styles categorized for your convenience. Whether you're updating your Instagram bio or working on a special project, find the perfect font from classic to funky. Unsure which font to choose? Get expert tips and live previews to make your text stand out. Customize, preview, and download your favorite font to add a touch of magic to every message
        </p>
      </div>
      <Sample />

    </MyProvider>

  )
}

export default fontHomepage

