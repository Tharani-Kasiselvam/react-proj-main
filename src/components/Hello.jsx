const Hello = (props) => {
    return(
      <div>
        <h1>Hello World</h1>
        <p>This is a simple <b>Component</b></p>
        <p>by {props.user}</p>
      </div>
    )
}
export default Hello  