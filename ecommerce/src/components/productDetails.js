import axios from 'axios';
import React, { useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import {selectedProduct , removeSelectedProduct} from '../redux/Actions/productsActions'
import './productDetails.css';

function ProductDetails() {

  const {id} = useParams();
  var product = useSelector(state => state.eachProduct);
  const dispatch = useDispatch();
  const { image, title, price, category, description } = product;
  const fetchProductDetails = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err => console.log(err));  
    console.log(res.data);
    dispatch(selectedProduct(res.data));
  }
  
  useEffect(() => {
    if (id && id !== "") fetchProductDetails(id);
        return () => {
            dispatch(removeSelectedProduct());
        };
  },[id]);
  
  return (
    <div>
        <div className="container">
            <div class="image-container">
                <img src={image} alt="Product Image" />
            </div>
            <div class="product-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails;