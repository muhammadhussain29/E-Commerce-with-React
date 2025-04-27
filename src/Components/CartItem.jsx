import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = (props) => {
    return (
        <div className='w-full flex flex-col justify-center bg-gray-200 rounded-xl pr-3 py-3 mb-2 text-zinc-700'>
            <div className='flex'>
                <img src={props.elem.image} alt="" className='md:w-20 w-16 h-full' />
                <div className='flex flex-col w-full justify-between pb-2'>
                    <div className='flex'>
                        <div>
                            <p className='capitalize text-base truncate lg:w-[160px] md:w-[120px] w-[100px]'>{props.elem.name}</p>
                            <p className='capitalize text-sm'>{props.elem.price} $</p>
                        </div>
                        <div className='ml-auto md:text-xl text-lg text-orange-500'><MdDelete /></div>
                    </div>
                    <div className='flex items-center justify-between border rounded px-2 md:mt-3 mt-1 md:text-base text-sm '><span><FaMinus /></span> {props.elem.quantity} <span><FaPlus /></span></div>
                </div>
            </div>
        </div>
    )
}

export default CartItem