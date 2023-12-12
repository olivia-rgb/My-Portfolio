import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/blink.gif';
import mypicture from '../assets/rejoicing.jpg';
import Navbar from './Navbar';
import Carousel from './Carousel';

function Header() {
  return (
    <div className='w-full mx-auto bg-blue-500 h-screen bg-cover bg-center font-sans transition duration-500' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className='mt-3 md:mt-0 md:flex gap-5 h-screen justify-center items-center w-8/12 mx-auto'>
        <div className='text-white w-full md:w-6/12 z-10'>
          <h1 className='text-4xl font-extrabold'>👋Hi,<br /> I'm <span className='text-shadow'>Olivia!</span><br /><Carousel /></h1>
          <p className='hidden md:block'> Front end Developer/ Python/ Data Science Expert✨ <br /> I design and code beautifully 🚀 unique contents 😍. <br />I am in so much love with what I do😘</p>
          <Link to="/contact">
            <button className='md:inline-block px-4 py-2 font-bold bg-blue-500 text-white rounded shadow-md mt-2'>
              Contact me
            </button>
          </Link>
        </div>
        <div className='w-full md:w-8/12 mt-5 md:mt-0'>
          <img className='w-full md:w-[900px] h-[300px] border-blue-500 border-8' src={mypicture} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Header;
