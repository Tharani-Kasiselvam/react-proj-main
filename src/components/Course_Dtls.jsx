import { Link, useParams } from "react-router-dom";

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

const Course_Dtls = () => {
    const {id} = useParams();
  return (
    <div>
        {course_list.map(course => {
            if(course.id == id){
                return(
                        <div key={course.id}>
                            <h1>{course.title}</h1>
                            <p>{course.description}</p>
                            <p>Price: {course.price}</p>
                            <Link to="#" className="btn btn-primary">Enroll</Link>
                        </div>
                )
            }
        })}
    </div>
  )
}

export default Course_Dtls