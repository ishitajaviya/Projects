
import React from 'react'
import image2 from '../../assets/contact_img.png';
import { Box, Typography,Divider } from '@mui/material'
import Header from '../Header/Header';
import NewsLetter from './NewsLetter'
import Footer from './Footer'

export default function Contact() {
    return (
      <>
      <Header/>
      <Box sx={{display:'flex',flexDirection:'row',marginTop:'70px',marginBottom:'210px'}}>
          <Box sx={{marginLeft:'120px'}}>
            <img src={image2} style={{width:'81%',height:'120%'}}/>
        </Box>
            <Box sx={{display:'flex',flexDirection:'column',paddingRight:'500px',marginTop:'100px'}}>
            <Box sx={{ color: '#414141',marginTop:'-150px',marginBottom:'100px', textAlign: { xs: 'center', sm: 'left' } }}>
                     
                        <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }} gap={1}>
                        
                          <Typography variant="body2" sx={{fontSize:'27px'}}>
                             CONTACT<span style={{color:'grey'}}> US</span>
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
              <Typography variant='h5' sx={{maxWidth:'700px',marginRight:'100px',fontSize:'1.5rem',marginBottom:'30px',color:'#303030',fontWeight:'bold'}}>
              Our Store
               </Typography>
               <Typography variant='body1' sx={{maxWidth:'700px',fontSize:'1.2rem',}}>
               54709 Willms Station
               </Typography>
               <Typography variant='body1' sx={{maxWidth:'700px',fontSize:'1.2rem',marginBottom:'30px'}}>
               Suite 350, Washington, USA
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