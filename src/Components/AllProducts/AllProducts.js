import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./AllProducts.css"
const AllProducts = ({setCartIncrease}) => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>setProducts(data))
    },[])
    console.log(products);
    return (
        <div className='mt-4'>
            <h1 className='my-4'>All Products</h1>
           <div className="row container w-100 mx-auto">
           {
                products.map((pd)=>(
                    <SingleProduct key={pd.id} product={pd} setCartIncrease={setCartIncrease}></SingleProduct>
                ))
            }
           </div>
            
        </div>
    );
};

export default AllProducts;