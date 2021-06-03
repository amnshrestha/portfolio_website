import React from 'react'
import Avatar from '@material-ui/core/Avatar';


import './workExperience.css'

import mainWorkList from './index.data'

const WorkExperience = () => {

    const eachPoint = (listOfPoints) => {
        return listOfPoints.map(eachPointDisplay => {
            return (
                <li className = "eachPoint">{eachPointDisplay}</li>
            )
        })
    }

    const eachWork = (workList) => {
        return workList.map(eachItem => {
            return (  
                <div className="card">
                <div className="additional">
                    <div className="user-card">
                        <Avatar alt="Place of work" src={eachItem.image} id="workPlacePic"/>
                        <div className="points center">
                            {eachItem.company.length < 13?
                                eachItem.company:
                                eachItem.company.substring(0,eachItem.company.lastIndexOf(" "))
                                    +"\n"
                                    + eachItem.company.substring(eachItem.company.lastIndexOf(" ")+1)
                            }
                        </div>
                    </div>
                    <div className="more-info">
                        <h1>{eachItem.title}</h1>
                        <br />
                        <ul className = "eachPoint">
                            {eachPoint(eachItem.description)}
                        </ul>
                        {/* <p>{eachItem.description}</p> */}
                    </div>
                </div>
                <div className="general">
                    <h1>{eachItem.title}</h1>
                    <div className="coords">
                        <span>{eachItem.date}</span>
                    </div>
                    <div className="coords">
                        <br/>
                        <span>{eachItem.company}</span><br />
                        <span>{eachItem.location}</span>
                    </div>

                </div>
            </div>
            )
        })
    }
    return (
        <div className="ExperiencePage">
            
                <div className="mainTitle">Work Experience</div>
            
                <hr class="whiteLine" />
            <div id="experienceDetails">
                {eachWork(mainWorkList)}
                <br/>
            </div>
            
        </div>
    )
}

export default WorkExperience
