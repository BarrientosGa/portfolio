import React from 'react'
import { useStyles } from './styles/technologyStyles'
import { Grid, Container, Box, Toolbar, Paper, Typography } from '@mui/material'
import { motion } from "framer-motion"
import DividerComp from '../Share/Divider/DividerComp'
import { technology } from '../../json/technology'

const Technology = () => {

  const classes = useStyles()

  return (
    <>
      <Box id='tecnologías'>
        <Toolbar />
        <DividerComp title='TECNOLOGÍAS' />
      </Box>
      <Container sx={{ width: '60%', marginTop: '40px' }}>
        <Grid item container rowSpacing={3}>

          {technology.map(({ id, text, svgIcon }) => (
            <Grid key={id} item container xs={12} sm={12} md={6} lg={4} sx={{ justifyContent: 'center' }}>
             {/*  <motion.div whileHover={{ border: '4px solid #3c0087', background: '#010312' }}> */}
                <Paper sx={{ background: '#263238', width: '70%', padding: '8px', }}>

                  <Grid item zeroMinWidth sx={{ display: 'flex', alignItems: 'center' }}>
                    {svgIcon}
                    <Typography variant="h5" color='secondary' fontWeight='bold' fontSize='1.25rem' marginLeft='10px' component='p'>
                      {text}
                    </Typography>
                  </Grid>

                </Paper>
             {/*  </motion.div> */}
            </Grid>

          ))}

        </Grid>
      </Container>
    </>
  )
}

export default Technology