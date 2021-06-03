import logo from './logo.svg';
import './App.css';
import MainHomeScreen from './components/WelcomeScreen/MainHomeScreen';

import './assets/css/styles.css'
import BriefInformation from './components/BriefInformation';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
function App() {
  return (
    <div className="allContent">
      <MainHomeScreen/>
      <BriefInformation/>
      <WorkExperience/>
    </div>
  );
}

export default App;
