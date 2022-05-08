import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import bannar1 from '../../images/bannar1.jpg';
import bannar2 from '../../images/bannar2.jpg';
import bannar3 from '../../images/bannar3.jpg';
const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={bannar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>jhon will guide you to the fittest</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>take healthy food and excercise</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>build your muscle</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;