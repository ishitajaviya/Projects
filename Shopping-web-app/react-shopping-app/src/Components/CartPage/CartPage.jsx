// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { incrementQuantity, decrementQuantity, removeFromCart, calculateSubtotal } from '../Slices/CartSlice';
// import Header from '../Header/Header';
// import { Box, Typography, Button, Grid } from '@mui/material';

// const CartPage = () => {
//   const user = useSelector((state) => state.user.user);
//   const carts = useSelector((state) => state.cart.carts);
//   const subtotals = useSelector((state) => state.cart.subtotals);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (user) {
//       dispatch(calculateSubtotal(user));
//     }
//   }, [carts, dispatch, user]);

//   if (!user) {
//     return <Typography variant="h6">Please log in to view your cart</Typography>;
//   }

//   const userCart = carts[user] || [];

//   const handleIncrement = (productId) => {
//     dispatch(incrementQuantity({ userId: user, productId }));
//   };

//   const handleDecrement = (productId) => {
//     dispatch(decrementQuantity({ userId: user, productId }));
//   };

//   const handleRemoveFromCart = (productId) => {
//     dispatch(removeFromCart({ userId: user, productId }));
//   };

//   return (
//     <>
//     <Header/>
//       <Box sx={{ p: 3 }}>
//         <Typography variant="h4" gutterBottom>
//           Your Cart
//         </Typography>
        
//         {userCart.length === 0 ? (
//           <Typography variant="h6">Your cart is empty</Typography>
//         ) : (
//           <Grid container spacing={3}>
//             {userCart.map((product, index) => (
//               <Grid item xs={12} key={index}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     border: '1px solid #ccc',
//                     padding: 2,
//                     borderRadius: 2,
//                   }}
//                 >
//                   <img
//                     src={product.image[0]} 
//                     alt={product.name}
//                     width="100" 
//                     height="100"
//                     style={{ objectFit: 'contain', marginRight: '16px' }}
//                   />
//                   <Box sx={{ flexGrow: 1 }}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       {product.name}
//                     </Typography>
//                     <Typography variant="body2">${product.price} x {product.quantity} </Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleIncrement(product._id)}
//                       sx={{ minWidth: '40px' }}
//                     >
//                       +
//                     </Button>
//                     <Typography sx={{ mx: 2 }}>{product.quantity}</Typography>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleDecrement(product._id)}
//                       sx={{ minWidth: '40px' }}
//                       disabled={product.quantity === 1}>
//                       -
//                     </Button>
//                   </Box>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     onClick={() => handleRemoveFromCart(product._id)}
//                   >
//                     Remove
//                   </Button>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         )}

//         {/* Subtotal */}
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h5">
//             Subtotal: ${subtotals[user] || 0}
//           </Typography>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default CartPage;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { incrementQuantity, decrementQuantity, removeFromCart, calculateSubtotal } from '../Slices/CartSlice';
// import Header from '../Header/Header';
// import { Box, Typography, Button, Grid } from '@mui/material';

// const CartPage = () => {
//   const user = useSelector((state) => state.user.user);
//   const carts = useSelector((state) => state.cart.carts);
//   const subtotals = useSelector((state) => state.cart.subtotals);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (user) {
//       dispatch(calculateSubtotal(user));
//     }
//   }, [carts, dispatch, user]);

//   if (!user) {
//     return <Typography variant="h6">Please log in to view your cart</Typography>;
//   }

//   const userCart = carts[user] || [];

//   const handleIncrement = (productId) => {
//     dispatch(incrementQuantity({ userId: user, productId }));
//   };

//   const handleDecrement = (productId) => {
//     dispatch(decrementQuantity({ userId: user, productId }));
//   };

//   const handleRemoveFromCart = (productId) => {
//     dispatch(removeFromCart({ userId: user, productId }));
//   };

//   return (
//     <>
//       <Header />
//       <Box sx={{ p: 3 }}>
//         <Typography variant="h4" gutterBottom>
//           Your Cart
//         </Typography>

