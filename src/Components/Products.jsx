import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='md:mx-20 mx-7 my-10'>
        <h2 className='text-5xl text-orange-500 capitalize font-bold text-center '>Our Catlog</h2>
        <div className='flex justify-evenly items-center pt-20 flex-wrap gap-10'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default Products