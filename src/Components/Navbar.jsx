import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = (props) => {
  const navbar = useRef();
  const links = useRef();
  const lastScrollTop = useRef(0);
  const [showNav, setShowNav] = useState(false);

  const toggleNavLinks = () => {
    setShowNav(!showNav);
  };

  const openCart = () => {
    props.setShowCart(true);
  };

  // Animate logo, nav links, and buttons on mount
  useGSAP(() => {
    const nav = gsap.timeline();
    nav.from('#logo', {
      y: -30,
      duration: 0.6,
      opacity: 0
    });
    nav.from('#nav-links li', {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.1
    });
    nav.from('#nav-btn button', {
      opacity: 0,
      x: 30,
      duration: 0.4,
      stagger: 0.1
    });
  }, []);

  // Navbar scroll behavior
  const navOnScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop <= 100) {
      navbar.current.style.top = '0px';
      navbar.current.style.background = 'transparent';
    } else if (scrollTop > lastScrollTop.current) {
      navbar.current.style.top = '-100px';
      navbar.current.style.background = 'transparent';
      setShowNav(false);
    } else {
      navbar.current.style.top = '0';
      navbar.current.style.background = '#d4d4d8'; // zinc-300
    }
    lastScrollTop.current = scrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', navOnScroll);
    return () => window.removeEventListener('scroll', navOnScroll);
  }, []);

  return (
    <nav ref={navbar} className="roboto z-50 w-full transition-all flex justify-between md:px-20 sm:px-8 px-4 items-end fixed top-0 py-3">
      {/* Logo */}
      <div id='logo' className="flex items-end md:gap-2 gap-1">
        <img className='lg:w-10 w-8 lg:h-10 h-8' src="logo.png" alt="FashionVista Logo" />
        <span className='lg:text-3xl md:text-2xl text-xl self-end capitalize text-orange-500 font-bold'>
          FashionVista
        </span>
      </div>

      {/* Navigation Links */}
      <ul
        ref={links}
        id='nav-links'
        className={`${!showNav ? "md:flex hidden" : "flex"} absolute top-12 transition-all z-50 md:static md:py-0 py-4 right-0 px-8 md:flex-row flex-col md:bg-transparent bg-zinc-200 md:w-auto w-full md:flex gap-4`}
      >
        {["home", "about-us", "shop", "blog"].map((link, index) => (
          <li
            key={index}
            className="text-base font-bold capitalize text-nowrap text-orange-500 cursor-pointer hover:text-orange-600"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Buttons: Search, Cart, Menu */}
      <div id='nav-btn' className='flex md:gap-4 gap-1 justify-end md:text-xl text-sm'>
        <button
          aria-label="Search"
          className='bg-orange-500 text-white capitalize md:p-3 p-2 rounded-full font-bold hover:bg-orange-600'
        >
          <FaSearch />
        </button>
        <button
          aria-label="Open cart"
          onClick={openCart}
          className='bg-orange-500 text-white capitalize md:p-3 p-2 rounded-full font-bold hover:bg-orange-600'
        >
          <FaShoppingCart />
        </button>
        <button
          aria-label="Toggle navigation menu"
          onClick={toggleNavLinks}
          className='md:hidden block bg-orange-500 text-white capitalize md:p-3 p-2 rounded-full font-bold hover:bg-orange-600'
        >
          <IoMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
