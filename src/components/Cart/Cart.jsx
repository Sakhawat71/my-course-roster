import PropTypes from 'prop-types';

const Cart = ({ courses, price, credit, creditRemain }) => {

    return (
        <div className="w-10/12 mx-auto mt-5 md:mt-0 md:w-3/12 bg-white p-6 rounded-md">
            <div className='sticky top-5 space-y-4 '>
                <h1 className='text-[#2F80ED] font-bold text-[18px]'>Credit Hour Remaining {creditRemain} hr</h1>
                <hr />

                <div>
                    <h2 className='font-bold text-[20px] my-2'>Course Name</h2>
                    <ul>
                        {
                            courses.map((course, idx) => <li className='text-[#1C1B1B99] space-y-1' key={idx}>{idx + 1} {course.course_name}</li>)
                        }
                    </ul>
                </div>
                <hr />
                <h4 className='text-[16px] font-medium'>Total Credit Hour : {credit}</h4>
                <hr />
                <h3 className='font-semibold text-xl'>Total Price : {price} USD</h3>
            </div>
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.array.isRequired,
    price: PropTypes.number,
    credit: PropTypes.number,
    creditRemain: PropTypes.number
};

export default Cart;