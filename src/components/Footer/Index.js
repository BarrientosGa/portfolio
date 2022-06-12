import React from 'react'
import { useStyles } from './styles/footerStyles'
import { Box, Toolbar, Typography, useMediaQuery } from '@mui/material'
import SocialNetworkFloat from '../SocialNetwork/Index'

const Footer = () => {

  const classes = useStyles()

  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <Box component='footer' className={classes.footer}>
      <SocialNetworkFloat />
      <Typography component='p' sx={{ marginTop: '30px' }}>
        &copy; Copyright 2022 | Gabriel Barrientos
      </Typography>
      {hidden && <Toolbar />}
    </Box>
  )
}

export default Footer