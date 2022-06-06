import React from 'react'
import './homeStyles.css'
import { Typography, Box } from '@mui/material'

const Home = () => {
  return (
    <>
      <Box>
        <Typography variant="h2" color="primary">
          Hola ♥ {/* poner un icon */}
        </Typography>
        <Typography /* variant="h5" */ component='p' color="secondary" >
          info personal
        </Typography>
      </Box>

      <picture>
        <img src="./developer.png" alt="imagen developer home" width={300} height={300} />
      </picture>
    </>
  )
}

export default Home