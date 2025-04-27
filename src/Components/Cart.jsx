import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import CartItem from './CartItem';

const Cart = (props) => {

    const cartItem = [
        {
            "image": "/products/product4.png",
            "name": "Smart Water Bottle",
            "price": 39.99,
            "quantity": 1,
          },
        {
            "image": "/products/product1.png",
            "name": "Whey Protein",
            "price": 54.99,
            "quantity": 1,
        }]

    const closeCart = () => {
        props.setShowCart(false)
    }

    return (
        <div className={`${props.showCart ? 'block' : 'hidden'} flex flex-col justify-between md:gap-4 gap-2 roboto z-[60] bg-white lg:w-[320px] md:w-[280px] w-[250px] h-[95vh] fixed top-5 md:right-5 right-2 rounded-3xl px-2 py-3`}>
            {/* Header */}
            <div className='flex justify-between items-center'>
                <button onClick={closeCart} className='p-2 md:text-xl text-lg text-orange-500'> <ImCancelCircle /></button>
                <h4 className='md:text-2xl text-lg text-orange-500 font-semibold capitalize'>Your Cart</h4>
                <div className='p-2 md:text-xl text-lg text-orange-500'><FaCartShopping /></div>
            </div>

            {/* Item Cards */}
            <div className='h-[70%] overflow-y-scroll mx-3 scrollbar-hide'>
                {cartItem.map((elem, index)=>{
                    return <CartItem elem={elem} key={index}/>
                })}
            </div>

            {/* bottom */}
            <div className='flex flex-col gap-2'>
                <p className='md:leading-3 leading-2 text-right px-3 md:text-base text-sm capitalize text-zinc-700'>total : <span className='w-10 inline-block'>00</span></p>
                <p className='md:leading-3 leading-2 text-right px-3 md:text-base text-sm capitalize text-zinc-700'>delivery : <span className='w-10 inline-block'>00</span></p>
                <p className='md:leading-3 leading-2 text-right px-3 md:text-base text-sm capitalize text-zinc-700'>Grand total : <span className='w-10 inline-block'>00</span></p>
                <button className='button px-5 md:py-3 py-2 md:mt-3 mt-1'>Continue Shopping</button>
                <button className='gray-bg-button rounded-full text-white px-5 md:py-3 py-2'>Proceed</button>
            </div>
        </div>
    )
}

export default Cart