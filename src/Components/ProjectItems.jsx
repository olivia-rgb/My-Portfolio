import React from 'react';

function ProjectItems({ title, skills, description, image, link }) {
  return (
    <div className="w-full flex flex-col md:flex-row shadow-lg my-10 p-5 ">
      <div className="md:w-6/12 flex flex-col md:mr-4">
        <h1 className="text-3xl font-bold  pb-3">{title}</h1>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <li key={index} className='bg-black text-blue-500 px-6 font-semibold mb-2'> {skill}</li>
          ))}
        </ul>
        <p className="font-semibold py-3">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 font-bold px-6 py-3 rounded-md">View Work</button>
        </a>
      </div>
      <div className="md:w-6/12 mt-4 md:mt-0">
        <img src={image} className='w-full h-[300px] md:h-[400px] object-cover' alt={title} />
      </div>
    </div>
  );
}

export default ProjectItems;
