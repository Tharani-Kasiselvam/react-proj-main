import { createContext } from "react"
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Notification from "./components/Notification";

export const NotifcationContext = createContext();

const App = () => {

    const [tasks, setTasks] = useState([
        {
            id : 1,
            title : "Task 1",
            completed : false 
        },
        {
            id : 2,
            title : "Task 2",
            completed : true 
        },
    ])
    
    const [notification,setNotification] = useState({
            message :"",
            visible : false
        })
    
        const showNotification = (message) => {
            setNotification({
                message,
                visible : true
            })
    
            setTimeout(()=>{
                setNotification({
                    message : "",
                    visible : false
                })
            }, 2000)
        }
    
        const addTask = (title) => {
            const newTask = {
                id : tasks.length + 1,
                title,
                completed : false 
            }
    
            setTasks([...tasks, newTask])
            showNotification("Task added successfully")
        }
    
        const toggleTask = (id) => {
            const updatedTasks = tasks.map(task => {
                if(task.id === id){
                    task.completed = !task.completed
                }
                return task
            })
    
            setTasks(updatedTasks)
        }

  return (
    <NotifcationContext.Provider value = {{notification, showNotification, addTask, toggleTask, tasks}} >
    {/* we can provide any no.of Components within Provider */}
        <div>
        <h1>Task Manager</h1>
        <Notification />
        <TaskList />
        <TaskForm />
        </div>
    </NotifcationContext.Provider>
  )
}

export default App