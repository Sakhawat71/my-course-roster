// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'



function App() {

    // const [cart,setCart] = useState([]);
    const [price ,setPrice] = useState(0);

    const handelSelect = (courseTitel) =>{
        console.log('clicked',courseTitel)
    }
    const sumOfPrice = (getPrice) => {
        const newPrice = price + getPrice;
        setPrice(newPrice);
    }
    console.log(price);
    return (
        <>
            <Header></Header>
            <div className='md:flex max-w-7xl mx-auto md:mx-10 gap-5'>
                <Courses 
                handelSelect={handelSelect}
                sumOfPrice={sumOfPrice}
                ></Courses>
                <Cart price={price}></Cart>
            </div>
        </>
    )
}

export default App
