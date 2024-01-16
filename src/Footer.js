// Footer.js
import React from 'react';
import { FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className='bg-teal-500'>
        <div className='text-center '><span className="text-white mt-5 py-2">Made by Arulmozhikumar </span></div>
    <div className="bg-teal-500 p-4 text-white text-center flex justify-center space-x-3">


      <a href="https://www.instagram.com/arularul_7/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} className="inline-block mr-2" />
      </a>
      <a href="https://github.com/Arulmozhikumar7" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} className="inline-block mr-2" />
      </a>
      <a href="https://www.linkedin.com/in/arulmozhikumar7/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} className="inline-block mr-2" />
      </a>


    </div></footer>
  );
};

export default Footer;
