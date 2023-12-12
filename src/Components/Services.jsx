import React from 'react';
import bg from '../assets/blink.gif';
import python from '../assets/python.jpg';
import frontend from '../assets/frontend.jpg';
import datascience from '../assets/datascience.jpg';


const Service = () => {
  const services = [
    {
      title: 'Frontend Design',
      image: frontend,
      description: 'Create visually appealing and responsive user interfaces using modern frontend technologies.',
    },
    {
      title: 'Python Development',
      image: python,
      description: 'Build scalable and efficient applications with the power of Python programming.',
    },
    {
      title: 'Data Science',
      image: datascience,
      description: 'Utilize data analysis and machine learning to derive meaningful insights and predictions.',
    },
    
  ];

  return (

    <div className='w-full mx-auto  font-sans transition duration-500  ' >
          <div className=" w-full md:w-8/12 mx-auto text-center">
            <h1 className='text-5xl font-bold text-shadows text-center my-5 text-black'>WHAT I CAN OFFER YOU</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <img src={service.image} alt={service.title} className="w-full h-32 object-cover mb-4" />
                  <h2 className="text-xl font-bold mb-2 ">{service.title}</h2>
                  <p className='font-semibold'>{service.description}</p>
                </div>
              ))}
            </div>
            </div>
            </div>    
  );
};

export default Service;
