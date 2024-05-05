import React from 'react'

export async function generateMetadata({ params }) {
    return {
      title: 'aboutus',
      description:"aboutus"
    }
  }




function page() {
    return (
        <div className='text-left font-semibold w-10/12 m-auto my-6 dark:text-white'>
            <h1 className='text-6xl font-bold text-center mb-5 dark:text-white'>About Us</h1>
            <p>
                Welcome to [Website Name] - your one-stop destination for all your font styling and social media content needs!
                At [Website Name], we are passionate about providing user-friendly tools to enhance your online presence. Our mission is to empower individuals and businesses to create visually appealing and engaging content with ease.
            </p>
            <h2 className='text-2xl font-bold my-3'>Font Generator:</h2>
            <p>
                Explore our vast collection of fonts and customize them to suit your unique style. Whether you're designing logos, graphics, or any other project, our font generator allows you to experiment with different font styles, sizes, and effects effortlessly.
            </p>
            <h2 className='text-2xl font-bold my-3'>Instagram Caption Generator:</h2>

            <p> Craft captivating captions for your Instagram posts with our intuitive caption generator. It helps you find the perfect words to complement your visuals and connect with your audience on a deeper level.</p>
            <h2 className='text-2xl font-bold my-3'>Instagram Bio Generator:</h2>

            <p>Make a lasting first impression with a well-crafted Instagram bio. Our bio generator assists you in creating concise yet impactful bios that reflect your brand's personality and resonate with your target audience.</p>
            <p className='mt-10'>
                Explore our website, and unlock the potential of our tools. Whether you're a blogger, marketer, designer, or simply someone passionate about self-expression, [Website Name] is here to support your creative endeavors.
                Connect with us on social media to stay updated with our latest offerings and be part of our vibrant community.
                Thank you for choosing [Website Name]. We look forward to empowering your creativity!
            </p>
        </div>
    )
}

export default page