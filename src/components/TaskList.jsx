import { useContext } from "react"
import { NotifcationContext } from "../App"
import Notification from "./Notification"
import { useState } from "react"

const TaskList = () => {
    const {tasks,showNotification} = useContext(NotifcationContext)
    const [strikeThroughCSS, setStrikeThroughCSS] =  
        useState(false);

       const isCheck = (e) => {
        if(e.target.checked){
            console.log(tasks.title)
            showNotification("Task COMPLETED")
        }
        else{
            // console.log("inside if")
            showNotification("Task NOT COMPLETED")
        }
    }

  return (
    <div>
        {tasks.map(task => 
        <div key={task.id}>
            <input type="checkbox" defaultChecked = {task.completed} onClick={(e) =>  
                        setStrikeThroughCSS((prev) => !prev)}/>
            <span style={ 
                    { 
                        textDecoration: strikeThroughCSS ? 
                            "none" : "line-through"
                    }}> {task.title}</span>
        </div>
        )}
    </div>
  )
}

export default TaskList