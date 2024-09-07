import React from 'react'
import WhyUsCard from './WhyUsCard'

const WhyUs = () => {
  return (
    <div className='px-20 pt-20 text-white'>
        <h2 className='text-5xl text-orange-500 capitalize font-bold text-center '>Why Chose Us</h2>
        <div className="w-40 py-0.5 mt-3 rounded-full mx-auto bg-orange-500"></div>
        <div className="flex justify-around items-center my-10">
            <WhyUsCard/>
            <WhyUsCard/>
            <WhyUsCard/>
        </div>
    </div>
  )
}

export default WhyUs