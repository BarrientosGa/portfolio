import React from 'react'
import { useStyles } from './styles/technologyStyles'
import { Grid, Container, Box, Toolbar, Paper, Typography } from '@mui/material'
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
      <Container className={classes.container}>
        <Grid item container rowSpacing={3}>
          {technology.map(({ id, text, svgIcon }) => (
            <Grid key={id} item container xs={12} sm={12} md={6} lg={4} justifyContent='center'>
              <Paper className={classes.paper}>
                <Grid item zeroMinWidth className={classes.item}>
                  {svgIcon}
                  <Typography variant="h5" color='secondary' component='p' className={classes.typography}>
                    {text}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Technology