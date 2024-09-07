import React from 'react'

const WhyUsCard = () => {
  return (
    <div className="flex flex-col px-9 py-3 w-72 h-72 border rounded-xl overflow-hidden shadow-2xl bg-zinc-200">
                <div className="flex items-center -translate-x-16">
                    <div className='bg-orange-500 py-0.5 h-5 rounded w-14 mr-2'></div>
                    <h3 className="text-2xl text-orange-500 capitalize font-bold">Reason one</h3>
                </div>
                {/* <h3 className="text-2xl text-zinc-700 uppercase font-bold">Reason one</h3> */}
                {/* <div className='bg-orange-500 py-0.5 mb-3 rounded w-2/3'></div> */}
                <p className="text-base text-zinc-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident accusamus ut, aut porro animi recusandae architecto ea sapiente quaerat aliquid blanditiis quisquam ab repellendus ullam nam illo. Enim, ea quam.</p>
            </div>
  )
}

export default WhyUsCard