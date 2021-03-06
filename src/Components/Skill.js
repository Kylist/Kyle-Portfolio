import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  
export const Skill=({sskill1, sskill2, sskill3})=>{
    
    return(
        <div className="skill" id="skill">
            <section>
                <div style={{paddingLeft:"20px", paddingTop: "40px"}} className="wow fadeInUp">
            <h1>MY SKILLS</h1>
            
            
            </div>

            <div className="gridContainer">
            <div className="wow fadeInUp">
            <h3>Web stack</h3>
            
            <ul className="gridItems">
            {sskill1.map((s, id)=>{
           if(typeof s.icon!=='string'){
            return(
                <li key={id}><h6>{s.name} <FontAwesomeIcon icon={s.icon} size="lg" /></h6> </li>
            
            )}
            else{
                return(
                    <li key={id}><b>{s.name}</b>  {s.icon}</li>
                
                )}
                })}

            </ul>
            </div>

            <div className="gridMidContent">
                <div className="wow fadeInUp">
            <h3>Software stack</h3>
            
            <ul className="gridItems">
            {sskill2.map((s, id)=>{
                if(typeof s.icon!=='string'){
                    return(
                        <li key={id}><h6>{s.name} <FontAwesomeIcon icon={s.icon} size="lg" /></h6> </li>
                    
                    )}
                    else{
                        return(
                            <li key={id}><b>{s.name}</b>  {s.icon}</li>
                        
                        )}
                        })}
        

            </ul>
            </div>
            <div className="wow fadeInUp">
            <h3>Softskill</h3>
            
            <ul className="gridItems">
            {sskill3.map((s, id)=>{
                if(typeof s.icon!=='string'){
                    return(
                        <li key={id}><h6>{s.name} <FontAwesomeIcon icon={s.icon} size="lg" /></h6> </li>
                    
                    )}
                    else{
                        return(
                            <li key={id}><b>{s.name}</b>  {s.icon}</li>
                        
                        )}
                        })}
        
            </ul>
            </div>
            </div>
            </div>
            </section>
        </div>
    
    )
}
