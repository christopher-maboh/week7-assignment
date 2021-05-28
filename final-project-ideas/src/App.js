import './App.css';
import './style.css'
import Dependencies from './Dependencies';
import PlanOfAction from './PlanOfAction';
import ProjectIdeas from './ProjectIdeas';
import ProjectWireframe from './ProjectWireframe';
import Task from './Task';


function App() {
  return (
    <div className="App">
      <div>
      <ProjectIdeas/>
      <ProjectWireframe/>
       <Dependencies/>
       <Task/>
       <PlanOfAction/>
      </div>
    </div>
  );
}

export default App;
