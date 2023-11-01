
import CourseName from "../CourseName/CourseName";

const CourseBox = ({ hour, price, courseName }) => {
  const remainingHr = 20 - hour;
  return (
    <div className="lg:w-1/4 w-2/3 mx-auto bg-slate-300 h-[485px] p-4 lg:ml-6 ml-16 mt-4 rounded-lg">
      <h2 className="text-xl font-semibold text-blue-600">
        Create our remaining <span className="text-red-600">{remainingHr}</span> hr
      </h2>
      <br />
      <hr />
      <h2 className="text-xl font-semibold mt-2">Course Name</h2>
      <br />
      {courseName.map((course, index) => (
        <CourseName idx={index} key={index} course={course}></CourseName>
      ))}

      <hr />
      <h4 className="font-semibold mt-6">Total credit hours : <span className="text-purple-600">{hour}</span></h4>
      <br />
      <hr />
      <h4 className="font-semibold mt-4">Total Price : <span className="text-purple-600">{price}</span> USD</h4>
    </div>
  );
};

export default CourseBox;
