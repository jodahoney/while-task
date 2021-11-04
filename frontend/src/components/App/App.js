import React, { useState } from 'react'
import Task from '../Task/Task'
import TaskList from '../TaskList/TaskList'
import AddTask from '../AddTask/AddTask';
import './App.css';

// Simple example list of the task list that will later be done with a database
const data = {
  name: "Joe's task List",
  tasks: [
    {
      task: 'Do laundry',
      priority: 'high',
      isDone: 'false'
    },
    {
      task: 'Walk the fish',
      priority: 'low',
      isDone: 'true'
    }
  ]
}

// Task function to serve as a task item, later will be abstracted out to a different component


// Form to add a task


function App() {

  const [tasks, setTasks] = useState(data.tasks)

  const addTask = (newTask) => {
    setTasks(currentTasks => [...currentTasks, newTask])
  }

  const taskList = { tasks: tasks }

  return (
    <div className="App">
      <header className="App-header">
        <h1>while(task):</h1>
        <h3>{data.name}</h3>
      </header>
      <body>

        {/* <TaskList taskList={taskList} addTask={addTask} /> */}
        <ul>
          {taskList.tasks.map((idx) => (
            <Task task={idx.task} />
          ))}
        </ul>
      
        <AddTask addTask={addTask} />
      </body>
    </div>
  );
}

export default App;
