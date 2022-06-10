import React from 'react'
import { useStyles } from './styles/homeStyles'
import { Typography, Grid, Container } from '@mui/material'

const Home = () => {

  const classes = useStyles()

  return (
      <Grid container className={classes.gridContainer}>
        <Grid item lg={5} md={6} sm={8} className={classes.boxText} zeroMinWidth>
          <Typography variant="h3" color="primary" sx={{ marginBottom: '20px' }} >
            BIENVENIDO/A👋
          </Typography>
          <Typography component='p' color="secondary" sx={{ width: '80%' }} >
            Gabriel Barrientos | Licenciatura en informática | Desarrollador front-end en tecnologías Javascript/React js .
          </Typography>
        </Grid>
        <Grid item lg={3} zeroMinWidth>
          <img src="./developer.png" alt="imagen developer home" className={classes.img} />
        </Grid>
      </Grid>
  )
}

export default Home