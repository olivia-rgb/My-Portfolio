import { useState } from "react";
import bg from '../assets/blink.gif';


const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    return (
      <div className=' w-full mx-auto bg-white bg-cover bg-center font-sans transition duration-500  '>
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg bg-white  my-5">
          <div className='text-center'>
             <h1 className='text-2xl text-blue-500 font-extrabold'>Chat with Olivia</h1>
             <p className='font-semibold'>We're here to help and answer any question you<br/>might have. We look forward to hearing from you<br/>🚀🌟 </p>
          </div>
  
        <form onSubmit={handleSubmit}>
          <label className="block mb-4 font-semibold">
            FIRSTNAME
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
              required
            />
          </label>
          <label className="block mb-4 font-semibold">
            LASTNAME
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
              required
            />
          </label>
          <label className="block mb-4 font-semibold">
            EMAIL
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
              required
            />
          </label>
          <label className="block mb-4 font-semibold">
            MESSAGE
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-500 font-bold  text-white py-2 px-4 mx-auto block  rounded shadow-md hover:bg-blue-700"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
      </div>
    );
  };
  
  export default ContactForm;