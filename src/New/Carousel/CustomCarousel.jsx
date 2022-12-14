import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const CustomCarousel = () => {
    const carouselSelector = useSelector(state => state.CarouselReducer);
    console.log(carouselSelector);
    return (
        <div>
            <Carousel>
                {/* {carouselSelector.map((item, index) => {
                    return (
                        <Carousel.Item>
                        <img>
                          className="d-block w-100"
                          src={item.carImage}
                          alt="First slide"
                          height={"500px"}
                                width={"100%"}
                                </img>
                        
                        <Carousel.Caption>
                                <h3 style={{ color: "black" }}>{item.carTitle}</h3>
                                <p style={{ color: "black" }}>{item.carDesc}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )
                })} */}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;