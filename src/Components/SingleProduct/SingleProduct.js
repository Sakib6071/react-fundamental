import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'
const SingleProduct = (props) => {
    const {image}=props.product;
    return (
        
        <div 
        data-aos="flip-left"
        
         className='col-md-4'>
            <div className="card p-3 border border-primary m-2">
                <img className='w-50 m-auto' src={image} alt="product" />
            <h1>{props.product.title.slice(0,10)}</h1>
            <div className='d-flex justify-content-around'>
            <div onClick={props.setCartIncrease} className="btn btn-success m-1">Add To Cart</div>
            <div className="btn btn-danger m-1">Remove</div>
            <ReactModal product={props.product}></ReactModal>
            </div>
            </div>
        </div>
            
       
    );
};

export default SingleProduct;