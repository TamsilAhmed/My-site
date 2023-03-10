import './App.css';
import Contact from './Components/Contact/Contact.js';
import ExperienceContainer from './Components/ExperienceContainer/ExperienceContainer';
import Header from'./Components/Header/Header.js'
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import SkillContainer from './Components/SkillContainer/SkillContainer';
import TopContainer from './Components/TopContainer/TopContainer';

function App() {
  return (
    
    <div className="App">

      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />     
      <Contact />

    </div>
  );
}

export default App;