//         {userCart.length === 0 ? (
//           <Typography variant="h6">Your cart is empty</Typography>
//         ) : (
//           <Grid container spacing={3}>
//             {userCart.map((product, index) => {
//               // Debugging: log product data to check the structure
//               console.log('Cart Product:', product); // Check if image exists and how it's structured

//               return (
//                 <Grid item xs={12} key={index}>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       border: '1px solid #ccc',
//                       padding: 2,
//                       borderRadius: 2,
//                     }}
//                   >
//                     {/* Use fallback for missing image URLs */}
//                     <img
//                       src={product.image ? (Array.isArray(product.image) ? product.image[0] : product.image) : 'https://via.placeholder.com/100'}
//                       alt={product.name}
//                       width="100"
//                       height="100"
//                       style={{ objectFit: 'contain', marginRight: '16px' }}
//                     />
//                     <Box sx={{ flexGrow: 1 }}>
//                       <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                         {product.name}
//                       </Typography>
//                       <Typography variant="body2">${product.price} x {product.quantity}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleIncrement(product._id)}
//                         sx={{ minWidth: '40px' }}
//                       >
//                         +
//                       </Button>
//                       <Typography sx={{ mx: 2 }}>{product.quantity}</Typography>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleDecrement(product._id)}
//                         sx={{ minWidth: '40px' }}
//                         disabled={product.quantity === 1}
//                       >
//                         -
//                       </Button>
//                     </Box>
//                     <Button
//                       variant="outlined"
//                       color="secondary"
//                       onClick={() => handleRemoveFromCart(product._id)}
//                     >
//                       Remove
//                     </Button>
//                   </Box>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         )}

//         {/* Subtotal */}
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h5">Subtotal: ${subtotals[user] || 0}</Typography>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default CartPage;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart, calculateSubtotal } from '../Slices/CartSlice';
import Header from '../Header/Header';
import { Box, Typography, Button, Grid } from '@mui/material';

const CartPage = () => {
  const user = useSelector((state) => state.user.user);
  const carts = useSelector((state) => state.cart.carts);
  const subtotals = useSelector((state) => state.cart.subtotals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(calculateSubtotal(user)); // Recalculate subtotal when cart changes
    }
  }, [carts, dispatch, user]);

  if (!user) {
    return <Typography variant="h6">Please log in to view your cart</Typography>;
  }

  const userCart = carts[user] || [];

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity({ userId: user, productId }));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity({ userId: user, productId }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ userId: user, productId }));
  };

  return (
    <>
      <Header />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>

        {userCart.length === 0 ? (
          <Typography variant="h6">Your cart is empty</Typography>
        ) : (
          <Grid container spacing={3}>
            {userCart.map((product, index) => {
              console.log('Cart Product:', product); // Log to check product structure

              return (
                <Grid item xs={12} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #ccc',
                      padding: 2,
                      borderRadius: 2,
                    }}
                  >
                    {/* Render product image with fallback */}
                    <img
                      src={product.image ? (Array.isArray(product.image) ? product.image[0] : product.image) : 'https://via.placeholder.com/100'}
                      alt={product.name}
                      width="100"
                      height="100"
                      style={{ objectFit: 'contain', marginRight: '16px' }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {product.name}
                      </Typography>
                      {/* Display product newPrice and quantity */}
                      <Typography variant="body2">
                        New Price: ${product.newPrice} x {product.quantity}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleIncrement(product._id)}
                        sx={{ minWidth: '40px' }}
                      >
                        +
                      </Button>
                      <Typography sx={{ mx: 2 }}>{product.quantity}</Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleDecrement(product._id)}
                        sx={{ minWidth: '40px' }}
                        disabled={product.quantity === 1}
                      >
                        -
                      </Button>
                    </Box>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveFromCart(product._id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}

        {/* Subtotal Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">
            Subtotal: ${subtotals[user] || 0}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CartPage;
