import React from 'react';
import About from './About';
import Projects from './Projects';


const Main = ({darkMode, primaryColor, isBlueActive, isGreenActive, isOrangeActive, handleMouseMove, handleMouseLeave}) => {
  
  return (<React.Fragment>
      
      <div id="about" className="row" style={{minHeight: '100vh'}}>
        <About 
          darkMode={darkMode}
          primaryColor={primaryColor}
          isBlueActive={isBlueActive}
          isGreenActive={isGreenActive}
          isOrangeActive={isOrangeActive}
          handleMouseMove={handleMouseMove}
          handleMouseLeave={handleMouseLeave}/>
      </div>
      
      <div className="row">
        <div className="break-section"></div>
      </div>
      
      <div id="projects" className="row" style={{minHeight: '100vh'}}>
        <p>Projects</p>
        <Projects 
          handleMouseMove={handleMouseMove}
          handleMouseLeave={handleMouseLeave}/>
      </div>
      
      <div className="row">
        <div className="break-section"></div>
      </div>
      
      <div id="education" className="row" style={{minHeight: '100vh'}}>
        <p>Education</p> 
        <small>🚧 in dev...</small>
      </div>
      
  </React.Fragment>);
};

export default Main;
