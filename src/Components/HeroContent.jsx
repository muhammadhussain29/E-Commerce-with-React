import React, { forwardRef } from 'react'

const HeroContent = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='absolute z-10 h-screen hidden justify-between items-center bg-transparent'>
            <div className="left w-1/2">
                <h4 className="text-3xl overflow-y-hidden"><span className='inline-block'>{props.data.subText}</span></h4>
                <h2 className='text-6xl font-bold capitalize text-orange-500 '><span className='inline-block'>{props.data.mainHeading}</span></h2>
                <p className="text-lg my-4 overflow-y-hidden"><span className='inline-block'>{props.data.para}</span></p>
                <button className='text-lg capitalize rounded-full px-6 py-3 bg-orange-500 text-white hover:bg-orange-700'>shop now</button>
            </div>
            <div className="right self-end ">
                <img src={props.heroImg} alt="" className='h-[85vh] mr-28' />
            </div>
        </div>
    )
})

export default HeroContent