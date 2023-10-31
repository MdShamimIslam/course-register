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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                d="M12 1H4.5C3.57174 1 2.6815 1.36875 2.02513 2.02513C1.36875 2.6815 1 3.57174 1 4.5C1 5.42826 1.36875 6.3185 2.02513 6.97487C2.6815 7.63125 3.57174 8 4.5 8H9.5C10.4283 8 11.3185 8.36875 11.9749 9.02513C12.6313 9.6815 13 10.5717 13 11.5C13 12.4283 12.6313 13.3185 11.9749 13.9749C11.3185 14.6313 10.4283 15 9.5 15H1"
                stroke="#1C1B1B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> */}
            <p className="ml-3 font-semibold">Price : ${price}</p>
          </div>
          <div className="flex items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                stroke="#1C1B1B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> */}
            
            <p className="ml-3 font-semibold">Credit : {credit}hr</p>
          </div>
        </div>
        <div className="card-actions ">
          <button
          onClick={()=>handleAddCourseBox(credit,price,course)}
           className="btn btn-primary w-full"
           >Select</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
