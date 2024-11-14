import React from 'react'
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';

export default function NewsLetter() {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop:'100px',alignItems:'center' }}>
        <Typography sx={{color:'black',fontSize:'32px',fontWeight:'bold', display:'flex',justifyContentL:'center'}}>Subscried Now & Get 30% off</Typography>
        <Typography sx={{marginTop:'12px',marginBottom:'34px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit eaque.</Typography>
        <Box sx={{display:'flex',flexDirection:'row',gap:'40px'}}>
            <TextField label='Enter Your Mail Here...' sx={{width:'520px'}}></TextField>
            <Button sx={{backgroundColor:'black',color:'white',width:'180px',borderRadius:'none'}}>Subscribe</Button>
        </Box>
    </Box>
    </>
  )
}

