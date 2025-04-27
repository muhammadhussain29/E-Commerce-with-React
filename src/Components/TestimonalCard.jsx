import React, { forwardRef } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const TestimonalCard = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className='absolute transition xl:ml-[37%] lg:ml-[25%] sm:ml-[20%] ml-[6%] w-full'>
      <div className="relative lg:w-[500px] md:w-[400px] sm:w-[300px] w-[200px] h-[270px] bg-orange-500 rounded-xl after:absolute before:absolute before:top-[10px] after:bottom-[10px] md:before:left-[-100px] before:left-[-50px] md:after:right-[-100px] after:right-[-50px] after:rounded-full before:rounded-full md:after:w-[150px] after:w-[80px] md:before:w-[150px] before:w-[80px] md:after:h-[150px] after:h-[80px] md:before:h-[150px] before:h-[80px] after:z-[-10] before:z-[-10] after:bg-orange-500/50 before:bg-orange-500/50 md:mx-[80px] mx-[50px]">


        <div className="grid grid-rows-[1.3fr 0.7fr] shadow shadow-zinc-700 w-full h-full md:p-5 p-3 relative rounded-xl">
          <FaQuoteRight className='absolute top-0 right-0 m-2 md:text-3xl text-xl text-white' />
          <span className="w-full md:text-lg text-base text-white text-center md:px-6 px-3 md:py-3 py-2 md:leading-6 leading-4">
            {data.Description}
          </span>
          <div className="flex flex-col self-end text-left leading-2">
              <span className="md:text-xl text-lg font-extrabold leading-4 text-white">{data.Name}</span>
              <div className="mt-1 relative flex justify-between">
                <span className="md:text-base text-sm user-job leading-4 text-white">{data.Location}</span>
              </div>
                <span className="md:text-base text-sm user-post leading-4 text-white">{data.Rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TestimonalCard;
