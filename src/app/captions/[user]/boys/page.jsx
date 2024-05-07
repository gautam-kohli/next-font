import CaptionMainPage from '../page'

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.user;
    const idSplit = id.split('-')
    const replace = idSplit[0].replace('%20',' ')
    const subtitle = idSplit[1]
    const paramTitle = replace
    const res = await fetch(`http://13.232.27.165:5000/api/getData`)
    const post = await res.json()
    const data = post.captiondata
  
    const particuler = data.find((item) => item.title === paramTitle)

    let pageTitle =  particuler.pagemeta[subtitle].boys.title
  
    let pagedescription =  particuler.pagemeta[subtitle].boys.description;
    return {
        title: pageTitle,
        description: pagedescription
    }
  }

function boys() {
    return (

        <CaptionMainPage />
    )
}

export default boys