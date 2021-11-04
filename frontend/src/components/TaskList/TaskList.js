import { useState } from "react"
import Task from "../Task/Task"
import AddTask from "../AddTask/AddTask"

export default function TaskList(props) {
    return (
        <div className="tasklist">
            <div className="tasks">
                {props.tasklist.tasks.map((task, idx) =>(
                    <Task task={task} />
                ))}
            </div>

            <AddTask addTask={props.addTask} />
        </div>
    )
}
