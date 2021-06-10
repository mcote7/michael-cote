import React, { useEffect } from 'react';
import useRS from "radioactive-state";

const Nav = () => {

  const state = useRS({
    borderFloatClass: 'abo-select',
    isAboutActive: 'active',
    isProjectsActive: '',
    isEducationActive: ''
  });

  // 🚧👷‍♂️ need fine tuning //

  const updateScrollPos = () => {
    let aboutTop = document.getElementById('about').offsetTop; // not used in calc (is 20) //
    let projectsTop = document.getElementById('projects').offsetTop - 300;
    let educationTop = document.getElementById('education').offsetTop - 300;
    let winScroll = +window.scrollY.toFixed();
    console.log("🔵 tops?", aboutTop, projectsTop, educationTop)
    console.log("🟠 scrollY?", winScroll)
    if(winScroll < projectsTop) {
      state.borderFloatClass = 'abo-select';
      state.isAboutActive = 'active';
      state.isProjectsActive = '';
      state.isEducationActive = '';
      document.title = "Michael Cote 👨‍🔬";
      console.log("🟤 show About")
    }
    if(winScroll >= projectsTop && winScroll < educationTop) {
      state.borderFloatClass = 'pro-select';
      state.isAboutActive = '';
      state.isProjectsActive = 'active';
      state.isEducationActive = '';
      document.title = "Cote's projects 👨‍💻";
      console.log("🟣 show Projects")
    }
    if(winScroll >= educationTop) {
      state.borderFloatClass = 'edu-select';
      state.isAboutActive = '';
      state.isProjectsActive = '';
      state.isEducationActive = 'active';
      document.title = "Cote's education 👨‍🎓";
      console.log("🟡 show Education")
    }
  };

  useEffect(()=>{
    document.title = 'Michael Cote 👋';
    document.addEventListener('scroll', updateScrollPos );
    return () => document.removeEventListener('scroll', updateScrollPos );
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[]);

  const scrollTo = (e, id) => {
    let el = document.getElementById(id);
    let elTop = el.offsetTop;
    if(el && elTop) {
      window.scrollTo({top: `${elTop - 24}`, behavior: 'smooth'});
    } else {
      console.log("🔴 error?", e, id, el, elTop);
      return;
    }
  };

  return (
    <div className="neu-left-nav">
      
      <div className="left-nav-title">
        <h4>Michael Cote</h4>
        <small>software developer</small>
      </div>
      
      <div className="left-nav-social-links">
        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/profile.php?id=100012957396194">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mcote7">
          <i className="fa fa-github-alt" aria-hidden="true"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/michael-cote-wa">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
      
      <div className="left-nav-main-links">
        <button id="a" className={`neu-btn ${state.isAboutActive}`} onClick={(e)=> scrollTo(e, 'about')}>About</button>
        <button id="p" className={`neu-btn ${state.isProjectsActive}`} onClick={(e)=> scrollTo(e, 'projects')}>Projects</button>
        <button id="e" className={`neu-btn ${state.isEducationActive}`} onClick={(e)=> scrollTo(e, 'education')}>Education</button>
        <div className={`border-float ${state.borderFloatClass}`}></div>
      </div>
      
    </div>
  );
};

export default Nav;