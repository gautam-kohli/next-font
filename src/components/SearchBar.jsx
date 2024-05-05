"use client"
import React, { useState, useContext } from 'react'

import { MyContext } from '../Context/context';


function SearchBar() {
    const { setInput,searchBarText } = useContext(MyContext);
    

    return (

        <div className='dark:bg-slate-800 sticky -top-28 z-40 h-auto lg:w-10/12  border py-2 my-1 sm:my-3 text-center w-11/12 m-auto bg-[#00A8E8]  rounded-lg sm:z-50'>
            <h1 className='font-bold text-4xl w-11/12 text-slate-100 sm:w-2/4 mx-auto'>
                Font Generator
            </h1>

            <p className='text-slate-50 my-2 font-light'>Elevate Your Instagram Presence: Stylish Fonts for Bios, Captions for Photos.</p>
            <h2 className='mb-1 text-lg text-white'>{searchBarText} Generator</h2>
            <p className='mb-1  text-white font-semibold text-lg'>Type Text Here:</p>
            <input type="text" placeholder='type Something...' className='shadow-md p-3 rounded-lg bg-gray-100 text-black w-11/12 mx-auto ' onChange={e => setInput(e.target.value)} />

        </div>


    )
}

export default SearchBar