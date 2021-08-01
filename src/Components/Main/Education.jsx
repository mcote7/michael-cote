import React from 'react';
import {EDU} from '../../Config/education';


const Education = ({darkMode}) => {
  return (
    <div className="col col-sm-12">
      
      <div className="timeline">
        
        {EDU && [...EDU].reverse().map((cert, idx)=> {
          return(
            <div 
              key={idx} 
              id={`cert${idx}`} 
              className={idx % 2 === 0 ? 'container left' : 'container right'}>
              
              <div className="content">
                {idx % 2 === 0 ? 
                <div className="cert-title cert-left"><small className="cert-date-badge">{cert.date}</small><span className="cert-name">&nbsp;{cert.title}</span></div> :
                <div className="cert-title"><span className="cert-name">{cert.title}&nbsp;</span><small className="cert-date-badge">{cert.date}</small></div>}
                
                <div className={`cert-img ${cert.image}`}></div>
                
                <div className="cert-description">
                  <div>{cert.info} <small> - ({cert.institution})</small></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div id="metrics" style={{textAlign: 'center'}}>development 📈 metrics</div>
      { darkMode ? 
      <div className="waka-wrap">
      <figure><embed src="https://wakatime.com/share/@b94737ec-5326-4fb7-9eb6-e13175e91bf8/2791a21b-5877-4d74-a468-cd5c8471e133.svg"></embed></figure>
      </div>
      :
      <div className="row waka-wrap">
        <figure><embed src="https://wakatime.com/share/@b94737ec-5326-4fb7-9eb6-e13175e91bf8/fe39fa84-48a9-4876-99e2-7c5786ac952d.svg"></embed></figure>
      </div> } 
    </div>
  );
};

export default Education;
