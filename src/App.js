import logo from './logo.svg';
import './App.css';
import MainHomeScreen from './components/WelcomeScreen/MainHomeScreen';

import './assets/css/styles.css'
import BriefInformation from './components/BriefInformation';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import LeadershipExperience from './components/LeadershipExperience';
import Skills from './components/Skills';
import Contact from './components/Contact/index';
import NavBar from './components/NavBar';

import"./assets/js/help.js"
function App() {
  return (
    <div className="allContent">
      <MainHomeScreen/>
      <NavBar/>

      <BriefInformation/>
      <WorkExperience/>
      <Projects/>
      <LeadershipExperience/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
