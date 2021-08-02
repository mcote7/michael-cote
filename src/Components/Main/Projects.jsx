import React, { useEffect, useState } from 'react';
import useRS from "radioactive-state";
import moment from 'moment';
import {PROJ} from '../../Config/projects';
import Tilt from 'react-parallax-tilt';

const Projects = () => {

  const state = useRS({
    gitFloatClass: 'all-select',
    isAllActive: 'active',
    isReactActive: '',
    isAngularActive: ''
  });

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
      return repo.name.toLowerCase().includes('react') || repo.description.toLowerCase().includes('react');
    });
    setGIT(reactRepos);
    state.gitFloatClass = 'react-select';
    state.isAllActive = '';
    state.isReactActive = 'active';
    state.isAngularActive = '';
  };

  const setAngularRepos = (e) => {
    let angularRepos = allGIT.filter(repo => {
      return repo.name.toLowerCase().includes('angular') || repo.description.toLowerCase().includes('angular') || 
            repo.name.toLowerCase().includes('rxjs') || repo.description.toLowerCase().includes('rxjs') || 
            repo.name.toLowerCase().includes('typescript') || repo.description.toLowerCase().includes('typescript') || 
            repo.name.toLowerCase().includes('ngrx') || repo.description.toLowerCase().includes('ngrx');
    });
    setGIT(angularRepos);
    state.gitFloatClass = 'angular-select';
    state.isAllActive = '';
    state.isReactActive = '';
    state.isAngularActive = 'active';
  };

  const resetAllGit = (e) => {
    setGIT(allGIT);
    state.gitFloatClass = 'all-select';
    state.isAllActive = 'active';
    state.isReactActive = '';
    state.isAngularActive = '';
  };

  const searchGit = (e) => {
    let result = allGIT.filter(repo => repo.name.toLowerCase().includes(e.target.value.toLowerCase()));
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
      
      <div
        id="git" 
        className="git-pinned-row row">
        
        <div className="git-title-col">
          <div className="git-title-col-card">
            <div className="control-git mb-4">
              github <span>&lt;code/&gt;</span> repository 
            </div>
            
            <div className="input-group mb-4">
              <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
              <input onBlur={(e)=>e.target.value = ''} onChange={(e)=>searchGit(e)} className="form-control" type="text" placeholder="search git repos..." />
            </div>
            
            <div className="git-buttons">
              <button className={`${state.isAllActive}`} onClick={(e)=>resetAllGit(e)}>Repos</button>
              <button className={`${state.isReactActive}`} onClick={(e)=>setReactRepos(e)}>React</button>
              <button className={`${state.isAngularActive}`} onClick={(e)=>setAngularRepos(e)}>Angular</button>
              <div className={`git-float ${state.gitFloatClass}`}></div>
            </div>
          </div>
        </div>
        
        {GIT && GIT.map((repo, idx) => {
          return(
          <div
            key={idx} 
            className="col-xl-4 col-lg-6 git-col">
            <Tilt style={{width: '100%'}} >
            <a 
              id={`${idx}card`}
              title={`🔗 code_repo :\r\n  \r\n${repo.html_url}`}
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
                
                <div className="repo-languages mt-3">
                  {repo.language ? <strong>&lt;{repo.language}/&gt;</strong> : <strong>&lt;code/&gt;</strong>}&nbsp;<span><small><sub>{repo.size}kb.</sub></small></span>
                </div>
              </div>
              
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
            </Tilt>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
