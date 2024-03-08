import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Picture from "../assets/wayble_word-removebg-preview.png";
import { Link } from "react-router-dom" 

const Navbar = () => {
    let Links =[
        {name:"Home",link:"/home"},
        {name:"Hiring",link:"/hiring"},
        {name:"About",link:"/about"},

      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='text-darkBlue shadow-md w-full absolute top-0 left-0 '>
           <div className='md:flex items-center justify-between bg-lightBlue py-4 md:px-10 px-7'>

            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img src={Picture} alt="wayble logo" className="h-8"/>
            </div>

            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-lightBlue md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-center'>
                        <a href={link.link} className='text-darkBlue hover:text-mediumBlue duration-500'>{link.name}</a>
                    </li>))
                }
                <div className='flex justify-center'>
                  <button className='btn bg-mediumBlue text-primary md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-darkBlue'>Get Started</button>
                </div>
            </ul>
           </div>
        </div>
    );
};

export default Navbar;