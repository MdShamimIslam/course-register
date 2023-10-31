
import React from 'react';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';
import CourseName from '../CourseName/CourseName';


const CourseBox = ({hour,price,courseName}) => {
    
    if(hour > 20 ){
        // alert('hey!!! don't add any course!!');

        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Something went wrong!',
        //   })

        // toast.success("success");
    }
    return (
        <div className=' lg:w-1/4 w-2/3 mx-auto bg-slate-300 h-[710px] p-4 lg:ml-6 ml-16 mt-4 rounded-lg '>
            <h2 className='text-xl font-semibold text-blue-600'>Create our remaining hr</h2><br />
            <hr/>
            <h2 className="text-xl font-semibold mt-2">Course Name</h2><br />
            {
                courseName.map((course,index) => <CourseName
                    idx={index}
                    key={index} 
                    course={course}
                ></CourseName>)
            }
           
           <hr />
            <h4 className="font-semibold mt-6">Total credit hours : {hour}</h4><br />
            <hr />
            <h4 className="font-semibold mt-4">Total Price : ${price}</h4>
            
        </div>
    );
};

export default CourseBox;