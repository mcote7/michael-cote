import React from 'react';

// 🚧 this component holds the section about me, *** parent is .row *** .

const About = ({darkMode, primaryColor, isBlueActive, isGreenActive, isOrangeActive}) => {


  return (<React.Fragment>
    <div className="col col-sm-12">
      
      {/* ok? */}
      <div className="self-wrap row">
        
        <div className="self-img col-lg-6">
          <span className="back-1"></span>
          <span className="back-2"></span>
        </div>
        <div className="self-text col-lg-6 mt-5">
          <h3><i className="fa fa-globe" aria-hidden="true"></i> hello world</h3>
          <p>i'm michael, a software developer in Seattle.</p>
        </div>
        
      </div>
      
      {/* good */}
      <div className="stats-wrap row">
        
        <div className="git-card col-lg-6">
          {darkMode ? 
            <><img src={`https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&theme=dark&icon_color=${primaryColor.substring(1)}&border_color=444444&bg_color=444444`} alt="stats"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=dark&border_color=444444&bg_color=444444" alt="langs"/></>:
            <><img src={`https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&icon_color=${primaryColor.substring(1)}&theme=graywhite&border_color=e4ebf5&bg_color=e4ebf5`} alt="stats"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=greywhite&border_color=e4ebf5&bg_color=e4ebf5" alt="langs"/></>
            }
        </div>
        
        <div className="role-card col-lg-6">
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
            <div className="quote via3">
              <small>check out our platform:</small>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://unity.via3.com/">via3&nbsp;
                <i class="fa fa-external-link-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>);
};

export default About;
