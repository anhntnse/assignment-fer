import React, { useState, useRef } from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import '../styles/categories.css';

const Category = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 220 }); // Default position
  const categoryRef = useRef(null);

  const categories = ['APPLE', 'LENOVO', 'HP', 'DELL', 'ACER', 'MSI', 'MICROSOFT', 'GIGABYTE', 'VAIO'];

  const products = [
    { id: 1, name: 'MacBook Pro', brand: 'APPLE', price: 1299 },
    { id: 2, name: 'iPhone 14', brand: 'APPLE', price: 999 },
    { id: 3, name: 'ThinkPad X1', brand: 'LENOVO', price: 1399 },
    { id: 4, name: 'Pavilion', brand: 'HP', price: 799 },
    { id: 5, name: 'Inspiron', brand: 'DELL', price: 699 },
    { id: 6, name: 'Aspire 5', brand: 'ACER', price: 499 },
    { id: 7, name: 'GF65 Thin', brand: 'MSI', price: 899 },
    { id: 8, name: 'Surface Pro 7', brand: 'MICROSOFT', price: 999 },
    { id: 9, name: 'AERO 15', brand: 'GIGABYTE', price: 1499 },
    { id: 10, name: 'VAIO Z', brand: 'VAIO', price: 1199 },
  ];

  const handleMouseEnter = (category, event) => {
    setHoveredCategory(category);

    // Calculate position for the product list based on the hovered item
    const rect = event.target.getBoundingClientRect();
    setPosition({
      top: rect.top - categoryRef.current.getBoundingClientRect().top,
      left: rect.width-40, // 10px offset from the category list
    });
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const filteredProducts = products.filter((product) => product.brand === hoveredCategory);

  return (
    <div className="category-container" ref={categoryRef} onMouseLeave={handleMouseLeave}>
      <div className="category-list">
        <h4>Categories</h4>
        <ListGroup variant="flush">
          {categories.map((category, index) => (
            <ListGroup.Item
              key={index}
              onMouseEnter={(event) => handleMouseEnter(category, event)}
              className={hoveredCategory === category ? 'active-category' : ''}
            >
              {category}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {hoveredCategory && (
        <div className="product-list" style={{ top: position.top, left: position.left }}>
          <h4>{hoveredCategory} Products</h4>
          <div className="row">
            {filteredProducts.map((product) => (
              <Card className="product-card-brand" key={product.id}>
                <Card.Body>
                  <Card.Title style={{fontSize: "15px"}}>{product.name}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
