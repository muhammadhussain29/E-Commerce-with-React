import React from 'react'

const WhyUsCard = (props) => {
    return (
        <div className="flex flex-col px-9 py-3 w-1/4 mx-1 border rounded-xl overflow-hidden shadow-xl bg-zinc-200">
            <div className="flex items-start relative">
                <div className='bg-orange-500 py-0.5 h-5 rounded w-14 mr-2 mt-2 absolute -left-16'></div>
                <h3 className="text-xl text-orange-500 capitalize font-bold relative w-full">{props.data.heading}</h3>
            </div>
            <p className="text-base text-zinc-700 pt-3">{props.data.para}</p>
        </div>
    )
}

export default WhyUsCard