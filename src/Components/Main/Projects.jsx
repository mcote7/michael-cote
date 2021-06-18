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
              
              <div className="tech-used row">
                {p.tech.map((t, i)=> {
                  return(
                    <div key={i} className="tech-badge">{t}</div>
                  )
                })}
              </div>
              
              <div className="proj-links">
                <a 
                  target="_blank" 
                  title="🔗 git repo code" 
                  rel="noopener noreferrer" 
                  href={p.repoUrl}>git&nbsp;
                  <i className="fa fa-external-link-square" aria-hidden="true"></i>
                </a>
                <a 
                  target="_blank" 
                  title="🔗 live site" 
                  rel="noopener noreferrer" 
                  href={p.url}>live&nbsp;
                  <i className="fa fa-external-link-square" aria-hidden="true"></i>
                </a>
              </div>
              
            </div>
            
            <div className="break-proj"></div>
            </>);
          })}
      </div>
      
      <div className="git-pinned-row row">
        <small>git pinned</small>
      </div>
      {/* all git row */}
    </div>
  );
};

export default Projects;
