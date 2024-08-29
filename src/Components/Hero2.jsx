import React from 'react'


const Hero2 = () => {
  return (
    <div className='w-full h-screen flex justify-between items-center'>
            <div className="left w-1/2">
              <h4 className="text-xl">Lorem ipsum dolor sit amet.</h4>
              <h2 className='text-6xl font-bold uppercase text-orange-500'>heading-2</h2>
              <p className="text-lg my-4">Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum! ipsum dolor sit amet consectetur adipisicing elit. Nemo id consequatur cupiditate ad a in consequuntur sit vero commodi debitis.</p>
              <button className='text-lg capitalize rounded-full px-6 py-3 bg-orange-500 text-white hover:bg-orange-700'>shop now</button>
            </div>
            <div className="right self-end">
              <img src={hero2} alt="" className='h-[85vh] mx-20'/>
            </div>
        </div>
  )
}

export default Hero2