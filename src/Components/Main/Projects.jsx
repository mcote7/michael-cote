import React from 'react';

import {PROJ} from '../../Config/projects';

// 🚧 this component holds the section about my projects, *** parent is .row *** .

const Projects = () => {
  return (
    <div className="col col-sm-12">
      <div className="featured-projects-wrap row">
          {PROJ && PROJ.map((p, idx) => {
            return(<>
            <div key={idx} className="featured-project">
              
              <div className="proj-info">
                <div className="proj-title">
                  <h4>{p.title}</h4>
                  <small>{p.date}</small>
                </div>
                <p>{p.info}</p>
              </div>
              
              <div className="feat-proj-card">
                <iframe src={p.url} frameborder="0" title="o-shop"></iframe>
              </div>
              
              <div className="proj-links">
                <a href={p.repoUrl}>git</a>
                <a href={p.url}>live</a>
              </div>
              
              
            </div>
            
            <div className="break-proj"></div>
            </>);
          })}
      </div>
      
      <div className="git-pinned-row row">
        <small>git pinned</small>
      </div>
      {/* git pinned row*/}
      {/* all git row */}
    </div>
  );
};

export default Projects;
