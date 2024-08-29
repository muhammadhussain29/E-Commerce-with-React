import React, { useRef , useEffect } from 'react'
import Hero1 from './hero1'
import Hero2 from './Hero2'
import HeroContent from './HeroContent'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import hero1 from '../Media/hero-2.png';
import hero2 from '../Media/hero-3.png';
import { Timeline } from 'gsap/gsap-core'

const Hero = () => {

  const Hero1 = useRef()
  const Hero2 = useRef()

  
  let heroAnimation =(hero)=>{
    console.log(hero);
    
  useGSAP(()=>{
    let hero = new Timeline()
    hero.from(hero.current.querySelectorAll('h2 span, h4 span, p span'),{
      opacity :0,
      y:60,
    })
    hero.from(hero.current.querySelector('button'),{
      opacity :0,
      x:-60,
    })
    hero.from(hero.current.querySelector('img'),{
      opacity :0,
      x:60,
    })
  })
  }
  useEffect(() => {
    console.log(Hero1);
    // heroAnimation(Hero1)
  },[Hero1])
  
  
    

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
      <button className='absolute top-1/2 left-6 rounded-full bg-orange-500/50 hover:bg-orange-500/80 h-11 w-11 text-xl justify-center text-center items-center flex'>{"<"}</button>
      <button className='absolute top-1/2 right-6 rounded-full bg-orange-500/50 hover:bg-orange-500/80 h-11 w-11 text-xl justify-center text-center items-center flex'>{">"}</button>
      {/* {data.map((elem,index)=>{
        return <Hero1 key={index} data={elem} className="fixed top-0 z-10" />
      })} */}
        {/* <Hero1 className="fixed top-0"/> */}
        {/* <Hero2 className=""/> */}
        <HeroContent ref={Hero1} hero={hero1}/>
        <HeroContent ref={Hero2} hero={hero2}/>
    </div>
  )
}

export default Hero