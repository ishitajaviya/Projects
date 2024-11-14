import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../assets/assets'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Slices/CartSlice'
import Header from '../Header/Header';
const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const product = products.find((prod) => prod._id === id);

  const handleAddToCart = () => {
    if (user) {
      dispatch(addToCart({ userId: user, product }));
    } else {
      alert('Please log in to add products to the cart');
    }
  };

  return (
    <> 
    <Header/>  
     <div> 
      <h2>{product.name}</h2>
      <img src={product.image[0]} alt={product.name} width={300} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
    </>

  );
};

export default ProductPage;
