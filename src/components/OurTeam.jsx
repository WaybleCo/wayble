import React from 'react';
import TeamMember from './TeamMember';
import Picture1 from '../assets/queen.jpg';

const teamMembers = [
  {
    image: Picture1,
    name: 'John Doe',
    title: 'CEO & Co-founder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: Picture1,
    name: 'John Doe',
    title: 'CEO & Co-founder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: Picture1,
    name: 'John Doe',
    title: 'CEO & Co-founder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: Picture1,
    name: 'John Doe',
    title: 'CEO & Co-founder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const OurTeam = () => {
  return (
    <section className="text-darkBlue container mx-auto py-12 px-4">
      <h2 className="font-spline text-3xl font-bold text-center mb-8">Leaders of Wayble</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
