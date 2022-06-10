import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { useStyles } from '../styles/dividerStyles'

const DividerComp = ({title}) => {

    const classes = useStyles()

    return (
        <Box sx={{ marginTop: '80px' }}>
            <Divider textAlign="left" className={classes.divider}>
                <Typography variant="h4" color="primary" className={classes.alignTitle}>
                    {title}
                </Typography>
            </Divider>
        </Box>
    )
}

export default DividerComp