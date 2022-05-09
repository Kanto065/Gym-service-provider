import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h6 className='footer-title'>muscle rehab with jhon</h6>
            &copy;
            <p>copyright {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;