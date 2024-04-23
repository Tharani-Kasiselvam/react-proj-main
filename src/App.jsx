import { Component } from 'react'
import Counter from './components/Counter'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {counter:0}
  }

    handleIncre = () =>{
      this.setState({
        counter: this.state.counter + 1
    })
    }

    handleDecre = () =>{
      this.setState({
        counter: this.state.counter - 1
      })
      }

      handleRst = () => {
        this.setState({
          counter: 0
        })
      }

  render() {
    return (
      <div>
      <div>
        <Counter counter={this.state.counter} />
      </div>
        <div><button onClick={this.handleIncre}>Increment</button>
            <button onClick={this.handleDecre}>Decrement</button>
            <button onClick={this.handleRst}>Reset</button> 
        </div>
      </div>
    )
  }
}

export default App