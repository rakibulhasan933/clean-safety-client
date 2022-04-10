import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';



const CarouselHeader = () => {
    return (
        <Container>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: "600px", opacity: '0.5' }}
                        src="https://i.ibb.co/f1WVvTP/pexels-karolina-grabowska-4239091.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ marginTop: "30px" }}>
                        <h3 style={{ color: 'black' }} className='fs-1 fw-bold font-monospace info'>What is the composition of glass cleaner?</h3>
                        <p style={{ color: 'black' }} className='fw-lighter fw-bold'>
                            Also called rubbing alcohol, isopropanol or dimethyl carbinol, isopropyl alcohol is a key ingredient in glass cleaners, according to experts at Iowa State University.Isopropyl alcohol evaporates quickly and dissolves oil or grease on contact..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: "600px", opacity: '0.5' }}
                        src="https://i.ibb.co/c3zgS03/pexels-mark-mccammon-2724749.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fs-1 fw-bold font-monospace' style={{ color: 'black' }}>Kitchen storage is so important?</h3>
                        <p className='fw-lighter fw-bold' style={{ color: 'black' }}>
                            Kitchen storage is so important. Try to clear out your kitchen items before adding a new countertop. There is no reason to create a beautiful space with.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: "600px", opacity: '0.5' }}
                        src="https://i.ibb.co/Y00ScQr/pexels-cadeau-maestro-1170412.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fs-1 fw-bold font-monospace' style={{ color: 'black' }}>Why Cleaning Is So Important ?</h3>
                        <p className='fw-lighter fw-bold' style={{ color: 'black' }}>Cleaning eliminates germs along with dirt and dust, resulting in better indoor air quality, leaving a whiff of freshness in its wake. The kitchen and bathroom usually require special attention, as they are known to be one of the germiest places in any house</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default CarouselHeader;