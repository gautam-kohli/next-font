
import React, { useContext } from 'react'
import Link from 'next/link'




function FontSider() {
  const fontSidebarArray = ['Instagram', 'aesthetic', 'stylish', 'fancy', 'cool']
  
  

  return (
    <div className='sticky top-[7.5rem] sm:top-24 z-20 mb-4 w-auto md: md:mb-0 dark:bg-black '>
      <h2 className='p-1 text-lg font-medium bg-[#438df1] rounded-t-lg text-white text-center'>Categories</h2>
      <ul className='bg-slate-100 flex py-3 lg:block overflow-auto md: lg:h-96 lg:w-60 items-center text-center dark:bg-slate-800 dark:text-white'>
        <Link href={`/font`} className='border block hover:bg-[#cccccc] text-base font-medium p-1  items-center rounded-md md:mx-3 md:my-2 cursor-pointer mx-1 ' >All</Link>
        {fontSidebarArray.map((ff, indx) => {
          return (
            <Link key={indx} href={`/font/${ff.toLowerCase()}`} className='border block hover:bg-[#cccccc] text-base font-medium p-1  items-center rounded-md md:mx-3 md:my-2 cursor-pointer mx-1 ' >{ff}
            </Link>
          )
        })}
      </ul>
    </div>

  )
}

export default FontSider