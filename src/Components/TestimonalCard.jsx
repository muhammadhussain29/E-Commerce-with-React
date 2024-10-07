import React, { forwardRef } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const TestimonalCard = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className='absolute transition ml-[35%] w-full'>
      <div className="relative w-[500px] h-[270px] bg-orange-500 rounded-xl after:absolute before:absolute before:top-[10px] after:bottom-[10px] before:left-[-100px] after:right-[-100px] after:rounded-full before:rounded-full after:w-[150px] before:w-[150px] after:h-[150px] before:h-[150px] after:z-[-1] before:z-[-1] after:bg-orange-500/50 before:bg-orange-500/50">
        <div className="grid grid-rows-[1.3fr 0.7fr] shadow shadow-zinc-700 w-full h-full p-5 relative rounded-xl">
          <FaQuoteRight className='absolute top-0 right-0 m-2 text-3xl text-white' />
          <span className="w-full text-lg text-white text-center px-6 py-3 ">
            {data.Description}
          </span>
          <div className="flex flex-col self-end">
              <span className="text-xl font-extrabold text-zinc-300">{data.Name}</span>
              <div className="mt-1 relative flex justify-between">
                <span className="user-job text-zinc-300">{data.Location}</span>
              </div>
                <span className="user-post">{data.Rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TestimonalCard;
