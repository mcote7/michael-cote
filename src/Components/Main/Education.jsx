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
                <div className="cert-title cert-left"><small className="cert-date-badge">{cert.date}</small>&nbsp;{cert.title}</div> :
                <div className="cert-title">{cert.title}&nbsp;<small className="cert-date-badge">{cert.date}</small></div>}
                
                <div className={`cert-img ${cert.image}`}></div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
