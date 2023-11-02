import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'



function App() {

    // const [hrRemain ,setHrRemain] = useState(20);
    // const [courseNames,setCourseNames] = useState([]);
    const [price, setPrice] = useState(0);
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handelSelect = (course) => {
        const isExist = selectedCourses.find(item => item.id === course.id);
        console.log(course.price)
        let totalPrice = course.price;

        if (isExist) {
            return alert('exist');
        }
        else {
            setSelectedCourses([...selectedCourses, course]);
        }
        selectedCourses.forEach(item => {
            totalPrice += item.price;
        })
        setPrice(totalPrice)
    }






    return (
        <>
            <Header></Header>
            <div className='md:flex max-w-7xl mx-auto md:mx-10 gap-5 mb-20'>

                <Courses
                    handelSelect={handelSelect}

                ></Courses>


                <Cart
                    courses={selectedCourses}
                    price={price}
                ></Cart>

            </div>
        </>
    )
}

export default App
