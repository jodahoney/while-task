import React, { useState } from 'react'
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
function Task(props) {
  return (
    <p>{props.task}</p>
  )
}

// Form to add a task
function AddTask(props) {
  // declaring a form state that is default to blank values for the tasks data values
  const [form, setForm] = useState({
    task: "",
    priority: "",
    isDone: ""
  })

  const handleOnInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleOnSubmit = () => {
    const newTask = {
      task: form.task,
      priority: form.priority,
      isDone: form.isDone
    }
    props.addTask(newTask)

    setForm({
      task: "",
      priority: "",
      isDone: ""
    })
  }

  return (
    <div className="add-task-form">
      <h2>Add new task:</h2>

      <div className="form-input">
        <label htmlFor="task">Task</label>
        <input 
          name="task"
          type="text"
          placeholder="Task to do"
          value={form.task}
          onChange={handleOnInputChange} />
      </div>

      <div className="form-input">
        <label htmlFor="priority">Priority</label>
        <input 
          name="priority"
          type="text"
          placeholder="Priority of task"
          value={form.priority}
          onChange={handleOnInputChange} />
      </div>

      <div className="form-input">
        <label htmlFor="isDone">Status</label>
        <input 
          name="isDone"
          type="text"
          placeholder="Done? true/false"
          value={form.isDone}
          onChange={handleOnInputChange} />
      </div>

      <button className="btn submit" onClick={handleOnSubmit}>
        Add task
      </button>

    </div>
  )
}

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
