"use client"
import React, { useState } from 'react'
import InstagramProfile from '../components/InstagramProfile'

function previewstylefont() {
    const [show, setshow] = useState(false);

    return (
        <>
            {/* <div className={`${show ? 'visible fixed' : 'hidden'}   bottom-10  m-auto  bg-gray-200 z-50  w-full rounded-t-xl border border-black lg:hidden`}>
                <InstagramProfile />
            </div>
            <button className='fixed bottom-0 py-2  bg-green-400 lg:hidden border w-full m-auto border-black' onClick={() => { setshow((prev) => { return (!prev) }) }}>preview text</button> */}

            <div className={`${show ? 'visible fixed' : 'hidden'} bottom-10 h-fit w-full bg-gray-200 z-50 rounded-t-xl border border-black lg:hidden `}>
                <InstagramProfile />
            </div>
            <button className='fixed bottom-0 py-2 bg-blue-500 text-white lg:hidden w-full m-auto rounded-sm' onClick={() => { setshow((prev) => { return (!prev) }) }}>preview text</button>


        </>
    )
}

export default previewstylefont