import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import AllProducts from './Components/AllProducts/AllProducts';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
  const [count,setCount]=useState(0)
  const setCartIncrease = () =>{
    setCount(count+1)
  }


  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <div className="App">
     <Navbar count={count}></Navbar>
     <AllProducts setCartIncrease={setCartIncrease}></AllProducts>
     
    </div>
  );
}

export default App;
