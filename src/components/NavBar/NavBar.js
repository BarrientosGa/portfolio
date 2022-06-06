import React from 'react'
import './navBarStyles.css'
import {Box, AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box>
    <AppBar position="static" color='navBar'>
      <Toolbar>
        <Typography variant="h6" component="div">
          Logo
        </Typography>
        <Button id='inicio'>Home</Button>
        <Button id='tecnologías'>Tecnologías</Button>
        <Button id='proyectos'>Proyectos</Button>
        <Button id='contacto'>Contacto</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar