import React from 'react'
import { useStyles } from './styles/footerStyles'
import { Box, Button, Container, TextField, Toolbar, Typography } from '@mui/material'
import DividerComp from '../../Share/Divider/DividerComp'

const Footer = () => {

  const classes = useStyles()

  return (
    <Box component='footer' sx={{ color: 'white', margin: '30px' }}>
      <Typography component='p'>
        &copy; Copyright 2022 | Gabriel Barrientos
      </Typography>
      <Toolbar />
    </Box>
  )
}

export default Footer