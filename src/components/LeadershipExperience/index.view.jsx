import React from 'react'
import Grid from '@material-ui/core/Grid';

import './leadershipStyles.css'

import leadershipExperience from './index.data'

const LeadershipExperience = () => {

    const listOfLeadership = (listHere)=>{
        return listHere.map((eachItem) => {
            return (
                <>
                <div className="cardContainer">
					<div className="boxHidden">

						<div className="textInsideBox">
							<h4>{eachItem.combinedPosition}</h4>
							<p>{eachItem.description}</p>
						</div>
					</div>
					<div className="boxHidden stack-top">
						<h2>{eachItem.place}</h2>
						<h4>{eachItem.position}</h4>
						<span>{eachItem.date}</span>
					</div>
				</div>

                </>  
                
            )
        })
    }

    return (
        <section className="LeadershipPage">
            <div className="mainTitle">Leadership Experience</div>
            <hr className="whiteLine" />
            <div id="leadershipDetails">
                {listOfLeadership(leadershipExperience)}
            </div>
        </section>
    )
}

export default LeadershipExperience
