import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'



function App() {

    const [creditRemain, setCreditRemain] = useState(20);
    const [credit, setCredit] = useState(0);
    const [price, setPrice] = useState(0);
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handelSelect = (course) => {
        // setCredit(course.credit)
        const isExist = selectedCourses.find(item => item.id === course.id);
        console.log(course.credit, 'clicked totalCredit')
        
        let totalPrice = course.price;
        let totalCredit = course.credit;

        if (isExist ) {
            return alert('exist');
        }
        else {
            
            selectedCourses.forEach(item => {
                totalPrice += item.price;
                totalCredit = totalCredit + item.credit;
                console.log(course.credit, 'inside foreach')
            })
            if (totalCredit > 20) {
                return alert("you can not take more then 20 credit");
            }
            else {
                setPrice(totalPrice)
                setCredit(totalCredit)
                setCreditRemain(20 - totalCredit)
            }

            setSelectedCourses([...selectedCourses, course]);
            
        }
        
        console.log(totalCredit, 'totalc')
    }
    console.log(credit,'state')
    





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

            </div>
        </>
    )
}

export default App
