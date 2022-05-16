import React from 'react'
import ProductComponent from './productComponent';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/Actions/productsActions';
function ProductListing() {
  const dispatch = useDispatch();
  const [called, setCalled] = React.useState(false);
  const fetchProducts = async() => {
    const resp = await axios.get('https://fakestoreapi.com/products');
    if(resp.status === 200) {
      dispatch(setProducts(resp.data));
    }
  }

  React.useEffect(() => {
    fetchProducts();
  } , [called]);

  return (
    <div>
        <h1>Product Listing</h1>
        <div className='ui grid container'>
          <ProductComponent />
        </div>
    </div>
  )
}

export default ProductListing;