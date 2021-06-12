import React from 'react';

const About = () => {
  return (<React.Fragment>
    {/* // parent is '.row' // */}
    <div className="col-xl-6 col-lg-8 col-md-10">
      <div className="self-wrap">
        <div className="self-text">
          <h3><i className="fa fa-globe" aria-hidden="true"></i> hello world</h3>
          <p>i'm michael, a software developer in Seattle.</p>
        </div>
        <div className="self">
          <span className="back-1"></span>
          <span className="back-2"></span>
        </div>
      </div>
      <div className="stats-wrap">
        <img src="https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&theme=graywhite" alt="stats"/>
      </div>
    </div>
  </React.Fragment>);
};

export default About;