import axios from 'axios';
import React, { useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import {selectedProduct} from '../redux/Actions/productsActions'
function ProductDetails() {

  const {productID} = useParams();
  const product = useSelector(state => state.eachProduct);
  const dispatch = useDispatch();
  console.log(product);

  
  const fetchProductDetails = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/1`);  
    // const res = await axios.get(`https://fakestoreapi.com/products/${id}}`);  
    // console.log(res.data);
    dispatch(selectedProduct(res.data));
  }
  
  useEffect(() => {
    // if(productID && product.id !== ""){
      fetchProductDetails("productID");
    // }
  },[]);
  useEffect(() => {console.log(product);} , [product]);
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  )
}

export default ProductDetails;