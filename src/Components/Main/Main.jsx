import React from 'react';
import About from './About';

const Main = () => {
  
  return (<React.Fragment>
      
      <div id="about" className="row" style={{minHeight: '100vh'}}>
        <About/>
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
