
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const planets = [
    { name: 'HOME', id: 'home' },
    { name: 'Mercury', id: 'mercury' },
    { name: 'Venus', id: 'venus' },
    { name: 'Earth', id: 'earth' },
    { name: 'Mars', id: 'mars' },
    { name: 'Jupiter', id: 'jupiter' },
    { name: 'Saturn', id: 'saturn' },
    { name: 'Uranus', id: 'uranus' },
    { name: 'Neptune', id: 'neptune' },
  ];

  return (
    <nav className="bg-teal-500 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Home */}
        <a href="#home" className="text-white font-bold text-lg">
          {planets[0].name}
        </a>

        {/* Navigation items for large screens */}
        <div className="hidden lg:grid lg:grid-cols-8 lg:grid-flow-col lg:justify-start lg:gap-x-4">
          {planets.slice(1).map((planet) => (
            <a
              key={planet.id}
              href={`#${planet.id}`}
              className="text-white "
            >
              {planet.name}
            </a>
          ))}
        </div>

       
        <button
          onClick={toggleNav}
          className="lg:hidden text-white focus:outline-none"
        >
          <FaBars className='text-white' size={24}/>
        </button>
      </div>
<div
        className={`lg:hidden ${
          isNavOpen ? 'block' : 'hidden'
        } absolute top-full right-0 bg-white rounded-none shadow-md p-2 lg:w-48`}
      >
        <span className="block p-2 text-stone-900 font-bold">
          PLANETS
        </span>
        <hr />
        {planets.slice(1).map((planet) => (
          <a
            key={planet.id}
            href={`#${planet.id}`}
            className="block p-2 text-teal-500 "
          >
            {planet.name}
          </a>
          

         
        
        ))}
       
      </div>
    </nav>
  );
};

export default NavBar;
