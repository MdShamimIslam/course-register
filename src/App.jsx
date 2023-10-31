import CourseBox from "./components/CourseBox/CourseBox"
import Courses from "./components/Courses/Courses"
import Header from "./components/Header/Header"

function App() {


  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="lg:flex  justify-between">
      <Courses></Courses>
      <CourseBox></CourseBox>
      </div>
    </div>
  )
}

export default App
