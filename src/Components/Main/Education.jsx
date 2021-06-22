import React from 'react';
import {EDU} from '../../Config/education';


const Education = () => {
  return (
    <div className="col col-sm-12">
      
      <div class="timeline">
        
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
                  <div>{cert.info}</div>
                </div>
                
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
