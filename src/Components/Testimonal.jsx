import React, { useRef, useEffect, useState } from 'react';
import TestimonalCard from './TestimonalCard';

const data = [
  {
    "Name": "Sarah Johnson",
    "Description": "FashionVista has completely transformed my wardrobe! The quality of their clothing is unmatched, and the customer service was top-notch. I'm in love with their collection.",
    "Location": "Los Angeles, USA",
    "Rating": "⭐⭐⭐⭐⭐"
  },
  {
    "Name": "Michael Lee",
    "Description": "Every piece I’ve bought from FashionVista has been perfect. The attention to detail and the unique designs keep me coming back for more!",
    "Location": "Toronto, Canada",
    "Rating": "⭐⭐⭐⭐⭐"
  },
  {
    "Name": "Emily Davis",
    "Description": "FashionVista is my go-to for trendy, high-quality fashion. Their delivery is always on time, and I’ve received so many compliments on their items.",
    "Location": "Sydney, Australia",
    "Rating": "⭐⭐⭐⭐⭐"
  },
  {
    "Name": "Raj Patel",
    "Description": "I love the range and variety at FashionVista. From casual wear to formal outfits, they have everything I need. Plus, their prices are very reasonable.",
    "Location": "London, UK",
    "Rating": "⭐⭐⭐⭐⭐"
  }
];

const Testimonal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useRef([]); // Array of refs for slides

  // Set initial position of the slides using the refs
  useEffect(() => {
    slides.current.forEach((slide, index) => {
      if (slide) {
        slide.style.left = `${index * 60}%`; // Position slides
      }
    });
  }, []);

  // Handle slide transitions based on currentSlide
  useEffect(() => {
    slides.current.forEach((slide) => {
      if (slide) {
        slide.style.transform = `translateX(-${currentSlide * 60}%)`;
      }
    });
  }, [currentSlide]);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='py-10 flex flex-col justify-center bg-zinc-200'>
    <h2 className='text-5xl text-orange-500 capitalize font-bold text-center '>What Our Customers Are Saying</h2>
    <h5 className='text-zinc-700 capitalize text-center text-lg mt-1'>Discover why fashion lovers around the world choose FashionVista for quality, style, and exceptional service.</h5>
    <div className='w-full h-[300px] relative overflow-hidden flex justify-center items-center mt-10 mb-5'>
      {data.map((elem, index) => (
        <TestimonalCard
          key={index}
          ref={(el) => (slides.current[index] = el)} // Set ref dynamically for each slide
          data={elem}
        />
      ))}

      {/* Navigation buttons */}
      <button onClick={goPrev} className='absolute top-1/2 md:left-6 left-1 z-50 rounded-full bg-zinc-300 hover:bg-zinc-400 text-zinc-700 font-bold w-8 md:h-11 h-8 md:w-11 md:text-xl text-base justify-center text-center items-center flex'>{"<"}</button>
      <button onClick={goNext} className='absolute top-1/2 md:right-6 right-1 z-50 rounded-full bg-zinc-300 hover:bg-zinc-400 text-zinc-700 font-bold w-8 md:h-11 h-8 md:w-11 md:text-xl text-base justify-center text-center items-center flex'>{">"}</button>
    </div>
    {/* <button className="py-4 px-7 bg-orange-500 hover:bg-orange-700 text-white mt-10 rounded-full uppercase mx-auto ">View Catalog</button> */}

    </div>
  );
};

export default Testimonal;
