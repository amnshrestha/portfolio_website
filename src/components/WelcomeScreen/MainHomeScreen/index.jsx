import React , {useState, useEffect} from 'react';
import TopNav from '../TopNav';

import { makeStyles } from '@material-ui/core/styles';

import coverPic from '../../../assets/images/coverPic.png'

const useStyles = makeStyles(() => ({    // this group of buttons will be aligned to the right side
    firstPage:{
        height: '100vh',
        width: '100%',
        background:`url(${coverPic}) center center / cover`
    },
    welcomeMessage: {
        marginTop: '30%',
        textAlign: 'center',
        color: 'white',
        marginRight: '20%',
        marginLeft: '20%',
        fontSize: '8vw',
      
        /* font-family: 'Source Sans Pro', sans-serif; */
      
        textShadow: '0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),0px 18px 23px rgba(0, 0, 0, 0.1)',
    },
}));

const MainHomeScreen = () => {
    const classes = useStyles();

	return (
		<section className={classes.firstPage}>
            <TopNav/>
            <div className={classes.welcomeMessage}>Hello, I'm Aman</div>
        </section>
	);
};

export default MainHomeScreen;
