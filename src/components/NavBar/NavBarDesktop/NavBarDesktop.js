import React, { useEffect, useRef } from 'react'
import { useStyles } from '../styles/navBarStyles';
import { Box, AppBar, Toolbar, Typography, Button, Link } from '@mui/material';

const NavBarDesktop = () => {
    const classes = useStyles()

    return (
        <Box>
            <AppBar id='navbar' position="fixed" color='navBar' >
                <Toolbar>
                    <Box>
                        <img src="./logo.png" alt="logo" width={40} height={40} />
                    </Box>
                    <Box className={classes.boxButtonNav}>
                        {['inicio', 'tecnologías', 'proyectos'].map((text, index) => (
                            <Link href={`#${text.toLowerCase()}`} key={index} sx={{ textDecoration: 'none' }}>
                                <Button>
                                    {text}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    )
}

export default NavBarDesktop