import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='px-20 py-10'>
        <h2 className='text-5xl text-orange-500 capitalize font-bold text-center '>Our Catlog</h2>
        <div className='flex justify-evenly items-center pt-20 flex-wrap gap-5'>
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