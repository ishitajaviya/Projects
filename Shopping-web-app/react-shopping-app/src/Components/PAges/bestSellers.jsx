import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Slices/CartSlice';
import { products } from '../../assets/assets'
import { addToWishlist } from '../Slices/WishListSlice';

const BestSeller = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleAddToCart = (product) => {
    if (user) {
      dispatch(addToCart({ userId: user, product }));
      alert(`${product.name} added to cart!`);
    } else {
      alert('Please log in to add products to the cart');
    }
  };

  const handleAddToWishlist = (product) => {
    if (user) {
      dispatch(addToWishlist({ userId: user, product }));
      alert(`${product.name} added to wishlist!`);
    } else {
      alert('Please log in to add products to the wishlist');
    }
  };

  // Display only the first 5 products
  const bestSellingProducts = products.slice(0, 5);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {bestSellingProducts.length > 0 ? (
            bestSellingProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={product._id}>
                <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2 }}>
                  <img src={product.image[0]} alt={product.name} width="100%" />
                  <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2">${product.price}</Typography>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: 2, ml: 1 }}
                    onClick={() => handleAddToWishlist(product)}
                  >
                    Add to Wishlist
                  </Button>
                </Box>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" sx={{ m: 2 }}>
              No products found
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default BestSeller;
