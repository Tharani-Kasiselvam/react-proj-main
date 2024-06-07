import { useFormik } from "formik"
const App = () => {

  //function to validate Form data
  const validate = (values) => {
    const errors = {}
      if(!values.name){
        errors.name = "*Name is a mandatory field"
      }
      if(!values.email){
        errors.email = "*Email is a mandatory field"
      }
      if(!values.pwd){
        errors.pwd = "*Password is a mandatory field"
      }
      //return the errors Object
      return errors
  }

  const style = {
    color : "red",
    fontweight : "italic"
  }

  //Formik values should match with form data
  const formik = useFormik({
    initialValues : {
      email : "",
      name : "",
      pwd : ""
    },validate, //function to validate Form data
    onSubmit : values => {
      console.log(values)
    }
  })
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        Name: <input type="text"
        placeholder="Enter name"
        //for Formik either ID or Name is sufficient and it shld match with Formik values
        name="name"
        id = "name"
        value = {formik.values.name}
        onChange={formik.handleChange}
        ></input>
        {formik.errors.name ? <div style={style}>{formik.errors.name}</div> : null}
        <br />
        Email: <input type="email"
        placeholder="Enter email id"
        name="email"
        id = "email"
        value = {formik.values.email}
        onChange={formik.handleChange}
        ></input>
        {formik.errors.email ? <div style={style}>{formik.errors.email}</div> : null}
        <br />
        Password: <input type="password"
        placeholder="Enter password"
        name="pwd"
        // id = "password"
        value = {formik.values.pwd}
        onChange={formik.handleChange}
        ></input>
        {formik.errors.pwd ? <div style={style}>{formik.errors.pwd}</div> : null}
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default App