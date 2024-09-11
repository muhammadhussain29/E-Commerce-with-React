import React from 'react'
import { IoMenu } from "react-icons/io5";

const StatsCard = (props) => {
  return (
    <div className="bg-zinc-100 flex flex-col w-auto items-center text-zinc-700 p-3 rounded-xl">
                {/* <IoMenu className='text-4xl '/> */}
                <h6 className='text-lg uppercase text-center text-nowrap'>over</h6>
                <h3 className='text-4xl uppercase font-bold tracking-wide text-orange-500 text-center text-nowrap'>{props.data.num}</h3>
                <h6 className='text-lg uppercase tracking-tighter text-center text-nowrap'>{props.data.txt}</h6>
            </div>
  )
}

export default StatsCard