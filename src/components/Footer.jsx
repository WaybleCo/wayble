import React from 'react';
import Insta from "/Users/gajanmohanraj/repos/wayble/src/assets/38-instagram-2-1024.jpg";
import Linkedin from "/Users/gajanmohanraj/repos/wayble/src/assets/linkedin.jpg";
import Facebook from "/Users/gajanmohanraj/repos/wayble/src/assets/facebook.jpg";
import { GoArrowUpRight } from "react-icons/go";
const Footer = () => {
  return (
    <div className="flex justify-around w-[100%] h-20 absolute bottom-0 bg-blue-200">
        <div className="text-darkBlue font-semibold flex justify-around items-center w-[30%] h-[100%] ">
            <div className="flex">
                <h2>Contact Us</h2> 
                <GoArrowUpRight className="ml-2 w-5 h-5"/>

            </div>
            
            <div className="underline">
                <h2 className="text-sm underline hover:no-underline">Terms and Conditions</h2>
                <h2 className="text-sm underline hover:no-underline">Privacy Policy</h2>
            </div>
            
        </div>
      
      <div className="w-[20%]">
        <div className="w-[100%] h-[100%] flex justify-around items-center">
            <img src={Insta} className="w-9 h-9" alt="insta logo"></img>
            <img src={Facebook} className="w-9 h-9" alt="Facebook logo"></img>
            <img src={Linkedin} className="w-9 h-9" alt="linkedin logo"></img>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
