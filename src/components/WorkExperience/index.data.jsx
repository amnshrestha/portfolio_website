import uorImage from "../../assets/images/uorCampus.jpeg"
import fnLogo from "../../assets/images/FNLogo.png"
import fsLogo from "../../assets/images/FSLogo.png"
import careersuncorked from "../../assets/images/careersuncorkedlogo.jpeg"
import daadRise from "../../assets/images/DAADRise.png"


const mainWorkList = [
    {   
        image: fnLogo,
        title : "Software Engineering Intern",
        company: "Fiscal Note",
        location: "Washington DC (remote)",
        date:'January 2021 - May 2021',
        description:["Researched on multi-label classification of bills", 
        "Worked on an internal Calendar tool using REACT",
        "Created a website to display information collected about the President of US"
        ]
    },
    {
        image: fsLogo,
        title : "Software Engineering Intern",
        company: "FactSquared",
        location: "Washington DC (remote)",
        date:'July 2020 - December 2020',
        description:["Designed and built a demo website about the company's products",
        "Built multiple features on the Frontend of customer-facing products", 
        "Integrated a paywall system using stripe for the products created by the company",
        "Designed and built a website that displays the videos compiled by the company and allows search and filter operations",
        ]
    },
    {
        image: careersuncorked,
        title : "Front-End Engineer",
        company: "Career's Uncorked",
        location: "Rochester City (remote)",
        date:'July 2020 - Present',
        description:["Developed Career's Uncorked official website using REACT", 
        "Used Youtube and Spotify API to auto update the website",
        "Website can be viewed at www.careers-uncorked.com"
        ]
    },
    {
        image: uorImage,
        title : "Computer Science Teaching Assistant",
        company: "University of Rochester",
        location: "Rochester, NY",
        date:'August 2018 - May 2021',
        description:["Led study sessions and workshops and help with grading quizzed, projects and exams", 
        "Object Oriented Programming (JAVA), Data Structure and Algorithm (JAVA), Computation and Formal System (C), Artificial Intelligence (JAVA, Python), Intro to Databases (SQL)"
        ]
    },
    {
        image: daadRise,
        title : "DAAD RISE Research Intern",
        company: "Saarland University",
        location: "Saarbrucken Germany",
        date:'May 2019 - August 2019',
        description:["Researched how data collected from wearable devices could potentially impact privacy of an individual", 
        "Trained machine models using ECG and EDA data to predict what movie a person was watching from a given set"
        ]
    },

]

export default mainWorkList;