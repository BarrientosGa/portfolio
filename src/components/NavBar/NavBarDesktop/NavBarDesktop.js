import React from 'react'
import { useStyles } from '../styles/navBarStyles';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBarDesktop = () => {

    const classes = useStyles()

    return (
        <Box>
            <AppBar position="static" color='navBar'>
                <Toolbar>
                    <Box>
                        <Typography variant="h6">
                            Logo
                        </Typography>
                    </Box>
                    <Box className={classes.boxButtonNav}>
                        <Button id='inicio'>Home</Button>
                        <Button id='tecnologías'>Tecnologías</Button>
                        <Button id='proyectos'>Proyectos</Button>
                        <Button id='contacto'>Contacto</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBarDesktop