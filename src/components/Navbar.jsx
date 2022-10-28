import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';


// Exporting Links

const links = [
  {
    id: 1,
    link: "explore"
  },
  {
    id: 2,
    link: "about"
  },
  {
    id: 3,
    link: "portfolio"
  },
  {
    id: 4,
    link: "experience"
  },
  {
    id: 5,
    link: "Interests"
  },
  {
    id: 6,
    link: "contact"
  }
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav
      className="flex justify-between 
    items-center w-full h-20 px-4
    text-white bg-gray-700 fixed "
    >
      <div>
        <h1 className="text-4xl font-signature ml-2">Dogara</h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({id, link}) => (
          <Link to={link} smooth duration={600}>
          <li key={id}
          className="px-4 hover:text-amber-500
          cursor-pointer capitalize
          text-gray-200 font-medium
          hover:scale-110 duration-300 ">
            {link}</li>
            </Link>
        ))}
        
      </ul>
      <div onClick={() => setNav(!nav)}
      className ="cursor-pointer 
      pr-4 z-10 text-gray-200 md:hidden">
        {nav ? <FaTimes size={30} /> :
          <FaBars size={30} />}
      </div>

      {nav && (

        <ul className="flex flex-col
        justify-center left-0 items-center
        absolute top-0 w-full h-screen
        bg-gradient-to-b from-gray-900
        to-gray-700 text-gray-300 ">

        {links.map(({ id, link}) =>(
          <Link to={link} smooth duration={600}>
          
          <li key={id}
          className="
          px-4 cursor-pointer hover:text-amber-500
          capitalize py-6
          font-medium text-gray-300
          hove:scale-105
          duration-300">{link}</li>
          </Link>
          
          ))}
      </ul>
          )}
    </nav>
  );
};

export default Navbar;
