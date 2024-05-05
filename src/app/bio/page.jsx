import React from 'react'
import Biohomepage from '@/components/BioHomepage'

export async function generateMetadata({ params }) {
    return {
      title: 'instagram Bio category',
      description:"Instagram bio category"
    }
  }

function page() {
    return (
        <div>
            
            <Biohomepage />
        </div>
    )
}

export default page