import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'



function App() {
    
    const [hrRemain ,setHrRemain] = useState(20);
    const [courseNames,setCourseNames] = useState([]);
    const [credit,setCredit] = useState(0);
    const [price ,setPrice] = useState(0);

    const handelSelect = (courseTitel,creditHr) =>{
        const allCourseName= [...courseNames,courseTitel]
        setCourseNames(allCourseName);
        
        const newCredit = credit + creditHr;
        setCredit(newCredit)

        const newHr = hrRemain - creditHr;
        setHrRemain(newHr);
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
                hrRemain={hrRemain}
                ></Cart>

            </div>
        </>
    )
}

export default App
