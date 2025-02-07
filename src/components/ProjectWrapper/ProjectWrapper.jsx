import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./projectWrapper.css";

const projects = [
  { id: 1, name: 'Project 1', path: '/portfolio/project1' },
  { id: 2, name: 'Project 2', path: '/portfolio/project2' },
  { id: 3, name: 'Project 3', path: '/portfolio/project3' },
  // Add more projects as needed
];

const ProjectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentProject = projects.findIndex(project => project.path === location.pathname);
    if (currentProject !== -1) {
      setCurrentIndex(currentProject);
    }
  }, [location.pathname]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    navigate(projects[nextIndex].path);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    navigate(projects[prevIndex].path);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <section className='project-wrapper'>
      <div>
        {children}
        <button className="swiper-button-prev" onClick={handlePrev}><img src="/public/assets/Backward_arrow.svg" alt="Previous" /></button>
        <button className="swiper-button-next" onClick={handleNext}><img src="/public/assets/Forward_arrow.svg" alt="Next" /></button>
      </div>
    </section>
  );
};

export default ProjectWrapper;