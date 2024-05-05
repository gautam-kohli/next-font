import Biomainpage from '@/components/Biomainpage'

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.userbio;
    const idSplit = id.split('-')
    let paramTitle = idSplit[0]
    paramTitle = paramTitle.replace('%20', ' ')
    let subtitle = idSplit[1]
    subtitle = subtitle.replace('%20', ' ')

    const res = await fetch(`http://localhost:5000/api/getData`)
    const post = await res.json()
    const data = post.biofontdata


    const particuler = data.find((item) => item.title === paramTitle)

    let pageTitle = particuler.pagemeta[subtitle].unisex && particuler.pagemeta[subtitle].unisex.title ? particuler.pagemeta[subtitle].unisex.title :
        particuler.pagemeta[subtitle].boys && particuler.pagemeta[subtitle].boys.title ? particuler.pagemeta[subtitle].boys.title :
            particuler.pagemeta[subtitle].girls.title;

    let pagedescription = particuler.pagemeta[subtitle].unisex && particuler.pagemeta[subtitle].unisex.description ? particuler.pagemeta[subtitle].unisex.description :
        particuler.pagemeta[subtitle].boys && particuler.pagemeta[subtitle].boys.description ? particuler.pagemeta[subtitle].boys.description :
            particuler.pagemeta[subtitle].girls.description;

    return {
        title: pageTitle,
        description: pagedescription
    }
}
function bioMainpage() {

    return (
        <Biomainpage />
    )
}

export default bioMainpage