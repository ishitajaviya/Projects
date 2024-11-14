import React from 'react';
import { Box, Grid, Container, Typography, Divider } from '@mui/material';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bgcolor="grey.100" py={5} sx={{marginTop:'46px'}}>
      <Container sx={{maxWidth:'1700px'}} >
        <Grid container spacing={5}>
          
   
          <Grid item xs={12} md={4}>
            <Box mb={2}>
              <img src={assets.logo} alt="Logo" width="100" style={{ marginBottom: '1rem' }} />
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{fontSize:'17px',color:'black'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  COMPANY
                </Typography>
                <Box>
                  <Link to={'/'} style={{textDecoration:'none'}}>
                  <Typography variant="body2" color="textSecondary" gutterBottom sx={{fontSize:'16px',color:'black'}}>
                    Home
                  </Typography>
                  </Link>
                  <Link to={'/about'} style={{textDecoration:'none'}}>
                  <Typography variant="body2" color="textSecondary" gutterBottom sx={{fontSize:'16px',color:'black'}}>
                    About us
                  </Typography>
                  </Link>
                  <Link to={'/contact'} style={{textDecoration:'none'}}>
                  <Typography variant="body2" color="textSecondary" gutterBottom sx={{fontSize:'16px',color:'black'}}>
                    ContactUs
                  </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary" gutterBottom sx={{fontSize:'16px',color:'black'}}>
                    Privacy policy
                  </Typography>
                </Box>
              </Grid>

         
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  GET IN TOUCH
                </Typography>
                <Box>
                  <Typography variant="body2" color="textSecondary" gutterBottom  sx={{fontSize:'16px',color:'black'}}>
                    +1-212-456-7890
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom  sx={{fontSize:'16px',color:'black'}}>
                    Contact@foreveryou.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Divider and Bottom Section */}
        <Box mt={5}>
          <Divider />
          <Typography variant="body2" color="textSecondary" align="center" sx={{ py: 2 }}>
            Copyright 2024@ forever.com - All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
