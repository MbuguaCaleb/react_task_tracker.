import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';


function App() {

  const [tasks, setTasks] =useState([
    {
        id:1,
        text:"Study React",
        day:"19 Jan 2021",
        reminder:true
    },
    {
        id:2,
        text:"Study TypeScript",
        day:"19 Jan 2021",
        reminder:false
    },
    {
        id:3,
        text:"Study Java",
        day:"19 Jan 2021",
        reminder:true
    },
]);

  return (
    <div className="container">      
        <Header/>
        <Tasks tasks={tasks}/>
    </div>
  );
}


export default App;
