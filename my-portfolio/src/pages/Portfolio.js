import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import projects from '../data/projects'; // Adjust the path as needed

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filterProjects = () => {
    if (filter === 'all') {
      return projects;
    }
    return projects.filter(project => project.tags.includes(filter));
  };

  const handleFilterChange = (tag) => {
    setFilter(tag);
  };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="Content p-4">
        <div id="myBtnContainer" className="space-x-4 p-4 flex justify-center flex-wrap">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full btn ${filter === 'all' ? 'active' : ''} mb-2 sm:mb-0`}
            onClick={() => handleFilterChange('all')}
          >
            Show all
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full btn ${filter === 'dataScience' ? 'active' : ''} mb-2 sm:mb-0`}
            onClick={() => handleFilterChange('dataScience')}
          >
            Data Science
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full btn ${filter === 'nlp' ? 'active' : ''} mb-2 sm:mb-0`}
            onClick={() => handleFilterChange('nlp')}
          >
            Natural Language Processing
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full btn ${filter === 'machineLearning' ? 'active' : ''} mb-2 sm:mb-0`}
            onClick={() => handleFilterChange('machineLearning')}
          >
            Machine Learning
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 p-4">
          {filterProjects().map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              href={project.href}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;