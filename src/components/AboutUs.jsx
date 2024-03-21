import React from 'react';
import Picture from '../assets/happy_man_working.jpg';

const AboutUs = () => {
  return (
    <section className="container mx-auto py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row items-center space-x-8 md:space-x-0">
        <img
          src={Picture}
          alt="About Us Image"
          className="w-full md:w-1/2 object-cover"
        />
        <div className="text-xl font-medium text-gray-800 md:w-1/2 px-20 py-4">
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod nisi vitae dui gravida condimentum. Donec nec enim et tortor ullamcorper malesuada. Praesent eget orci eget nisl condimentum tempor. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
