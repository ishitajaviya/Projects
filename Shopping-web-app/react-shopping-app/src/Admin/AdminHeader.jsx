import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminHeader() {
  return (
    <> 
    <AppBar color='primary'>
        <Toolbar sx={{marginLeft:'20px',display:'flex',justifyContent:'center',}}>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                <Typography>ADMIN PANEL</Typography>
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
    </>
  )
}
