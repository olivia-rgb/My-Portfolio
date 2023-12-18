import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import skillimage from '../assets/skillimage.jpg';
import skill1 from '../assets/skill1.jpg';
import skill2 from '../assets/skill2.jpg';
import skill3 from '../assets/skill3.jpg';
import skill4 from '../assets/skill4.jpg';
import skill5 from '../assets/skill 5.jpg';
import skill6 from '../assets/skill 6.jpg';
import { FaPython, FaReact, FaJs, FaCss3, FaBootstrap, FaGit, FaDatabase } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { GiProcessor } from 'react-icons/gi';
import { SiTailwindcss } from "react-icons/si";
import bg from '../assets/blink.gif';

const programmingSkills = [
  {
    id: 1,
    icon: <FaPython />,
    title: 'Python',
    description: 'Experienced in Python programming language for data science and various applications.',
  },
  {
    id: 2,
    icon: <FaReact />,
    title: 'React',
    description: 'Proficient in building interactive and responsive user interfaces using React.',
  },
  {
    id: 3,
    icon: <GiProcessor />,
    title: 'Data Science',
    description: 'Experience in data analysis, machine learning, and statistical modeling.',
  },
  {
    id: 4,
    icon: <FaJs />,
    title: 'JavaScript',
    description: 'Strong proficiency in JavaScript for developing dynamic and interactive web applications.',
  },
  {
    id: 5,
    icon: <FaGit />,
    title: 'Git',
    description: 'Version control using Git for efficient collaboration and project management.',
  },
  
  {
    id: 6,
    icon: <SiFirebase />,
    title: 'Firebase',
    description: 'Hands-on experience in using Firebase for building scalable and real-time applications.',
  },
  {
    id: 7,
    icon: <SiTailwindcss />,
    title: 'Tailwind CSS',
    description: 'Proficient in using Tailwind CSS for building modern and responsive user interfaces.',
  },
  {
    id: 8,
    icon: <FaBootstrap />,
    title: 'Bootstrap',
    description: 'Proficient in using Bootstrap framework for building responsive and consistent designs.',
  },
  {
    id: 9,
    icon: <FaCss3 />,
    title: 'CSS',
    description: 'Proficient in CSS for styling and layout of web pages.',
  },
];

const skillImages = [skillimage,skill1, skill2, skill3,skill4,skill5,skill6 ];

function Skill() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false
  };

  return (
    <div className='w-full mx-auto bg-white bg-cover bg-center font-sans transition duration-500 pt-5 ' >
    <div className='w-full md:w-8/12  mx-auto  bg-white  '>  
        <Slider {...settings}>
          {skillImages.map((image, index) => (
            <div key={index}>
              <img className='h-[300px] w-full object-cover  border-8 border-blue-500 ' src={image} alt={`Skill ${index + 1}`} />
            </div>
          ))}
        </Slider>
      <div className=' pt-5 border-b border-blue-500'>
      <h1 className='text-4xl  font-extrabold text-black mb-3 text-center '>MY PROGRAMMING SKILLS</h1>
      <div className='my-8 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>
        {programmingSkills.map((item) => (
          <div key={item.id} className='text-center p-4 shadow-md'>
            <div className='flex items-center justify-center text-blue-600 mx-auto text-3xl font-black'>{item.icon}</div>
            <h3 className='font-bold '>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  </div>
  );
}

export default Skill;
