import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import uorCampus from '../../assets/images/uorCampus.jpeg'

const Education = () => {
    return (
        <section>
            <div className="title">Education</div>

            <div className="universityDetails">
                <Avatar alt="Aman Shrestha" src={uorCampus}/>
                University of Rochester
            </div>
            <div className="degree">Bachelor of Science in Computer Science</div>
            <div className="date">August 2017 - May 2021</div>
            <div className="listOfAchievements">
                <ul>
                    <li>Graduated Cum Laude</li>
                    <li>Member of Phi Beta Kappa Honor Society</li>
                    <li>Awarded "Most Valuable Programmer"</li>
                    <li>Awarded "Alice DeSimone Leadership Award"</li>
                </ul>
            </div>
        </section>
    )
}

export default Education
