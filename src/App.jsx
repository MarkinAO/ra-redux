import './App.css';
import { useState } from 'react';
import SelectTask from './components/selectTask/SelectTask';
import Editing from './components/editing/Editing';

function App() {
  let [ curTask, setCurTask ] = useState('EDITING');
  const tasks = [
    { taskName: 'EDITING', solving: <Editing key={'EDITING'} /> },
    // { taskName: 'HEADBOOK', solving: <Headbook key={'HEADBOOK'} /> },
    // { taskName: 'AUTHENTICATION', solving: <Authentication key={'AUTHENTICATION'} /> }
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App