import React from 'react'
import { useStyles } from './styles/homeStyles'
import { Typography, Box, Grid } from '@mui/material'

const Home = () => {

  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid item lg={5} md={6} sm={8} className={classes.boxText}>
          <Typography variant="h3" color="primary" sx={{marginBottom:'20px'}} >
            BIENVENIDO/A👋
          </Typography>
          <Typography component='p' color="secondary" sx={{ width: '80%'}} >
            Gabriel Barrientos | Licenciatura en informática | Desarrollador front-end en tecnologías Javascript/React js .
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <img src="./developer.png" alt="imagen developer home" className={classes.img} />
        </Grid>
      </Grid>
    </>
  )
}

export default Home