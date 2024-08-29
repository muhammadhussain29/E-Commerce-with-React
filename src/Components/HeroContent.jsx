import React, { forwardRef } from 'react'

const HeroContent = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='w-full h-screen flex justify-between items-center'>
            <div className="left w-1/2">
              <h4 className="text-xl overflow-y-hidden"><span className='inline-bloack'>Lorem ipsum dolor sit amet.</span></h4>
              <h2 className='text-6xl font-bold uppercase text-orange-500 overflow-y-hidden'><span className='inline-block'>heading-1</span></h2>
              <p className="text-lg my-4 overflow-y-hidden"><span className='inline-block'>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum! ipsum dolor sit amet consectetur adipisicing elit. Nemo id consequatur cupiditate ad a in consequuntur sit vero commodi debitis.</span></p>
              <button className='text-lg capitalize rounded-full px-6 py-3 bg-orange-500 text-white hover:bg-orange-700'>shop now</button>
            </div>
            <div className="right self-end">
              <img src={props.hero} alt="" className='h-[85vh] mx-20'/>
            </div>
        </div>
  )
})

export default HeroContent