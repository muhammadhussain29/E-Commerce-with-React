import React from 'react'
import { IoMenu } from "react-icons/io5";

const StatsCard = (props) => {
  return (
    <div className="bg-zinc-100 flex flex-col items-center text-zinc-700 p-3 rounded-xl">
                <IoMenu className='text-4xl '/>
                <h3 className='text-4xl uppercase font-bold tracking-wide text-orange-500'>1000+</h3>
                <h6 className='text-lg uppercase tracking-tight'>satisfied Customers</h6>
            </div>
  )
}

export default StatsCard