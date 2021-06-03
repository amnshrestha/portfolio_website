import React from 'react'

import "./briefInfo.css"
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import profilePic from '../../assets/images/profile_3.jpeg'


const BriefInformation = () => {
    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="secondPage"
        >            
            <Grid item sm={12} md = {5}>
                <Avatar alt="Aman Shrestha" src={profilePic} id="profilePic"/>
            </Grid>
            <Grid item sm={12} md = {7} className="details">
                <div className="name">Aman Shrestha</div>
                <div className="info">Incoming Cloud Technical Resident @ Google
                <br/>
                B.S. in Computer Science from University of Rochester
                </div>
            </Grid>
        </Grid>
    )
}

export default BriefInformation
