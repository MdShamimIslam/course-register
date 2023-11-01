import React from "react";

const CourseName = ({ course, idx }) => {
  return (
    <div>
      <h3 className="font-semibold">
        {idx + 1}. {course.course_name}
      </h3>
      <br />
    </div>
  );
};

export default CourseName;
