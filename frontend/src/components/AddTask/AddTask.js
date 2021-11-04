import { useState } from 'react'

export default function AddTask(props) {
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