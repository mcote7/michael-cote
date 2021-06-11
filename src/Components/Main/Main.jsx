import React from 'react';
import About from './About';

const Main = () => {
  
  return (
    <div className="main-wrap">
      
      <div id="about" className="row" style={{minHeight: '100vh'}}>
        <About/>
      </div>
      
      <div id="projects" className="row" style={{minHeight: '100vh'}}>
        {/* projects */}
        Projects
      </div>
      
      <div id="education" className="row" style={{minHeight: '100vh'}}>
        {/* education */}
        Education
      </div>
      
    </div>
  );
};

export default Main;
