import { Link } from "react-router-dom"

const course_list = [
    {
        id:1,
        title:"React",
        description: "React is a JavaScript library for building user interface",
        price:"$100"
    },
    {
        id:2,
        title:"Angular",
        description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript",
        price:"$150"
    },
    {
        id:3,
        title:"Vue",
        description: "Vue is a progressive framework for building user interface",
        price:"$200"
    },
]
const Courses = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Courses</h1>
        <div className="row">
            {course_list.map(course => (
                <div className="col" key={course.id}>
                    <div className="card" style={{height:"250px", width:"250px"}}>
                        <div className="card-body">
                            <Link to={`/dashboard/courses/${course.id}`}>
                                <h5 className="card-title">{course.title}</h5>
                            </Link>
                                <p className="card-text">{course.description}</p>
                                <p className="card-text">Price:{course.price}</p>
                                <Link to="#" className="btn btn-primary">Enroll</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Courses