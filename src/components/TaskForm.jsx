import { useContext } from "react"
import { NotifcationContext } from "../App"

const TaskForm = () => {
    const {addTask} = useContext(NotifcationContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const task = e.target[0].value.trim()

        //check if the Task is empty or and return early
        if(!task){
            return
        }

        //adding new task
        addTask(task)

        e.target[0].value = ""
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm