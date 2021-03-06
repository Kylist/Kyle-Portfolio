import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
var flexContain = {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-evenly',
    flex: "1",
    flexBasis: "50px 50px",
    height: "100%",
    flexWrap: "wrap",

}
var flexItems={
    textAlign:"center",
    width: "300px",
    height: "200px"
}
export const WhyWorkWithMe=({characteristic})=>{
    return(
        <div className="why-work-with-me">
            <section>
                <div style={{paddingTop:"40px", paddingLeft:"20px"}} className="wow fadeInUp">
            <h1>WHY WORK WITH ME</h1>
            
            
            </div>
            <ul style={flexContain}>
                {characteristic.map((c, id)=>{
                    return(
                    <li key={id} style={flexItems} className="wow fadeInUp">
                        <br />
                        <p><FontAwesomeIcon icon={c.icon} size="3x" /></p>
                        <br/>
                        <h3>{c.quality}</h3>
                        <p>{c.des}</p>
                    </li>)
                })}
            </ul>
            </section>
        </div>
    
    )
}
