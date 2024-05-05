import { React, useContext, useEffect, useState } from 'react'
import { Caption } from '@/Context/CaptionContext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function BioFontShow() {
  const pathname = usePathname()

  const { fetchdatabio, setbioshow } = useContext(Caption);
  const [Copied, setCopied] = useState({});
  const userbio = pathname.split('/')[2];
  const split = userbio.split('-');
  let subtitle = split[1];
  subtitle = subtitle.replace('%20', ' ')
  let title = split[0];
  title = title.replace('%20', ' ')
  const category = pathname.split('/')[3];
  const foundObject = fetchdatabio.find(item => item.title === title);
  const dataKey = foundObject?.subTitle.find(key => key === subtitle);
  const genderRender = foundObject?.data?.[dataKey];
  let captions = [];

  let particuler = fetchdatabio.find((item) => item.title === title)


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

  function bioPreview(preview) {
    setbioshow(preview);
  }

  return (
    <div className=' w-full text-center md:w-8/12 md:mx-2 mx-auto dark:text-white   mt-3'>

      {/* <h2 className='text-4xl font-semibold  '>{title}</h2> */}
        <h3 className='text-3xl text-left font-bold text-zinc-800  dark:text-white'>Bio For {title}</h3>
      <p className='min-h-20   my-4 text-xl text-left'>{description}</p>

      {numKeys === 3 &&
        <div className='  m-auto flex justify-evenly gap-2 w-fit mt-0.5 rounded-md   '>
          <Link href={`/bio/${userbio}`} className={`${pathname === `/bio/${userbio}` ? 'bg-blue-400' : 'bg-zinc-100 dark:bg-black'}  text-xl p-1 font-medium rounded-md  shadow-md shadow-slate-400`}> Both</Link>

          <Link href={`/bio/${userbio}/boys`} className={`${pathname === `/bio/${userbio}/boys` ? 'bg-blue-400' : 'bg-zinc-100 dark:bg-black'}  p-1 text-xl font-medium rounded-md  shadow-md shadow-slate-400`}> Boys</Link>

          <Link href={`/bio/${userbio}/girls`} className={`${pathname === `/bio/${userbio}/girls` ? 'bg-blue-400' : 'bg-zinc-100 dark:bg-black'} p-1  text-xl font-medium rounded-md  shadow-md shadow-slate-400`}> Girls</Link>
        </div>
      }

      {/* CaptionShow */}
      <div className='gap-3 text-center items-center  '>
        {captions.map((caption, ind) => (
          <div className='flex  my-3 min-h-12 items-center justify-around rounded-lg overflow-auto dark:bg-slate-800 dark:hover:bg-slate-500 hover:bg-slate-200  ' key={ind}>
            <li className='list-none text-left text-slate-700 dark:text-slate-100 w-72 md:w-full py-3 font-medium' onClick={(e) => { bioPreview(caption) }}  >{`"${caption}"`}</li>
            <button className=' p-2 rounded-lg' onClick={(e) => { captionCopy(caption) }}>{Copied == caption ? <svg width={'20px'} height={'20px'} viewBox="0 0 24 24" fill={'#0ecb08b0'} xmlns="http://www.w3.org/2000/svg" > <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke={''} strokeWidth={'1.5'} strokeLinecap="round" strokeLinejoin="round" /> <path opacity="1" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke={'white'} strokeWidth={'1.5'} strokeLinecap="round" strokeLinejoin="round" /> </svg> : <svg width={'20px'} height={'20px'} viewBox="0 0 442 442" fill={'currentColor'} xmlns="http://www.w3.org/2000/svg" > <g> <polygon points="291,0 51,0 51,332 121,332 121,80 291,80 " /> <polygon points="306,125 306,195 376,195 " /> <polygon points="276,225 276,110 151,110 151,442 391,442 391,225 " /> </g> </svg>}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BioFontShow