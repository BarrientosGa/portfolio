import React from 'react'
import { useStyles } from '../styles/navBarStyles';
import { Box, AppBar, Toolbar, Typography, Button, Link } from '@mui/material';

const NavBarDesktop = () => {

    const classes = useStyles()

    return (
        <Box>
            <AppBar position="fixed" color='navBar'>
                <Toolbar>
                    <Box>
                        <Typography variant="h6">
                            Logo
                        </Typography>
                    </Box>
                    <Box className={classes.boxButtonNav}>
                        <Link href='#tecnologías' sx={{ textDecoration: 'none' }}>
                            <Button id='#tecnologías'>Tecnologías</Button>
                        </Link>
                        <Link href='#proyectos' sx={{ textDecoration: 'none' }}>
                            <Button id='#proyectos'>Proyectos</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </Box>
    )
}

export default NavBarDesktop