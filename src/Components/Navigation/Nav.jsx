import React from 'react';

const Nav = () => {

  const scrollTo = (e, id) => {
    console.log("🟡 Event?", e)
    
    let el = document.getElementById(id);
    let elTop = el.offsetTop;
    if(el && elTop) {
      window.scrollTo({top: `${elTop - 24}`, behavior: 'smooth'});
    } else {
      console.log("🔴 error?", e, id, el, elTop)
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
        <button onClick={(e)=> scrollTo(e, 'about')}>About</button>
        <button onClick={(e)=> scrollTo(e, 'projects')}>Projects</button>
        <button onClick={(e)=> scrollTo(e, 'education')}>Education</button>
      </div>
    </div>
  );
};

export default Nav;