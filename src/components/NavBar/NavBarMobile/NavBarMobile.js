import React from 'react'
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from '../styles/navBarStyles';
import DrawerMobile from './DrawerMobile';

const NavBarMobile = ({ setOpen, open }) => {

  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" color="navBar" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Box>
            <img src="./logo.png" alt="logo" width={40} height={40} />
          </Box>
          <Box className={classes.boxMenuIcon}>
            <IconButton color="inherit" aria-label="open drawer" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerMobile setOpen={setOpen} open={open} />
    </>
  )
}

export default NavBarMobile