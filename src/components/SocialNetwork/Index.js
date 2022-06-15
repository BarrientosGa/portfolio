import React from 'react'
import { Box, Link, useMediaQuery } from '@mui/material'
import { useStyles } from './styles/socialNetWorkStyles';
import {redes} from '../../data/socialNetwork'

const SocialNetworkFloat = () => {
    const classes = useStyles()

    const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'));


    return (
        <Box className={hidden ? classes.box_mobile : classes.box_container }>
            {redes.map(({ redSocial, link, email },index) => (
                <Link href={link !== undefined ? link : `mailto:${email}`} target='_blank' key={index}>
                    {redSocial}
                </Link>
            ))}
        </Box>
    )
}

export default SocialNetworkFloat