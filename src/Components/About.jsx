import React from 'react';
import picture from '../assets/picture1.jpg';
import bg from '../assets/blink.gif';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='w-full  mx-auto bg-white  font-sans transition duration-500' >
        <div className='md:flex gap-3 bg-white w-full md:w-8/12 shadow-md mx-auto my-10'>
          <div className='sm:order-1  md:w-1/2 '>
            <img className='w-[350px] h-[350px] mx-auto rounded-full border-8 border-blue-500 object-cover' src={picture} alt='My Picture' />
          </div>
      <div className='sm:order-2 w-[400px] mx-auto md:w-1/2  flex flex-col justify-center items-center p-4'>
        <h2 className='text-4xl font-extrabold mb-4 text-black '>About Me</h2>
        <p className='text-sm md:text-base font-semibold lg:text-lg pb-4'>
          A passionate web developer, who finds joy😃 in crafting stunning and distinctive websites🤩. A data scientist on an exciting journey of exploration and creation. Let's build something extraordinary together! 🙌, where code transforms into art, and data becomes a narrative🤗
        </p>
        <Link to='/cv'> 
               <button className=' bg-blue-500 px-6 py-3 shadow-md rounded-md font-bold'> Download CV </button>

        </Link>
        
      </div>
      </div>
    </div>
  );
}

export default About;
