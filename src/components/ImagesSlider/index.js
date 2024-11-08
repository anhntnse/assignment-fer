import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Carousel } from "react-bootstrap";
import './ImagesSlider.scss';
const image2 = 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png';


function ImagesSlider(
    {
        data,
    }
) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const indicators = document.getElementsByClassName('carousel-indicators').item(0);
        const indicatorsbutton = indicators.children;
        for (let i = 0; i < indicatorsbutton.length; i++) {
            indicatorsbutton.item(i).innerHTML = `<img src=${data?.imageUrls[i]} />`
        }

        console.log(indicatorsbutton);
    }, []);

    console.log('data', data);

    return (
        <Carousel className="custom-carousel" activeIndex={index} onSelect={handleSelect}>
            {data && data?.imageUrls.map(item => {
                return (
                    <Carousel.Item className="custom-carousel-item">
                        <img src={item} text="First slide" />
                    </Carousel.Item>
                )
            })}

        </Carousel>
    )
}

export default ImagesSlider;