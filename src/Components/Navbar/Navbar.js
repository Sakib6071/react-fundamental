import React from 'react';
import "./Navbar.css"
const Navbar = ({count}) => {
    return (
        <div>
           <div className="container">
            <div className="row">
                <div className="col-md-2 fs-3 p-2 d-flex justify-content-start">Logo</div>
                <div className="col-md-10 menu-container d-flex justify-content-end">
                    <li className='me-4 fs-3 p-2'>Home</li>
                    <li className='me-4 fs-3 p-2'>Contact Us</li>
                    <li className='me-4 fs-3 p-2'>Cart <sup>{count}</sup></li>
                    <li className='me-4 fs-3 p-2'>Login</li>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Navbar;