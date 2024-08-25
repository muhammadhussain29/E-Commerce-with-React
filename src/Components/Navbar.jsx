import React, { useEffect, useRef } from 'react'

const Navbar = () => {

  const navbar = useRef()

  // ---> Navbar scroll hide/show
  var lastScrollTop;
  let navOnScroll = (scrollTop) => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop <= "100") {
      navbar.current.style.top = '0px';
      navbar.current.style.background = 'transparent';
    }
    else if (scrollTop > lastScrollTop) {
      navbar.current.style.top = '-100px';
      navbar.current.style.background = 'transparent';
    }
    else {
      navbar.current.style.top = '0';
      navbar.current.style.background = '#d4d4d8';  //zinc-300
    }
    lastScrollTop = scrollTop;
  }
  useEffect(() => {
    window.addEventListener('scroll', navOnScroll);
  }, []);

  return (
    <div ref={navbar} className="w-full transition-all flex justify-between px-20 items-end fixed top-0 py-3">
      <div className="flex items-end gap-3">
        <img className='w-10 h-10' src="/logo.png" alt="" />
        <span className='text-3xl capitalize text-orange-500 font-bold'>FashionVista</span>
      </div>
      <ul className='flex gap-5'>
        {["home", "about-us", "Shop", "Blog"].map((elem, index) => {
          return <li key={index} className='text-lg font-bold capitalize text-orange-500 transition-all cursor-pointer hover:-translate-y-1 hover:text-orange-600' >{elem}</li>
        })}
      </ul>
      <div className='flex gap-5'>
        {["search", "cart"].map((elem, index) => {
          return <button key={index} className='bg-orange-500 text-white px-5 capitalize py-2 rounded-full text-base font-bold transition-all hover:scale-105 hover:bg-orange-600'>{elem}</button>
        })}
      </div>
    </div>
  )
}

export default Navbar