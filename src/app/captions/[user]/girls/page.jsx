import CaptionMainPage from '../page'

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.user;
    const idSplit = id.split('-')
    const replace = idSplit[0].replace('%20',' ')
    const paramTitle = replace
    const subtitle = idSplit[1]
    const res = await fetch(`http://localhost:5000/api/getData`)
    const post = await res.json()
    const data = post.captiondata
  
    const particuler = data.find((item) => item.title === paramTitle)
  
    let pageTitle =  particuler.pagemeta[subtitle].girls.title
  
    let pagedescription =  particuler.pagemeta[subtitle].girls.description;
  
    return {
        title: pageTitle,
        description: pagedescription
    }
  }
function girls() {
    return (

        <CaptionMainPage />
    )
}
export default girls