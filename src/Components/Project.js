import React from 'react';
import ProjectContainer from './Project-Container';

export const Project=({pproject})=>{
    return(
        <div className="project" id="project">
            <section >
                <div style={{paddingLeft:"20px", paddingTop:"20px"}} className="wow fadeInUp">
            <h1>MY PROJECTS</h1>
            
            
            </div>
            <ul className="flex-container">
                {pproject.map((p,id)=>{
                    return(
                        <div className="wow fadeInUp">
                        <ProjectContainer 
                        pjcname={p.name} 
                        pjcdesc={p.desc} 
                        pjclongdes={p.longdes} 
                        pjcproblem={p.problem} 
                        pjcfix={p.fix} 
                        pjcvisitlink={p.visitlink} 
                        pjccodelink={p.codelink} 
                        pjcpic={p.projectpic} 
                        pjcstack={p.stack}
                        pjcnote={p.note}
                        pjcmodalId={id}
                        key={id}/>
                        </div>
                    )
                })}
            
            </ul>
            <a href="https://github.com/Kylist"><button style={{width:"15%"}}>Check my GitHub to see more</button></a>
            
            
            </section>
        </div>
    
    )
}
