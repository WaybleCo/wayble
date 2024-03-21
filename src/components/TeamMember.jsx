import React from 'react';

const TeamMember = ({ image, name, title, description }) => {
  return (
    <div className="font-spline flex flex-col items-center justify-center py-8 px-4 space-y-4 bg-lightBlue rounded-lg shadow-md">
      <img src={image} alt={`${name} profile`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-2xl font-bold text-darkBlue">{name}</h3>
      <p className="text-darkBlue font-bold text-lg">{title}</p>
      <div className="text-center text-sm text-darkBlue">{description}</div>
    </div>
  );
};

export default TeamMember;
