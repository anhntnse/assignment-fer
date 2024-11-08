import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import laptop1 from '../images/laptop1.jpg'
import laptop2 from '../images/laptop2.jpg'
import laptop3 from '../images/laptop3.png'
import laptop4 from '../images/laptop4.png'
const BestSelling = ({ showAllProducts }) => {
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
      image: laptop2,
      discountPrice: 950,
      originalPrice: 1200,
      rating: 5,
      discount: 35,
    },
    {
      id: 3,
      name: 'Razer Blade 15',
      image: laptop3,
      discountPrice: 2200,
      originalPrice: 2500,
      rating: 4,
      discount: 15,
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      image: laptop4,
      discountPrice: 1000,
      originalPrice: 1200,
      rating: 5,
      discount: 20,
    },
    {
      id: 5,
      name: 'HAVIT HV-G92 Gamepad',
      image: laptop1,
      discountPrice: 120,
      originalPrice: 160,
      rating: 4,
      discount: 40,
    },
    {
      id: 5,
      name: 'MacBook Pro',
      image: laptop2,
      discountPrice: 1800,
      originalPrice: 2000,
      rating: 5,
      discount: 10,
    },
    {
      id: 6,
      name: 'Asus ROG Strix',
      image: laptop3,
      discountPrice: 1500,
      originalPrice: 1700,
      rating: 4,
      discount: 12,
    },
    {
      id: 7,
      name: 'HP Spectre x360',
      image: laptop4,
      discountPrice: 1300,
      originalPrice: 1500,
      rating: 4,
      discount: 13,
    },
    {
      id: 8,
      name: 'Lenovo ThinkPad X1',
      image: laptop2,
      discountPrice: 1400,
      originalPrice: 1600,
      rating: 5,
      discount: 12,
    }
  ];

  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate('/product-details');
  // }

  const displayedProducts = showAllProducts ? products : products.slice(0, 4);

  return (
    <div>
      <Row>
        {displayedProducts.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
            <Product
              image={product.image}
              name={product.name}
              discountPrice={product.discountPrice}
              originalPrice={product.originalPrice}
              rating={product.rating}
              discount={product.discount}
            // navigateCalb={handleNavigate}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BestSelling;
