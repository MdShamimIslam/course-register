import React from "react";

const Course = ({ course,handleAddCourseBox }) => {
  const { img, course_name, details, price, credit } = course;
  return (
    <div className="card  bg-base-200 shadow-xl">
      <img className="h-[200px] rounded-lg" src={img} alt="cover-image" />
      <div className="card-body">
        <h2 className="card-title">{course_name}</h2>
        <p>{details}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <i class="fa-solid fa-dollar-sign"></i>
            <p className="ml-3 font-semibold">Price : {price}</p>
          </div>
          <div className="flex items-center">
          <i class="fa-regular fa-bookmark"></i>
            <p className="ml-3 font-semibold">Credit : {credit}hr</p>
          </div>
        </div>
        <div className="card-actions ">
          <button
          onClick={()=>handleAddCourseBox(course)}
           className="btn btn-primary w-full"
           >Select</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
