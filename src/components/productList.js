import React from 'react';
import './productList.css';
import Product from './product';
// Be sure to uncomment this line before trying to use the Product component!
// import Product from './product'

function ProductList(props) {
  return (
    <div className="ProductList">
      {props.inventory.map(item => 
        <Product name = {item.name} 
                 price = {item.price}
        />) 
      }
    </div>
  );
}

export default ProductList;
