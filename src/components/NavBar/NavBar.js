import React from 'react'
import './navBarStyles.css'
import {Box, AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Logo
        </Typography>
        <Button id='inicio' color="inherit">Home</Button>
        <Button id='tecnologías' color="inherit">Tecnologías</Button>
        <Button id='proyectos' color="inherit">Proyectos</Button>
        <Button id='contacto' color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar