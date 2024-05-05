import React from 'react'
import FontHomepage from '../page'

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.userId;
  const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);

  let titleChange = ''
  let descriptionChange = ''

  if (capitalizedId === 'Instagram') {
    titleChange = `${capitalizedId} Font Generator (𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗽𝗮𝘀𝘁𝗲)`
    descriptionChange = 'Add Style to Your Instagram Bio with Trendy Fonts. Our Easy-to-Use Instagram Font Generator Lets You Create Eye-Catching Text in Seconds, Preview Instantly, and Copy Your Personalized Text to Stand Out on Instagram'
  } else if (capitalizedId === 'Aesthetic') {
    titleChange = ` ${capitalizedId} Font Generator (𝟙𝟘𝟘% 𝔽𝕣𝕖𝕖)`
    descriptionChange = 'Make Your Text Pop with Aesthetic Fonts. Our Free Aesthetic Font Generator Lets You Quickly Create Eye-Catching Aesthetic Text for Social Posts, Logos, ig bio, and More'
  } else if (capitalizedId === 'Stylish') {
    titleChange = `𝓢𝓽𝔂𝓵𝓲𝓼𝓱 𝓕𝓸𝓷𝓽𝓼 𝓖𝓮𝓷𝓮𝓻𝓪𝓽𝓸𝓻 (𝗣𝗿𝗲𝘃𝗶𝗲𝘄 𝗧𝗲𝘅𝘁)`
    descriptionChange = 'Convert Normal Text into Stylish Text with Our Stylish Font Generator. This Powerful Tool Lets You Instantly Convert Any Text into Eye-Catching, Stylish Text Designs.'
  } else if (capitalizedId === 'Fancy') {
    titleChange = `${capitalizedId} Text Generator: 𝖈𝖔𝖕𝖞 𝖆𝖓𝖉 𝖕𝖆𝖘𝖙𝖊 𝖋𝖆𝖓𝖈𝖞 𝖋𝖔𝖓𝖙𝖘`
    descriptionChange = 'Transform simple text into unique and eye-catching fancy text for WhatsApp, Facebook, and Instagram (ig fonts). It is easy to Copy and paste fancy fonts.'

  } else if (capitalizedId === 'Cool') {
    titleChange = `${capitalizedId} Font Generator (★~𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗽𝗮𝘀𝘁𝗲~★)`
    descriptionChange = 'A simple tool that turns your text into cool text in unique, cool font styles. It’s perfect for making your content stand out, whether it’s for social media posts, logos, or personal messages.'

  }

  return {
    title: titleChange,
    description: descriptionChange

  }
}

function fontCategory(params) {
  return <FontHomepage />
}

export default fontCategory