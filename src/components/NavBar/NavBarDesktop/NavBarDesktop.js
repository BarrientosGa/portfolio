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
                        {['inicio', 'tecnologías', 'proyectos'].map((text, index) => (
                            /*  <Link href={`#${text.toLowerCase()}`} key={index} sx={{ textDecoration: 'none' }}> */
                            <Button>
                                {text}
                            </Button>
                            /*      </Link> */
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    )
}

export default NavBarDesktop