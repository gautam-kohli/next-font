import Captionmainpage from "@/components/captionmainpage"

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.user;
  const idSplit = id.split('-')
  const replace = idSplit[0].replace('%20', ' ')
  const subtitle = idSplit[1]
  const paramTitle = replace
  const res = await fetch(`http://13.232.27.165:5000/api/getData`)
  const post = await res.json()
  const data = post.captiondata

  const particuler = data.find((item) => item.title === paramTitle)

  let trils = particuler.pagemeta[subtitle].unisex

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



function CaptionMainPage() {

  return (
    <>
      <Captionmainpage />
    </>
  )
}

export default CaptionMainPage