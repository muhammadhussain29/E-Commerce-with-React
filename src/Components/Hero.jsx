import React, { useRef, useEffect, useState } from 'react'
import HeroContent from './HeroContent'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import heroImg1 from '../Media/hero-1.png';
import heroImg2 from '../Media/hero-2.png';
import heroImg3 from '../Media/hero-3.png';
import heroImg4 from '../Media/hero-4.png';
import { Timeline } from 'gsap/gsap-core'

const Hero = () => {

  // Reference to Different Slides
  const slide1 = useRef()
  const slide2 = useRef()
  const slide3 = useRef()
  const slide4 = useRef()

  const slides = [slide1, slide2, slide3, slide4]; // Array of slide refs
  const [position, setPosition] = useState(0); // Current slide index

  // Initial Animation
  useGSAP(() => {
    let initialAnimation = new Timeline()
    initialAnimation.to(slide1.current, {
      display: 'flex',
      duration: 0
    })
    initialAnimation.from(slide1.current.querySelectorAll('h2 span, h4 span, p span'), {
      opacity: 0,
      y: 60,
      stagger: 0.2,
    })
    initialAnimation.from(slide1.current.querySelector('button'), {
      opacity: 0,
      x: -60,
    })
    initialAnimation.from(slide1.current.querySelector('img'), {
      opacity: 0,
      x: 60,
    })
    initialAnimation.from('#slider-dots div', {
      opacity: 0,
      stagger: 0.2,
      x: 60,
    })
  });

// Animation For Forward/Backward Buttons
  let buttonAnimation = (currentIndex, nextIndex)=>{
    console.log(currentIndex);
    console.log(nextIndex);
    
    const slideGo = slides[currentIndex]
    const slideCome = slides[nextIndex]
    
    let btnAnimationTL = gsap.timeline();
    
    // Slide Going
    btnAnimationTL.to(slideGo.current.querySelector('img'), {
      opacity: 0,
      x: 60,
      duration:0.2
    });
    btnAnimationTL.to(slideGo.current.querySelector('button'), {
      opacity: 0,
      x: -60,  
      duration:0.2
    });
    btnAnimationTL.to(slideGo.current.querySelectorAll('h2 span, h4 span, p span'), {
      opacity: 0,
      y: 60,
      stagger: 0.1,
      duration:0.3
    });
    btnAnimationTL.to(slideGo.current, {
      display: 'none',
      duration: 0,
    });

    // Next Slide
    btnAnimationTL.to(slideCome.current, {
      display: 'flex',
      duration: 0,
    });
    btnAnimationTL.from(slideCome.current.querySelectorAll('h2 span, h4 span, p span'), {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration:0.6
    });
    btnAnimationTL.from(slideCome.current.querySelector('button'), {
      opacity: 0,
      x: -60,
      duration:0.3
    });
    btnAnimationTL.from(slideCome.current.querySelector('img'), {
      opacity: 0,
      x: 60,
      duration:0.4,
      onComplete: () => {
        // Reset styles after animation for slideGo using gsap.set
        const resetElements = slideGo.current.querySelectorAll('h2 span, h4 span, p span');
      
        // Reset text elements
        resetElements.forEach((element) => {
          gsap.set(element, {
            opacity: 1,
            y: 0, // GSAP handles translateY as 'y' property
          });
        });
      
        // Reset image element
        gsap.set(slideGo.current.querySelector('img'), {
          opacity: 1,
          x: 0, // Reset to original state
        });
      
        // Reset button element
        gsap.set(slideGo.current.querySelector('button'), {
          opacity: 1,
          x: 0, // Reset to original state
        });
      
        console.log("Reset complete");
      }
    });  
  } // Animation For Forward/Backward Buttons Ends

  // Function to move to the next slide
  const nextSlide = () => {
    const nextIndex = (position + 1) % slides.length;
    buttonAnimation(position, nextIndex);
    setPosition(nextIndex);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    const prevIndex = (position - 1 + slides.length) % slides.length;
    buttonAnimation(position, prevIndex);
    setPosition(prevIndex);
  };


  // let data = [
  //   {
  //     mainHeading : "heading1",
  //     para : "Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum! ipsum dolor sit amet consectetur adipisicing elit. Nemo id consequatur cupiditate ad a in consequuntur sit vero commodi debitis.",
  //     subText : "Lorem ipsum dolor sit amet.",
  //     img : "../Media/hero-2.png"
  //   },
  //   {
  //     mainHeading : "heading2",
  //     para : "Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum! ipsum dolor sit amet consectetur adipisicing elit. Nemo id consequatur cupiditate ad a in consequuntur sit vero commodi debitis.",
  //     subText : "Lorem ipsum dolor sit amet.",
  //     img : "../Media/hero-2.png"
  //   },
  //   {
  //     mainHeading : "heading3",
  //     para : "Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum! ipsum dolor sit amet consectetur adipisicing elit. Nemo id consequatur cupiditate ad a in consequuntur sit vero commodi debitis.",
  //     subText : "Lorem ipsum dolor sit amet.",
  //     img : "../Media/hero-2.png"
  //   },
  //   {
  //     mainHeading : "heading4",
  //     para : "Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum! ipsum dolor sit amet consectetur adipisicing elit. Nemo id consequatur cupiditate ad a in consequuntur sit vero commodi debitis.",
  //     subText : "Lorem ipsum dolor sit amet.",
  //     img : "../Media/hero-2.png"
  //   }
  // ] 

  return (
    <div className='w-full h-screen bg-zinc-300 px-20'>

      <button onClick={prevSlide} className='absolute top-1/2 left-6 z-50 rounded-full bg-orange-500/50 hover:bg-orange-500/80 h-11 w-11 text-xl justify-center text-center items-center flex'>{"<"}</button>
      <button onClick={nextSlide} className='absolute top-1/2 right-6 z-50 rounded-full bg-orange-500/50 hover:bg-orange-500/80 h-11 w-11 text-xl justify-center text-center items-center flex'>{">"}</button>


      <HeroContent ref={slide1} heroImg={heroImg1} />
      <HeroContent ref={slide2} heroImg={heroImg2} />
      <HeroContent ref={slide3} heroImg={heroImg3} />
      <HeroContent ref={slide4} heroImg={heroImg4} />


      <div id='slider-dots' className="flex mt-5 gap-1 position absolute bottom-10 right-1/2 translate-x-1/2">
        <div className="rounded-full p-2 bg-orange-500"></div>
        <div className="rounded-full p-2 bg-orange-500/50"></div>
        <div className="rounded-full p-2 bg-orange-500/50"></div>
        <div className="rounded-full p-2 bg-orange-500/50"></div>
      </div>
    </div>
  )
}

export default Hero