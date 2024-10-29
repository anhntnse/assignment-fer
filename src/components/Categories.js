import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Category = () => {
  const categories = [
    'APPLE',
    'LENOVO',
    'HP',
    'DELL',
    'ACER',
    'MSI',
    'MICROSOFT',
    'GIGABYTE',
    'VAIO'
  ];

  return (
    <div className="category">
      <ListGroup variant="flush">
        {categories.map((category, index) => (
          <ListGroup.Item key={index} action href={`#${category.toLowerCase()}`}>
            {category}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Category;
