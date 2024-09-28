import React from 'react'
import StatsCard from './StatsCard';

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
    <div className=' py-10 md:px-20 px-7 bg-zinc-200 text-white'>
        <div className='flex justify-evenly items-stretch justify-items-stretch gap-4 flex-wrap'>
          {data.map((elem,index)=>{
            return <StatsCard key={index} data={elem}/>
          })}
        </div>
    </div>
  )
}

export default stats