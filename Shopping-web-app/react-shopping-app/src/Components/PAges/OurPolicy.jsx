import { Card,CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
export default function OurPolicy() {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'210px',marginTop:'150px'}}>
        <Card sx={{maxWidth:350,boxShadow: 'none' }}>
            <CardMedia sx={{display:'flex',justifyContent:'center'}}>
                <IconButton>
                    <CurrencyExchangeIcon sx={{color:'black',fontWeight:'600',fontSize:'30px'}}/>
                </IconButton>
            </CardMedia>
            <CardContent>
                <Typography variant='h5' sx={{display:'flex',justifyContent:'center',color:'black',fontSize:'20px',fontWeight:'bold'}}>
                    OUR POLICY
                </Typography>
                <Typography sx={{color:'grey',marginTop:'6px',fontSize:'18px'}}>
                    We offer hasselle free exchange policy
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{maxWidth:350,boxShadow: 'none' }}>
            <CardMedia sx={{display:'flex',justifyContent:'center'}}>
                <IconButton>
                    <CurrencyExchangeIcon sx={{color:'black',fontWeight:'600',fontSize:'30px'}}/>
                </IconButton>
            </CardMedia>
            <CardContent>
                <Typography variant='h5' sx={{display:'flex',justifyContent:'center',color:'black',fontSize:'20px',fontWeight:'bold'}}>
                    OUR POLICY
                </Typography>
                <Typography  sx={{color:'grey',marginTop:'6px',fontSize:'18px'}}>
                    We offer hasselle free exchange policy
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{maxWidth:350,boxShadow: 'none' }}>
            <CardMedia sx={{display:'flex',justifyContent:'center'}}>
                <IconButton>
                    <SupportAgentIcon sx={{color:'black',fontWeight:'600',fontSize:'30px'}}/>
                </IconButton>
            </CardMedia>
            <CardContent>
                <Typography variant='h5' sx={{display:'flex',justifyContent:'center',color:'black',fontSize:'20px',fontWeight:'bold'}}>
                    OUR POLICY
                </Typography>
                <Typography  sx={{color:'grey',marginTop:'6px',fontSize:'18px'}}>
                    We offer hasselle free exchange policy
                </Typography>
            </CardContent>
        </Card>
   </Box>
   </>
  )
}
