import React from 'react'
import StatsCard from './StatsCard';

const stats = () => {
  return (
    <div className=' py-10 px-20 bg-zinc-300 text-white'>
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