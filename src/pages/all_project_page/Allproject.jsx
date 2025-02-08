import React from 'react';
import Main_bg from '../../components/main_bg/Main_bg';
import './allproject.css';
import Navbar from '../../components/navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Allproject = () => {
  const projects = [
    { id: 1, name: 'Code Vantage', description: 'Web Design Agency, interactive & Visually appealing website', link: '/portfolio/codevantage' },
    { id: 2, name: 'Freak Lifestyle', description: 'Streetwear Clothing Brand', link: '/portfolio/freaklifestyle' },
    { id: 3, name: 'Rey Ventures', description: 'Documenting life', link: '/portfolio/reyventures' },
    { id: 4, name: 'Coming Soon', description: 'lorem ipsum dolor set emit', link: '/portfolio/project4' },
    { id: 5, name: 'Coming Soon', description: 'lorem ipsum dolor set emit', link: '/portfolio/project5' },
    { id: 6, name: 'Coming Soon', description: 'lorem ipsum dolor set emit', link: '/portfolio/project6' },
    { id: 7, name: 'Coming Soon', description: 'lorem ipsum dolor set emit', link: '/portfolio/project7' },
    // Add more projects as needed
  ];

  return (
    <section className='allproject'>
      <Navbar />
      <div className="heading"><h1>ALL PROJECTS</h1></div>
      <div className="project-container">
        {projects.map(project => (
          <ProjectCard key={project.id} name={project.name} description={project.description} link={project.link} />
        ))}
      </div>
      <Main_bg />
    </section>
  );
};

export default Allproject;
