import PropTypes from 'prop-types';
import { FiDollarSign, FiBookOpen } from 'react-icons/fi';


const Course = ({ course ,handelSelect}) => {
    const {img, course_name, course_details, price, credit } = course;

    return (
        <div className='border-2 p-3 relative h-[380px] md:h-[400px] lg:h-[385px] bg-white rounded-xl  space-y-2'>
            <figure>
                <img src={img} alt={`this image for ${course_name}`} />
            </figure>
            <h2 className='font-semibold text-[18px]'>{course_name}</h2>
            <p className='text-[#1C1B1B99]'>{course_details}</p>
            <div className='flex justify-between items-center '>

                <p className='text-[#1C1B1B99] flex items-center gap-1'><FiDollarSign className='text-black'></FiDollarSign> Price: {price}</p>

                <p className='text-[#1C1B1B99] flex items-center gap-2'><FiBookOpen className='text-black '></FiBookOpen> Credit: {credit}hr</p>

            </div>
            <br />

            <button 
            onClick={()=>handelSelect(course)} 
            className='absolute inset-x-0 bottom-2 rounded-lg w-11/12 mx-auto py-2 my-2 text-white bg-[#2F80ED]'>Select</button>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handelSelect: PropTypes.func,
};

export default Course;