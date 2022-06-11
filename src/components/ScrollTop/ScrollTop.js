import { Box, Fade, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react'

const ScrollTop = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 85, opacity:'0.2','& .css-12m9wit-MuiButtonBase-root-MuiFab-root':{
                    opacity:'0.2'
                } }}
            >
                {children}
            </Box>
        </Fade>
    );
}

export default ScrollTop