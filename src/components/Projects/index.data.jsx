import dummyImage from "../../assets/images/coverPic.png"

const ProjectList = [
    {
        logo:dummyImage,
        title:"How UR Feeling",
        description:"This project allows better communication during virtual calls. Using MediaPipe, we recognize smile, confusion, surprised and gestures like raising hand and giving a thumbs up. This information is then shared with other users without having to share video feed with them.",
        githubLink:"https://github.com/amnshrestha/UR-Stressed",
        technology:[
            "python","mediapipe","flask", "REST API"
        ]
    },
    {
        title:"CSUG Website",
        description:"This is an open-source project which is used as the official website for the Computer Science Undergraduate Council at the University of Rochester. The members collectively contribute to the website including collecting academic and professional resources for the club.",
        githubLink:"https://github.com/amnshrestha/official-csug-website",
        technology:[
            "REACT","JavaScript","Open-Source"
        ]
    },
    {
        title:"Draw With Hands",
        description:"This project allows users to draw on their screen by just moving their fingers. The users need to bring their index finger and thumb together as if holding a pen, and then draw. Using mediapipe, the fingers are recongized and the drawing is displayed on screen.",
        githubLink:"https://github.com/amnshrestha/draw-with-hands",
        technology:[
            "mediapipe","JavaScript"
        ]
    },
    {
        title:"Grocery Cache",
        description:"A web app that allows users to manage their grocery list and budget expenses efficiently and effectively. This website is created using Flask to easily add, remove and categorize grocery lists.",
        githubLink:"https://github.com/jessieAnhNguyen/Grocery-Cache",
        technology:[
            "Flask","python"
        ]
    },
    {
        title:"Job Clustering",
        description:"This project uses different clustering algorithm to find jobs that are similar. The project's aim is to simplify job application process by finding openings that are similar and match with the user's skill set.",
        githubLink:"https://github.com/amnshrestha/jobClustering",
        technology:[
            "Machine Learning","python", "Clustering"
        ]
    }, 
    {
        title:"Centralized Reseach Database",
        description:"This website is built to help centralize research opportunities from different departments in a university. Users can add various research topics and openings and students can navigate through them easily to find the one they're most interested in.",
        githubLink:"https://github.com/amnshrestha/CentralizedResearchDatabase",
        technology:[
            "PHP","SQL"
        ]
    },
]

export default ProjectList