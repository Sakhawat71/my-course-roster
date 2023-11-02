import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'



function App() {

    const [courseNames,setCourseNames] = useState([]);
    const [credit,setCredit] = useState(0);
    const [price ,setPrice] = useState(0);

    const handelSelect = (courseTitel,courseCredit) =>{
        const allCourseName= [...courseNames,courseTitel]
        setCourseNames(allCourseName);
        
        const newCredit = credit + courseCredit;
        setCredit(newCredit)
    }
    const sumOfPrice = (getPrice) => {
        const newPrice = price + getPrice;
        setPrice(newPrice);
    }
    
    
    // console.log(price);


    return (
        <>
            <Header></Header>
            <div className='md:flex max-w-7xl mx-auto md:mx-10 gap-5'>
                
                <Courses 
                handelSelect={handelSelect}
                sumOfPrice={sumOfPrice}
                ></Courses>


                <Cart 
                price={price}
                courseNames={courseNames}
                credit={credit}
                ></Cart>

            </div>
        </>
    )
}

export default App
