import React from 'react';

export function ProjectList({ projects }) {
  const column1 = projects.filter((_, index) => index % 3 === 0);
  const column2 = projects.filter((_, index) => index % 3 === 1);
  const column3 = projects.filter((_, index) => index % 3 === 2);


  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flex: 1 
  };

  return (
    <div style={{ display: 'flex', gap: '15px', width: '100%', alignItems: 'flex-start' }}>
      
      
      <div style={columnStyle}>
        {column1.map((project, index) => (
          <img key={index} src={project.img} alt={project.category} style={{ width: '100%', height: 'auto', display: 'block' }} />
        ))}
      </div>

      
      <div style={columnStyle}>
        {column2.map((project, index) => (
          <img key={index} src={project.img} alt={project.category} style={{ width: '100%', height: 'auto', display: 'block' }} />
        ))}
      </div>

      
      <div style={columnStyle}>
        {column3.map((project, index) => (
          <img key={index} src={project.img} alt={project.category} style={{ width: '100%', height: 'auto', display: 'block' }} />
        ))}
      </div>

    </div>
  );
}