import React from 'react'
import BioMainpage from '../page'

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.userbio;
    const idSplit = id.split('-')
    let paramTitle = idSplit[0]
    paramTitle = paramTitle.replace('%20', ' ')

    let subtitle = idSplit[1]
    subtitle = subtitle.replace('%20', ' ')
    const res = await fetch(`http://13.232.27.165:5000/api/getData`)
    const post = await res.json()
    const data = post.biofontdata
    const particuler = data.find((item) => item.title === paramTitle)


    return {
        title: particuler.pagemeta[subtitle].boys.title,
        description: particuler.pagemeta[subtitle].boys.description
    }
}
function page() {
    return (
        <BioMainpage />
    )
}

export default page