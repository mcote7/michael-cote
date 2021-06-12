import React from 'react';
import About from './About';

// 🚀 this component holds the rows that wrap each section (3).

const Main = ({darkMode, primaryColor, isBlueActive, isGreenActive, isOrangeActive}) => {
  
  return (<React.Fragment>
      
      <div id="about" className="row" style={{minHeight: '100vh'}}>
        <About 
          darkMode={darkMode} 
          primaryColor={primaryColor}
          isBlueActive={isBlueActive} 
          isGreenActive={isGreenActive} 
          isOrangeActive={isOrangeActive}/>
      </div>
      
      <div id="projects" className="row" style={{minHeight: '100vh'}}>
        Projects
      </div>
      
      <div id="education" className="row" style={{minHeight: '100vh'}}>
        Education
      </div>
      
  </React.Fragment>);
};

export default Main;
