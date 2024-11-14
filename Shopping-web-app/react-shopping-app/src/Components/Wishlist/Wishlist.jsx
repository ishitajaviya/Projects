import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Grid, Button } from '@mui/material';
import { removeFromWishlist, loadUserWishlist } from '../Slices/WishListSlice';
import { addToCart } from '../Slices/CartSlice'; 
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import Header from '../Header/Header';

const Wishlist = () => {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user.user);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  useEffect(() => {
    if (user) {
      dispatch(loadUserWishlist(user)); 
    }
  }, [user, dispatch]);

  const handleRemove = (productId) => {
    if (user) {
      dispatch(removeFromWishlist({ userId: user, productId }));
    }
  };

  const handleMoveToCart = (product) => {
    if (user) {
      dispatch(addToCart({ userId: user, product }));
      dispatch(removeFromWishlist({ userId: user, productId: product._id }));
      alert(`${product.name} moved to cart!`);
    } else {
      alert('Please log in to move products to the cart');
    }
  };
  if (!user) {
    return <p>Please log in to view your wishlist.</p>;
  }

  return (
    <>
    <Header/>
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Your Wishlist
      </Typography>
      {wishlistItems.length === 0 ? (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Your wishlist is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {wishlistItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={item._id}>
              <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2 }}>
                {item.image && item.image.length > 0 ? (
                  <img src={item.image[0]} alt={item.name} width="100%" />
                ) : (
                  <Typography variant="body2">No Image Available</Typography> 
                )}
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2">${item.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ShoppingCartIcon />}
                  sx={{ mt: 2, mr: 2 }}
                  onClick={() => handleMoveToCart(item)}
                >
                  Move to Cart
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  sx={{ mt: 2 }}
                  onClick={() => handleRemove(item._id)}
                >
                  Remove from Wishlist
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
    </>
  );
};

export default Wishlist;
