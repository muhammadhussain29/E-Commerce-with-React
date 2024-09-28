import React from 'react'
import item1 from "../Media/dress-shirt-1.jpeg"
import item2 from "../Media/polo-shirt-1.png"

const ProductCard = () => {
    return (
        <div class="card bg-zinc-200 relative w-[280px] h-[400px] rounded-[20px] overflow-hidden before:bg-orange-500 before:absolute before:top-[-50%] before:w-full before:h-full before:skew-y-[345deg] before:transition hover:before:top-[- 70%] hover:before:skew-y-[390deg]">
            <div class="relative w-full flex justify-center items-center pt-5 z-10 ">
                <img src={item2} alt="mouse corsair" class="h-[200px] w-auto" />
            </div>
            <div class="content relative top-[50px] transition-all p-5 flex justify-center items-center flex-col z-20">
                <h3 className='text-lg font-medium uppercase'>Mouse Corsair M65</h3>
                <h2 class="price">61.<small>98</small> €</h2>
                <h2 class="price">Stars</h2>
                <button class="relative top-[100px] opacity-0 py-2 px-5 bg-orange-500 text-white mt-4 rounded-3xl uppercase transition">Buy Now</button>
            </div>
        </div>
    )
}

export default ProductCard