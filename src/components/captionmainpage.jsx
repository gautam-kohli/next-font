"use client"
import CaptionsCategory from '@/components/CaptionCategory';
import CaptionShow from '@/components/CaptionShow';
import InstagramPost from '@/components/InstagramPost';
import { usePathname } from 'next/navigation'
import PreviewCaption from '@/components/PreviewCaption'
import { Caption } from '@/Context/CaptionContext'
import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';





function CaptionMainPage() {
  const pathname = usePathname()
  const [, , path, gender] = pathname.split('/');
  const { data } = useContext(Caption);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const idSplit = path.split('-')
  const replace = idSplit[0].replace('%20', ' ')
  const paramTitle = replace
  const subtitlee = idSplit[1]
  let particuler = data.find((item) => item.title === paramTitle)
  let filteredData = data.filter((item) => item.title !== paramTitle);
  let pageTitle = ''

  if (gender) {
    pageTitle = particuler?.pagemeta[subtitlee][gender].title


  } else {
    pageTitle = particuler?.pagemeta[subtitlee].unisex && particuler?.pagemeta[subtitlee].unisex.title ? particuler?.pagemeta[subtitlee].unisex.title :
      particuler?.pagemeta[subtitlee].boys && particuler?.pagemeta[subtitlee].boys.title ? particuler?.pagemeta[subtitlee].boys.title :
        particuler?.pagemeta[subtitlee].girls.title;


  }


  const [title, subtitle] = path.split('-');
  function handlePopupClick() {
    setIsPopupVisible(false);
  }

  useEffect(() => {

  }, [subtitle, gender]);

  function subcategorypopup(title, index = 0) {
    setSelectedIndex({ title, index });
    setIsPopupVisible(true);
  }

  const repl = subtitle.replace('%20', ' ')
  return (
    <>
      <div className='flex  justify-center'>
        <div className="w-2/12 hidden lg:block">
          <CaptionsCategory />
        </div>
        <div className="lg:w-10/12 dark:text-white  m-auto ">

          <h1 className="lg:p-5 text-5xl font-extrabold w-full text-center  overflow-hidden bg-slate-100 dark:bg-black py-2">
            {pageTitle}
          </h1>


          <div className=" justify-evenly  mt-2  rounded-t-lg lg:hidden w-11/12 m-auto ">

            <div className="text-center lg:hidden ">
              {/* <h1 className='bg-blue-400 rounded-t-lg text-white '>Captions</h1> */}
              <ul className="flex overflow-auto py-3 sm:justify-center text-center max-w-[23.4rem] m-auto border ">
                {data.map((dat, ginti) => (
                  <li
                    key={ginti}
                    className="border whitespace-nowrap  hover:bg-[#cccccc] text-base font-medium p-1 items-center rounded-lg cursor-pointer mx-1 px-2"
                    onClick={() => {
                      subcategorypopup(dat.title, ginti);
                    }}
                  >
                    {dat.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-between  mt-2  m-auto ">

            <CaptionShow />

            <span className="hidden lg:block sticky top-0">

              <InstagramPost />

            </span>

          </div>

        </div>
        <div
          className={`fixed left-0 right-0 mx-auto bottom-10 w-11/12 min-h-60   rounded-t-lg  bg-[#212121] text-[#f1f1f1] ${isPopupVisible ? 'block translate-y-0' : ' translate-y-full'} transition lg:hidden `}
          onClick={handlePopupClick}>
          {isPopupVisible && (
            <>
              <div className='bg-gray-500 h-1 w-10 m-auto rounded-lg my-4'></div>
              <div className=" block  mt-5">

                {data[selectedIndex.index].subTitle.map((subtitle, index) => (
                  <Link key={index} href={`/captions/${selectedIndex.title}-${subtitle}`} className='block rounded-lg text-2xl p-1    mt-2 ' >{subtitle}</Link>
                ))}
              </div>
            </>
          )}
        </div>
        <PreviewCaption />
      </div>
      <div className='m-auto text-gray-700 dark:text-white  my-4'>
                <section className='w-10/12  m-auto text-center my-2'>
                    <h2 className='text-4xl font-bold'>What is Caption?</h2>
                    <p className='text-xl text-center mt-2 font-semibold'>A "caption" is a brief description or explanatory text accompanying an image, video, or content. On platforms like Instagram, captions are commonly used to provide context, share thoughts or stories, add humour, or convey additional information about the shared content. Captions can vary in length, style, and tone depending on the platform, the content creator's preferences, and the intended audience. They play a crucial role in engaging viewers and enhancing the overall impact of the content by providing context or eliciting emotional responses.</p>
                </section>
                <section className='w-10/12  m-auto text-center my-2'>
                    <h2 className='text-4xl font-bold'>How to use Instagram Captions?</h2>
                    <h3 className='font-semibold text-xl mt-2'>Step 1</h3>
                    <p className='text-xl text-center mt-2 font-semibold' >First you have to choose the caption that you like for your post.</p>
                    <h3 className='font-semibold text-xl  mt-2'>Step 2</h3>
                    <p className='text-xl text-center mt-2 font-semibold'>Click on the "preview text" and insert your picture(Optional) from the selected file.</p>
                    <h3 className='font-semibold text-xl  mt-2'>Step 3</h3>
                    <p className='text-xl text-center mt-2 font-semibold'>By clicking on the copy icon,now you can copy the caption and paste it anywhere.</p>
                </section>
                <section className='w-10/12  m-auto text-center my-2'>
                    <h2 className='text-4xl font-bold'>Why We choose instagram Captions?</h2>
                    <p className='text-xl text-center mt-2 font-semibold'>you can get the new captions for all categories. Preview the captions by clicking preview text and how they look on Instagram posts. You copy the text and paste it wherever you want</p>
                </section>
                <section className='w-10/12  m-auto text-center my-2'>
                    <h2 className='text-4xl font-bold'>conclusion</h2>
                    <p className='text-xl text-center mt-2 font-semibold'>In conclusion, a caption is a short text accompanying an image, video, or other content, often used on platforms like Instagram to provide context, share thoughts, or convey additional information. It engages viewers, enhances understanding, and adds personality to shared content. Captions vary in length, style, and tone, depending on the creator's preferences and the intended audience, and they play a significant role in enriching the overall experience of consuming visual media online.</p>
                </section>
            </div>
    </>
  )
}

export default CaptionMainPage