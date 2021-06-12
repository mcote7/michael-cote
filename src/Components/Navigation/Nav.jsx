import React, { useEffect } from 'react';
import useRS from "radioactive-state";

// 🚀 this component holds & handles the scrolling functions, and handles theme changes.

const Nav = ({darkMode, handleDarkMode, setColorMode, isBlueActive, isOrangeActive, isGreenActive}) => {

  const state = useRS({
    borderFloatClass: 'abo-select',
    isAboutActive: 'active',
    isProjectsActive: '',
    isEducationActive: ''
  });

  // 🚧👷‍♂️ needs fine tuning //
  const updateScrollPos = () => {
    // let aboutTop = document.getElementById('about').offsetTop; // not used in calc (is 20) //
    let projectsTop = document.getElementById('projects').offsetTop - 300;
    let educationTop = document.getElementById('education').offsetTop - 300;
    let winScroll = +window.scrollY.toFixed();
    // console.log("🔵 tops?", aboutTop, projectsTop, educationTop)
    // console.log("🟠 scrollY?", winScroll)
    if(winScroll < projectsTop) {
      state.borderFloatClass = 'abo-select';
      state.isAboutActive = 'active';
      state.isProjectsActive = '';
      state.isEducationActive = '';
      document.title = "about me 👨‍🔬";
      // console.log("🟤 show About")
    }
    if(winScroll >= projectsTop && winScroll < educationTop) {
      state.borderFloatClass = 'pro-select';
      state.isAboutActive = '';
      state.isProjectsActive = 'active';
      state.isEducationActive = '';
      document.title = "my projects 👨‍💻";
      // console.log("🟣 show Projects")
    }
    if(winScroll >= educationTop) {
      state.borderFloatClass = 'edu-select';
      state.isAboutActive = '';
      state.isProjectsActive = '';
      state.isEducationActive = 'active';
      document.title = "my education 👨‍🎓";
      // console.log("🟡 show Education")
    }
  };

  useEffect(()=>{
    document.title = 'Hi 👋';
    document.addEventListener('scroll', updateScrollPos );
    return () => document.removeEventListener('scroll', updateScrollPos );
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[]);

  const scrollTo = (e, id) => {
    let el = document.getElementById(id);
    let elTop = el.offsetTop;
    if(el.id !== 'about') {
      window.scrollTo({top: `${elTop - 24}`, behavior: 'smooth'});
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  const handleNavToggle = (e) => {
    console.log("nav toggle", e)
    const nav = document.getElementById('nav');
    nav.classList.toggle('show');
  };

  return (
    <div id="nav" className="neu-left-nav">
      
      <button 
        className="nav-toggle"
        onClick={(e)=>handleNavToggle(e)}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      
      <div className="left-nav-title">
        <h4>Michael Cote</h4>
        <small>software developer</small>
      </div>
      
      <div className="left-nav-social-links">
        
        <button onClick={(e)=>handleDarkMode(e)}>
          {darkMode ? <i className="fa fa-sun-o" aria-hidden="true"></i> : <i className="fa fa-moon-o" aria-hidden="true"></i> }
        </button>
        <a 
          title="🔗 GitHub"
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://github.com/mcote7">
          <i className="fa fa-github-alt" aria-hidden="true"></i>
        </a>
        <a 
          title="🔗 LinkedIn"
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://linkedin.com/in/michael-cote-wa">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
      
      <div className="left-nav-main-links">
        
        <button id="a" className={`neu-btn ${state.isAboutActive}`} onClick={(e)=> scrollTo(e, 'about')}>About</button>
        <button id="p" className={`neu-btn ${state.isProjectsActive}`} onClick={(e)=> scrollTo(e, 'projects')}>Projects</button>
        <button id="e" className={`neu-btn ${state.isEducationActive}`} onClick={(e)=> scrollTo(e, 'education')}>Education</button>
        <div className={`border-float ${state.borderFloatClass}`}></div>
      </div>
      
      <div className="colors">
        
        <button 
          onClick={(e)=>setColorMode('blue')}
          className={`color-pick blue ${isBlueActive}`}>
          {isBlueActive ? <i className="fa fa-circle" aria-hidden="true"></i> : <i className="fa fa-circle-o" aria-hidden="true"></i>}
        </button>
        <button 
          onClick={(e)=>setColorMode('green')}
          className={`color-pick green ${isGreenActive}`}>
          {isGreenActive ? <i className="fa fa-circle" aria-hidden="true"></i> : <i className="fa fa-circle-o" aria-hidden="true"></i>}
        </button>
        <button 
          onClick={(e)=>setColorMode('orange')}
          className={`color-pick orange ${isOrangeActive}`}>
          {isOrangeActive ? <i className="fa fa-circle" aria-hidden="true"></i> : <i className="fa fa-circle-o" aria-hidden="true"></i>}
        </button>
      </div>
    </div>
  );
};

export default Nav;