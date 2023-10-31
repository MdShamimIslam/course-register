import React from 'react';

const CourseBox = () => {
    return (
        <div className=' lg:w-1/4 w-2/3 mx-auto bg-slate-300 h-[500px] p-4 lg:ml-6 ml-16 mt-4 rounded-lg '>
            <h2 className='text-xl font-semibold text-blue-600'>Create our remaining hr</h2><br />
            <hr/>
            <h2 className="text-xl font-semibold mt-2">Course Name</h2><br />
            <hr />
            <h4 className="font-semibold mt-2">Total credit hours : </h4><br />
            <hr />
            <h4 className="font-semibold mt-2">Total Price : </h4>
            
        </div>
    );
};

export default CourseBox;