import React from 'react';
import "./Navbar.css"
const Navbar = ({count}) => {
    return (
        <div>
           <div className="container">
            <div className="row my-3 py-3">
                <div className="col-md-2 fs-3 p-2 d-flex justify-content-start mt-1 text-danger fw-bold">Logo</div>
                <div className="col-md-10 menu-container d-flex justify-content-end">
                    <li className='me-4 fs-3 px-3 py-1 bg-primary text-white mt-1 border rounded'>Home</li>
                    <li className='me-4 fs-3 px-3 py-1 bg-primary text-white mt-1 border rounded'>Contact Us</li>
                    <li className='me-4 fs-3 px-3 py-1 bg-primary text-white mt-1 border rounded'>Cart <sup>{count}</sup></li>
                    <li className='me-4 fs-3 px-3 py-1 bg-primary text-white mt-1 border rounded'>Login</li>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Navbar;