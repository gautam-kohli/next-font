import { React, useContext, useEffect, useState } from 'react'
import { Caption } from '@/Context/CaptionContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function CaptionShow() {
  const pathname = usePathname()
  const { data, setPreviewCaption, PreviewCaption } = useContext(Caption);
  const [Copied, setCopied] = useState({});
  const user = pathname.split('/')[2];

  const split = user.split('-');
  let subtitle = split[1];
  subtitle = subtitle.replace('%20', ' ')
  let title = split[0];
  title = title.replace('%20', ' ')
  const category = pathname.split('/')[3];
  const foundObject = data.find(item => item.title === title);
  const dataKey = foundObject?.subTitle.find(key => key === subtitle);
  const genderRender = foundObject?.data?.[dataKey];
  let captions = [];

  let particuler = data.find((item) => item.title === title)


  let description = ''

  if (category) {
    description = particuler?.pagemeta[subtitle][category].description
  } else {
    description = particuler?.pagemeta[subtitle].unisex && particuler?.pagemeta[subtitle].unisex.description ? particuler?.pagemeta[subtitle].unisex.description :
      particuler?.pagemeta[subtitle].boys && particuler?.pagemeta[subtitle].boys.description ? particuler?.pagemeta[subtitle].boys.description :
        particuler?.pagemeta[subtitle].girls.description;
  }


  if (genderRender) {
    if (category === 'boys') {
      if ('boys' in genderRender) {
        captions = [...captions, ...genderRender.boys];
      }
      else if ('unisex' in genderRender) {
        captions = [...captions, ...genderRender.unisex];
      }
    }

    else if (category === 'girls') {

      if ('girls' in genderRender) {
        captions = [...captions, ...genderRender.girls];
      }

      else if ('unisex' in genderRender) {
        captions = [...captions, ...genderRender.unisex];
      }
    }

    else {

      if ('unisex' in genderRender) {
        captions = [...captions, ...genderRender.unisex];
      }

      else {

        if ('boys' in genderRender) {
          captions = [...captions, ...genderRender.boys];
        }

        if ('girls' in genderRender) {
          captions = [...captions, ...genderRender.girls];
        }
      }
    }
  }

  let numKeys = undefined;
  if (genderRender) {
    numKeys = Object.keys(genderRender).length;
  }

  function captionCopy(e) {
    navigator.clipboard.writeText(e);
    setCopied(e);
  }

  function captionPreview(preview) {
    setPreviewCaption(preview);
  }

  return (
    <>
      <div className=' w-full text-center md:w-7/12 mx-auto dark:text-white'>
        {/* <div className='lg:text-left'>
          <h1 className='text-5xl font-bold '>
            what is captions?
          </h1>
          <p className='text-sm text-left'>
            A caption is a brief explanation or description accompanying an illustration, photograph, diagram, or similar piece of visual content. Captions are typically used to provide context, clarify details, or add additional information. They are commonly found in publications, social media posts, presentations, and other forms of media.
          </p>
        </div> */}

        <p className='min-h-20  text-center my-4 text-xl'>{description}</p>

        {numKeys === 3 &&
          <div className=' w-44 m-auto flex justify-evenly gap-2 rounded-md   px-2'>
            <Link href={`/captions/${user}`} className={`${pathname === `/captions/${user}` ? 'bg-blue-400' : 'bg-zinc-100 dark:bg-black'} text-xl font-medium rounded-md p-1  shadow-md shadow-slate-400 `}> Both</Link>

            <Link href={`/captions/${user}/boys`} className={`${pathname === `/captions/${user}/boys` ? 'bg-blue-400' : 'bg-zinc-100 dark:bg-black'} text-xl font-medium rounded-md p-1 shadow-md shadow-slate-400`}> Boys</Link>

            <Link href={`/captions/${user}/girls`} className={`${pathname === `/captions/${user}/girls` ? 'bg-blue-400' : 'bg-zinc-100 dark:bg-black'} text-xl font-medium rounded-md p-1 shadow-md shadow-slate-400`}> Girls</Link>
          </div>
        }
        {/* CaptionShow */}
        <div className='gap-3 text-center items-center  my-4'>
        

          {captions.map((caption, ind) => (
            <div key={ind} className='flex  my-3  min-h-20 lg:min-h-12 items-center justify-around rounded-lg  w-full hover:bg-slate-200 dark:hover:bg-slate-500'>
              <li className='list-none text-left text-slate-700 dark:text-slate-100 w-72 md:w-full py-3 font-medium ' onClick={(e) => { captionPreview(caption) }} >{`"${caption}"`}
              </li>
              <button className=' p-2 rounded-lg' onClick={(e) => { captionCopy(caption) }}>{Copied == caption ? <svg width={'20px'} height={'20px'} viewBox="0 0 24 24" fill={'#0ecb08b0'} xmlns="http://www.w3.org/2000/svg" > <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke={''} strokeWidth={'1.5'} strokeLinecap="round" strokeLinejoin="round" /> <path opacity="1" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke={'white'} strokeWidth={'1.5'} strokeLinecap="round" strokeLinejoin="round" /> </svg>
                :
                <svg width={'20px'} height={'20px'} viewBox="0 0 442 442" fill={'currentColor'} xmlns="http://www.w3.org/2000/svg" > <g> <polygon points="291,0 51,0 51,332 121,332 121,80 291,80 " /> <polygon points="306,125 306,195 376,195 " /> <polygon points="276,225 276,110 151,110 151,442 391,442 391,225 " /> </g> </svg>}</button>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default CaptionShow