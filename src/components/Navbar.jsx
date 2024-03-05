import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Picture from "../assets/wayble_word-removebg-preview.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#0A2D49]'>
      <img src={Picture} alt="wayble logo" className="h-16"/>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Hiring</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Login</li>
        <li className='p-4'>Sign Up</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-250 bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <img src={Picture} alt="wayble logo" className='h-16'/>
            <li className='p-4 border-b border-blue-250'>Home</li>
            <li className='p-4 border-b border-blue-250'>Hiring</li>
            <li className='p-4 border-b border-blue-250'>About</li>
            <li className='p-4 border-b border-blue-250'>Login</li>
            <li className='p-4'>Sign Up</li>
        </ul>
    </div>
  );
};

export default Navbar;