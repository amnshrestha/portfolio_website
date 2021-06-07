import React from 'react'

import "./NavBarstyles.css"

import "../../assets/js/help.js"

const NavBar = () => {

    return (
		<>
        <nav className="nav nav-pills sticky-top flex-column align-items-end" id="sideScrollNavBar">
			<div className="mainNavBar">
				<a className="nav-link chosen" id = "navTo_Profile" href="#briefInfoSection">Profile</a>
				<a className="nav-link" id = "navTo_Experience" href="#ExperiencePage">Experience</a>
				<a className="nav-link" id = "navTo_Projects" href="#ProjectsPage">Projects</a>
				<a className="nav-link" id = "navTo_Leadership" href="#LeadershipPage">Leadership</a>
				<a className="nav-link" id = "navTo_Skills" href="#SkillsPage">Skills</a>
				<a className="nav-link" id = "navTo_Contact" href="#contactPage">Contact</a>
			</div>
		</nav>



		</>

    )
}

export default NavBar
