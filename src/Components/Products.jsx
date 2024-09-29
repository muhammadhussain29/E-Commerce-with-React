import React from 'react'
import ProductCard from './ProductCard'
import polo1 from "../Media/Products/polo-shirt-1.png"
import tshirt1 from "../Media/Products/t-shirt-1.png"
import shirt1 from "../Media/Products/dress-shirt-1.png"
import lawn1 from "../Media/Products/lawn-suit-1.png"
import lawn2 from "../Media/Products/lawn-suit-2.png"
import lawn3 from "../Media/Products/lawn-suit-3.png"
import jeans1 from "../Media/Products/jeans-1.png"
import watch1 from "../Media/Products/watch-1.png"

const data = [
    {
        "name":"Classic Polo",
        "image":polo1,
        "price":"700",
        "stars":"5"
    },
    {
        "name":"Perfect Fit Tee",
        "image":tshirt1,
        "price":"400",
        "stars":"3"
    },
    {
        "name":"Sharp Dress Shirt",
        "image":shirt1,
        "price":"1200",
        "stars":"5"
    },
    {
        "name":"Elegant Lawn",
        "image":lawn1,
        "price":"1500",
        "stars":"5"
    },
    {
        "name":"Vibrant Lawn",
        "image":lawn2,
        "price":"1500",
        "stars":"5"
    },
    {
        "name":"Breezy Lawn",
        "image":lawn3,
        "price":"2000",
        "stars":"5"
    },
    {
        "name":"Versatile Pants",
        "image":jeans1,
        "price":"1300",
        "stars":"3.5"
    },
    {
        "name":"Timeless Watch",
        "image":watch1,
        "price":"1000",
        "stars":"4.2"
    },
]


const Products = () => {
  return (
    <div className='md:mx-20 mx-7 my-10 flex flex-col justify-center'>
        <h2 className='text-5xl text-orange-500 capitalize font-bold text-center '>Shop the Hottest Styles</h2>
        <h5 className='text-zinc-700 capitalize text-center text-lg mt-1'>Elevate your wardrobe with these popular, iconic fashion pieces.</h5>
        <div className='flex justify-evenly items-center pt-14 flex-wrap gap-10'>
            {data.map((elem,index)=>{
                return <ProductCard key={index} data={elem} />
            })}
        </div>
        <button className="py-4 px-7 bg-orange-500 hover:bg-orange-700 text-white mt-10 rounded-full uppercase mx-auto ">View Catalog</button>
    </div>
  )
}

export default Products