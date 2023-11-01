import { useState } from "react";
import CourseBox from "./components/CourseBox/CourseBox";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { toast } from "react-toastify";

function App() {
  const [hour, setHour] = useState(0);
  const [price, setPrice] = useState(0);
  const [courseName, setCourseName] = useState([]);

  const handleAddCourseBox = (course) => {
    const checkCourseExist = courseName.find((item) => item.id === course.id);

    if (checkCourseExist) {
      toast.warning('Course already exist');
    } 
    else if (hour + course.credit > 20) {
      toast.warning('Your credit exist');
    } 
    else {
      setHour(hour + course.credit);
      setPrice(price + course.price);
      const newCourseName = [...courseName, course];
      setCourseName(newCourseName);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="lg:flex  justify-between">
        <Courses handleAddCourseBox={handleAddCourseBox}></Courses>
        <CourseBox
          hour={hour}
          price={price}
          courseName={courseName}
        ></CourseBox>
      </div>
    </div>
  );
}

export default App;
