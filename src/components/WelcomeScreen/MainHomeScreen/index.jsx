import React from 'react';
import TopNav from '../TopNav';

import downArrow from '../../../assets/images/downArrow.png'

import { makeStyles } from '@material-ui/core/styles';


import "./mainHomeScreen.css";



const MainHomeScreen = () => {

	return (
		<section className="welcomeScreen">
            <TopNav/>
            <div className="welcomeMessage">Hello, I'm Aman</div>
            <a href="#briefInfoSection" className="segueLink">
                  <span class="boxWithArrow">
                        <img src={downArrow}
					className="downArrowPic"/>
                  </span>
            </a>
        </section>
	);
};

export default MainHomeScreen;
