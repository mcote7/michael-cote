import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {PROJ} from '../../Config/projects';

// 🚧 this component holds the section about my projects, *** parent is .row *** .

const Projects = ({handleMouseMove, handleMouseLeave}) => {

  const [GIT, setGIT] = useState();
  const [allGIT, setAllGIT] = useState();

  useEffect(()=> {
    fetch('https://api.github.com/users/mcote7/repos?page=1&per_page=100', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        // console.log("git_repos", data)
        let filteredGit = data.sort((repoA, repoB) => {
          let dateA = new Date(repoA.created_at);
          let dateB = new Date(repoB.created_at);
          return dateB - dateA;
        });
        setGIT(filteredGit);
        setAllGIT(filteredGit);
      });
  },[]);

  const setReactRepos = (e) => {
    let reactRepos = allGIT.filter(repo => {
      return repo.name.includes('react') || repo.description.includes('React');
    });
    setGIT(reactRepos);
  };

  const setAngularRepos = (e) => {
    let angularRepos = allGIT.filter(repo => {
      return repo.name.includes('angular') || repo.description.includes('Angular') || 
              repo.name.includes('rxjs') || repo.description.includes('RXJS') || 
              repo.name.includes('typescript') || repo.description.includes('TypeScript') || 
              repo.name.includes('ngrx') || repo.description.includes('NGRX');
    });
    setGIT(angularRepos);
  };

  const resetAllGit = (e) => {
    setGIT(allGIT);
  };

  const searchGit = (e) => {
    let result = allGIT.filter(repo => repo.name.includes(e.target.value))
    setGIT(result);
  };

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
      
      <div id="git" className="git-pinned-row row">
        
        <div className="git-title-col">
          <div className="git-title-col-card">
            <div className="control-git">
              <i class="fa fa-code-fork" aria-hidden="true"></i>
              _github_repositorys_
              <i class="fa fa-code-fork fa-flip-horizontal" aria-hidden="true"></i>
            </div>
            <input onBlur={(e)=>e.target.value = ''} onChange={(e)=>searchGit(e)} type="text" placeholder="search git repos..." />
            <div className="git-buttons">
              <button onClick={(e)=>resetAllGit(e)}>All Repos</button>
              <button onClick={(e)=>setReactRepos(e)}>React</button>
              <button onClick={(e)=>setAngularRepos(e)}>Angular</button>
            </div>
          </div>
        </div>
        
        {GIT && GIT.map((repo, idx) => {
          return(
          <div key={idx} className="col-xl-4 col-lg-6 my-3 git-col">
            
            <a 
              onMouseMove={(e)=>handleMouseMove(e)}
              onMouseLeave={(e)=>handleMouseLeave(e)}
              id={`${idx}card`}
              className={idx % 2 === 0 ? 'card git-card even' : 'card git-card'}
              href={`${repo.html_url}`} 
              target="_blank" rel="noopener noreferrer">
              
              <div className="card-title">
                <div>{repo.name}</div>
              </div>
              
              <div className="card-info">
                
                <div className="card-desc">
                  <small>{repo.description}</small>
                </div>
                
                <div title={`🔗 code_repo :\r\n${repo.html_url}`} className="repo-languages mt-3">
                  {repo.language ? <strong>&lt;{repo.language}/&gt;</strong> : <strong>&lt;code/&gt;</strong>}&nbsp;<span><small><sub>{repo.size}kb.</sub></small></span>
                </div>
                
              </div>
              
              {/* wrap here diection - row */}
              <div className="card-foot mt-auto">
                <div className="card-dates">
                  <small>updated:&nbsp;<span>{moment(repo.updated_at).format('MM.DD.YY')}</span></small>
                  <small>created:&nbsp;<span>{moment(repo.created_at).format('MM.DD.YY')}</span></small>
                </div>
                
                <div className="git-circle-outer ms-auto">
                    <div className="git-logo">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </div>
                </div>
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

