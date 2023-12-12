import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import bg from '../assets/blink.gif';

const Footer = () => {
  return (
    <div className='w-full mx-auto mt-15 bg-cover bg-center font-sans transition duration-500 bg-blue-300 ' style={{ backgroundImage: `url(${bg})` }}>
      <div className="mx-auto md:w-8/12 text-white">
        <div className='mx-auto flex flex-col lg:flex-row justify-between w-full p-5'>
          <div className="lg:mb-0 lg:w-1/3 text-white">
            <h1 className='text-4xl font-extrabold text-white text-shadow'>Olivia!</h1>
            <p>&copy; 2023, Built and designed <br />by Olivia Okafor</p>
          </div>

          <div className="lg:mb-0 text-white lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">LINKS</h3>
            <div className='flex gap-2'>
              <ul>
                <li className="mb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
              <ul>
                <li className="mb-2">
                  <Link to="/about">About</Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/3 text-white">
            <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
            <ul className="flex space-x-4 text-3xl">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cupcake_princess_o" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=9136328060" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/oliviaonyinyechi" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
