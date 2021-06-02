import React from 'react'


import './navBar.css'

const TopNav = () => {
    return (
        <div className="customNavBar">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand text-white" href="#">Aman Shrestha</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Resume</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <hr className="navUnderLine" />
        </div>
    )
}

export default TopNav
