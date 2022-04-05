import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



const CarouselHeader = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ height: "600px" }}
                    src="https://i.ibb.co/f1WVvTP/pexels-karolina-grabowska-4239091.jpg"
                    alt="First slide"
                />
                <Carousel.Caption style={{ marginTop: "30px" }}>
                    <h3 style={{ color: 'black', fontSize: '50px' }}>What is the composition of glass cleaner?</h3>
                    <p style={{ color: 'blue', fontSize: '20px' }}>
                        Also called rubbing alcohol, isopropanol or dimethyl carbinol, isopropyl alcohol is a key ingredient in glass cleaners, according to experts at Iowa State University.Isopropyl alcohol evaporates quickly and dissolves oil or grease on contact..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ height: "600px" }}
                    src="https://i.ibb.co/c3zgS03/pexels-mark-mccammon-2724749.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: 'black', fontSize: '50px' }}>Kitchen storage is so important?</h3>
                    <p style={{ color: 'green', fontSize: '20px' }}>
                        Kitchen storage is so important. Try to clear out your kitchen items before adding a new countertop. There is no reason to create a beautiful space with.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ height: "600px" }}
                    src="https://i.ibb.co/Y00ScQr/pexels-cadeau-maestro-1170412.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: 'black', fontSize: '50px' }}>Why Cleaning Is So Important ?</h3>
                    <p style={{ color: 'blue', fontSize: '20px' }}>Cleaning eliminates germs along with dirt and dust, resulting in better indoor air quality, leaving a whiff of freshness in its wake. The kitchen and bathroom usually require special attention, as they are known to be one of the germiest places in any house</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselHeader;