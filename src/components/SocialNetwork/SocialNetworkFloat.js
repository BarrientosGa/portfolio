import React from 'react'
import { Box, Link } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useStyles } from './styles/socialNetWorkStyles';

const redes = [
    {
        redSocial: <GitHub sx={{ fontSize: '40px', opacity: '0.8' }} />,
        link: 'https://github.com/BarrientosGa'
    },
    {
        redSocial: <LinkedIn sx={{ fontSize: '40px', opacity: '0.8' }} />,
        link: 'https://www.linkedin.com/in/gabriel-armando-barrientos-90a933198/'
    },
    {
        redSocial: <Email sx={{ fontSize: '40px', opacity: '0.8' }} />,
        email: 'gabrielbarrientos729@gmail.com'
    }
]


const SocialNetworkFloat = () => {
    const classes = useStyles()

    return (
        <Box className={classes.box_container}>
            {redes.map(({ redSocial, link, email }) => (
                <Link href={link !== undefined ? link : `mailto:${email}`} target='_blank'>
                    {redSocial}
                </Link>
            ))}

        </Box>
    )
}

export default SocialNetworkFloat