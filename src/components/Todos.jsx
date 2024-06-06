import { useLoaderData } from "react-router-dom"

export async function loader (){
const response = await fetch("https://666161f063e6a0189fe98846.mockapi.io/mytodo",
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const todos = await response.json()
    return { todos }
}

const Todos = () => {
    const {todos} = useLoaderData()
    console.log(todos)
  return (
    <div style={{marginLeft:"50px",textAlign:"center"}}><b>Todos</b>
        {todos.map(todo => 
            <div className="cards"><b>{todo.name}</b>
                <li key={todo.id}>{todo.description}</li>
                <li key={todo.id}>{todo.createdAt}</li>
            </div>
        )}
    </div>
  )
}

export default Todos