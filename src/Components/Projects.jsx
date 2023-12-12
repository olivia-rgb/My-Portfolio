import React from 'react';
import ProjectItems from './ProjectItems';
import password from '../assets/password.jpg';
import todo from '../assets/todo.jpg';
import hangman from '../assets/hangman.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import bg from '../assets/blink.gif';


const projectsData = [
  {
    id: 1,
    title: "Olivia's Wonderland - A Christmas E-commerce Delight 🎁",
    skills: ['React', 'JavaScript', ' TailwindCSS','Vercel'],
    description: 'I built a beautiful Olivia Wonderland ECommerce website,where the magic of Christmas comes to life in every corner.it is designed to make your christmas holiday shopping experience memorable and delightful.It has exclusive section for men, women and kids.Discover unique gifts for everyone.Immerse yourself in positve atmosphere ',
    image: ecommerce,
    link: 'https://christmas-olivia-wonderland-e-commerce-website.vercel.app/',
  },
  {
    id: 2,
    title: 'Todo-List',
    skills: ['React', 'JavaScript', ' TailwindCSS','Vercel'],
    description: 'I built a beautiful Olivia Wonderland ECommerce website,where the magic of Christmas comes to life in every corner.it is designed to make your christmas holiday shopping experience memorable and delightful.It has exclusive section for men, women and kids.Discover unique gifts for everyone.Immerse yourself in positve atmosphere ',
    image: todo,
    link: 'https://react-tailwind-todo-list-three.vercel.app/',
  },
  {
    id: 3,
    title: 'Password Generator',
    skills: ['Python','Replit'],
    description: 'I built a beautiful Olivia Wonderland ECommerce website,where the magic of Christmas comes to life in every corner.it is designed to make your christmas holiday shopping experience memorable and delightful.It has exclusive section for men, women and kids.Discover unique gifts for everyone.Immerse yourself in positve atmosphere ',
    image: password,
    link: 'https://replit.com/@oliviaonyinyech/Password-Generator-1',
  },
  {
    id: 4,
    title: 'Hangman Game',
    skills: ['Python','Replit'],
    description: 'I built a beautiful Olivia Wonderland ECommerce website,where the magic of Christmas comes to life in every corner.it is designed to make your christmas holiday shopping experience memorable and delightful.It has exclusive section for men, women and kids.Discover unique gifts for everyone.Immerse yourself in positve atmosphere ',
    image: hangman,
    link: 'https://replit.com/@oliviaonyinyech/Hangman#hangman_art.py',
  },
  
];

function Projects() {
  return (
    <div className='w-full mx-auto bg-cover bg-center font-sans transition duration-500 py-10'>
    <div className='w-full md:w-8/12 mx-auto bg-white'>
      <h2 className="text-center font-bold pt-3 text-shadows  text-5xl">My personal Projects</h2>
      <div className=" ">
        {projectsData.map((project) => (
          <ProjectItems key={project.id} className=' flex justify-between shadow-md my-3'{...project} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Projects;
