import React from 'react';
import { Box, Typography, Grid, Divider, Button } from '@mui/material';
import { assets } from '../../assets/assets';

const HeroSection = () => {
    return (
        <Box border={1} borderColor="gray.400" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, }}>
            <Grid
                container
                item
                xs={12}
                sm={6}
                alignItems="center"
                justifyContent="center"
            >
                <Box sx={{ color: '#414141', textAlign: { xs: 'center', sm: 'left' } }}>
                    
                    <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }} gap={1}>
                        <Divider
                            orientation="horizontal"
                            flexItem
                            sx={{
                                borderBottomWidth: '1px', 
                                borderColor: '#414141',   
                                width: '64px',             
                                mr: 1,
                                mb: '10px',                 
                            }}
                        />
                        <Typography variant="body2" sx={{fontSize:'17px'}}>
                            OUR BESTSELLERS
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                typography: { xs: 'h4', lg: 'h3' },
                                fontFamily: 'Prata, serif', 
                                lineHeight: '1.5',
                            }}
                        >
                            Latest Arrivals
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }} gap={1} mt={2}>
                        <Typography sx={{ fontWeight: 'bold', textTransform: 'none', fontSize: '16px' }}>
                            SHOP NOW
                        </Typography>
                        <Divider
                            orientation="horizontal"
                            flexItem
                            sx={{
                                borderBottomWidth: '1px',  
                                borderColor: '#414141',    
                                width: '64px',             
                                mr: 1,
                                mb: '10px',                 
                            }}
                        />
                    </Box>
                </Box>
            </Grid>

            <Grid container item xs={12} sm={6}>
                <img src={assets.hero_img} alt="Hero" style={{ width: '100%', objectFit: 'cover' }} />
            </Grid>
        </Box>
    );
};

export default HeroSection;
