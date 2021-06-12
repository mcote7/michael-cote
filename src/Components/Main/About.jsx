import React from 'react';

// 🚧 this component holds the section about me, *** parent is .row *** .

const About = ({darkMode, primaryColor, isBlueActive, isGreenActive, isOrangeActive}) => {


  return (<React.Fragment>
    <div className="col-sm-12">
      
      <div className="self-wrap my-5">
        
        <div className="self-text">
          <h3><i className="fa fa-globe" aria-hidden="true"></i> hello world</h3>
          <p>i'm michael, a software developer in Seattle.</p>
        </div>
        <div className="self">
          <span className="back-1"></span>
          <span className="back-2"></span>
        </div>
        
      </div>
      
      <div className="stats-wrap my-5">
        {darkMode ? 
          <img src={`https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&theme=dark&icon_color=${primaryColor.substring(1)}&border_color=444444&bg_color=444444`} alt="stats"/>:
          <img src={`https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&icon_color=${primaryColor.substring(1)}&theme=graywhite&border_color=e4ebf5&bg_color=e4ebf5`} alt="stats"/>}
        
        <div className="role-card">
          
          <div className="role-title">
            {isBlueActive && <div className="angular blue"></div>}
            {isGreenActive && <div className="angular green"></div>}
            {isOrangeActive && <div className="angular"></div>}
            <div>
              <p>current role: </p>
              <p className="sub">software developer @</p>
            </div>
          </div>
          
          <div className="role-body">
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://videonet.us/">videonet holdings&nbsp;
              <i class="fa fa-external-link-square" aria-hidden="true"></i>
            </a>
            <div className="quote">
              <small>We are building secure business solutions using modern communications tools like videoconferencing, live streaming, real-time screen sharing, and the like.</small>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="more">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&layout=compact&theme=greywhite" alt="langs"/>
      </div> */}
    </div>
  </React.Fragment>);
};

export default About;
