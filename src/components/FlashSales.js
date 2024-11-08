import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import laptop1 from '../images/laptop1.jpg'
import laptop2 from '../images/laptop2.jpg'
import laptop3 from '../images/laptop3.png'
import laptop4 from '../images/laptop4.png'
const FlashSales = ({ fetchData, showAll }) => {
  const products = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      image: laptop1,
      discountPrice: 120,
      originalPrice: 160,
      rating: 4,
      discount: 40,
    },
    {
      id: 2,
      name: 'Acer Nitro 5',
      image: laptop1,
      discountPrice: 950,
      originalPrice: 1200,
      rating: 5,
      discount: 35,
    },
    {
      id: 3,
      name: 'Razer Blade 15',
      image: laptop1,
      discountPrice: 2200,
      originalPrice: 2500,
      rating: 4,
      discount: 15,
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      image: laptop1,
      discountPrice: 1000,
      originalPrice: 1200,
      rating: 5,
      discount: 20,
    },
    {
      id: 5,
      name: 'MacBook Pro 16',
      image: laptop1,
      discountPrice: 2400,
      originalPrice: 2800,
      rating: 5,
      discount: 14,
    },
    {
      id: 6,
      name: 'HP Spectre x360',
      image: laptop2,
      discountPrice: 1500,
      originalPrice: 1700,
      rating: 4,
      discount: 12,
    },
    {
      id: 7,
      name: 'Asus ROG Zephyrus',
      image: laptop3,
      discountPrice: 1800,
      originalPrice: 2000,
      rating: 4,
      discount: 10,
    },
    {
      id: 8,
      name: 'Asus ROG Zephyrus',
      image: laptop3,
      discountPrice: 1800,
      originalPrice: 2000,
      rating: 4,
      discount: 10,
    },
    {
      id: 9,
      name: 'Asus ROG Zephyrus',
      image: laptop3,
      discountPrice: 1800,
      originalPrice: 2000,
      rating: 4,
      discount: 10,
    },
    {
      id: 10,
      name: 'Razer Blade 15',
      image: laptop3,
      discountPrice: 2200,
      originalPrice: 2500,
      rating: 4,
      discount: 15,
    },
  ];

  console.log('fetchData', fetchData);
  const displayedProducts = showAll ? fetchData : fetchData.slice(0, 4);

  return (
    <div>
      <Row>
        {displayedProducts.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
            <Product
              image={product.imageUrls[0]}
              name={product.productName}
              discountPrice={product.price}
              originalPrice={1200}
              rating={5}
              discount={40}
              productId={product.id}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FlashSales;
