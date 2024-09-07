import React from 'react'
import { IoMenu } from "react-icons/io5";
import StatsCard from './StatsCard';

const stats = () => {
  return (
    <div className=' py-10 px-20 bg-zinc-300 text-white'>
        {/* <h2 className='text-5xl capitalize font-bold text-center '>Over growing stats</h2> */}
        <div className='flex justify-around items-center'>
            <StatsCard/>
            <StatsCard/>
            <StatsCard/>
            <StatsCard/>
        </div>
    </div>
  )
}

export default stats