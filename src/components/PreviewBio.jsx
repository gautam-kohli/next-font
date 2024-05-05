import React, { useState } from 'react'
import BioFontInstaProfile from '@/components/BioFontInstaProfile.jsx'

function PreviewBio() {
    const [show, setshow] = useState(false);

  return (
    <>
    <div className={`${show ? 'visible fixed' : 'hidden'} bottom-10 h-5/6 w-full bg-gray-200 z-50 rounded-t-xl border border-black `}>
        <BioFontInstaProfile />
    </div>
    <button className='fixed bottom-0 py-2 bg-blue-500 text-white rounded-sm md:hidden border w-full m-auto border-black' onClick={() => { setshow((prev) => { return (!prev) }) }}>preview text</button>
</>
  )
}

export default PreviewBio 