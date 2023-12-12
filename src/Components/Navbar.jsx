import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navLinks = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Projects', link: '/projects' },
  { id: 3, title: 'About', link: '/about' },
  { id: 4, title: 'Contact', link: '/contact' },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex py-2 px-12 justify-between sticky'>
      <h1 className='text-4xl font-extrabold text-white text-shadow'>Olivia!</h1>
      <ul className='hidden md:flex gap-12'>
        {navLinks.map((item) => (
          <li key={item.id} className='text-white font-bold border-b-4 border-blue-500'>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden text-white font-bold'>
        {nav ? <AiOutlineClose className='' size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed md:hidden center-0 top-8  h-full text-center  font-black text-white ease-in-out duration-500'
            : 'ease-in-out  duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Navigation Items */}
        {navLinks.map((item) => (
          <li
            key={item.id}
            className='p-2  border-b-4  hover:border-white duration-200 hover:text-blue-200 cursor-pointer border-blue-500'
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;