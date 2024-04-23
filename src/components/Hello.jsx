// const Hello = (props) => {
//     return(
//       <div>
//         <h1>Hello World</h1>
//         <p>This is a simple <b>Component</b></p>
//         <p>by {props.user}</p>
//       </div>
//     )
// }
// export default Hello  
import { Component } from 'react'

export class Hello extends Component {
  render() {
    return (
      <p>Helo {this.props.user}</p>
    )
  }
}

export default Hello