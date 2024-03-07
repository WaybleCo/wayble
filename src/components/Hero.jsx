import React from 'react';
import Picture from "../assets/happy_man_working--removebg-preview.png"

const Hero = () => {
  return (
    <div className='text-darkBlue'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Find your way.</h1>
        <div className='grid grid-cols-2 gap-4'>
            <div className='p-4'>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quae. Fuga nisi molestias incidunt deleniti optio, veniam, excepturi, placeat aliquid mollitia illo nihil sed nemo unde qui dicta. Dolorem, ut.</p>
            </div>
            <div className='p-4'>
                <img src={Picture} alt="wayble logo" className=''/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;