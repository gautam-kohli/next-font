import React, { useState } from 'react'
import InstagramPost from '../components/InstagramPost'

function PreviewCaption() {
    const [show, setshow] = useState(false);

    return (
        <>
            <div className={`${show ? 'visible fixed' : 'hidden'} bottom-10   h-fit bg-gray-200 z-50  w-full rounded-t-xl border border-black lg:hidden`}>
                <InstagramPost />
            </div>
            <button className='fixed bottom-0 py-2 bg-blue-500 text-white rounded-sm lg:hidden border w-full m-auto border-black' onClick={() => { setshow((prev) => { return (!prev) }) }}>preview text</button>
        </>
    )
}

export default PreviewCaption