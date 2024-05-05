"use client"
import React, { useContext, useState } from 'react';
import BioFontInstaCategory from '@/components/BioFontInstaCategory'
import { Caption } from '@/Context/CaptionContext';
import PreviewBio from '@/components/PreviewBio';
import Link from 'next/link';
import BioFontInstaProfile from '@/components/BioFontInstaProfile';
import BioFontShow from '@/components/BioFontShow';
import Sample from '@/components/sample';
import { usePathname } from 'next/navigation'

function bioMainpage() {
    const { fetchdatabio } = useContext(Caption);
    const [selectedIndex, setSelectedIndex] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const pathname = usePathname()
    const [, , path, gender] = pathname.split('/');
    const idSplit = path.split('-')
    const replace = idSplit[0].replace('%20', ' ')
    const paramTitle = replace

    const subtitlee = idSplit[1].replace('%20', ' ')

    let particuler = fetchdatabio.find((item) => item.title === paramTitle)
    let pageTitle = ''

    if (gender) {
        pageTitle = particuler?.pagemeta[subtitlee][gender].title


    } else {
        pageTitle = particuler?.pagemeta[subtitlee].unisex && particuler?.pagemeta[subtitlee].unisex.title ? particuler?.pagemeta[subtitlee].unisex.title :
            particuler?.pagemeta[subtitlee].boys && particuler?.pagemeta[subtitlee].boys.title ? particuler?.pagemeta[subtitlee].boys.title :
                particuler?.pagemeta[subtitlee].girls.title;


    }

    const [title, subtitle] = path.split('-');
    function subcategorypopup(title, index = 0) {
        setSelectedIndex({ title, index });
        setIsPopupVisible(true);
    }
    function handlePopupClick() {
        setIsPopupVisible(false);
    }
    return (
        <>

            <div className='flex'>

                <div className="w-2/12 hidden md:block">
                    <BioFontInstaCategory />
                </div>
                <div className="md:w-10/12 dark:text-white w-11/12 m-auto lg:min-h-screen ">

                    <h1 className="md:p-5 text-5xl font-extrabold w-full text-center dark:text-white bg-slate-100 dark:bg-black">
                        {pageTitle}

                    </h1>

                    <div className="md:flex justify-evenly  mt-2 ">
                        <div className="text-center md:hidden">
                            <h2>Bio Instagram</h2>
                            <ul className="flex overflow-auto py-3 max-w-[23.4rem]">
                                {fetchdatabio.map((dat, ginti) => (
                                    <li
                                        key={ginti}
                                        className="border whitespace-nowrap block hover:bg-[#cccccc] text-base font-medium p-1 items-center rounded-md cursor-pointer mx-1 px-2"
                                        onClick={() => {
                                            subcategorypopup(dat.title, ginti);
                                        }}
                                    >
                                        {dat.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <BioFontShow />
                        <span className="hidden md:block sticky top-0">
                            <BioFontInstaProfile />
                        </span>
                    </div>

                </div>
                <div
                    className={`fixed left-0 right-0 mx-auto bottom-10 w-11/12 min-h-60  rounded-t-md  bg-[#212121] text-[#f1f1f1] ${isPopupVisible ? 'block translate-y-0' : ' translate-y-full'} transition md:hidden `}
                    onClick={handlePopupClick}
                >
                    {isPopupVisible && (
                        <>
                            <div className='bg-gray-500 h-1 w-10 m-auto rounded-md my-4'></div>
                            <div className=" block  mt-5">

                                {fetchdatabio[selectedIndex.index].subTitle.map((subtitle, index) => (
                                    <Link key={index} href={`/bio/${selectedIndex.title}-${subtitle}/`} className='block rounded-md text-2xl p-1   mt-2 ' >{subtitle}</Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <PreviewBio />
            </div>
            <div className='m-auto text-gray-700 dark:text-white  my-4'>
                <section className='w-8/12  m-auto text-center my-2'>
                    <h2 className='text-4xl font-bold'>What is Bio?</h2>
                    <p className='text-xl text-center mt-2 font-semibold'>It's typically a few lines where users can write about themselves, their interests, or any other information they want to share with their followers. This bio appears prominently on their profile page, giving visitors a quick overview of who they are or what their account is about.</p>
                </section>
                <section className='w-8/12  m-auto text-center my-2'>
                    <h2 className='text-4xl font-bold'>How to use instagram Bio?</h2>
                    <h3 className='font-semibold text-xl mt-2'>Step 1</h3>
                    <p className='text-xl text-center mt-2 font-semibold' >First, you must choose the bio that suits your personality.</p>
                    <h3 className='font-semibold text-xl  mt-2'>Step 2</h3>
                    <p className='text-xl text-center mt-2 font-semibold'>Click on that bio, then click on the preview text to see how it will look on your Instagram profile.</p>
                    <h3 className='font-semibold text-xl  mt-2'>Step 3</h3>
                    <p className='text-xl text-center mt-2 font-semibold'>You can copy the bio by clicking on the copy icon and paste it anywhere</p>
                </section>
                <section className='w-8/12  m-auto text-center my-2'>
                    <h2 className='text-4xl font-bold'>Why We choose instagram Bio?</h2>
                    <p className='text-xl text-center mt-2 font-semibold'>You will get the latest bio for your profile, or there will be updates in the future. You can select the bio and see a preview of how it looks on your Instagram profile.</p>
                </section>
                <section className='w-8/12  m-auto text-center my-2'>
                    <h2 className='text-4xl font-bold'>conclusion</h2>
                    <p className='text-xl text-center mt-2 font-semibold'>Instagram refers to the brief personal description that users include in their profiles. It serves as a snapshot of who they are or what their account is about, allowing them to share interests, hobbies, quotes, or other information with their followers. It's a way for users to personalize their profiles and give visitors a quick glimpse into their personalities or passions.</p>
                </section>
            </div>
        </>
    )
}

export default bioMainpage