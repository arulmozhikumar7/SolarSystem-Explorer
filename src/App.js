import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import solarsystem from './assests/19221.jpg';
import SolarSystem from './SolarSystem';
import Footer from './Footer';

const App = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const originalText =
    'Embark on an interstellar journey through our cosmic neighborhood – explore the wonders of our solar system, from the scorching heat of Mercury to the icy mysteries of Neptune, all on one celestial page.';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(originalText.substring(0, index));
      index++;
      if (index === originalText.length + 1) {
        clearInterval(intervalId);
        setIsVisible(false);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='bg-custom min-h-screen'>
      <NavBar />
      <div  id="home"className='flex flex-col md:flex-row justify-center items-center h-screen bg-custom'>
        <div className='md:w-1/2 text-center md:text-left'>
          <h2 className='text-white font-orbitron font-extrabold shadow-sm mt-1 md:ml-10 tracking-widest leading-10'>
            {text}
            {isVisible && <span className="animate-blink-caret">|</span>}
          </h2>
          <button className='rounded-full bg-white w-[250px] md:w-[150px] h-10 ml-10 mt-4 font-bold text-center hover:shadow-[0_5px_30px_rgba(8,_112,_184,_0.7)] hover:transform hover:translate-x-2 transition duration-300 ease-in-out'>
            <a href="#mercury">
              <span>Explore </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </button>
        </div>
        <div className='md:w-1/2 relative'>
          <img
            src={solarsystem}
            alt="Solar System"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      <SolarSystem />
      <Footer/>
     

    </div>
  );
};

export default App;
