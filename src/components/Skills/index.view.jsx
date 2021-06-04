import React from 'react'
import SkillsList from './index.data'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



import "./skills.css"

const Skills = () => {

    const listofSkills = (listHere) => {
        return listHere.map((eachItem)=>{
            return (
                <Grid item xs={12} md={6} >
                    <Paper className="eachSkillItem">
                        <div className="title"> {eachItem.title}</div>
                        
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            >
                                <Grid item xs={10}  >
                                    <div className="grayLine">
                                        <div className="progressLine" style={{width:eachItem.proficiency}}></div>
                                    </div>
                                </Grid>
                                {eachItem.image && <Grid item xs={2}  >
                                    <img src={eachItem.image} alt="technology" className="technologyImage"/>
                                </Grid>
                                } 
                        </Grid>
							
                            
						
                    </Paper>
                </Grid>
                
            )
        })
    }
    return (
        <section id="SkillsPage">
            <div className="mainTitle">Skills</div>
            <hr className="blueLine"/>
            <div id="skillsDetails">
                <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing="4"
                >
                    {listofSkills(SkillsList)}
                </Grid>
                <br/>

                
            </div>
        </section>
    )
}

export default Skills
