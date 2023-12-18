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
    description: 'This dynamic Todo-List application is designed to enhance your task management experience with a sleek and intuitive interface.It will keep track of your completed projects and remaining projects. ',
    image: todo,
    link: 'https://react-tailwind-todo-list-three.vercel.app/',
  },
  {
    id: 3,
    title: 'Password Generator',
    skills: ['Python','Replit'],
    description: 'The Password Generator game is an interactive application developed in Python that aids users in creating strong, secure passwords.In the game, users can specify the length and the types of characters they want in their password, such as uppercase letters, lowercase letters, numbers, and special characters. The game then uses a random selection process to create a unique password that meets the user’s specifications. ',
    image: password,
    link: 'https://replit.com/@oliviaonyinyech/Password-Generator-1',
  },
  {
    id: 4,
    title: 'Hangman Game',
    skills: ['Python','Replit'],
    description: 'It’s a fun and educational game that helps in improving vocabulary and spelling skills.Hangman is a classic word-guessing game that can be played by two or more players1. One player thinks of a word, phrase, or sentence, and the others try to guess it by suggesting letters or numbers within a certain number of guesses1. The word to guess is represented by a row of dashes, each representing a letter.The player guessing the word may, at any time, attempt to guess the whole word. If the word is correct, the game is over and the guesser wins1. Otherwise, the guesser can also win by guessing all the letters that appear in the word, thereby completing the word, before the diagram is completed. ',
    image: hangman,
    link: 'https://replit.com/@oliviaonyinyech/Hangman#hangman_art.py',
  },
  
];

function Projects() {
  return (
    <div className='w-full mx-auto bg-cover bg-center font-sans transition duration-500 py-10'>
    <div className='w-full md:w-8/12 mx-auto bg-white'>
      <h2 className="text-center font-bold pt-3 text-5xl">My personal Projects</h2>
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
