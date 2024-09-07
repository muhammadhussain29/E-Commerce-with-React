import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import WhyUs from './Components/WhyUs'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <WhyUs/>
    <Stats/>
    {/* <div className="py-10"></div> */}
    </>      
  )
}

export default App