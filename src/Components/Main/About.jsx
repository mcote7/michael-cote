import React from 'react';

const About = () => {
  return (
    // parent is '.row' //
    <div className="col-xl-6 col-lg-8 col-md-10">
      <div className="self-wrap">
        <div className="self-text">
          <h3><i class="fa fa-globe" aria-hidden="true"></i> hello world</h3>
          <p>i'm michael, a software developer in Seattle.</p>
        </div>
        <div className="self">
          <span className="back-1"></span>
          <span className="back-2"></span>
        </div>
      </div>
    </div>
  );
};

export default About;