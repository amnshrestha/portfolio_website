import React from 'react'

import Grid from '@material-ui/core/Grid';


import contactMethonds from './index.data'
import "./contact.css"

const Contact = () => {

    const contactList = (listOfContact) =>{
        return listOfContact.map((eachContact)=>{
            return(
                <Grid item xs={6} sm={6} >
                    <a href={eachContact.link} target="_blank">
                        <img src={eachContact.logo} class="contactImage"/></a>
                    <a href={eachContact.link} target="_blank" className="contactTitle">
                        {eachContact.title}
                    </a>
                </Grid>
            )
        })
    }

    return (
        <section id="contactPage">
			<div class="mainTitle">
				Contact
			</div>

			<hr class="whiteLine" />
            

            <Grid container spacing={8} className = "contactList">
                {contactList(contactMethonds)}
            </Grid>

		</section>
    )
}

export default Contact
