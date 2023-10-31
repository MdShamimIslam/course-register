import React, { useEffect, useState } from 'react';
import Course from './Course/Course';



const Courses = () => {
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        fetch('FakeData.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
console.log(courses);
    return (
        <div>
            <h3>course:{courses.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;