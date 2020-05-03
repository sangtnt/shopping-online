import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap'
function SellSlider ({props}){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel interval={1000} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../images/img1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../images/img2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../images/img3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
export default SellSlider;