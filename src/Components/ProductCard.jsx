import React from 'react'

const ProductCard = (props) => {
    return (
        <div className="card bg-zinc-200 relative w-[280px] h-[360px] rounded-[20px] overflow-hidden before:bg-orange-500 before:absolute before:top-[-50%] before:w-full before:h-full before:skew-y-[345deg] before:transition hover:before:top-[- 70%] hover:before:skew-y-[390deg]">
            <div className="relative w-full flex justify-center items-center pt-4 z-10 ">
                <img src={props.data.image} alt="mouse corsair" className="h-[190px] w-auto transition" />
            </div>
            <div className="content relative top-[30px] transition-all pt-4 flex justify-center items-center flex-col z-20">
                <h3 className='text-lg font-medium uppercase text-zinc-700'>{props.data.name}</h3>
                <h2 className="text-zinc-700">{props.data.price} Rs</h2>
                <h2 className="text-zinc-700">Stars {props.data.stars}</h2>
                <button className="relative top-[100px] opacity-0 py-2 px-5 bg-orange-500 hover:bg-orange-700 text-white mt-2 rounded-3xl uppercase transition">Buy Now</button>
            </div>
        </div>
    )
}

export default ProductCard