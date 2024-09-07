import React from 'react'
import WhyUsCard from './WhyUsCard'

// Exclusive and Trendsetting Collections: Our curated collections are designed to keep you ahead of the fashion curve. From timeless classics to the latest trends, we offer unique and exclusive pieces that you won’t find anywhere else.

// Unmatched Quality and Craftsmanship: We believe in quality over quantity. Each item in our store is carefully crafted with the finest materials, ensuring durability and a luxurious feel that stands the test of time.

// Exceptional Customer Experience: Your satisfaction is our top priority. We offer seamless shopping experiences, from easy navigation to fast and reliable shipping, coupled with a dedicated support team ready to assist you at every step.

// Happy Customers Served: "Over 50,000 Satisfied Customers"
// Highlight the number of happy customers who have shopped with you, showcasing your reliability and trustworthiness.

// Products Available: "1,200+ Unique Products Listed"
// Emphasize the variety in your catalog by displaying the total number of products available for customers to browse.

// Years of Experience: "5+ Years of Fashion Excellence"
// Show the longevity and experience of your brand in the fashion industry, which can reassure customers about your expertise.

// Orders Shipped Globally: "30,000+ Orders Shipped Worldwide"
// Indicate the global reach of your brand by showing the number of orders shipped internationally, conveying your capability to cater to a worldwide audience.

const data = [
    {
        heading: "Exclusive Collections",
        para: "Our curated collections are designed to keep you ahead of the fashion curve. From timeless classics to the latest trends, we offer unique and exclusive pieces that you won’t find anywhere else."
    },
    {
        heading: "Quality You Can Trust",
        para: "We believe in quality over quantity. Each item in our store is carefully crafted with the finest materials, ensuring durability and a luxurious feel that stands the test of time."
    },
    {
        heading: "Top-Notch Customer Service",
        para: "Your satisfaction is our top priority. We offer seamless shopping experiences, from easy navigation to fast and reliable shipping, coupled with a dedicated support team ready to assist you at every step."
    }
]

const WhyUs = () => {
    return (
        <div className='px-20 pt-20 text-white'>
            <h2 className='text-5xl text-orange-500 capitalize font-bold text-center '>Why Chose Us</h2>
            <div className="w-40 py-0.5 mt-3 rounded-full mx-auto bg-orange-500"></div>
            <div className="flex justify-between justify-items-stretch items-stretch  my-14">
                {data.map((elem, index) => {
                    return <WhyUsCard key={index} data={elem} />
                })}
            </div>
        </div>
    )
}

export default WhyUs