import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className=' bg-dark '>
            <div className="container text-white p-4 mt-4">
                <p>Copyright &copy; 2022. All rights reserved</p>
                <p className='text-danger fs-5'>Developed by Habib Ullah</p>
            </div>
        </div>
    );
};

export default Footer;