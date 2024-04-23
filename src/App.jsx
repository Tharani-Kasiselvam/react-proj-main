import Hello from "./components/Hello"
const App = () => {
  const usrname = "Tharani"
  return (
    <div>
      <Hello user = {usrname}/>
    </div>
  )
}

export default App