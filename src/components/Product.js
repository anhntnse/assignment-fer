import React from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart, FaEye, FaStar } from 'react-icons/fa'; // For icons
import { useNavigate, Link } from 'react-router-dom';

const Product = ({ image, name, discountPrice, originalPrice, rating, discount }) => {
  return (
    // <Card className="product-card border-0" onClick={navigateCalb}>
    <Link to='product-details' style={{ color: 'inherit', textDecoration: 'none' }}>
      <Card className="product-card border-0">
        <Card.Header className="text-danger bg-white border-0">
          {discount && <span className="badge bg-danger">-{discount}%</span>}
        </Card.Header>
        {/* Add gray background to the image container */}
        <div className="image-container bg-light">
          <Card.Img variant="top" src={image} alt={name} className="p-3" />
        </div>
        <Card.Body>
          <Card.Title className="product-title">{name}</Card.Title>
          <Card.Text>
            <span className="text-danger fs-5">${discountPrice}</span>{' '}
            <del className="text-muted">${originalPrice}</del>
          </Card.Text>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} className={index < rating ? 'text-warning' : 'text-muted'} />
            ))}{' '}
            <span>({rating})</span>
          </div>
          <div className="product-icons d-flex justify-content-between mt-3">
            <FaHeart className="icon" /> <FaEye className="icon" />
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Product;
