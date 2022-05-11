import React from 'react';
import './Testimonial.css';

const Testimonial = ({ testimonial }) => {
    const { name, comment, img } = testimonial;

    return (
        <div className='testimonial-container'>
            <img src={img} alt="" />
            <div>
                <p><strong><i>{comment}</i></strong></p>
                <p>-{name}</p>
            </div>
        </div>
    );
};

export default Testimonial;