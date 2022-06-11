import React from 'react'
import { Box, Fade, Toolbar, useScrollTrigger } from '@mui/material';
import { useStyles } from './styles/scrollTopStyle';

const ScrollTop = (props) => {
    const classes = useStyles()
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
                className={classes.iconScroll}
            >
                {children}
            </Box>
        </Fade>
    );
}

export default ScrollTop