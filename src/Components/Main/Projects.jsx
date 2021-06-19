import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {PROJ} from '../../Config/projects';

// 🚧 this component holds the section about my projects, *** parent is .row *** .

const Projects = () => {

  const [GIT, setGIT] = useState();

  useEffect(()=> {
    fetch('https://api.github.com/users/mcote7/repos?page=1&per_page=100', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        console.log("repos", data)
        setGIT(data);
      });
  },[])

  return (
    <div className="col col-sm-12">
      <div className="featured-projects-wrap row">
          {PROJ && PROJ.map((p, idx) => {
            return(<React.Fragment key={idx}>
              <div className="featured-project">
                
                <div className="proj-info">
                  <div className="proj-title">
                    <h4>{p.title}</h4>
                    <small>{p.date}</small>
                  </div>
                  <p>{p.info}</p>
                </div>
                
                <div className="feat-proj-card">
                  <iframe src={p.url} frameBorder="0" title="o-shop"></iframe>
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
            </React.Fragment>);
          })}
      </div>
      
      <div className="git-pinned-row row">
        {GIT && GIT.map((repo, idx) => {
          return(
          <div key={idx} className="col-xl-4 col-lg-6 my-3 git-col">
            <a 
              id={`${idx}card`}
              className="card git-card" 
              href={`${repo.html_url}`} 
              target="_blank" rel="noopener noreferrer">
              
              <div className="card-title">
                <i className="fa fa-github git-logo" aria-hidden="true"></i>
                <div><small>({idx})</small> <strong>{repo.name}</strong></div>
              </div>
              
              <div className="card-url">
                <span>{repo.html_url}<i className="fa fa-external-link" aria-hidden="true"></i></span>
              </div>
              
              <div className="mt-auto card-info">
                
                <div className="card-desc">
                  <small><i>{repo.description}</i></small>
                </div>
                
                <div className="repo-languages">
                  <strong><i className="fa fa-code" aria-hidden="true"></i> {repo.language}</strong>
                </div>
                
                <div className="repo-size">
                  <small>{repo.size}kb.</small>
                </div>
                
              </div>
              
              <div className="card-dates">
                <small>updated: {moment(repo.updated_at).format('MMMM Do YYYY')}</small>
                <small>created: {moment(repo.created_at).format('MMMM Do YYYY')}</small>
              </div>
            </a>
          </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Projects;

// if repo.stargazers_count > 0;

