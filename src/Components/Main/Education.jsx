import React from 'react';
import {EDU} from '../../Config/education';


const Education = () => {
  return (
    <div className="col col-sm-12">
      
      <div class="timeline">
        
        {EDU && EDU.reverse().map((cert, idx)=> {
          return(
            <div 
              key={idx} 
              id={`cert${idx}`} 
              className={idx % 2 === 0 ? 'container left' : 'container right'}>
              <div className="content">
                {/* <h5>{cert.title}</h5>
                <p>{cert.date}</p> */}
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
