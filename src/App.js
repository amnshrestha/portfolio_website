import logo from './logo.svg';
import './App.css';
import MainHomeScreen from './components/WelcomeScreen/MainHomeScreen';

import './assets/css/styles.css'
import BriefInformation from './components/BriefInformation';
function App() {
  return (
    <div className="allContent">
      <MainHomeScreen/>
      <BriefInformation/>
    </div>
  );
}

export default App;
