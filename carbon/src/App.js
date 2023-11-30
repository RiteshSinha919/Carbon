import './App.css';
import TaskBar from './components/TaskBar/TaskBar'
import Assignee from './components/Assignee/Assignee'
import TaskCard from './components/TaskCard/TaskCard';

function App() {
  return (
    <div className="App">
        <TaskBar headline = "Created the task bar with the requirements details" />
    </div>
  );
}

export default App;
