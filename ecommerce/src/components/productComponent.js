import React from 'react'
import {useSelector} from 'react-redux';
import ProductCard from './productCard';
import './component.css';
function ProductComponent() {
  const products = useSelector(state => state.products.products);
  return (
    <div className='gridmaker'>
      {products.map(product => (
       <ProductCard className='card'  {...product} />
    ))}
    </div>
  )
}

export default ProductComponent;