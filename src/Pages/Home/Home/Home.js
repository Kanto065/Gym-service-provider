import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import Services from '../Services/Services';
import Testimonials from '../Tesimonials/Testimonials';
const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/fCMzj75/bannar1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>jhon will guide you to the fittest</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Sy1CyKX/bannar2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>take healthy food and excercise</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/GkZcJVN/bannar3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>build your muscle</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Services></Services>

            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;