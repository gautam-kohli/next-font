import Captionpage from '@/components/captionpagecategory'

export async function generateMetadata({ params }) {
    return {
        title: 'Caption Category',
        description: "All Caption Category"
    }
}


function Captionhomepage() {
    return (
        <Captionpage />
    )
}

export default Captionhomepage

