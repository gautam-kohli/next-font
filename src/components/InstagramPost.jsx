
import React, { useState, useContext } from 'react'
import { Caption } from '@/Context/CaptionContext'


function InstagramPost() {
    const { PreviewCaption } = useContext(Caption);

    const [selectedImage, setSelectedImage] = useState('https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <div className="size-fit  my-2 sticky top-0 bg-white m-auto sm:m-0 border-black dark:bg-black dark:text-white border sm:w-96 w-11/12 rounded-xl max-w-sm">

                <div className="px-4 py-3 flex items-center">
                    <div className="flex items-center space-x-2 ">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-black dark:bg-white"></span>
                        <div>
                            <p className="font-bold">font classic</p>

                        </div>
                        <svg className='relative inline w-4 h-4 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884" /><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926" /></svg>

                    </div>
                    <svg className='ml-20 sm:ml-32' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402" /></svg>
                </div>
                <div>

                    {selectedImage && <img src={selectedImage} alt="Selected" className='aspect-[20/20] object-cover ' />}
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            <svg aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokewidthstrokewidth="2"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
                                <path d="m22 2-7 20-4-9-9-4Z"></path>
                                <path d="M22 2 11 13"></path>
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                        </svg>
                    </div>
                    <div className="px-4 pb-4 ">
                        <div className=' '>
                            <span className="font-semibold text-sm text-black  dark:text-white">
                            font classic
                            </span>
                            <svg className='relative inline w-3 h-4 mx-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884" /><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926" /></svg>
                            <h1 className=" inline font-normal text-sm flex-wrap">
                                {PreviewCaption}
                            </h1>

                        </div>

                        <input type="file" className='mt-1' onChange={handleImageUpload} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default InstagramPost