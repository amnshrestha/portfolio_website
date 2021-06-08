import React from 'react'


import './navBar.css'

const TopNav = () => {
    return (
        <>
        <div className="customNavBar normalScreen">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand text-white" href="#">Aman Shrestha</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Resume</a>
                    </li> */}
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#contactPage">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <hr className="navUnderLine" />
        </div>


        <div className="customNavBar phoneVersion fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand text-white" id = "phoneScreenPlace" href="#">Aman Shrestha</a>
                <button id="#navBarToggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" id = "phoneScreenNavTo_Profile">
                            <a className="nav-link text-white phoneScreenNavItem" href="#briefInfoSection">Profile</a>
                        </li>
                        <li className="nav-item active" id = "phoneScreenNavTo_Experience">
                            <a className="nav-link text-white phoneScreenNavItem" href="#ExperiencePage">Experience</a>
                        </li>
                        <li className="nav-item active" id = "phoneScreenNavTo_Projects">
                            <a className="nav-link text-white phoneScreenNavItem" href="#ProjectsPage">Projects</a>
                        </li>
                        <li className="nav-item active" id = "phoneScreenNavTo_Leadership">
                            <a className="nav-link text-white phoneScreenNavItem" href="#LeadershipPage">Leadership</a>
                        </li>
                        <li className="nav-item active" id = "phoneScreenNavTo_Skills">
                            <a className="nav-link text-white phoneScreenNavItem" href="#SkillsPage">Skills</a>
                        </li>
                        <li className="nav-item active" id = "phoneScreenNavTo_Contact">
                            <a className="nav-link text-white phoneScreenNavItem" href="#contactPage">Contact</a>
                        </li>
                        {/* <hr/>
                        <li className="nav-item active">
                            <a className="nav-link text-white phoneScreenNavItem" href="#">Resume</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
        </>

    )
}

export default TopNav
