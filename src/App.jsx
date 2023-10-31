import { useState } from "react"
import CourseBox from "./components/CourseBox/CourseBox"
import Courses from "./components/Courses/Courses"
import Header from "./components/Header/Header"

function App() {
  const [hour,setHour] = useState(0);
  const [price,setPrice] = useState(0);
  const [courseName,setCourseName] = useState([]);

  const handleAddCourseBox =(time,price2,course)=>{
    setHour(hour + time);
    setPrice(price + price2);
    const newCourseName = [...courseName,course];
    setCourseName(newCourseName)
  }
  
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="lg:flex  justify-between">
      <Courses
        handleAddCourseBox={handleAddCourseBox}
      ></Courses>
      <CourseBox hour={hour} price ={price} courseName={courseName}></CourseBox>
      </div>
    </div>
  )
}

export default App
