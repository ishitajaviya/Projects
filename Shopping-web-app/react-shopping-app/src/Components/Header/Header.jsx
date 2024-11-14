import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Slices/Userslice';
import { clearCart, restoreCartFromStorage } from '../Slices/CartSlice';
import { users } from '../userList/User';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AppBar, Toolbar, Button, Typography, Box, Container, Badge } from '@mui/material';

const Header = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const carts = useSelector((state) => state.cart.carts); 
  const wishlistItems = useSelector((state) => state.wishlist.items);  
//login logout with prompt box
  const handleLogin = () => {
    const userId = prompt('Enter user ID:');
    const password = prompt('Enter password:');
    const validUser = users.find((u) => u.userId === userId && u.password === password);

    if (validUser) {
      dispatch(login(userId));  
      dispatch(restoreCartFromStorage(userId));  
      setError('');  
    } else {
      setError('Invalid user ID or password.');
    }
  };

  const handleLogout = () => {
    dispatch(clearCart(user));
    dispatch(logout());
  };
  const cartItemCount = carts[user]?.reduce((total, product) => total + product.quantity, 0) || 0;
  const wishlistItemCount = wishlistItems.length || 0;

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            marginTop: '20px',
            marginBottom: '10px',
            justifyContent: 'space-between',
            padding: { xs: '0 8px', md: '0 24px' },
            minHeight: '80px',
          }}
        >
          <Box display="flex" alignItems="center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: '50px',
                  marginLeft: { xs: '0px', md: '30px' },
                }}
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 3 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/collection">
              Collection
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <Badge badgeContent={cartItemCount} color="secondary">
              <Button color="inherit" component={Link} to="/cart">
                Cart
              </Button>
            </Badge>
            <Badge badgeContent={wishlistItemCount} color="secondary">
              <Button sx={{ bgcolor: 'skyblue', color: 'black' }} component={Link} to="/wishlist">
                WishList
              </Button>
            </Badge>
          </Box>
          <Box>
            {user ? (
              <>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                  Welcome, {user}
                </Typography>
                <Button color="secondary" variant="contained" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="primary" variant="contained" onClick={handleLogin}>
                  Login
                </Button>
                {error && (
                  <Typography color="error" variant="body2" sx={{ marginLeft: 2 }}>
                    {error}
                  </Typography>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
