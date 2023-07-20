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
                        src="https://i.ibb.co/KzXCVBX/bannar2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>jhon will guide you to the fittest</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pZDJJ06/bannar3.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>take healthy food and excercise</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/B2BbyPP/bannar1.jpg"
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