import React from 'react';
import CardItem from './CardItem';

function ProductList({  products, products1 }) {
  return (
    <div className="container mt-5 ">

        
        <div className='d-flex justify-content-between'> 
      <h2 className="menu-title ">WishList</h2>
      <button className='rounded bg-white p-02'>Move All To Bag</button>
      </div>
      <div className="card-group mt-4">
        {products && products.map((item) => (
          <CardItem item={item} key={item.id} /> // Sử dụng id duy nhất
        ))}
      </div>



      <div className='d-flex justify-content-between'> 
      <h2 className="menu-title ">Just For You</h2>
      <button className='rounded bg-white p-02'>See All</button>
      </div>
      <div className="card-group mt-4">
        {products1 && products1.map((item) => (
          <CardItem item={item} key={item.id} /> // Sử dụng id duy nhất
        ))}
      </div>


    </div>
    
  );
}

export default ProductList;