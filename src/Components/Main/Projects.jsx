import React from 'react';

import {PROJ} from '../../Config/projects';

// 🚧 this component holds the section about my projects, *** parent is .row *** .

const Projects = () => {
  return (
    <div className="col col-sm-12">
      <div className="projects-wrap row">
        <div className="featured-project">
          {PROJ && PROJ.map((p, idx) => {
            return(
              <div key={idx} className="feat-prod-card">
                <iframe src={p.url} frameborder="0" title="o-shop"></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;