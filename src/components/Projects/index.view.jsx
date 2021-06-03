import React from 'react'

import ProjectList from './index.data'
import './projectsStyles.css'

import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';


import githubLogo from '../../assets/images/github.png'


const Projects = () => {

    const chipContents = (listOfChips)=>{
        return listOfChips.map((eachChip) => {
            return (
                <>
                    <Chip
                    size="small"
                    label={eachChip}/>
                    &nbsp;
                </>  
                
            )
        })
    }

    const forList = (listOfProject) => {
        return listOfProject.map((eachProject) => {
            return (
                <div>
                    
                        <Grid item xs={12}>
                            <div className="flip-card-container">
                                <div className="flip-card">
                                    <div className="flip-card-front">
                                        <p>
                                            {eachProject.title}
                                            <br/>
                                            <br/>
                                            <span className="technologyList">
                                                {chipContents(eachProject.technology)}
                                            
                                            </span>
                                        </p>
                                        
                                    </div>
                                    <div className="flip-card-back">
                                        <p>
                                            {eachProject.title}
                                            <span> {eachProject.description}
                                            <br />
                                            <br />
                                                <a href={eachProject.githubLink}
                                                    target="_blank">
                                                    <img src={githubLogo} className="contactImage" /></a>
                                            </span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </Grid>
                    
                </div>
            )
        })
    }

    return (
        <section className="ProjectsPage">
            <div className="mainTitle">Projects</div>
            <hr className="blueLine"/>
            <div id="projectsDetails">
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    {forList(ProjectList)}
                </Grid>
            </div>
        </section>
    )
}

export default Projects
