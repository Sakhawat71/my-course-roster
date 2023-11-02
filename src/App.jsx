import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const [creditRemain, setCreditRemain] = useState(20);
    const [credit, setCredit] = useState(0);
    const [price, setPrice] = useState(0);
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handelSelect = (course) => {

        const isExist = selectedCourses.find(item => item.id === course.id);

        let totalPrice = course.price;
        let totalCredit = course.credit;

        if (isExist) {
            toast.warn('This course exists!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        else {

            selectedCourses.forEach(item => {
                totalPrice += item.price;
                totalCredit = totalCredit + item.credit;
            })
            if (totalCredit > 20) {
                toast.warn("😢 Limited to 20 credits!",{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }
            else {
                setPrice(totalPrice)
                setCredit(totalCredit)
                setCreditRemain(20 - totalCredit)
            }

            setSelectedCourses([...selectedCourses, course]);

        }

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
                    credit={credit}
                    creditRemain={creditRemain}
                ></Cart>
                <ToastContainer></ToastContainer>
            </div>
        </>
    )
}

export default App
