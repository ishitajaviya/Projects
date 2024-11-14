import { Box, Typography,Divider } from '@mui/material'
import React from 'react'
import image1 from '../../assets/about_img.png'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Header from '../Header/Header'

export default function About() {
  return (
    <>
    <Header/>
    <Box sx={{display:'flex',flexDirection:'row',marginTop:'70px',marginBottom:'210px'}}>
      
  
        <Box sx={{marginLeft:'120px'}}>
          <img src={image1} style={{width:'81%',height:'120%'}}/>
      </Box>
          <Box sx={{display:'flex',flexDirection:'column',paddingRight:'500px',marginTop:'100px'}}>
          <Box sx={{ color: '#414141',marginTop:'-150px',marginBottom:'100px', textAlign: { xs: 'center', sm: 'left' } }}>
           
                    <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }} gap={1}>
                      
                        <Typography variant="body2" sx={{fontSize:'27px'}}>
                           ABOUT<span style={{color:'grey'}}> US</span>
                        </Typography>  <Divider
                            orientation="horizontal"
                            flexItem
                            sx={{
                                borderBottomWidth: '1px',                                
                                borderColor: '#414141',    
                                width: '64px',                                           
                                mr: 1,
                                mb: '20px',               
                            }}
                        />
                    </Box>
                    </Box>
            <Typography variant='body1' sx={{maxWidth:'700px',marginRight:'100px',fontSize:'1.2rem',marginBottom:'30px'}}>
            Forever was born out of a passion for innovation and a desire to
             revolutionize the way people shop online. Our journey began with a 
             simple idea: to provide a platform where customers can easily discover, 
             explore, and purchase a wide range of products from the comfort of their homes.
             </Typography>
             <Typography variant='body1' sx={{maxWidth:'700px',fontSize:'1.2rem',marginBottom:'30px'}}>
              Since our inception,we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.
              From fashion and beauty to electronics and home essentials, 
              we offer an extensive collection sourced from trusted brands and suppliers.
              </Typography>
              <Typography variant='h6' sx={{fontWeight:'600'}}>OUR MISSION</Typography>
              <Typography variant='body1' sx={{maxWidth:'700px',fontSize:'1.2rem',marginBottom:'30px'}}>
              Our mission at Forever is to empower customers with choice, convenience,
             and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, 
              from browsing and ordering to delivery and beyond.
              </Typography>
          </Box>
    </Box>
    <NewsLetter/>
    <Footer/>
    </>
  )
}
