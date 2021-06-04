import logo from './logo.svg';
import './App.css';
import MainHomeScreen from './components/WelcomeScreen/MainHomeScreen';

import './assets/css/styles.css'
import BriefInformation from './components/BriefInformation';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import LeadershipExperience from './components/LeadershipExperience';
function App() {
  return (
    <div className="allContent">
      <MainHomeScreen/>
      <BriefInformation/>
      <WorkExperience/>
      <Projects/>
      <LeadershipExperience/>
    </div>
  );
}

export default App;