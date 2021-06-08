import React from 'react'

import "./briefInfo.css"
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import profilePic from '../../assets/images/profile_3.jpeg'
import NavBar from '../NavBar';


const BriefInformation = () => {
    return (
        <section id="briefInfoSection">
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="secondPage"
            >            
                <Grid item sm={12} sm = {5}>
                    <Avatar alt="Aman Shrestha" src={profilePic} id="profilePic"/>
                </Grid>
                <Grid item sm={12} md = {7} className="details">
                    <div className="name">Aman Shrestha</div>
                    <div className="info">Incoming Cloud Technical Resident 
                    @ <span className="letter_g">G</span>
                    <span className="letter_o">o</span>
                    <span className="letter_o2">o</span>
                    <span className="letter_g2">g</span>
                    <span className="letter_l">l</span>
                    <span className="letter_e">e</span>
                    <br/>
                    B.S. in Computer Science <br/> University of Rochester
                    </div>
                </Grid>
            </Grid>
        </section>
    )
}

export default BriefInformation
