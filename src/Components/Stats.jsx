import React from 'react'
import StatsCard from './StatsCard';

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
    icon:"Over",
    num:"50,000",
    txt:"Satisfied Customers",
  },
  {
    icon:"Over",
    num:"1,200+",
    txt:"Unique Products",
  },
  {
    icon:"Over",
    num:"5+",
    txt:" Years of Excellence",
  },
  {
    icon:"Over",
    num:"30,000+",
    txt:"Orders Shipped Worldwide",
  }
]

const stats = () => {
  return (
    <div className=' py-10 px-20 bg-zinc-200 text-white'>
        <div className='flex justify-between gap-20 flex-nowrap'>
          {data.map((elem,index)=>{
            return <StatsCard key={index} data={elem}/>
          })}
        </div>
    </div>
  )
}

export default stats