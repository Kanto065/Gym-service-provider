import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service-card'>
            <img src={img} alt="" />
            <div className='info-container'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <button className='book-btn'><strong>Book </strong>{name}</button>
            </div>
        </div>
    );
};

export default Service;