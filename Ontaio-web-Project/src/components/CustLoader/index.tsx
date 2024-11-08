import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const CustLoader = (props: {sx?: any}) => {
  return (
    <Box sx={[{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: '100dvh', width: '100dvw'}, props?.sx]}>
      <CircularProgress />
    </Box>
  )
}

export default CustLoader
