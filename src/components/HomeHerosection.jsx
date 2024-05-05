import React from 'react'
import MyImage from '../assets/instapostimg.png';
import Instafontbio from '../assets/instafontbio.png';
import Herosectionimage from '../assets/Herosectionimage.png';
import CaptionFeaturetoolimage from '../assets/captionFeaturetoolimage.png';
import FontsFeaturetoolimage from '../assets/fontsFeaturetoolimage.png';

import { Link } from 'react-router-dom';

function HomeHerosection() {
    document.title = 'bas'
    return (
        <>
            <div className=' dark:bg-[#212121] dark:text-white justify-center  gap-52  sm:flex  items-center  bg-violet-400 bg-gradient-to-b '>
                <h1 className='sm:text-6xl text-5xl sm:w-2/6 text-slate-100 sm:text-left text-center font-bold pt-3 m-auto'>Make Your <span className='text-yellow-300 '>Social Media</span> Impression with <span className='text-violet-700'>Captions</span> & <span className='text-lime-700'>Fonts</span> </h1>
                <img src={Herosectionimage} alt="" className='object-contain ' />
            </div>
            {/* Section 2 Started */}
            <div className=' items-center justify-center bg-[#fde474] dark:bg-[#212121] dark:border-y dark:text-white'>

                <h2 className='sm:text-5xl text-5xl font-bold  text-center py-8' >All Tools Lists</h2>

                <div className='sm:flex items-center justify-center gap-7 p-2  '>

                    <div className=' shadow-xl  rounded-xl text-center bg-violet-200 dark:bg-[#1e293b] p-2  mb-4  border border-gray-700 '>
                        <h2 className='text-4xl font-bold  text-center py-2' >Captions</h2>
                        <img src={MyImage} alt="" className='sm:h-72 m-auto object-cover my-2 rounded-md' />
                        <h2 className='text-base font-medium text-slate-700 w-80 dark:text-gray-400'>
                            Enliven your social media posts with captivating captions and infuse them with alluring wordplay. Whether you want a cool and composed tone or a funny and playful vibe, our tools provide you with countless options.
                        </h2>
                        <button className='bg-violet-500 text-white font-medium my-2 p-2 rounded-md '>
                            <Link to={'/captions'}>
                                Get Captions
                            </Link> </button>
                    </div>

                    <div className=' shadow-xl rounded-xl  text-center bg-green-200 p-2 mb-4  border border-gray-700 dark:bg-[#1e293b]'>
                        <h2 className='text-4xl font-bold  text-center py-2' >Stylish Fonts</h2>
                        <img src={Instafontbio} alt="" className='sm:h-72  m-auto object-contain my-2 rounded-3xl' />
                        <h2 className='text-base font-medium text-slate-700 w-80 dark:text-gray-400'>
                            Give your social media posts and bios a distinctive and alluring look with various stylish font options. Whether you want a bold and striking font or a simple and subtle style, our tools provide you with all kinds of choices.
                        </h2>
                        <button className='bg-green-500  font-medium my-2 p-2 rounded-md text-white '>
                            <Link to={'/font'}>
                                Get Stylish Fonts
                            </Link> </button>
                    </div>
                    <div className=' shadow-xl rounded-xl  text-center bg-red-200 p-2 mb-4  border  border-gray-700 dark:bg-[#1e293b]'>
                        <h2 className='text-4xl font-bold  text-center py-2' >Instagram Bio</h2>
                        <img src={MyImage} alt="" className='sm:h-72 m-auto object-cover my-2 rounded-md' />
                        <h2 className='text-base font-medium text-slate-700 w-80 dark:text-gray-400'>
                            Polish your social media posts and Instagram bios with stylish fonts and captivating captions. Experiment with different styles and designs to give your social media presence a fresh, alluring makeover.
                        </h2>
                        <button className='bg-red-500  font-medium my-2 p-2 rounded-md text-white '>
                            <Link to={'/captions'}>
                                Get Started
                            </Link> </button>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className='pb-10 text-black dark:bg-[#212121]  bg-[#d4a499] dark:text-white'>
                <h2 className='sm:text-5xl text-5xl font-bold  text-center py-8 ' >All Tools Features</h2>

                <div className='sm:flex items-center justify-around w-11/12 m-auto  bg-[#ffd299]  dark:bg-[#424769]  rounded-2xl border border-black '>
                    <img src={CaptionFeaturetoolimage} alt="" className='sm:h-72 object-cover p-3 rounded-md' />
                    <ul className='sm:text-left  list-disc p-4 sm:p-0 sm:mt-0 text-base font-medium  '>
                        <h2 className='text-4xl font-bold mb-2'>Captions Features</h2>
                        <li>See your captions come alive on Instagram-style templates.</li>
                        <li>Upload your own photos to visualize how captions will look.</li>
                        <li>Browse captions organized by topics and gender categories.</li>
                    </ul>
                </div>
                <div className='sm:flex items-center justify-around w-11/12 m-auto bg-[#ffd299] dark:bg-[#424769]   my-2 rounded-2xl border border-black'>
                    <img src={FontsFeaturetoolimage} alt="" className='sm:h-72 object-cover p-3 rounded-md' />
                    <ul className='sm:text-left list-disc p-4 sm:p-0 sm:mt-0 text-base font-medium'>
                        <h2 className='text-4xl font-bold mb-2 text-center'>Stylish Fonts Features</h2>
                        <li>See how text looks with different stylish fonts.</li>
                        <li>Explore a huge library of trendy and unique font styles.</li>
                        
                    </ul>
                </div>
                <div className='sm:flex items-center justify-around w-11/12 m-auto bg-[#ffd299] dark:bg-[#424769]  rounded-2xl border border-black'>
                    <img src={Herosectionimage} alt="" className='sm:h-72  p-3' />
                    <ul className='sm:text-left list-disc p-4 sm:p-0 sm:mt-0 text-base font-medium '>
                        <h2 className='text-4xl  font-bold mb-2 text-center'>Instagram Bio Features</h2>
                        <li>See your captions come alive on Instagram-style templates.</li>
                        <li>Upload your own photos to visualize how captions will look.</li>
                        <li>Browse captions organized by topics and gender categories.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomeHerosection