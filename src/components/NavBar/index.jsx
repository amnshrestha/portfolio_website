import React from 'react'

import "./NavBarstyles.css"

const NavBar = () => {
    return (
        <nav className="nav nav-pills sticky-top flex-column align-items-end">
			<div className="mainNavBar">
				<a className="nav-link active" href="#briefInfoSection">Profile</a>
				<a className="nav-link" href="#ExperiencePage">Experience</a>
				<a className="nav-link" href="#ProjectsPage">Projects</a>
				<a className="nav-link" href="#LeadershipPage">Leadership</a>
				<a className="nav-link" href="#SkillsPage">Skills</a>
				<a className="nav-link" href="#contactPage">Contact</a>
			</div>
		</nav>
    )
}

export default NavBar
