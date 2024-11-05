import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Carousel } from "react-bootstrap";
import './ImagesSlider.scss';
const image2 = 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png';


function ImagesSlider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const indicators = document.getElementsByClassName('carousel-indicators').item(0);
        const indicatorsbutton = indicators.children;
        for (let i = 0; i < indicatorsbutton.length; i++) {
            indicatorsbutton.item(i).innerHTML = `<img src=${image2}/>`
        }
        console.log(indicatorsbutton);
    }, []);

    return (
        <Carousel className="custom-carousel" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="custom-carousel-item">
                <img src={image2} text="First slide" />
            </Carousel.Item>
            <Carousel.Item className="custom-carousel-item">
                <img src={image2} text="Second slide" />
            </Carousel.Item>
            <Carousel.Item className="custom-carousel-item">
                <img src={image2} text="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="custom-carousel-item">
                <img src={image2} text="Third slide" />
            </Carousel.Item>
        </Carousel>
    )
}

export default ImagesSlider;